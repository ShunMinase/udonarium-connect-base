// React
import { useEffect, useRef, useState } from "react"
// 外部ライブラリ
// 内部ライブラリ
import { scrollTo, setDvh, preventScroll, allowScroll } from "@/app/_modules/screen"
import { addClass, removeClass } from "@/app/_modules/qs"

// コンポーネント
import SpMenu from "./SpMenu"
// import SnsIconList from 'components/ui/SnsIconList';

// 型定義
// 定数
// 画像



import Image from "next/image"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import HeadlessLink from "@/app/_components/ui/HeadlessLink"
import { YOUTUBE_URL, X_URL } from "@/app/_config/Constants"
import HeadlessButton from "@/app/_components/ui/HeadlessButton"
import { activateHoverCursor, deactivateHoverCursor } from "@/app/_components/ui/MouseStalker"
import { currentPageAtom } from "@/app/_jotai/GlobalAtom"
import { useAtom } from "jotai"

// import Logotype from '/public/img/logo/logotype.svg';

type Props = {}

// let toggle: any;
// let sp_menu: any;

export default function Header(props: Props) {
  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)

  const [isSpMenuOpen, setIsSpMenuOpen] = useState(false)

  // ホバーイベントリスナーの参照を保持
  const menuHoverListeners = useRef<Array<{ element: Element; mouseenter: (e: Event) => void; mouseleave: (e: Event) => void }>>([]);

  /*=======================================
  トップ以外であれば初めからヘッダーを表示
  =======================================*/
  // useEffect(() => {
  //   console.log(currentPage);
  //   if (currentPage !== "home") {
  //     addClass("#header", 'active');
  //   };
  // }, []);

  /*=======================================
    SPメニュー制御
  =======================================*/
  useEffect(() => {
    return allowScroll()
  }, [])

  // SPメニューの開閉を制御
  function toggleMenu() {
    setDvh()
    if (isSpMenuOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  function handleClickLogo() {
    if (isSpMenuOpen) {
      closeMenu()
    }
  }

  function menuClass(pageName: string) {
    const baseClass = "header_link"
    if (currentPageName === pageName) {
      return baseClass + " active"
    } else {
      return baseClass
    }
  }

  function openMenu() {
    const tl = gsap.timeline()
    const overwrite = true
    tl.call(() => {
      setIsSpMenuOpen(true)
      // preventScroll()
    })
    tl.fromTo(
      "#sp_menu",
      {
        visibility: "visible",
        opacity: 0,
        x: 10,
        overwrite: overwrite,
        pointerEvents: "auto"
      },
      {
        x: 0,
        duration: 0.3,
        opacity: 1,
        overwrite: overwrite
      }
    )
    tl.fromTo(
      "[data-gsap-target='sp_menu_elements']",
      {
        duration: 0.75,
        x: 14,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          each: 0.07, // 遅延させる時間
          from: "start" // 開始位置の指定 start, end, center, edges, random
        },
        overwrite: overwrite
      },
      "-=0.2"
    )
    // tl.fromTo(
    //   "[data-gsap-target='sp_menu_bg_slash']",
    //   {
    //     // visibility: "visible",
    //     opacity: 0,
    //     x: -680 * 0.3 * -1, // 移動距離yにtan(17°)をかける
    //     y: -680,
    //     overwrite: overwrite
    //     // pointerEvents: "auto",
    //   },
    //   {
    //     x: 0,
    //     y: 0,
    //     duration: 0.4,
    //     opacity: 0.1,
    //     overwrite: overwrite,
    //     ease: "power4.out"
    //   },
    //   "-=0.7"
    // )
    // tl.set('#sp_menu', { clearProps: "all" });
    tl.set("[data-gsap-target='sp_menu_elements']", { clearProps: "all" })







    // ホバー効果の設定
    // tl.call(() => {
    //   const links = document.querySelectorAll('#sp_menu [data-gsap-target="sp_menu_elements"]')

    //   links.forEach(link => {
    //     const handleMouseEnter = (e: Event) => {
    //       const target = e.currentTarget as HTMLElement
    //       gsap.to(target, {
    //         scale: 1.05,
    //         duration: 0.2,
    //         ease: "cubic-bezier(0.24, 1.4, 0.47, 1.3)",
    //         overwrite: true
    //       })
    //     }

    //     const handleMouseLeave = (e: Event) => {
    //       const target = e.currentTarget as HTMLElement
    //       gsap.to(target, {
    //         scale: 1,
    //         duration: 0.2,
    //         ease: "cubic-bezier(0.24, 1.4, 0.47, 1.3)",
    //         overwrite: true
    //       })
    //     }

    //     // イベントリスナーを追加
    //     link.addEventListener('mouseenter', handleMouseEnter)
    //     link.addEventListener('mouseleave', handleMouseLeave)

    //     // クリーンアップ用に参照を保存
    //     menuHoverListeners.current.push({
    //       element: link,
    //       mouseenter: handleMouseEnter,
    //       mouseleave: handleMouseLeave
    //     })
    //   })
    // })
  }






  function closeMenu() {
    const tl = gsap.timeline()
    const overwrite = false
    tl.call(() => {
      setIsSpMenuOpen(false)
      allowScroll()

      // ホバーイベントリスナーをクリーンアップ
      menuHoverListeners.current.forEach(({ element, mouseenter, mouseleave }) => {
        element.removeEventListener('mouseenter', mouseenter)
        element.removeEventListener('mouseleave', mouseleave)
      })
      menuHoverListeners.current = []
    })
    tl.set("#sp_menu", {
      pointerEvents: "none"
    })

    tl.to("[data-gsap-target='sp_menu_elements']", {
      duration: 0.4,
      x: 10,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        each: 0.03, // 遅延させる時間
        from: "start" // 開始位置の指定 start, end, center, edges, random
      },
      overwrite: overwrite
    })

    tl.to(
      "#sp_menu",
      {
        x: 10,
        duration: 0.4,
        opacity: 0,
        ease: "power4.out",
        overwrite: overwrite
      },
      "-=0.0"
    )

    tl.set("#sp_menu", {
      visibility: "hidden",
      overwrite: overwrite
    })
    tl.set("#sp_menu", { clearProps: "all" })
  }

  /*=======================================
    ページトップボタン
  =======================================*/
  const pageTopButtonRef = useRef(null)
  const observerRef = useRef(null)
  useEffect(() => {
    const pageTopButton = pageTopButtonRef.current
    const observer = observerRef.current
    gsap.registerPlugin(ScrollTrigger)
    const trigger = ScrollTrigger.create({
      trigger: observer,
      onEnter: () => removeClass(pageTopButton, "active"), // scrollerの範囲に入った時
      onLeave: () => addClass(pageTopButton, "active"), // scrollerの範囲から出た時
      onEnterBack: () => addClass(pageTopButton, "active"),
      onLeaveBack: () => removeClass(pageTopButton, "active"),
      once: false, // 複数回発火させる
      start: "top -50%" // 画面外上部50%までスクロールしたらトリガーとする
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <>
      <div id="pagetop_observer" ref={observerRef}></div>
      <button
        id="pagetop_button"
        className=""
        onClick={() => {
          scrollTo(0)
        }}
        ref={pageTopButtonRef}
        onMouseOver={activateHoverCursor}
        onMouseOut={deactivateHoverCursor}
      >
        <span className="background"></span>
        <Image src="/img/pagetop_arrow.svg" alt="" width="50" height="50" className="arrow" />
      </button>

      <header id={"header"} className={""}>


        <div className="pc_header">

          <div className="pc_header_l">
            <HeadlessLink href="/" className="logo_anchor" onClick={handleClickLogo}>
              {/* <Logotype /> */}
              <Image src="/img/logo_hr.svg" alt="" width="300" height="30" className="" />
            </HeadlessLink>
          </div>

          <div className="pc_header_r">
            {/* <HeadlessLink href="/" className="header_link">
              Home
            </HeadlessLink> */}
            <HeadlessLink href="/#works" className={menuClass("works")} defaultHover={false}>
              制作実績
            </HeadlessLink>
            <HeadlessLink href="/about" className={menuClass("about")} defaultHover={false}>
              活動方針
            </HeadlessLink>
            <HeadlessLink href="/contact" className={menuClass("contact")} defaultHover={false}>
              お問い合わせ
            </HeadlessLink>

          </div>

          <HeadlessButton id="header_toggle" className={isSpMenuOpen ? "active " : " "} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HeadlessButton>
        </div>
      </header>



      <SpMenu toggleMenu={toggleMenu} isSpMenuOpen={isSpMenuOpen} />
    </>
  )
}
