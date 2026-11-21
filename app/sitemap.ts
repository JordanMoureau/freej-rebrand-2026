import type { MetadataRoute } from "next";

const siteUrl = "https://freelancejordan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about-freelance-jordan",
    "/about-freelance-jordan/testimonials",
    "/freelance-jordan-services",
    "/freelance-jordan-services/brands",
    "/freelance-jordan-services/mobile-apps",
    "/freelance-jordan-services/seo-strategies",
    "/freelance-jordan-services/websites",
    "/freej-portfolio",
    "/project-journal",
    "/seo-case-studies",
    "/contact-freelance-jordan",
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
