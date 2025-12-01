"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { notFound } from 'next/navigation'
import { MicroCMSErrorInfo } from "@/app/_modules/microcms";
// 404ページへのリダイレクトを行うカスタムフック
// useClientFetchから返されるisErrorを引数に取る
export default function useNotFound(errorInfo: MicroCMSErrorInfo | null) {
  useEffect(() => {
    if (errorInfo?.status === "404") {
      const path = location.pathname; // アクセスされたURLを取得
      const referrer = document.referrer ? "リダイレクト元: " + document.referrer : "";
      // useSlack({ message: "404エラー", path: path, referrer: referrer });

      notFound()
    }
  }, [errorInfo]);
};