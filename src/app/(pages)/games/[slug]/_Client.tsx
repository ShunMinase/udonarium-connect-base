"use client";

import Image from "next/image";
import HeadlessLink from "@/app/_components/ui/HeadlessLink";
import { Game } from "@/app/_types/game";

interface ClientProps {
  game: Game;
}

export default function Client({ game }: ClientProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* パンくずリスト */}
      <div className="bg-[var(--color-background-secondary)] border-b border-[var(--color-card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-[var(--color-primitive-neutral-600)]">
            <HeadlessLink href="/" className="hover:text-[var(--color-brand-orange)] transition-colors">
              ホーム
            </HeadlessLink>
            <span>/</span>
            <HeadlessLink href="/games" className="hover:text-[var(--color-brand-orange)] transition-colors">
              ゲーム一覧
            </HeadlessLink>
            <span>/</span>
            <span className="text-[var(--color-primitive-neutral-900)] font-medium">
              {game.title}
            </span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左カラム - 画像 */}
          <div>
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--elevation-3)] bg-[var(--color-background-secondary)]">
              <Image
                src={game.imageUrl}
                alt={game.title}
                fill
                className="object-cover"
                priority
              />
              {game.isNew && (
                <div className="absolute top-4 left-4 bg-[var(--color-brand-pink)] text-white text-sm font-bold px-4 py-2 rounded-full">
                  NEW
                </div>
              )}
            </div>
          </div>

          {/* 右カラム - 詳細情報 */}
          <div>
            {/* タイトル */}
            <h1 className="text-4xl font-bold text-[var(--color-primitive-neutral-900)] mb-2">
              {game.title}
            </h1>
            <p className="text-lg text-[var(--color-primitive-neutral-600)] mb-6">
              {game.titleKana}
            </p>

            {/* ジャンルタグ */}
            <div className="flex flex-wrap gap-2 mb-6">
              {game.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 rounded-full bg-[var(--color-primitive-orange-50)] text-[var(--color-brand-orange)] text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* 説明 */}
            <p className="text-[var(--color-primitive-neutral-700)] leading-relaxed mb-8">
              {game.description}
            </p>

            {/* ゲーム情報 */}
            <div className="bg-[var(--color-background-secondary)] rounded-[var(--radius-lg)] p-6 mb-8">
              <h2 className="text-xl font-bold text-[var(--color-primitive-neutral-900)] mb-4">
                ゲーム情報
              </h2>
              <dl className="space-y-3">
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">people</span>
                    プレイ人数
                  </dt>
                  <dd className="font-medium text-[var(--color-primitive-neutral-900)]">
                    {game.playerCount.min}〜{game.playerCount.max}人
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">schedule</span>
                    プレイ時間
                  </dt>
                  <dd className="font-medium text-[var(--color-primitive-neutral-900)]">
                    {game.playTime.min}〜{game.playTime.max}分
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">bar_chart</span>
                    難易度
                  </dt>
                  <dd className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-icons text-xl ${i < game.difficulty
                            ? "text-[var(--color-brand-orange)]"
                            : "text-[var(--color-primitive-neutral-300)]"
                          }`}
                      >
                        star
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">
                      calendar_today
                    </span>
                    発売年
                  </dt>
                  <dd className="font-medium text-[var(--color-primitive-neutral-900)]">
                    {game.releaseYear}年
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">business</span>
                    出版社
                  </dt>
                  <dd className="font-medium text-[var(--color-primitive-neutral-900)]">
                    {game.publisher}
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-[var(--color-primitive-neutral-600)] min-w-[120px]">
                    <span className="material-icons text-[var(--color-brand-orange)]">person</span>
                    デザイナー
                  </dt>
                  <dd className="font-medium text-[var(--color-primitive-neutral-900)]">
                    {game.designer}
                  </dd>
                </div>
              </dl>
            </div>

            {/* 購入リンク */}
            {game.purchaseLinks.length > 0 && (
              <div className="bg-gradient-to-r from-[var(--color-primitive-orange-50)] to-[var(--color-primitive-pink-50)] rounded-[var(--radius-lg)] p-6">
                <h2 className="text-xl font-bold text-[var(--color-primitive-neutral-900)] mb-4">
                  購入リンク
                </h2>
                <div className="space-y-3">
                  {game.purchaseLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white px-4 py-3 rounded-[var(--radius-md)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-all group"
                    >
                      <span className="font-medium text-[var(--color-primitive-neutral-900)] group-hover:text-[var(--color-brand-orange)] transition-colors">
                        {link.name}
                      </span>
                      <span className="material-icons text-[var(--color-brand-orange)]">
                        open_in_new
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="mt-12 text-center">
          <HeadlessLink
            href="/games"
            className="inline-flex items-center gap-2 text-[var(--color-brand-orange)] hover:text-[var(--color-brand-pink)] font-medium transition-colors"
          >
            <span className="material-icons">arrow_back</span>
            ゲーム一覧に戻る
          </HeadlessLink>
        </div>
      </div>
    </div>
  );
}
