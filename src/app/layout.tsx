
import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import Image from 'next/image';

import '@/assets/styles/application.scss';
import '@/assets/styles/tailwind.scss';

import { GOOGLE_ANALYTICS_ID, SITE_DESCRIPTION_BASE, SITE_TITLE } from "@/app/_config/Constants";
import { composeMetaData, composeSiteTitle } from "@/app/_modules/seo";
// import { JotaiProvider } from "@/app/_providers/JotaiProvider";
import { Provider as JotaiProvider } from 'jotai';
import Footer from '@/app/_layouts/footer/Footer';

// import { GoogleAnalytics, usePageView } from '@/modules/gtag';
import { GoogleAnalytics } from "@next/third-parties/google"; // インポート

export const metadata: Metadata = composeMetaData({});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
}

// fetchリクエスト再検証の間隔(秒)
export const revalidate = 300

// 完全なサーバーコンポーネント
// このコンポーネントは、ページの最上位にあり、すべてのページに共通のレイアウトを提供する
// このコンポーネントは、ページの変更時に再レンダリングされない
// 副作用のある処理を含めてはいけない
// 副作用のある共通処理はtemplate.tsxに記述する
// template.tsxはlayout.tsxの子コンポーネントとして勝手に読み込まれる
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="ja">
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      <body>
        <JotaiProvider>
          <main className="main-content">
            {children}
          </main>
        </JotaiProvider>
      </body>
    </html>
  );
}
