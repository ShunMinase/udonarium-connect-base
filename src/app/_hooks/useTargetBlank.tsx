import { qsAll } from "@/app/_modules/qs";
import { useEffect } from "react";

export function useTargetBlank(article: any) {
  useEffect(() => {
    if (!article) return;
    const selector: string = ".c__article_body a"
    setTimeout(() => {
      const anchors = qsAll(selector);
      for (const anchor of anchors) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    }, 500);
    return () => {
    }
  }, [article]);
};