export const CONTACT_INFO = {
  companyName: "Ishwari Tours & Travels",
  parentCompany: "Ishwari Engineering & Roadlines",
  phone: "+91 85304 10233",
  phoneRaw: "918530410233",
  phoneTel: "+918530410233",
  email: "ishwariengineeringsandroadlins@gmail.com",
  address: "Sector 24, Pradhikaran, Near Akurdi Railway Station, PCMC, Pune - 411044, Maharashtra, India.",
  defaultWhatsAppMessage: "Hi Ishwari Tours & Travels (Ishwari Engineering & Roadlines), I would like to inquire about booking a car on rent. Please share availability and best rates.",
  getWhatsAppUrl: (customText?: string) => {
    const text = customText || "Hi Ishwari Tours & Travels (Ishwari Engineering & Roadlines), I would like to inquire about booking a car on rent. Please share availability and best rates.";
    return `https://wa.me/918530410233?text=${encodeURIComponent(text)}`;
  }
};
