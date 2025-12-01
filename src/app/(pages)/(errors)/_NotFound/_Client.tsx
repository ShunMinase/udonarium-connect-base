"use client";
import HeadlessLink from '@/app/_components/ui/HeadlessLink';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import { useAtom } from 'jotai';

// React
import { useEffect, useLayoutEffect } from 'react';
// Next.js

// 型定義
type Props = {
}

export default function Client(props: Props) {

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("404")
  }, [])
  
  return (
    <>
      <main id="p__notfound" className="">
        <div className="content_inner l__content_width_m">
          <h2 className="c__head_secondary">404 <span className="u__ib">NOT FOUND</span></h2>
          <p className="c__common_text_primary">
            お探しのページが見つかりませんでした。
          </p>
          <div className="button_wrapper">
            <HeadlessLink
              href="/"
              className="c__button_primary back_to_top outline_black"
            >
              <span className="link_name">Top</span>
              <span className="background"></span>
            </HeadlessLink>
          </div>
        </div>
      </main>
    </>
  );
}
