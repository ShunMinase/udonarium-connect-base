"use client";

// React
import { useEffect, useLayoutEffect, useState } from 'react';
// Next.js
import Image from 'next/image';
import HeadlessLink from '@/app/_components/ui/HeadlessLink';

// 内部ライブラリ
import { qs, qsAll } from "@/app/_modules/qs";
import { setDvh, setSvh } from '@/app/_modules/screen'
import { commonAnimationObserver } from '@/app/_modules/ISObserver'
import useClientFetch from '@/app/_hooks/fetch/useClientFetch';
import { ProfileContent, MicroCMSObjectResponse } from '@/app/_modules/microcms';
import PrimaryHeading from '@/app/_components/headings/PrimaryHeading';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import { useAtom } from 'jotai';

type Props = {}

export default function Client(props: Props) {






  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("about")
  }, [])



  // プロフィール情報を取得（オブジェクト型のエンドポイントを想定）
  const { contents: profile, isLoading, errorInfo } = useClientFetch<MicroCMSObjectResponse<ProfileContent>>({
    endpoint: 'about',
  });


  // const [isMounted, setIsMounted] = useState(false);
  // アニメーション用
  useEffect(() => {
    if (isLoading) return;
    const observer = commonAnimationObserver();
    return () => {
      observer?.disconnect();
    };
  }, [isLoading]);

  // アニメーション用
  useEffect(() => {
    const observer = commonAnimationObserver();
    return () => {
      observer?.disconnect();
    };
  }, []);

  if (isLoading) {
    return (
      <main className="p__about l__content_width_m">
        {/* <div className="loading-container">
          <p>読み込み中...</p>
          <div className="c__loader"></div>
        </div> */}
      </main>
    );
  }

  if (errorInfo) {
    return (
      <main className="p__about l__content_width_m">
        <div className="error-container">
          <p>エラーが発生しました。時間をおいて再度お試しください。</p>
        </div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="p__about l__content_width_m">
        <div className="error-container">
          <p>エラーが発生しました。時間をおいて再度お試しください。</p>
        </div>
      </main>
    );
  }

  return (

    <main className="p__about">


    </main >
  );
}