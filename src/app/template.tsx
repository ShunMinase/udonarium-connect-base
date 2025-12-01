"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import NextTopLoader from 'nextjs-toploader';

// const inter = Inter({ subsets: ["latin"] });


// import { GoogleAnalytics, usePageView } from '@/modules/gtag';
import Lenis from "lenis";

import { setDvh, setSvh } from '@/app/_modules/screen';
import { useEffect } from 'react';
import Footer from "@/app/_layouts/footer/Footer";
import useLoading from "./_hooks/useTransition";
import TransitionDiv from "./_layouts/TransitionDiv";
import Header from "./_layouts/header/Header";
import { useLenis } from "./_hooks/useLenis";
import MouseStalker from "./_components/ui/MouseStalker";
import useCommonHeader from "./_hooks/useCommonHeader";
import { useAtom } from "jotai";
import { currentPageAtom } from "./_jotai/GlobalAtom";

// クライアントコンポーネント
// このコンポーネントは、layout.tsxの内側で読み込まれ、すべてのページに共通のレイアウトを提供する
// このコンポーネントは、ページ遷移のたびに再レンダリングされる
// 副作用のある処理を含めてよい
export default function Template({ children }: { children: React.ReactNode }) {

  // usePageView();
  const commonHeader = useCommonHeader()
  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)

  const { setLenisInstance } = useLenis();

  useEffect(() => {
    // 画面サイズに関する処理
    setDvh();
    setSvh();
  }, [currentPageName]);

  useEffect(() => {
    window.addEventListener('resize', setDvh);
    return () => {
      window.removeEventListener('resize', setDvh);
    }
  }, []);

  // 慣性スクロール
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true, // スクロール中のアンカーリンククリックを有効にする
      duration: 0.92
    });

    // jotaiのatomにlenisインスタンスを保存
    setLenisInstance(lenis);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // クリーンアップ
    return () => {
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [setLenisInstance]);

  return (
    <>
      {/* <NextTopLoader color="#999" showSpinner={false} height={4} /> */}
      <MouseStalker />
      {commonHeader.enabled && <Header />}
      <TransitionDiv>
        {children}
      </TransitionDiv>
    </>
  );

}