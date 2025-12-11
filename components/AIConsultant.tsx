
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from './LanguageContext';

const AIConsultant: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting based on language
    const greetings = {
      ru: 'Шалом! Я помощник компании Israel Work. Чем могу помочь?',
      ua: 'Шалом! Я помічник компанії Israel Work. Чим можу допомогти?',
      en: 'Shalom! I am the assistant of Israel Work company. How can I help you?',
    };
    setMessages([{
      role: 'model',
      text: greetings[language] || greetings['ru'],
      timestamp: new Date()
    }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const history = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: `Вы — виртуальный консультант агентства "Israel Work". 
          Язык пользователя: ${language}. ОТВЕЧАЙТЕ НА ТОМ ЖЕ ЯЗЫКЕ, ЧТО И ПОЛЬЗОВАТЕЛЬ, но предпочтительно на ${language}.
          
          Ключевая информация:
          - Название: Israel Work
          - WhatsApp: ${SOCIAL_LINKS.phoneDisplay}
          - Telegram: ${SOCIAL_LINKS.telegramChannel}
          
          ВАЖНО О ЛЕГАЛИЗАЦИИ:
          - Мы НЕ оформляем рабочие визы заранее.
          - Процесс происходит ПО ПРИЛЕТУ в Израиль.
          - Встречаем в аэропорту, идем в МВД.
          - Клиент получает ВИЗУ на месте (до 3 лет).
          - НЕ используйте слова "беженство", "синяя бумага". Используйте "Легализация через МВД".
          
          Возраст:
          - Принимаем от 18 до 55 лет.
          
          Ответы:
          - Жилье предоставляем, вычитаем из ЗП.
          - Билет покупает клиент сам.
          - Зарплаты ~35-50 шекелей/час.
          
          Будьте вежливы и кратки.`,
        },
        history: history as any 
      });

      const result = await chat.sendMessageStream({ message: userMessage.text });
      
      let fullText = '';
      
      setMessages(prev => [
        ...prev,
        { role: 'model', text: '', timestamp: new Date() }
      ]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullText += text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullText;
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [
        ...prev, 
        { role: 'model', text: `Error. Please contact WhatsApp: ${SOCIAL_LINKS.phoneDisplay}`, timestamp: new Date() }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-2xl w-[90vw] md:w-96 h-[500px] flex flex-col mb-4 border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Israel Work</h3>
                <p className="text-xs text-primary-100">AI Consultant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[10px] block mt-1 opacity-70 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="..."
                className="flex-1 bg-gray-100 text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                disabled={isThinking}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors flex items-center justify-center shadow-md"
              >
                {isThinking ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-0.5" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-300 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 group`}
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium pr-0 group-hover:pr-2">
          Chat
        </span>
      </button>
    </div>
  );
};

export default AIConsultant;
