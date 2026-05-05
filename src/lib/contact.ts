// Single source of truth for all contact info.
// Update these values to change contact details site-wide.

export const CONTACT = {
  // Use international format without spaces or '+' for WhatsApp / tel hrefs.
  // Display format includes spaces.
  phoneRaw: "263000000000",
  phoneDisplay: "+263 (0) 000 000",

  email: "info@novarisezw.co.zw",
  emailBulawayo: "bulawayo@novarisezw.co.zw",

  addressHarare: "Central Business District, Harare, Zimbabwe",
  addressBulawayo: "Bulawayo, Zimbabwe",

  // Social handles (set to '#' until provided)
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

export const telHref = `tel:+${CONTACT.phoneRaw}`;
export const mailHref = `mailto:${CONTACT.email}`;

export function whatsappHref(message: string): string {
  return `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;
}
