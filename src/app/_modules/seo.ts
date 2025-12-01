import type { Metadata } from "next";
import {
  DEFAULT_OGP_PATH,
  SITE_DESCRIPTION_BASE,
  SITE_TITLE,
  SITE_FRONTEND_URL_BASE,
} from "@/app/_config/Constants";

// 引数で渡されたものでデフォルトのメタデータを上書きする
// export function composeMetaData( metaData: Partial<Metadata> ): Metadata {
//   return {
//     ...defaultMetaData,
//     ...metaData,
//     openGraph: {
//       ...defaultMetaData.openGraph,
//       ...metaData.openGraph,
//     },
//     twitter: {
//       ...defaultMetaData.twitter,
//       ...metaData.twitter,
//     }
//   }
// }
interface Data {
  title?: string;
  description?: string;
  pagePath?: string;
  ogImageUrl?: string;
  icons?: string;
}
export function composeMetaData(data: Data): Metadata {
  const metadata = structuredClone(baseMetaData); // デフォルトのメタデータを別オブジェクトとしてコピー
  if (data.title) {
    metadata.title = data.title;
    metadata.openGraph.title = data.title;
  }
  if (data.description) {
    metadata.description = data.description;
    metadata.openGraph.description = data.description;
  }
  if (data.pagePath) {
    const fullUrl = `${SITE_FRONTEND_URL_BASE}${data.pagePath}`;
    metadata.openGraph.url = fullUrl;
    metadata.alternates = { canonical: fullUrl };
  }
  if (data.ogImageUrl) {
    metadata.openGraph.images[0].url = data.ogImageUrl;
    metadata.twitter.images = data.ogImageUrl;
  }
  if (data.icons) {
    metadata.icons = data.icons;
  }
  return metadata;
}

// ogpの画像のURLをちゃんと設定する
const baseMetaData = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION_BASE,
  icons: "/img/favicon.ico",
  openGraph: {
    type: "website",
    url: SITE_FRONTEND_URL_BASE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION_BASE,
    images: [
      {
        url: SITE_FRONTEND_URL_BASE + DEFAULT_OGP_PATH,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: SITE_FRONTEND_URL_BASE + DEFAULT_OGP_PATH,
  },
  verification: {
    google: "IKYjlBgeergreyZAuOj4", // TODO サーチコンソール
  },
  alternates: {
    canonical: SITE_FRONTEND_URL_BASE,
  },
};

export function composeSiteTitle(title: string): string {
  return title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
}
export function composeSiteUrl(path: string): string {
  return `${SITE_FRONTEND_URL_BASE}${path}`;
}

// カスタムイベントの記録
export function trackCustomGAEvent(
  eventName: string,
  params: Record<string, any> = {}
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}
