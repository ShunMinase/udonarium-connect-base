import { addClass, qs, qsAll, removeClass } from '@/app/_modules/qs';
import { useEffect } from 'react';
import gsap from 'gsap';

import { isMobile, isMacOs, isSafari } from 'react-device-detect';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import { useAtom } from 'jotai';


export function addStalkerHoverEvent(selector: string, waitTime: number = 1000): void {
  const addingClass = "stalker_cursor_pointer"

  setTimeout(() => {
    const links = qsAll(selector);
    if (links) {
      const target = qs("#mouse_stalker")
      for (const elm of links) {
        elm.addEventListener('mouseover', function () {
          addClass(target, addingClass);
        });
        elm.addEventListener('mouseout', function () {
          removeClass(target, addingClass);
        });
      }
    }
  }, waitTime);
}
export function removeStalkerHoverEvent(selector: string): void {
  const addingClass = "stalker_cursor_pointer"
  removeClass(qs("#mouse_stalker"), addingClass);
  const links = qsAll(selector);
  if (links) {
    const target = qs("#mouse_stalker")
    for (const elm of links) {
      elm.removeEventListener('mouseover', function () {
        addClass(target, addingClass);
      });
      elm.removeEventListener('mouseout', function () {
        removeClass(target, addingClass);
      });
    }
  }
}

export function activateHoverCursor(): void {
  if (!isMobile) {
    addClass(qs("#mouse_stalker"), "stalker_cursor_pointer");
  }
}
export function deactivateHoverCursor(): void {
  if (!isMobile) {
    removeClass(qs("#mouse_stalker"), "stalker_cursor_pointer");
  }
}


const MouseStalker = () => {
  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)

  useEffect(() => {

    const stalker = qs('#mouse_stalker');

    if (isMacOs && isSafari) {
      addClass(stalker, 'mac_os');
    }

    if (!isMobile) {
      document.addEventListener('mousemove', stalk);
      setTimeout(() => {
        removeClass(stalker, "disabled");
      }, 2000);
    }

    const pos = { x: 0, y: 0 } // カーソル要素の座標
    const mouse = { x: pos.x, y: pos.y } // マウスカーソルの座標
    const speed = 1; // 0.01〜1 数値が大きほど早い
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); // フレームレートによる差分を計算

    // カーソルの座標を設定する
    const cursorSetX = gsap.quickSetter(stalker, "x", "px");
    const cursorSetY = gsap.quickSetter(stalker, "y", "px");

    // マウスカーソル座標を取得する
    function stalk(e: any) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    gsap.ticker.add(function () {
      pos.x += (mouse.x - pos.x)// * dt;
      pos.y += (mouse.y - pos.y)// * dt;
      cursorSetX(pos.x);
      cursorSetY(pos.y);
    });

    return () => {
      document.removeEventListener('mousemove', stalk);
      if (isMacOs && isSafari) {
        removeClass(stalker, 'mac_os');
      }
    }
  }, []);


  useEffect(() => {
    deactivateHoverCursor();
  }, [currentPageName]);


  return (
    <>
      <div id="mouse_stalker" className="disabled" style={{ transform: 'translate(0, 0)' }}>
        {/* <div className="pointer_wrapper">
              <Image src="/img/common/pointer.svg" alt="" width="100" height="100" className="pointer" />
            </div> */}
      </div>
    </>
  );
}
export default MouseStalker;