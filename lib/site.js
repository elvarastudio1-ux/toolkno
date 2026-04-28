export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Toolkno",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toolkno.com",
  description:
    "Toolkno is a fast, mobile-friendly online toolbox for writers, marketers, developers, students, and teams who need clean text utilities without signup friction.",
  keywords: [
    "online tools",
    "text tools",
    "word counter",
    "json formatter",
    "base64 encoder",
    "duplicate line remover",
    "toolkno"
  ],
  socialImage: "/og-toolkno.jpg",
  adSlots: {
    hero: "4100011101",
    top: "4100011102",
    middle: "4100011103",
    bottom: "4100011104"
  },
  plans: {
    free: {
      name: "Free",
      price: "Rs. 0/month",
      features: [
        "All 60+ free tools",
        "Google ads shown",
        "No login needed"
      ]
    },
    proMonthly: {
      name: "Pro Monthly",
      price: "Rs. 199/month",
      amount: 19900,
      features: [
        "Everything in Free",
        "Zero ads",
        "AI-powered tools",
        "Bulk processing",
        "Priority support",
        "API access"
      ]
    },
    proYearly: {
      name: "Pro Yearly",
      price: "Rs. 1499/year",
      amount: 149900,
      features: [
        "Everything in Free",
        "Zero ads",
        "AI-powered tools",
        "Bulk processing",
        "Priority support",
        "API access"
      ]
    }
  }
};

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path}`;
}
