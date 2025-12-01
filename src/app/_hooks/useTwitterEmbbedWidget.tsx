// import { Article } from "@/_components/models/creations/Types";
import { qs } from "@/app/_modules/qs";
import { useEffect, useState } from "react";

export function useTwitterEmbbedWidget(article: any) {
  useEffect(() => {
    if (!article) return;
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    // twitterまわりの処理
    const twitter_widget_wrapper = qs("#twitter_widget_wrapper");
    twitter_widget_wrapper?.appendChild(script);
    return () => {
      // twitterまわりのクリーンアップ
      twitter_widget_wrapper?.removeChild(script);
    };
  }, [article]);
};