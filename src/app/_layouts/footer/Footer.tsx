// React
import React from 'react';
// Next.js
import Image from 'next/image';

import HeadlessLink from '@/app/_components/ui/HeadlessLink';
import { X_URL, YOUTUBE_URL } from '@/app/_config/Constants';


export default function Footer() {
  return (
    <>
      <footer id="footer" className="">

        <Image
          src="/img/mask_ellipse.svg"
          width={2000}
          height={2000}
          alt=""
          className="footer_elipse"
        />


        <nav className="footer_navigation">

          {/* 左側: ナビゲーションメニュー */}
          <div className="footer_left">
            <nav className="nav" role="navigation" aria-label="フッターナビゲーション">
              <ul>
                <li>
                  <HeadlessLink href="/#works">制作実績</HeadlessLink>
                </li>
                <li>
                  <HeadlessLink href="/about">活動方針</HeadlessLink>
                </li>
                <li>
                  <HeadlessLink href="/contact">お問い合わせ</HeadlessLink>
                </li>
                <li>
                  <HeadlessLink href="/terms">プライバシーポリシー</HeadlessLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* 中央: ロゴ */}
          <div className="footer_center">
            <HeadlessLink href="/" aria-label="yoake creative ホーム">
              <Image
                src="/img/logo_hr.svg"
                alt="yoake creative"
                width={188}
                height={50}
              />
            </HeadlessLink>
          </div>

          {/* 右側: SNSアイコン */}
          <div className="footer_right">
            <div className="footer_sns">
              <HeadlessLink
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="icon"
              >
                <Image
                  src="/img/x_logo_wh.svg"
                  alt="X (Twitter)"
                  width={32}
                  height={32}
                />
              </HeadlessLink>
              <HeadlessLink
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="icon"
              >
                <Image
                  src="/img/youtube_wh.svg"
                  alt="youtube_wh"
                  width={32}
                  height={32}
                />
              </HeadlessLink>
            </div>
          </div>

        </nav>

        {/* コピーライト - 712px以下のみ表示 */}
        <p className="copyright">©︎ yoake creative All Rights Reserved.</p>


      </footer>

      {/* ローダー */}
      <div id="loader_wrap" className="loader_wrap"></div>

    </>
  );
}