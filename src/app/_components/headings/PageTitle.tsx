// "use client";

import { useEffect, useState } from "react";
import { gsap } from 'gsap';
import useTransition from "@/app/_hooks/useTransition";
import { splitText } from "@/app/_modules/string";

interface Props {
  heading_level: number
  // children?: React.ReactNode
  title: string
  description?: React.ReactNode
  // [key: string]: any;
}




export default function PageTitle({ ...props }: Props) {

  const transition = useTransition()

  const [loaded, setLoaded] = useState(false);

  // アニメーション
  useEffect(() => {
    setLoaded(true);
    const tl = gsap.timeline()
    tl.fromTo(".c__page_title .title .char", {
      y: 50,
      // x: 10,
      opacity: 0,
      display: "inline-block"
    }, {
      duration: 0.7,
      y: 0,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      delay: 0.5,
      stagger: {
        each: 0.04, // 遅延させる時間
        from: 'start' // 開始位置の指定 start, end, center, edges, random
      },
      // overwrite: "auto",
    });
    tl.fromTo(".c__page_title .title_slash", {
      opacity: 0,
      x: -70 * 0.33 * -1, // 移動距離y20にtan(17°)をかける
      y: -70,
      scaleY: 0,
      skewX: -17,
    }, {
      duration: 0.5,
      x: 0,
      y: 0,
      scaleY: 1,
      opacity: 1,
      ease: "power4.out",
      // overwrite: "auto",
    }, "-=0.66");
    tl.fromTo(".c__page_title .description span", {
      x: 20,
      opacity: 0,
    }, {
      duration: 0.7,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        each: 0.10, // 遅延させる時間
        from: 'start' // 開始位置の指定 start, end, center, edges, random
      },
      // overwrite: "auto",
    }, "-=0.3");

    // return () => {
    // };
    return () => {
      tl.kill();
    };
  }, []);

  function h1(props: Props) {
    return (
      <h1 className={`c__page_title ${loaded ? "active" : ""}`}>
        {splitText(props.title)}
      </h1>
    );
  }

  function h2(props: Props) {
    return (
      <h2 className={`c__page_title ${loaded ? "active" : ""}`}>
        {splitText(props.title)}
      </h2>
    );
  }

  return (
    <>
      {props.heading_level === 1 && h1(props)}
      {props.heading_level === 2 && h2(props)}
    </>
  );
}
