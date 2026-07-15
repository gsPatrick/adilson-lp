export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://dradilsonsilvestre.com.br/sitemap.xml",
  };
}
