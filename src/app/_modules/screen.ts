import { qs } from "./qs";

export function setDvh(): void {
  //ブラウザ実行時のみ
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--dvh', `${vh}px`)
    }, 500);
  }
}
export function setSvh(): void {
  //ブラウザ実行時のみ
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--svh', `${vh}px`);
    }, 500);
  }
}

// 画面幅をもとに、16:9にするには高さを何ピクセルにすればよいかを計算する
export function get16_9_height(): void {
  if (typeof window !== 'undefined') {
    const w = window.innerWidth;
    const h = w / 16 * 9;
    document.documentElement.style.setProperty('--svh', `${h}px`);
  }
}



export function scrollTo(offset: number): void {
  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
}
export function scrollToSelector(sel: string, offset: number = 100): void {
  const target = qs(sel)
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const targetPosition = rect.top + window.scrollY;
  scrollTo(targetPosition - offset)
}
export function scrollToScrollTarget(targetStr: string, offset: number = 100): void {
  const target = qs(`[data-scroll-target="${targetStr}"]`)
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const targetPosition = rect.top + window.scrollY;
  scrollTo(targetPosition - offset)
}

export function getHeaderHeight(): number {
  const pc_header_selector = "#header .header_l";
  const pcHeaderHeight = qs(pc_header_selector)!.offsetHeight;
  return pcHeaderHeight + 40;
}

// export function loading(selector: string = ""): void {
//   let targets;
//   if (selector) {
//     targets = qsAll(selector);
//   } else {
//     targets = qsAll(".js__load_required");
//   }
//   for (const elm of targets) {
//     removeClass(elm, "loaded");
//     removeClass(elm, "failed");
//   }
// }
// export function loaded(selector: string = ""): void {
//   setTimeout(() => {
//     let targets;
//     if (selector) {
//       targets = qsAll(selector);
//     } else {
//       targets = qsAll(".js__load_required");
//     }
//     for (const elm of targets) {
//       addClass(elm, "loaded");
//     }
//   }, 500);
// }


// スクロール禁止
export function preventScroll() {
  //ブラウザ実行時のみ
  if (typeof window !== 'undefined') {
    document.addEventListener("wheel", preventDef, { passive: false });
    document.addEventListener("touchmove", preventDef, { passive: false });
  };

}

// スクロール禁止解除
export function allowScroll() {
  //ブラウザ実行時のみ
  if (typeof window !== 'undefined') {
    document.removeEventListener("wheel", preventDef);
    document.removeEventListener("touchmove", preventDef);
  }
}

// preventDefault
function preventDef(e: any) {
  e.preventDefault();
}