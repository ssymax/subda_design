export const toMailtoHref = (email: string) => `mailto:${email}`;

export const toPhoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;

export const toMapsHref = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
