import { absoluteUrl, siteConfig } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const canonical = absoluteUrl(path);

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(siteConfig.socialImage)]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        }
  };
}
