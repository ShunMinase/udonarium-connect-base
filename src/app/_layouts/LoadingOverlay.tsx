"use client";
import { useEffect } from 'react';
import React from 'react';
import { gsap } from "gsap";
import { allowScroll, preventScroll } from '../_modules/screen';
// import { getCookieValue } from '../_modules/projectModules';
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation';

type Props = {
  // children: ReactNode
}

export default function LoadingOverlay(props: Props) {

  // useEffectが2回実行されるとアニメーションの挙動がおかしくなるためその対策用のstate
  // const [loadingPlayed, setLoadingPlayed] = useState<boolean>(false);
  const pathname = usePathname(); // 訪問直後はcurrentPageが取得できないためpathnameを取得

  // ページの読み込み時にスクロール位置をリセットする関数
  const resetScrollPosition = () => {
    window.scrollTo(0, 0);
  };


  useEffect(() => {

    // ページの読み込み時にスクロール位置をリセット
    resetScrollPosition();

    // setLoadingPlayed(true);
    // console.log("loadingPlayed", loadingPlayed);

    // if (loadingPlayed) return;

    // console.log("getCookieValue('VISITED')", Cookies.get('VISITED'));
    // console.log("currentPage", currentPage);
    // console.log("pathname", pathname);


    const tl = gsap.timeline();


    preventScroll()

    // 初回でない、もしくはホーム以外であればローディングアニメーションをスキップ
    if (Cookies.get('VISITED') === 'true' || pathname !== "/") {

      tl.to(`.loading_overlay`, {
        opacity: 0,
        // ease: "power4.out",
        duration: 1,
        pointerEvents: "none",
        overwrite: true,
      }, "-=0.0");

      tl.call(allowScroll)



    } else {



      tl.set(`.loading_overlay`, {
        opacity: 1,
      });

      tl.fromTo(`.loading_overlay .claw`, {
        opacity: 0,
        x: -400 * 0.33 * -1, // 移動距離y20にtan(17°)をかける
        y: -400,
        scaleY: 0,
        skewX: -17,
      }, {
        duration: 1.8,
        x: 0,
        y: 0,
        scaleY: 1,
        skewX: -17,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          each: 0.2, // 遅延させる時間
          from: 'start' // 開始位置の指定 start, end, center, edges, random
        },
      }, "<");

      tl.fromTo(`.claw_wrapper`, {
        scale: 1.5,
      }, {
        duration: 1.6,
        scale: 0.65,
        // ease: "power4.out",
      }, "<");

      // tl.to(`.claw_wrapper`, {
      //   duration: 0.3,
      //   scale: 0.49,
      //   // ease: "power4.out",
      // }, "-=0.8");

      tl.fromTo(`.claw_wrapper`, {
        opacity: 1,
        scale: 0.65,
      }, {
        opacity: 0,
        duration: 3,
        scale: 50,
        ease: "power2.out",
      }, "-=0.3");

      tl.fromTo(`.loading_overlay`, {
        opacity: 1,
      }, {
        opacity: 0,
        ease: "power4.out",
        duration: 1,
        pointerEvents: "none",
      }, "<");

      tl.call(allowScroll)

      setTimeout(() => {
        // cookieをセット
        // 初回にhome以外にアクセスした場合はcookieをセットしないようにしたいのでこの位置に書く
        // useeffectが2回走る前にこれをセットするとアニメーションの分岐に影響しタイムラインがおかしくなるので、useeffectが2回走る時間を稼いでからセットする
        // document.cookie = "VISITED=TRUE; expires=7"; // 7日間有効
        Cookies.set('VISITED', "true", { expires: 7 }); // 7日間有効
      }, 5000);
    }



    // console.log("setLoadingPlayed");

    return () => {
      tl.kill();
      allowScroll()
    }
  }, [])


  useEffect(() => {
    // setLoadingPlayed(true);
  }, [])


  return (
    <>
      <div className={`loading_overlay`}>
        <div className="claw_wrapper">
          <span className="claw first"></span>
          <span className="claw second"></span>
          <span className="claw third"></span>
        </div>
      </div>
    </>
  );

}