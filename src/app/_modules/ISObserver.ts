import { qs, qsAll } from "./qs";

/*=======================================
  IntersectionObserver系
=======================================*/

// IntersectionObserver共通関数
export function generateISObserver(
  targetSelector: string | string[],
  options: any,
  activeFunc: any,
  inactiveFunc: any = () => {}
): IntersectionObserver | null {
  function callback(entries: any) {
    for (const elm of entries) {
      if (elm.isIntersecting) {
        activeFunc(elm);
      } else {
        inactiveFunc(elm);
      }
    }
  }

  const observer = new IntersectionObserver(callback, options);

  if (Array.isArray(targetSelector)) {
    // セレクタが配列の場合は複数の要素を監視する
    const targets = qsAll(targetSelector.join(", "));

    // 空の場合は何もしない
    if (targets.length === 0) {
      return null;
    }

    // 空でなければ監視する
    for (const target of targets) {
      observer.observe(target);
    }
  } else {
    // セレクタが単体の場合は1つの要素を監視する
    const target = qs(targetSelector);
    // 空の場合は何もしない
    if (!target) {
      return null;
    }
    observer.observe(target);
  }
  return observer;
}

export function commonAnimationObserver(
  selector: string | string[] = ""
): IntersectionObserver | null {
  const targetSelectors = selector
    ? selector
    : [
        ".c__js_fade",
        ".c__js_horizontal_fade",
        ".c__js_fade_delay",
        ".c__js_horizontal_fade_delay",
        ".js__observe",
      ];
  // ネガティブマージンにすると当たり判定を狭められて、
  // 普通のマージンにすると当たり判定を画面外まで広げられる
  const options = {
    rootMargin: "0% 0% -18% 0%", // ビューポートの真ん中ぐらい
  };
  function activeFunc(elm: any) {
    elm.target.classList.add("active");
  }
  return generateISObserver(targetSelectors, options, activeFunc);
}

export function commonAnimationRepeatsObserver(
  selector: string | string[] = ""
): IntersectionObserver | null {
  const targetSelectors = selector
    ? selector
    : [".js__observe_repeat", ".c__js_fade_repeat"];
  const options = {
    rootMargin: "0% 0% -20% 0%", // ビューポートの真ん中ぐらい
  };
  function activeFunc(elm: any) {
    elm.target.classList.add("active");
  }
  function inactiveFunc(elm: any) {
    elm.target.classList.remove("active");
  }
  return generateISObserver(targetSelectors, options, activeFunc, inactiveFunc);
}
