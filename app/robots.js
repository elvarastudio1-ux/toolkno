export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/dashboard/",
          "/billing/",
        ],
      },
    ],
    sitemap: "https://toolkno.com/sitemap.xml",
    host: "https://toolkno.com",
  };
}
