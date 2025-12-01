
import { ReactNode, useEffect } from 'react';
import styles from '@/styles/Home.module.css'


// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


import { transform } from 'next/dist/build/swc';
import React from 'react';
import { usePathname } from 'next/navigation';
import useTransition from '../_hooks/useTransition';
import { gsap } from "gsap";
import { addClass, qs, removeClass } from '../_modules/qs';
import { useAtom } from 'jotai';
import { currentPageAtom } from '../_jotai/GlobalAtom';


type Props = {
  children: ReactNode
}

export default function TransitionDiv(props: Props) {

  // 現在のURLのパス名を取得
  // URLが https://example.com/about の場合、 /aboutを返す
  const pathname = usePathname()

  // 現在のURLのクエリパラメータを取得
  // URLが https://example.com/about?name=John&age=30 の場合、
  // name=John と age=30 を含むオブジェクトを返す
  // const searchParams = useSearchParams()

  const transition = useTransition()
  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)

  // ページ移動を検知
  // 参考：https://neightbor.jp/blog/nextjs-13-4-page-loading
  useEffect(() => {
    fadein()
    // console.log('TransitionDiv');

    return () => {
      fadein()
    }
  }, [pathname])

  function fadein() {
    transition.end()
    const tl = gsap.timeline();

    const pageBackground = qs('#page_background');
    // .page_backgroundから.activeを削除する処理
    tl.add(() => {
      removeClass(pageBackground, 'active');
    });
    tl.from('.transition_container', { x: 10, y: 0, opacity: 0, overwrite: true });
    tl.to('.transition_container', { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power2.inOut", overwrite: true });
    tl.set('.transition_container', { clearProps: "all" });

    tl.add(() => {
      addClass(pageBackground, 'active');
    });
  }

  return (
    <>


      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "clip",
          position: "relative",
        }}
      >
        <div className="noise_background"></div>
        <div id="page_background" className={" " + (currentPageName === "contact" ? "" : "active")}></div>

        {/* 初回リロード時、読み込みが完了していない中途半端な状態で画面が表示されてしまい、読み込み完了時に画面がガッとなるため、opacity: 0で非表示にしておく */}
        <div className={`transition_container`} style={{ opacity: 0 }}>
          {props.children}
        </div>
      </div>
    </>
  );
}