'use client';

import { useEffect, useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import { currentPageAtom } from '@/app/_jotai/GlobalAtom';
import styles from './FloatingOrbs.module.scss';

type Orb = {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

// 設定定数
const ORB_COUNT = 4; // 丸の数

const ORB_SIZE_MIN = 200; // 丸の最小サイズ（px）
const ORB_SIZE_MAX = 320; // 丸の最大サイズ（px）

const ORB_SPEED_MIN = 0.6; // 移動速度の最小値
const ORB_SPEED_MAX = 0.9; // 移動速度の最大値

const ORB_OPACITY_MIN = 0.5; // 丸の最小透明度（0-1）
const ORB_OPACITY_MAX = 0.7; // 丸の最大透明度（0-1）

const ORB_BLUR = 110; // ぼかしの強さ（px）
const ORB_COLOR = 'rgb(250, 250, 255)'; // 丸の色
const HIDDEN_PAGES: string[] = ["contact", "contact_confirm", "contact_submitted", "terms"]; // 非表示にするページ名の配列
const PAGE_Z_INDEX_MAP: Record<string, number> = {
  about: 2
}; // 特定ページでのz-index設定
const DEFAULT_Z_INDEX = 0; // デフォルトのz-index

export default function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const windowSizeRef = useRef({ width: 0, height: 0 });
  const currentPageName = useAtomValue(currentPageAtom);
  const [orbs, setOrbs] = useState<Orb[]>([]);

  const isHidden = HIDDEN_PAGES.includes(currentPageName);
  const zIndex = PAGE_Z_INDEX_MAP[currentPageName] ?? DEFAULT_Z_INDEX;

  // Orbの初期化（初回のみ）
  useEffect(() => {
    // 初回のみ画面サイズを取得
    windowSizeRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const initialOrbs: Orb[] = [];
    for (let i = 0; i < ORB_COUNT; i++) {
      const size = Math.random() * (ORB_SIZE_MAX - ORB_SIZE_MIN) + ORB_SIZE_MIN;
      // 画面の中央80%のエリア内でランダムに配置
      const marginX = windowSizeRef.current.width * 0.1;
      const marginY = windowSizeRef.current.height * 0.1;
      initialOrbs.push({
        id: i,
        x: marginX + Math.random() * (windowSizeRef.current.width - marginX * 2),
        y: marginY + Math.random() * (windowSizeRef.current.height - marginY * 2),
        size,
        speedX: (Math.random() - 0.5) * (ORB_SPEED_MAX - ORB_SPEED_MIN) + (Math.random() > 0.5 ? ORB_SPEED_MIN : -ORB_SPEED_MIN),
        speedY: (Math.random() - 0.5) * (ORB_SPEED_MAX - ORB_SPEED_MIN) + (Math.random() > 0.5 ? ORB_SPEED_MIN : -ORB_SPEED_MIN),
        opacity: Math.random() * (ORB_OPACITY_MAX - ORB_OPACITY_MIN) + ORB_OPACITY_MIN,
      });
    }
    orbsRef.current = initialOrbs;
    setOrbs(initialOrbs);
  }, []);

  // アニメーションループ
  useEffect(() => {
    if (isHidden) return;

    const animate = () => {
      orbsRef.current = orbsRef.current.map((orb) => {
        let newX = orb.x + orb.speedX;
        let newY = orb.y + orb.speedY;
        let newSpeedX = orb.speedX;
        let newSpeedY = orb.speedY;

        // 画面端で反転
        const margin = orb.size / 2;
        if (newX < -margin || newX > windowSizeRef.current.width + margin) {
          newSpeedX *= -1;
          newX = Math.max(-margin, Math.min(windowSizeRef.current.width + margin, newX));
        }
        if (newY < -margin || newY > windowSizeRef.current.height + margin) {
          newSpeedY *= -1;
          newY = Math.max(-margin, Math.min(windowSizeRef.current.height + margin, newY));
        }

        return {
          ...orb,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
        };
      });

      setOrbs([...orbsRef.current]);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHidden]);

  return (
    <div
      ref={containerRef}
      className={`${styles.floating_orbs} ${isHidden ? styles.hidden : ''}`}
      style={{ zIndex }}
    >
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={styles.orb}
          style={{
            transform: `translate(${orb.x}px, ${orb.y}px)`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
          }}
        />
      ))}
    </div>
  );
}
