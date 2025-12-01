'use client';

import { useEffect, useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import styles from './StarryBackground.module.scss';

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number; // アニメーション時間（秒）
  delay: number; // アニメーション遅延（秒）
  opacity: number; // 透明度（0-1）
};

type ShootingStar = {
  id: number;
  x: number;
  y: number;
  length: number;
  duration: number;
  opacity: number;
};

// 設定定数
const STAR_COUNT = 30; // 星の数

const STAR_SIZE_MIN = 0.5; // 星の最小サイズ（px）
const STAR_SIZE_MAX = 3; // 星の最大サイズ（px）

const STAR_DURATION_MIN = 2.0; // 星の点滅アニメーション時間の最小値（秒）
const STAR_DURATION_MAX = 4.5; // 星の点滅アニメーション時間の最大値（秒）

const STAR_OPACITY_MIN = 0.4; // 星の最小透明度（0-1）
const STAR_OPACITY_MAX = 0.9; // 星の最大透明度（0-1）

const STAR_COLOR = 'rgb(240, 210, 160)'; // 星の色

const SHOOTING_STAR_INTERVAL_MIN = 3000; // 流れ星の出現間隔の最小値（ミリ秒）
const SHOOTING_STAR_INTERVAL_MAX = 6000; // 流れ星の出現間隔の最大値（ミリ秒）

const SHOOTING_STAR_DURATION_MIN = 1.2; // 流れ星のアニメーション時間の最小値（秒）
const SHOOTING_STAR_DURATION_MAX = 2.5; // 流れ星のアニメーション時間の最大値（秒）

const SHOOTING_STAR_OPACITY_MIN = 0.2; // 流れ星の最小透明度（0-1）
const SHOOTING_STAR_OPACITY_MAX = 0.7; // 流れ星の最大透明度（0-1）

const HIDDEN_PAGES: string[] = ["contact", "contact_confirm", "contact_submitted", "terms"]; // 星空を非表示にするページ名の配列
const PAGE_Z_INDEX_MAP: Record<string, number> = {
  about: 2,
}; // 特定ページでのz-index設定（ページ名: z-index値）
const DEFAULT_Z_INDEX = 0; // デフォルトのz-index

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPageName = useAtomValue(currentPageAtom);
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const shootingStarIdRef = useRef(0);

  // ページが非表示リストに含まれているかチェック
  const isHidden = HIDDEN_PAGES.includes(currentPageName);

  // 現在のページに応じたz-indexを取得
  const zIndex = PAGE_Z_INDEX_MAP[currentPageName] ?? DEFAULT_Z_INDEX;

  // 初期化: 星を生成
  useEffect(() => {
    const initialStars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      initialStars.push({
        id: i,
        x: Math.random() * 100, // パーセント
        y: Math.random() * 100, // パーセント
        size: Math.random() * (STAR_SIZE_MAX - STAR_SIZE_MIN) + STAR_SIZE_MIN,
        duration: Math.random() * (STAR_DURATION_MAX - STAR_DURATION_MIN) + STAR_DURATION_MIN,
        delay: Math.random() * 1, // 0-1秒
        opacity: Math.random() * (STAR_OPACITY_MAX - STAR_OPACITY_MIN) + STAR_OPACITY_MIN,
      });
    }
    setStars(initialStars);
  }, []);

  // 流れ星を定期的に生成
  useEffect(() => {
    if (isHidden) return;

    let timeoutId: NodeJS.Timeout;

    const scheduleNextShootingStar = () => {
      // ランダムな間隔を計算
      const interval = Math.random() * (SHOOTING_STAR_INTERVAL_MAX - SHOOTING_STAR_INTERVAL_MIN) + SHOOTING_STAR_INTERVAL_MIN;

      timeoutId = setTimeout(() => {
        if (Math.random() > 0.7) {
          const newStar: ShootingStar = {
            id: shootingStarIdRef.current++,
            x: Math.random() * 50 + 50, // 50-100%（右側）
            y: Math.random() * 30, // 0-30%（上部）
            length: Math.random() * 80 + 40,
            duration: Math.random() * (SHOOTING_STAR_DURATION_MAX - SHOOTING_STAR_DURATION_MIN) + SHOOTING_STAR_DURATION_MIN,
            opacity: Math.random() * (SHOOTING_STAR_OPACITY_MAX - SHOOTING_STAR_OPACITY_MIN) + SHOOTING_STAR_OPACITY_MIN,
          };

          setShootingStars((prev) => [...prev, newStar]);

          // アニメーション終了後に削除
          setTimeout(() => {
            setShootingStars((prev) => prev.filter((s) => s.id !== newStar.id));
          }, newStar.duration * 1000 + 100);
        }

        // 次の流れ星をスケジュール
        scheduleNextShootingStar();
      }, interval);
    };

    // 初回実行
    scheduleNextShootingStar();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHidden]);

  return (
    <div
      ref={containerRef}
      className={`${styles.starry_background} ${isHidden ? styles.hidden : ''}`}
      style={{ zIndex }}
    >
      {/* 通常の星 */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star_wrapper}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        >
          <div
            className={styles.star}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: STAR_COLOR,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        </div>
      ))}

      {/* 流れ星 */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className={styles.shooting_star_wrapper}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        >
          <div
            className={styles.shooting_star}
            style={{
              width: `${star.length}px`,
              animationDuration: `${star.duration}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
