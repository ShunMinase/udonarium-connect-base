import { useEffect, useId, useRef } from "react";
import clsx from 'clsx';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { splitText } from "@/app/_modules/string";

type Props = {
  children: React.ReactNode
  animation?: boolean
  className?: string
  [key: string]: any;
}

export default function PrimaryHeading(props: Props) {

  const identifier = useId();

  const { className, animation = true, ...rest }: Props = props;
  const children = String(props.children);

  gsap.registerPlugin(ScrollTrigger);


  const headRef = useRef(null);
  // const trigger = animation ? `.${identifier}` : headRef.current;

  useEffect(() => {
    // setLoaded(true);
    if (!animation) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `[data-identifier="${identifier}"]`,
        // markers: true,
        start: '0% 75%',
      }
    })
    tl.fromTo(`[data-identifier="${identifier}"] .title_inner .char`, {
      x: 20,
      // x: 10,
      opacity: 0,
      display: "inline-block"
    }, {
      duration: 1.4,
      y: 0,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      // delay: 0.5,
      stagger: {
        each: 0.08, // 遅延させる時間
        from: 'start' // 開始位置の指定 start, end, center, edges, random
      },
      // overwrite: "auto",
    });

    return () => {
      tl.kill();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);





  return (
    <h2 className={clsx('c__head_primary', className)} data-identifier={identifier} {...rest}>
      <span className="title_inner">
        {splitText(children)}
      </span>
    </h2>
  );
}
