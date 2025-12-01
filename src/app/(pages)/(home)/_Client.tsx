"use client";

// React
import { useEffect, useLayoutEffect } from 'react';
// Next.js
import Image from 'next/image';

// 内部ライブラリ
import { setDvh, setSvh } from '@/app/_modules/screen'
import { commonAnimationObserver } from '@/app/_modules/ISObserver'
// コンポーネント
import YoutubeAutoPlayer from '@/app/_components/videos/YoutubeAutoPlayer';

import useClientFetch from '@/app/_hooks/fetch/useClientFetch';
import { MicroCMSObjectResponse, ProfileContent } from '@/app/_modules/microcms';

import HeadlessLink from '@/app/_components/ui/HeadlessLink';
import PrimaryHeading from '@/app/_components/headings/PrimaryHeading';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import { useAtom } from 'jotai';
import { useLenis } from '@/app/_hooks/useLenis';


// 型定義
type Props = {
}


export default function Client(props: Props) {

  const lenis = useLenis();

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("home")
  }, []);

  // 初期化処理
  useEffect(() => {
    // 別ページから戻ってきた際FV用にvhを再設定
    setDvh();
    setSvh();

    // アニメーション用observer
    const observer = commonAnimationObserver();

    return () => {
      observer?.disconnect();
    };
  }, []);


{}

  // プロフィール情報を取得（オブジェクト型のエンドポイントを想定）
  const { contents: profile, isLoading: aboutIsLoading, errorInfo: aboutErrorInfo } = useClientFetch<MicroCMSObjectResponse<ProfileContent>>({
    endpoint: 'about',
  });


  return (
    <>
      <main id="p__home">
      </main >
    </>
  );
}