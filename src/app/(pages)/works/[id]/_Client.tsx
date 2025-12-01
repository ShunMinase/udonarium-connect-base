"use client";

// React
import { JSX, useEffect, useLayoutEffect, useState } from 'react';
// Next.js
import Image from 'next/image';

// 内部ライブラリ
import { setDvh, setSvh } from '@/app/_modules/screen'
import useClientFetch from '@/app/_hooks/fetch/useClientFetch';
import { WorkContent, MicroCMSObjectResponse, MicroCMSListResponse } from '@/app/_modules/microcms';
import { initDate } from '@/app/_modules/projectModules';
import PageTitle from '@/app/_components/headings/PageTitle';
import PrimaryHeading from '@/app/_components/headings/PrimaryHeading';
import { qs, qsAll, addClass, removeClass } from '@/app/_modules/qs';
import { useTargetBlank } from '@/app/_hooks/useTargetBlank';
import useInternalServerError from '@/app/_hooks/useInternalServerError';
import useNotFound from '@/app/_hooks/useNotFound';
import { useTwitterEmbbedWidget } from '@/app/_hooks/useTwitterEmbbedWidget';
import { addStalkerHoverEvent, removeStalkerHoverEvent } from '@/app/_components/ui/MouseStalker';
import HeadlessLink from '@/app/_components/ui/HeadlessLink';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import { useAtom } from 'jotai';
import { commonAnimationObserver } from '@/app/_modules/ISObserver';
import { getParam } from '@/app/_modules/url';


type Props = {
  id: string;
}

export default function Client({ id }: Props) {

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("works_show")
  }, [])

  // draftKeyを取得
  const draftKey = getParam("draftKey");

  // 作品詳細を取得
  const { contents: work, isLoading, errorInfo } = useClientFetch<MicroCMSObjectResponse<WorkContent>>({
    endpoint: 'works',
    contentId: id,
    queries: draftKey ? { draftKey } : undefined,
    revalidate: !!draftKey,
  });

  useTargetBlank(work);
  useTwitterEmbbedWidget(work);  // twitterの埋め込みを動かす
  useNotFound(errorInfo);             // 記事が見つからなかったら404コンポーネントを表示
  useInternalServerError(errorInfo);  // サーバーエラーが発生したら500コンポーネントを表

  // アニメーション用

  useEffect(() => {
    if (isLoading) return;
    const observer = commonAnimationObserver();
    return () => {
      observer?.disconnect();
    };
  }, [isLoading]);


  /*=======================================
    記事内リンクに対してのマウスストーカーの設定
  =======================================*/
  // aタグに対してホバーの反応と外部リンクで開く設定を追加
  useEffect(() => {
    if (isLoading) return;
    const selector: string = ".c__article_body a"
    setTimeout(() => {
      addStalkerHoverEvent(selector);
    }, 500);
    return () => {
      removeStalkerHoverEvent(selector);
    }
  }, [isLoading]);


  // iframeと重なったらマウスストーカーを非表示にする
  useEffect(() => {
    let stalker: HTMLElement | null = null;
    let iframes: Array<HTMLElement> = [];
    setTimeout(() => {
      stalker = qs("#mouse_stalker");
      iframes = qsAll("iframe");
      for (const elm of iframes) {
        // Lenisのスクロール防止属性を追加
        elm.setAttribute("data-lenis-prevent", "true");

        elm.addEventListener('mouseover', function () {
          addClass(stalker, "disabled");
        });
        elm.addEventListener('mouseout', function () {
          removeClass(stalker, "disabled");
        });
      }
    }, 1000);
    return () => {
      for (const elm of iframes) {
        elm.removeEventListener('mouseover', function () {
          addClass(stalker, "disabled");
        });
        elm.removeEventListener('mouseout', function () {
          removeClass(stalker, "disabled");
        });
      }
    }
  }, []);

  // ローディング状態の表示
  if (isLoading) {
    return (
      <main className="p__works_show l__content_width_m">
        {/* <div className="loading-container">
          <p>読み込み中...</p>
          <div className="c__loader"></div>
        </div> */}
      </main>
    );
  }


  if (!work) {
    return null;
  }




  const renderCategories = (categories: WorkContent['category']): JSX.Element => {
    if (!categories) return <></>
    return (
      <>
        {categories.map((cat, index) => (
          <span key={cat.id || index}>#{cat.name}</span>
        ))}
      </>
    )
  }



  // YouTubeのURLから動画IDを抽出する関数
  const extractYouTubeId = (url: string): string | null => {
    try {
      const urlObj = new URL(url);

      // youtube.com/watch?v=xxxxx の形式
      if (urlObj.hostname.includes('youtube.com')) {
        return urlObj.searchParams.get('v');
      }

      // youtu.be/xxxxx の形式
      if (urlObj.hostname.includes('youtu.be')) {
        return urlObj.pathname.slice(1);
      }

      return null;
    } catch {
      return null;
    }
  };







  return (
    <>

      <main className="p__works_show">

        <article className="article_container c__js_fade_delay">

          <div className="article_head">

            <PrimaryHeading>制作実績</PrimaryHeading>
            <div className="article_meta space-y-2 ">

              <p className="text-sm js__delay_child">
                {initDate(work.publishDate)}
              </p>

              {/* クライアント名 */}
              {work.clientName && (
                <p className="text-lg leading-[1.50] js__delay_child delay1">{work.clientName}</p>
              )}

              <h1 className="article_title text-2xl mt-2 leading-[1.36] font-bold js__delay_child delay2">{work.title}</h1>

              <div className="article_info flex flex-wrap gap-2 mt-4 text-[0.8em]">

                <p className="categories flex gap-2  mr-14 js__delay_child delay3">
                  {renderCategories(work.category)}
                </p>

              </div>


            </div>

          </div>


          <div className="article_thumbnail mt-[20px] js__delay_child delay4">

            {/* サムネイル動画がある場合はYouTube埋め込みを表示 */}
            {work.thumbnailMovieUrl && (() => {
              const videoId = extractYouTubeId(work.thumbnailMovieUrl);
              return videoId ? (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen

                  />
                </div>
              ) : null;
            })()}

            {!work.thumbnailMovieUrl && work.thumbnailImage && (
              <Image
                src={work.thumbnailImage.url}
                alt={work.title}
                width={1920}
                height={1080}
              />
            )}

          </div>


          {work.content && (
            <div className="c__article_body c__js_fade">
              <div className="article_body_inner">
                <div dangerouslySetInnerHTML={{ __html: work.content }} />
              </div>
            </div>
          )}

          {work.credit && (
            <div className="article_bottom c__article_body c__js_fade">
              <div className="article_bottom_inner ">
                <div dangerouslySetInnerHTML={{ __html: work.credit.replace(/\n/g, '<br>') }} className='' />
              </div>
            </div>
          )}




        </article>

        <HeadlessLink href='/#works' className='c__button_primary mt-33 mx-auto'>
          <span className="text">Back</span>
        </HeadlessLink>

        <div id="twitter_widget_wrapper"></div>


      </main>
    </>
  );
}