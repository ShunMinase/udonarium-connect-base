import { useAtom } from "jotai";
import { lenisAtom, lenisEnabledAtom } from "@/app/_jotai/GlobalAtom";
import { useCallback } from "react";
import type Lenis from "lenis";
import { qs } from "@/app/_modules/qs";

export interface LenisScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  onComplete?: () => void;
}

// フォールバック用のスクロール関数
const nativeScrollTo = (target: number | string | HTMLElement, options?: LenisScrollOptions) => {
  if (typeof target === "number") {
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
    return;
  }

  // 要素を取得
  let element: HTMLElement | null = null;
  if (typeof target === "string") {
    element = qs(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  }

  if (!element) return;

  // 要素の位置を計算してスクロール
  const rect = element.getBoundingClientRect();
  const targetPosition = rect.top + window.scrollY;
  window.scrollTo({
    top: targetPosition - (options?.offset || 0),
    behavior: "smooth",
  });
};

export const useLenis = () => {
  const [lenis, setLenis] = useAtom(lenisAtom);
  const [isEnabled, setIsEnabled] = useAtom(lenisEnabledAtom);

  // lenisインスタンスを設定
  const setLenisInstance = useCallback(
    (instance: Lenis | null) => {
      setLenis(instance);
    },
    [setLenis]
  );

  // lenisを停止
  const stopLenis = useCallback(() => {
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
      setIsEnabled(false);
    }
  }, [lenis, setIsEnabled]);

  // lenisを開始
  const startLenis = useCallback(() => {
    if (lenis && typeof lenis.start === "function") {
      lenis.start();
      setIsEnabled(true);
    }
  }, [lenis, setIsEnabled]);

  // lenisの有効無効を切り替え
  const toggleLenis = useCallback(() => {
    if (isEnabled) {
      stopLenis();
    } else {
      startLenis();
    }
  }, [isEnabled, stopLenis, startLenis]);

  // 基本的なlenis scrollTo関数
  const lenisScrollTo = useCallback(
    (target: number | string | HTMLElement, options?: LenisScrollOptions) => {
      // Lenisが利用できない場合はフォールバック
      if (!lenis) {
        console.warn("Lenis instance not available. Falling back to native scroll.");
        nativeScrollTo(target, options);
        return;
      }

      // Lenisを使用してスクロール
      lenis.scrollTo(target, {
        offset: 0 || options?.offset,
        duration: 1.5,
        easing: options?.easing,
        immediate: options?.immediate || false,
        onComplete: options?.onComplete,
      });
    },
    [lenis]
  );

  // data-scroll-target属性指定でのscrollTo
  const scrollToScrollTarget = useCallback(
    (targetName: string, options?: LenisScrollOptions) => {
      const opt = { ...options };
      if (targetName === "fanart_area") {
        opt.offset = -250; // fanart_areaセクション用のオフセット調整
      }
      lenisScrollTo(`[data-scroll-target="${targetName}"]`, opt);
    },
    [lenisScrollTo]
  );

  // lenisの位置情報を更新（CMSコンテンツ読み込み後など）
  const resizeLenis = useCallback(() => {
    if (lenis && typeof lenis.resize === "function") {
      lenis.resize();
    }
  }, [lenis]);

  return {
    lenis,
    isEnabled,
    setLenisInstance,
    stopLenis,
    startLenis,
    toggleLenis,
    lenisScrollTo,
    scrollToScrollTarget,
    resizeLenis,
  };
};
