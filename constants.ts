import { Testimonial } from "./types";

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/972555077625",
  telegramChannel: "https://t.me/Rus_Work_Israel",
  instagram: "https://www.instagram.com/fly_to_israel",
  phoneDisplay: "+972 555077625"
};

// Deprecated content arrays removed in favor of translations.ts
// Keeping empty arrays or minimal config if needed by other legacy parts, 
// but ideally components should now import from translations or context.

export const NAV_LINKS: { name: string; href: string; }[] = [];
