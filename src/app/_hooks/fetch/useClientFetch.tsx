"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchFromMicroCMS } from "./useFetch";
import { MicroCMSParams, MicroCMSErrorInfo } from '@/app/_modules/microcms';

/**
 * microCMS専用のクライアントサイドfetchフック
 * ローディング状況、エラーの有無のStateを管理
 */
export default function useClientFetch<T = any>(params: MicroCMSParams, delayMs: number = 0) {
  const [contents, setContents] = useState<T | null>();
  const [isLoading, setLoading] = useState(true);
  const [errorInfo, setErrorInfo] = useState<MicroCMSErrorInfo | null>(null);

  const clientFetch = async () => {
    try {
      setLoading(true);
      setErrorInfo(null);

      const { endpoint, contentId, queries } = params;

      if (delayMs > 0) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }

      const result = await fetchFromMicroCMS<T>({ endpoint, contentId, queries }, true);

      if (!result.success) {
        setErrorInfo(result.errorInfo);
        return;
      }

      setContents(result.contents);
    } catch (error) {
      console.error('useClientFetch error:', error);
      setErrorInfo({
        error,
        response: null,
        message: error instanceof Error ? error.message : '不明なエラーが発生しました',
        status: '500',
        statusText: 'Internal Error',
        requestUrl: params.endpoint,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    clientFetch();
  }, [params.endpoint, params.contentId, JSON.stringify(params.queries)]);

  return { contents, isLoading, errorInfo };
};