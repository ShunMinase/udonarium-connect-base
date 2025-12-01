import { useCallback, useEffect } from 'react'
// import { useAtom } from "jotai"
// import { YTApiAtom } from "../atom/GlobalAtom"
import { qsAll } from '@/app/_modules/qs';

export function useYTIframe(isLoading: boolean) {


  useEffect(() => {
    if (isLoading) return;

    setTimeout(() => {


      // https://www.youtube.com/embed/ から始まるURLを持つaタグを取得


      const youtubeLinks = qsAll("a[href^='https://www.youtube.com/embed/']");
      for (const yt of youtubeLinks) {
        // ytの下にiframeを作成
        const iframe = document.createElement('iframe');
        iframe.src = yt.href;
        iframe.title = "YouTube video player";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        yt.insertAdjacentElement("afterend", iframe);

        // ytを削除
        yt.remove();
      }
    }, 500);

  }, [isLoading]);
};