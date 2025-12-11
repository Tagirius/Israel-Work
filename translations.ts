
import { FAQItem, JobCategory, ServiceItem, Stage, Testimonial } from "./types";

const JOB_CATEGORIES_RU: JobCategory[] = [
  {
    title: "Рестораны и Кафе",
    salaryRange: "9,000₪ - 14,000₪",
    requirements: ["Повара и помощники", "Официанты", "Бармены", "Питание на смене"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Магазины и Супермаркеты",
    salaryRange: "8,500₪ - 12,000₪",
    requirements: ["Раскладка товара", "Кассиры", "Работники склада", "Гибкий график"],
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Строительство и Ремонт",
    salaryRange: "10,000₪ - 18,000₪",
    requirements: ["Маляры, плиточники", "Гипсокартонщики", "Подсобные рабочие", "Высокие ставки"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Отели и Клининг",
    salaryRange: "7,500₪ - 11,000₪",
    requirements: ["Горничные", "Уборка номеров", "Мойщики посуды", "Можно без опыта"],
    image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Заводы и Производство",
    salaryRange: "8,500₪ - 13,000₪",
    requirements: ["Упаковщики", "Операторы линий", "Сортировщики", "Переработки +125-150%"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Уход и Сиделки",
    salaryRange: "7,000₪ - 10,000₪",
    requirements: ["Проживание в семье", "Полный пансион", "Уход за пожилыми", "Спокойная работа"],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Пекарни и Кондитерские",
    salaryRange: "9,000₪ - 13,000₪",
    requirements: ["Пекари", "Помощники пекаря", "Упаковка выпечки", "Ночные/Дневные смены"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Домработницы",
    salaryRange: "8,000₪ - 12,000₪",
    requirements: ["Уборка частных домов", "Стирка и глажка", "Помощь по хозяйству", "Проезд оплачивается"],
    image: "https://images.unsplash.com/photo-1581578731117-104f8a3d46a8?auto=format&fit=crop&w=800&q=80"
  }
];

const JOB_CATEGORIES_UA_TRANSLATED: JobCategory[] = [
  { ...JOB_CATEGORIES_RU[0], title: "Ресторани та Кафе", requirements: ["Кухарі та помічники", "Офіціанти", "Бармени", "Харчування на зміні"] },
  { ...JOB_CATEGORIES_RU[1], title: "Магазини та Супермаркети", requirements: ["Викладка товару", "Касири", "Працівники складу", "Гнучкий графік"] },
  { ...JOB_CATEGORIES_RU[2], title: "Будівництво та Ремонт", requirements: ["Маляри, плиточники", "Гіпсокартонники", "Підсобні робітники", "Високі ставки"] },
  { ...JOB_CATEGORIES_RU[3], title: "Готелі та Клінінг", requirements: ["Покоївки", "Прибирання номерів", "Мийники посуду", "Можна без досвіду"] },
  { ...JOB_CATEGORIES_RU[4], title: "Заводи та Виробництво", requirements: ["Пакувальники", "Оператори ліній", "Сортувальники", "Переробки +125-150%"] },
  { ...JOB_CATEGORIES_RU[5], title: "Догляд та Доглядальниці", requirements: ["Проживання в сім'ї", "Повний пансіон", "Догляд за літніми", "Спокійна робота"] },
  { ...JOB_CATEGORIES_RU[6], title: "Пекарні та Кондитерські", requirements: ["Пекарі", "Помічники пекаря", "Пакування випічки", "Нічні/Денні зміни"] },
  { ...JOB_CATEGORIES_RU[7], title: "Домогосподарки", requirements: ["Прибирання приватних будинків", "Прання та прасування", "Допомога по господарству", "Проїзд оплачується"] }
];

const JOB_CATEGORIES_EN_TRANSLATED: JobCategory[] = [
  { ...JOB_CATEGORIES_RU[0], title: "Restaurants & Cafes", requirements: ["Cooks & Assistants", "Waiters", "Bartenders", "Meals on shift"] },
  { ...JOB_CATEGORIES_RU[1], title: "Shops & Supermarkets", requirements: ["Merchandising", "Cashiers", "Warehouse Workers", "Flexible schedule"] },
  { ...JOB_CATEGORIES_RU[2], title: "Construction & Renovation", requirements: ["Painters, Tilers", "Drywall Installers", "General Laborers", "High rates"] },
  { ...JOB_CATEGORIES_RU[3], title: "Hotels & Cleaning", requirements: ["Maids", "Room Cleaning", "Dishwashers", "No experience needed"] },
  { ...JOB_CATEGORIES_RU[4], title: "Factories & Production", requirements: ["Packers", "Line Operators", "Sorters", "Overtime +125-150%"] },
  { ...JOB_CATEGORIES_RU[5], title: "Caregiving", requirements: ["Live-in", "Full board", "Elderly care", "Calm work"] },
  { ...JOB_CATEGORIES_RU[6], title: "Bakeries & Confectioneries", requirements: ["Bakers", "Baker Assistants", "Packing", "Night/Day shifts"] },
  { ...JOB_CATEGORIES_RU[7], title: "Housekeepers", requirements: ["Private house cleaning", "Laundry & Ironing", "Household help", "Travel paid"] }
];


export const TRANSLATIONS = {
  ru: {
    hero: {
      badge: "ISRAEL WORK",
      title: "Легальная работа в Израиле",
      subtitle: "Официальное трудоустройство, высокие зарплаты, полное юридическое сопровождение. Помогаем с перелетом, прохождением границы, жильем и адаптацией.",
      btnConsult: "Консультация",
      btnJobs: "Вакансии в Telegram",
      features: {
        insurance: "Медицинская страховка",
        legalization: "Легализация",
        transfer: "Трансфер",
        support: "Полное сопровождение"
      }
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Компания Israel Work берет на себя все заботы по вашему переезду и легализации.",
      items: [
        {
          title: "Легализация через МВД",
          description: "Легализация на месте через МВД. Вы получите визу на месте, что будет давать вам право работать и легально находиться в стране на срок до 3 лет.",
          icon: "FileCheck"
        },
        {
          title: "Жилье и Адаптация",
          description: "Подбор квартир без маклера. Встреча в аэропорту, помощь с сим-картой и проездным.",
          icon: "Home"
        },
        {
          title: "Трудоустройство",
          description: "Прямые вакансии от проверенных работодателей. Заводы, стройки, отели, уход. Без предоплаты.",
          icon: "Briefcase"
        },
        {
          title: "Медицинская страховка",
          description: "Оформление страховки для иностранных рабочих. Доступ до поликлиникам и врачам.",
          icon: "HeartPulse"
        }
      ] as ServiceItem[]
    },
    jobs: {
      title: "Актуальные Вакансии",
      subtitle: "Широкий выбор вакансий. Ежедневное обновление в Telegram.",
      detailsBtn: "Подробнее",
      categories: JOB_CATEGORIES_RU
    },
    stages: {
      title: "Этапы трудоустройства",
      subtitle: "Простой и прозрачный путь к вашей новой работе в Израиле. Мы сопровождаем вас на каждом шаге.",
      label: "ЭТАП",
      items: [
        {
          number: "01",
          title: "Консультація",
          description: "Залишаєте заявку або пишете нам. Ми подбираем вакансию, обсуждаем условия и отвечаем на вопросы.",
          icon: "MessageCircle"
        },
        {
          number: "02",
          title: "Прилет",
          description: "Мы помогаем подобрать авиабилеты или вы можете сделать это самостоятельно. Наш представитель встречает вас в аэропорту Бен-Гурион.",
          icon: "Plane"
        },
        {
          number: "03",
          title: "Заселение",
          description: "Трансфер из аэропорта прямо в подготовленную квартиру. Отдых после перелета.",
          icon: "Home"
        },
        {
          number: "04",
          title: "Легализация",
          description: "Поход в МВД с нашим юристом. Получение визы и разрешения на легальное пребывание.",
          icon: "FileSignature"
        },
        {
          number: "05",
          title: "Работа",
          description: "Инструктаж, получение формы и выход на первую смену. Начисление зарплаты с первого часа.",
          icon: "Briefcase"
        }
      ] as Stage[]
    },
    budget: {
      title: "Планируйте бюджет",
      subtitle: "Используйте наши инструменты для точного расчета финансов",
      tabs: {
        salary: "Калькулятор Зарплаты",
        flight: "Поиск Авиабилетов",
        food: "Калькулятор Питания"
      },
      food: {
        title: "Расходы на питание",
        subtitle: "Средняя стоимость продуктовой корзины в Израиле",
        genderLabel: "Состав:",
        men: "Мужчины",
        women: "Женщины",
        lifestyleLabel: "Стиль питания:",
        types: {
          economy: "Эконом (Готовка дома)",
          standard: "Стандарт (Кафе иногда)",
          premium: "Комфорт (Рестораны)"
        },
        resultTitle: "Примерный бюджет в месяц",
        basketIncludes: "В корзину входит:",
        basketItems: ["Мясо и рыба", "Свежие овощи и фрукты", "Молочные продукты и яйца", "Крупы, хлеб, масло", "Напитки и десерты"],
        note: "*Данные основаны на средних ценах супермаркетов (Rami Levy, Shufersal)"
      }
    },
    calculator: {
      title: "Калькулятор Заработка",
      subtitle: "Рассчитайте свой примерный ежемесячный доход в Израиле",
      hourlyRate: "Ставка в час (шекелей)",
      hoursPerDay: "Часов в день",
      daysPerWeek: "Дней в неделю",
      days: "дней",
      hours: "ч.",
      incomeTitle: "Ваш примерный доход в месяц",
      currencyNis: "Шекелей (нетто*)",
      currencyUsd: "Долларов США",
      disclaimer: "*Расчет приблизительный. Итоговая сумма зависит от конкретной вакансии, переработок и налоговых вычетов."
    },
    flight: {
      title: "Поиск Авиабилетов",
      subtitle: "Сравните цены на билеты из разных стран в Израиль или Иорданию",
      from: "Откуда летите?",
      to: "Куда летите?",
      when: "Когда летите?",
      dates: {
        soon: "В ближайшие дни",
        week: "1-2 недели",
        month: "В следующем месяце"
      },
      type: "Тип рейса",
      direct: "Прямой рейс",
      transfers: "С пересадками",
      passengers: "Пассажиры",
      luggage: "Багаж",
      calculate: "Найти билеты",
      estimated: "Примерная стоимость (USD)",
      withLuggage: "С багажем",
      noLuggage: "Без багажа",
      checkOn: "Проверить на",
      roundTripNote: "*с учетом обратного билета",
      cities: {
        Moscow: "Москва (MOW)",
        Minsk: "Минск (MSQ)",
        Tbilisi: "Тбилиси (TBS)",
        Istanbul: "Стамбул (IST)",
        Athens: "Афины (ATH)",
        Warsaw: "Варшава (WAW)",
        Prague: "Прага (PRG)",
        Budapest: "Будапешт (BUD)",
        Riga: "Рига (RIX)",
        Vilnius: "Вильнюс (VNO)",
        Bucharest: "Бухарест (OTP)",
        Chisinau: "Кишинев (RMO)",
        Tashkent: "Ташкент (TAS)"
      },
      destinations: {
        TLV: "Тель-Авив (Израиль)",
        HFA: "Хайфа (Израиль)",
        AMM: "Амман (Иордания)"
      }
    },
    testimonials: {
      title: "Отзывы Клиентов",
      subtitle: "",
      items: [
        {
            name: "Дмитрий",
            role: "Хайфа",
            text: "Ребята, спасибо! Визу получил (синяя бумага), все официально. Были сомнения, но в аэропорту встретили, как обещали. Сейчас оформляемся в МВД.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Елена",
            role: "Ашдод",
            text: "(Аудио сообщение) Спасибо Тимуру за помощь с документами. Очень переживала за границу, но прошла без лишних вопросов благодаря инструкции.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            audio: "/audio/review_elena.mp3"
        },
        {
            name: "Максим",
            role: "Тель-Авив",
            text: "Уже месяц работаю на складе. Зарплату получил вовремя, прикладываю фото чека. Жилье нормальное, жить можно.",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Марина",
            role: "Нетания",
            text: "Встретили с табличкой, сразу дали симку и отвезли на квартиру. Очень удобно, когда не знаешь языка. Спасибо за заботу!",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            video: "/videos/review_marina.mp4"
        },
        {
            name: "Сергей",
            role: "Ришон-ле-Цион",
            text: "(Аудио) Прилетели с женой, поселили в комнату для пар. Работу нашли на второй день. Все чесно.",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            audio: "/audio/review_sergey.mp3"
        },
        {
            name: "Анна",
            role: "Иерусалим",
            text: "Работаю сиделкой, семья замечательная. Спасибо за возможность легально работать и помогать родным.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
        }
      ] as Testimonial[]
    },
    contact: {
      title: "Анкета соискателя",
      subtitle: "Оставьте заявку, и мы свяжемся с вами в ближайшее время для консультации.",
      office: "Главный офис",
      officeAddr: "ул. А-Яркон 15, Тель-Авив",
      social: "Мы в соцсетях:",
      formTitle: "Анкета соискателя",
      name: "Ваше имя",
      namePlace: "Иван Иванов",
      phone: "Номер телефона (WhatsApp)",
      phonePlace: "+7 999 000-00-00",
      age: "Возраст",
      agePlace: "25",
      citizenship: "Гражданство",
      citizenshipPlace: "РФ",
      languages: "Знание языков",
      languagesPlace: "Английский (базовый)",
      skills: "Проф. навыки",
      skillsPlace: "Водитель, Сварщик",
      tripDate: "Когда планируете поездку?",
      tripDatePlace: "Примерно 20 октября",
      peopleCount: "Количество человек",
      peopleCountPlace: "1",
      job: "Интересующая вакансия",
      jobPlace: "Выберите вакансию...",
      biometric: "Биометрический загранпаспорт",
      visited: "Были ли ранее в Израиле?",
      yes: "Да",
      no: "Нет",
      btnSubmit: "Отправить заявку",
      disclaimer: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Вы будете перенаправлены в WhatsApp.",
      successTitle: "Заявка подготовлена",
      successText: "Откройте WhatsApp и отправьте сообщение",
      successLink: "Отправить письмо вручную"
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Ответы на популярные вопросы о трудоустройстве и легализации",
      items: [
        {
          question: "Меня встретят в аэропорту?",
          answer: "Да, наш представитель обязательно встретит вас в аэропорту Бен-Гурион с табличкой, поможет с багажом и организует трансфер до места проживания."
        },
        {
          question: "Как я буду получать зарплату?",
          answer: "Зарплата выплачивается раз в месяц, обычно 10-15 числа. Возможны авансы. Оплата происходит чеком или наличными, в зависимости от работодателя."
        },
        {
          question: "Нужна ли виза для въезда?",
          answer: "Гражданам РФ, Украины, Беларуси, Молдовы, Грузии и стран ЕС виза не нужна (до 90 дней) при наличии биометрического паспорта. Гражданам Узбекистана, Таджикистана и др. требуется виза заранее."
        },
        {
          question: "Пропустят ли меня на границе?",
          answer: "Мы подробно консультируем перед вылетом, готовим пакет документов и инструктируем, как вести себя на границе. Это минимизирует риски."
        },
        {
          question: "Можно ли приехать с семьей?",
          answer: "Можно приехать парой (муж и жена). К сожалению, с детьми мы не трудоустраиваем, так как нет условий для их размещения и обучения."
        },
        {
          question: "Какой возраст соискателей?",
          answer: "Мы трудоустраиваем мужчин и женщин в возрасте от 18 до 55 лет. В редких случаях возможны исключения для специалистов с опытом."
        },
        {
          question: "Сколько стоят ваши услуги?",
          answer: "Стоимость рассчитывается индивидуально и вычитается равными частями из вашей зарплаты (можно разбить на 1-2 месяца). По прилету вы оплачиваете только аванс юристу за оформление легализации."
        }
      ] as FAQItem[]
    },
    footer: {
      desc: "Помощь в трудоустройстве и легализации в Израиле. Работаем официально с 2018 года.",
      contacts: "Контакты",
      questions: "Остались вопросы?",
      questionsText: "Напишите нашему менеджеру в WhatsApp, мы на связи 24/7.",
      writeMgr: "Написать менеджеру",
      rights: "© 2024 Israel Work. Все права защищены."
    }
  },
  
  // UKRAINIAN
  ua: {
    hero: {
      badge: "ISRAEL WORK",
      title: "Легальна робота в Ізраїлі",
      subtitle: "Офіційне працевлаштування, високі зарплати, повний юридичний супровід. Допомагаємо з перельотом, проходженням кордону, житлом та адаптацією.",
      btnConsult: "Консультація",
      btnJobs: "Вакансії в Telegram",
      features: {
        insurance: "Медичне страхування",
        legalization: "Легалізація",
        transfer: "Трансфер",
        support: "Повний супровід"
      }
    },
    services: {
      title: "Наші Послуги",
      subtitle: "Компанія Israel Work бере на себе всі турботи щодо вашого переїзду та легалізації.",
      items: [
        {
          title: "Легалізація через МВС",
          description: "Легалізація на місці через МВС. Ви отримаєте візу на місці, що даватиме вам право працювати та легально перебувати в країні на строк до 3 років.",
          icon: "FileCheck"
        },
        {
          title: "Житло та Адаптація",
          description: "Підбір квартир без маклера. Зустріч в аеропорту, допомога із сім-картою та проїзним.",
          icon: "Home"
        },
        {
          title: "Працевлаштування",
          description: "Прямі вакансії від перевірених роботодавців. Заводи, будівництво, готелі, догляд. Без передоплати.",
          icon: "Briefcase"
        },
        {
          title: "Медичне страхування",
          description: "Оформлення страховки для іноземних робітників. Доступ до поліклінік та лікарів.",
          icon: "HeartPulse"
        }
      ] as ServiceItem[]
    },
    jobs: {
      title: "Актуальні Вакансії",
      subtitle: "Широкий вибір вакансій. Щоденне оновлення у Telegram.",
      detailsBtn: "Детальніше",
      categories: JOB_CATEGORIES_UA_TRANSLATED
    },
    stages: {
      title: "Етапи працевлаштування",
      subtitle: "Простий і прозорий шлях до вашої нової роботи в Ізраїлі. Ми супроводжуємо вас на кожному кроці.",
      label: "ЕТАП",
      items: [
        {
          number: "01",
          title: "Консультація",
          description: "Залишаєте заявку або пишете нам. Ми підбираємо вакансію, обговорюємо умови та відповідаємо на запитання.",
          icon: "MessageCircle"
        },
        {
          number: "02",
          title: "Приліт",
          description: "Ми допомагаємо підібрати авіаквитки або ви можете зробити це самостійно. Наш представник зустрічає вас в аеропорту Бен-Гуріон.",
          icon: "Plane"
        },
        {
          number: "03",
          title: "Заселення",
          description: "Трансфер з аеропорту прямо в підготовлену квартиру. Відпочинок після перельоту.",
          icon: "Home"
        },
        {
          number: "04",
          title: "Легалізація",
          description: "Похід до МВС з нашим юристом. Отримання візи та дозволу на легальне перебування.",
          icon: "FileSignature"
        },
        {
          number: "05",
          title: "Робота",
          description: "Інструктаж, отримання форми та вихід на першу зміну. Нарахування зарплати з першої години.",
          icon: "Briefcase"
        }
      ] as Stage[]
    },
    budget: {
      title: "Плануйте бюджет",
      subtitle: "Використовуйте наші інструменти для точного розрахунку фінансів",
      tabs: {
        salary: "Калькулятор Зарплати",
        flight: "Пошук Авіаквитків",
        food: "Калькулятор Харчування"
      },
      food: {
        title: "Витрати на харчування",
        subtitle: "Середня вартість продуктового кошика в Ізраїлі",
        genderLabel: "Склад:",
        men: "Чоловіки",
        women: "Жінки",
        lifestyleLabel: "Стиль харчування:",
        types: {
          economy: "Економ (Готування вдома)",
          standard: "Стандарт (Кафе іноді)",
          premium: "Комфорт (Ресторани)"
        },
        resultTitle: "Приблизний бюджет на місяць",
        basketIncludes: "У кошик входить:",
        basketItems: ["М'ясо та риба", "Свіжі овочі та фрукти", "Молочні продукти та яйця", "Крупи, хліб, масло", "Напої та десерти"],
        note: "*Дані засновані на середніх цінах супермаркетів (Rami Levy, Shufersal)"
      }
    },
    calculator: {
      title: "Калькулятор Заробітку",
      subtitle: "Розрахуйте свій приблизний щомісячний дохід в Ізраїлі",
      hourlyRate: "Ставка за годину (шекелів)",
      hoursPerDay: "Годин на день",
      daysPerWeek: "Днів на тиждень",
      days: "днів",
      hours: "год.",
      incomeTitle: "Ваш приблизний дохід на місяць",
      currencyNis: "Шекелів (нетто*)",
      currencyUsd: "Доларів США",
      disclaimer: "*Розрахунок приблизний. Підсумкова сума залежить від конкретної вакансії, переробок та податкових відрахувань."
    },
    flight: {
      title: "Пошук Авіаквитків",
      subtitle: "Порівняйте ціни на квитки з різних країн до Ізраїлю або Йорданії",
      from: "Звідки летите?",
      to: "Куди летите?",
      when: "Коли летите?",
      dates: {
        soon: "Найближчими днями",
        week: "1-2 тижні",
        month: "Наступного місяця"
      },
      type: "Тип рейсу",
      direct: "Прямий рейс",
      transfers: "З пересадками",
      passengers: "Пасажири",
      luggage: "Багаж",
      calculate: "Знайти квитки",
      estimated: "Приблизна вартість (USD)",
      withLuggage: "З багажем",
      noLuggage: "Без багажу",
      checkOn: "Перевірити на",
      roundTripNote: "*з урахуванням зворотного квитка",
      cities: {
        Moscow: "Москва (MOW)",
        Minsk: "Мінськ (MSQ)",
        Tbilisi: "Тбілісі (TBS)",
        Istanbul: "Стамбул (IST)",
        Athens: "Афіни (ATH)",
        Warsaw: "Варшава (WAW)",
        Prague: "Прага (PRG)",
        Budapest: "Будапешт (BUD)",
        Riga: "Рига (RIX)",
        Vilnius: "Вільнюс (VNO)",
        Bucharest: "Бухарест (OTP)",
        Chisinau: "Кишинів (RMO)",
        Tashkent: "Ташкент (TAS)"
      },
      destinations: {
        TLV: "Тель-Авів (Ізраїль)",
        HFA: "Хайфа (Ізраїль)",
        AMM: "Амман (Йорданія)"
      }
    },
    testimonials: {
      title: "Відгуки Клієнтів",
      subtitle: "",
      items: [
        {
            name: "Дмитро",
            role: "Хайфа",
            text: "Хлопці, дякую! Візу отримав (синій папір), все офіційно. Були сумніви, але в аеропорту зустріли, як обіцяли. Зараз оформляємося в МВС.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Олена",
            role: "Ашдод",
            text: "(Аудіо повідомлення) Дякую Тимуру за допомогу з документами. Дуже хвилювалася за кордон, але пройшла без зайвих питань завдяки інструкції.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            audio: "/audio/review_elena.mp3"
        },
        {
            name: "Максим",
            role: "Тель-Авів",
            text: "Вже місяць працюю на складі. Зарплату отримав вчасно, прикладаю фото чека. Житло нормальне, жити можна.",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Марина",
            role: "Нетанія",
            text: "Зустріли з табличкою, відразу дали сімку та відвезли на квартиру. Дуже зручно, коли не знаєш мови. Дякую за турботу!",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            video: "/videos/review_marina.mp4"
        },
        {
            name: "Сергій",
            role: "Рішон-ле-Ціон",
            text: "(Аудіо) Прилетіли з дружиною, поселили в кімнату для пар. Роботу знайшли на другий день. Все чесно.",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            audio: "/audio/review_sergey.mp3"
        },
        {
            name: "Анна",
            role: "Єрусалим",
            text: "Працюю доглядальницею, сім'я чудова. Дякую за можливість легально працювати та допомагати рідним.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
        }
      ] as Testimonial[]
    },
    contact: {
      title: "Анкета шукача",
      subtitle: "Залиште заявку, і ми зв'яжемося з вами найближчим часом для консультації.",
      office: "Головний офіс",
      officeAddr: "вул. А-Яркон 15, Тель-Авів",
      social: "Ми в соцмережах:",
      formTitle: "Анкета шукача",
      name: "Ваше ім'я",
      namePlace: "Іван Петренко",
      phone: "Номер телефону (WhatsApp)",
      phonePlace: "+380 99 000-00-00",
      age: "Вік",
      agePlace: "25",
      citizenship: "Громадянство",
      citizenshipPlace: "Україна",
      languages: "Знання мов",
      languagesPlace: "Англійська (базова)",
      skills: "Проф. навички",
      skillsPlace: "Водій, Зварювальник",
      tripDate: "Коли плануєте поїздку?",
      tripDatePlace: "Приблизно 20 жовтня",
      peopleCount: "Кількість людей",
      peopleCountPlace: "1",
      job: "Сфера, що цікавить",
      jobPlace: "Оберіть вакансію...",
      biometric: "Біометричний закордонний паспорт",
      visited: "Чи були раніше в Ізраїлі?",
      yes: "Так",
      no: "Ні",
      btnSubmit: "Відправити заявку",
      disclaimer: "Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних. Ви будете перенаправлені у WhatsApp.",
      successTitle: "Заявка підготовлена",
      successText: "Відкрийте WhatsApp та надішліть повідомлення",
      successLink: "Відправити лист вручну"
    },
    faq: {
      title: "Часті запитання",
      subtitle: "Відповіді на популярні питання про працевлаштування та легалізацію",
      items: [
        {
          question: "Мене зустрінуть в аеропорту?",
          answer: "Так, наш представник обов'язково зустріне вас в аеропорту Бен-Гурион з табличкою, допоможе з багажем та організує трансфер до місця проживання."
        },
        {
          question: "Як я отримуватиму зарплату?",
          answer: "Зарплата виплачується раз на місяць, зазвичай 10-15 числа. Можливі аванси. Оплата відбувається чеком або готівкою, залежно від роботодавця."
        },
        {
          question: "Чи потрібна віза для в'їзду?",
          answer: "Громадянам України, Молдови, Грузії та країн ЄС віза не потрібна (до 90 днів) за наявності біометричного паспорта. Громадянам Узбекистану та ін. потрібна віза заздалегідь."
        },
        {
          question: "Чи пропустять мене на кордоні?",
          answer: "Ми детально консультуємо перед вильотом, готуємо пакет документів та інструктуємо, як поводитися на кордоні. Це мінімізує ризики."
        },
        {
          question: "Чи можна приїхати з родиною?",
          answer: "Можна приїхати парою (чоловік і дружина). На жаль, з дітьми ми не працевлаштовуємо, оскільки немає умов для їх розміщення та навчання."
        },
        {
          question: "Який вік шукачів?",
          answer: "Ми працевлаштовуємо чоловіків і жінок у віці від 18 до 55 років. У рідкісних випадках можливі винятки для фахівців з досвідом."
        },
        {
          question: "Скільки коштують ваші послуги?",
          answer: "Вартість розраховується індивідуально і вираховується рівними частинами з вашої зарплати (можна розбити на 1-2 місяці). По прильоту ви оплачуєте лише аванс юристу за оформлення легалізації."
        }
      ] as FAQItem[]
    },
    footer: {
      desc: "Допомога у працевлаштуванні та легалізації в Ізраїлі. Працюємо офіційно з 2018 року.",
      contacts: "Контакты",
      questions: "Залишилися питання?",
      questionsText: "Напишіть нашому менеджеру в WhatsApp, ми на зв'язку 24/7.",
      writeMgr: "Написати менеджеру",
      rights: "© 2024 Israel Work. Всі права захищені."
    }
  },

  // ENGLISH
  en: {
    hero: {
      badge: "ISRAEL WORK",
      title: "Legal Work in Israel",
      subtitle: "Official employment, high salaries, full legal support. Assistance with flights, border crossing, accommodation, and adaptation.",
      btnConsult: "Consultation",
      btnJobs: "Jobs on Telegram",
      features: {
        insurance: "Medical Insurance",
        legalization: "Legalization",
        transfer: "Transfer",
        support: "Full Support"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Israel Work takes care of all your relocation and legalization concerns.",
      items: [
        {
          title: "Legalization via MOI",
          description: "On-site legalization through the Ministry of Interior. You will receive a visa giving you the right to work and stay legally for up to 3 years.",
          icon: "FileCheck"
        },
        {
          title: "Housing & Adaptation",
          description: "Apartment search without brokers. Airport meeting, help with SIM card and travel pass.",
          icon: "Home"
        },
        {
          title: "Employment",
          description: "Direct jobs from verified employers. Factories, construction, hotels, caregiving. No prepayment.",
          icon: "Briefcase"
        },
        {
          title: "Medical Insurance",
          description: "Insurance for foreign workers. Access to clinics and doctors.",
          icon: "HeartPulse"
        }
      ] as ServiceItem[]
    },
    jobs: {
      title: "Current Vacancies",
      subtitle: "Wide selection of jobs. Daily updates on Telegram.",
      detailsBtn: "Details",
      categories: JOB_CATEGORIES_EN_TRANSLATED
    },
    stages: {
      title: "Employment Stages",
      subtitle: "A simple and transparent path to your new job in Israel. We guide you every step of the way.",
      label: "STAGE",
      items: [
        {
          number: "01",
          title: "Consultation",
          description: "Submit an application or contact us. We select a vacancy, discuss conditions, and answer questions.",
          icon: "MessageCircle"
        },
        {
          number: "02",
          title: "Arrival",
          description: "We help you book flights, or you can do it yourself. Our representative meets you at Ben Gurion Airport.",
          icon: "Plane"
        },
        {
          number: "03",
          title: "Check-in",
          description: "Transfer from the airport directly to a prepared apartment. Rest after the flight.",
          icon: "Home"
        },
        {
          number: "04",
          title: "Legalization",
          description: "Visit to the Ministry of Interior with our lawyer. Obtaining a visa and permission for legal stay.",
          icon: "FileSignature"
        },
        {
          number: "05",
          title: "Work",
          description: "Briefing, receiving a uniform, and starting the first shift. Salary accrual from the first hour.",
          icon: "Briefcase"
        }
      ] as Stage[]
    },
    budget: {
      title: "Plan Your Budget",
      subtitle: "Use our tools for accurate financial calculation",
      tabs: {
        salary: "Salary Calculator",
        flight: "Flight Search",
        food: "Food Calculator"
      },
      food: {
        title: "Food Expenses",
        subtitle: "Average cost of a food basket in Israel",
        genderLabel: "Composition:",
        men: "Men",
        women: "Women",
        lifestyleLabel: "Dining Style:",
        types: {
          economy: "Economy (Cooking at home)",
          standard: "Standard (Eating out sometimes)",
          premium: "Comfort (Restaurants)"
        },
        resultTitle: "Estimated Monthly Budget",
        basketIncludes: "Basket includes:",
        basketItems: ["Meat and fish", "Fresh vegetables and fruit", "Dairy and eggs", "Grains, bread, oil", "Drinks and desserts"],
        note: "*Data based on average supermarket prices (Rami Levy, Shufersal)"
      }
    },
    calculator: {
      title: "Earnings Calculator",
      subtitle: "Calculate your approximate monthly income in Israel",
      hourlyRate: "Hourly Rate (NIS)",
      hoursPerDay: "Hours per Day",
      daysPerWeek: "Days per Week",
      days: "days",
      hours: "h",
      incomeTitle: "Your Approx. Monthly Income",
      currencyNis: "Shekels (Net*)",
      currencyUsd: "USD",
      disclaimer: "*Calculation is approximate. Final amount depends on the specific vacancy, overtime, and tax deductions."
    },
    flight: {
      title: "Flight Search",
      subtitle: "Compare ticket prices from different countries to Israel or Jordan",
      from: "Flying from?",
      to: "Flying to?",
      when: "When?",
      dates: {
        soon: "In a few days",
        week: "1-2 weeks",
        month: "Next month"
      },
      type: "Flight Type",
      direct: "Direct Flight",
      transfers: "With Transfers",
      passengers: "Passengers",
      luggage: "Luggage",
      calculate: "Find Tickets",
      estimated: "Estimated Cost (USD)",
      withLuggage: "With Luggage",
      noLuggage: "No Luggage",
      checkOn: "Check on",
      roundTripNote: "*including return ticket",
      cities: {
        Moscow: "Moscow (MOW)",
        Minsk: "Minsk (MSQ)",
        Tbilisi: "Tbilisi (TBS)",
        Istanbul: "Istanbul (IST)",
        Athens: "Athens (ATH)",
        Warsaw: "Warsaw (WAW)",
        Prague: "Prague (PRG)",
        Budapest: "Budapest (BUD)",
        Riga: "Riga (RIX)",
        Vilnius: "Vilnius (VNO)",
        Bucharest: "Bucharest (OTP)",
        Chisinau: "Chisinau (RMO)",
        Tashkent: "Tashkent (TAS)"
      },
      destinations: {
        TLV: "Tel Aviv (Israel)",
        HFA: "Haifa (Israel)",
        AMM: "Amman (Jordan)"
      }
    },
    testimonials: {
      title: "Client Reviews",
      subtitle: "",
      items: [
        {
            name: "Dmitry",
            role: "Haifa",
            text: "Thanks guys! Got the visa (blue paper), everything is official. Had doubts, but they met me at the airport as promised. Currently processing at MOI.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Elena",
            role: "Ashdod",
            text: "(Audio message) Thanks to Timur for help with documents. Was very worried about the border, but passed without extra questions thanks to the instructions.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            audio: "/audio/review_elena.mp3"
        },
        {
            name: "Maxim",
            role: "Tel Aviv",
            text: "Working at the warehouse for a month now. Got salary on time, attaching photo of the check. Housing is decent.",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Marina",
            role: "Netanya",
            text: "Met with a sign, gave me a SIM card right away and drove to the apartment. Very convenient when you don't know the language. Thanks for caring!",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            video: "/videos/review_marina.mp4"
        },
        {
            name: "Sergey",
            role: "Rishon LeZion",
            text: "(Audio) Arrived with my wife, settled in a room for couples. Found work on the second day. Everything is honest.",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            audio: "/audio/review_sergey.mp3"
        },
        {
            name: "Anna",
            role: "Jerusalem",
            text: "Working as a caregiver, wonderful family. Thanks for the opportunity to work legally and help my family.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            verificationDoc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
        }
      ] as Testimonial[]
    },
    contact: {
      title: "Applicant Form",
      subtitle: "Leave a request, and we will contact you shortly for a consultation.",
      office: "Main Office",
      officeAddr: "HaYarkon St 15, Tel Aviv",
      social: "Social Media:",
      formTitle: "Applicant Form",
      name: "Your Name",
      namePlace: "John Doe",
      phone: "Phone Number (WhatsApp)",
      phonePlace: "+1 555 000-0000",
      age: "Age",
      agePlace: "25",
      citizenship: "Citizenship",
      citizenshipPlace: "USA",
      languages: "Languages",
      languagesPlace: "English (Basic)",
      skills: "Skills",
      skillsPlace: "Driver, Welder",
      tripDate: "Planned Trip Date?",
      tripDatePlace: "Approx. Oct 20",
      peopleCount: "Number of People",
      peopleCountPlace: "1",
      job: "Interested Field",
      jobPlace: "Select vacancy...",
      biometric: "Biometric Passport",
      visited: "Have you been to Israel?",
      yes: "Yes",
      no: "No",
      btnSubmit: "Submit Application",
      disclaimer: "By clicking the button, you agree to the processing of personal data. You will be redirected to WhatsApp.",
      successTitle: "Application prepared",
      successText: "Open WhatsApp and send the message",
      successLink: "Send email manually"
    },
    faq: {
      title: "FAQ",
      subtitle: "Answers to popular questions about employment and legalization",
      items: [
        {
          question: "Will I be met at the airport?",
          answer: "Yes, our representative will meet you at Ben Gurion Airport with a sign, help with luggage, and organize transfer to the accommodation."
        },
        {
          question: "How will I get paid?",
          answer: "Salary is paid once a month, usually on the 10th-15th. Advances are possible. Payment is by check or cash, depending on the employer."
        },
        {
          question: "Do I need a visa?",
          answer: "Citizens of EU, Ukraine, Georgia, etc., do not need a visa (up to 90 days) with a biometric passport. Citizens of Uzbekistan, etc., need a visa in advance."
        },
        {
          question: "Will I pass border control?",
          answer: "We consult in detail before departure, prepare documents, and instruct on how to behave at the border to minimize risks."
        },
        {
          question: "Can I come with family?",
          answer: "You can come as a couple. Unfortunately, we do not employ people with children as there are no conditions for their accommodation."
        },
        {
          question: "What is the age limit?",
          answer: "We employ men and women aged 18 to 55. In rare cases, exceptions are possible for specialists with experience."
        },
        {
          question: "How much do your services cost?",
          answer: "The cost is calculated individually and deducted in equal parts from your salary (can be split over 1-2 months). Upon arrival, you only pay an advance to the lawyer for legalization."
        }
      ] as FAQItem[]
    },
    footer: {
      desc: "Assistance with employment and legalization in Israel. Officially working since 2018.",
      contacts: "Contacts",
      questions: "Any questions?",
      questionsText: "Write to our manager on WhatsApp, we are available 24/7.",
      writeMgr: "Write to Manager",
      rights: "© 2024 Israel Work. All rights reserved."
    }
  }
};
