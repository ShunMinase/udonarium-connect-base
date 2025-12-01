"use client";

import HeadlessLink from "@/app/_components/ui/HeadlessLink";
import { SITE_CATCHPHRASE, UDONARIUM_CONNECT_URL } from "@/app/_config/Constants";
import { getPickupGames, getNewGames } from "@/app/_config/mockGames";
import GameCard from "@/app/_components/GameCard";

export default function Client() {
  const pickupGames = getPickupGames();
  const newGames = getNewGames();

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE_CATCHPHRASE}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            ユドナリウムコネクト対応のボードゲーム一覧
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HeadlessLink
              href="/games"
              className="bg-white text-[var(--color-brand-orange)] px-8 py-3 rounded-[var(--radius-md)] font-bold hover:shadow-[var(--elevation-3)] transition-shadow"
            >
              ゲーム一覧を見る
            </HeadlessLink>
            <a
              href={UDONARIUM_CONNECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-[var(--radius-md)] font-bold hover:bg-white hover:text-[var(--color-brand-orange)] transition-colors"
            >
              ユドコネ公式サイト
            </a>
          </div>
        </div>
      </section>

      {/* ピックアップゲーム */}
      {pickupGames.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[var(--color-primitive-neutral-900)]">
                ピックアップ
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pickupGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 新作ゲーム */}
      {newGames.length > 0 && (
        <section className="py-16 bg-[var(--color-background-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[var(--color-primitive-neutral-900)]">
                新作ゲーム
              </h2>
              <HeadlessLink
                href="/games"
                className="text-[var(--color-brand-orange)] hover:text-[var(--color-brand-pink)] font-medium flex items-center gap-1 transition-colors"
              >
                すべて見る
                <span className="material-icons text-xl">arrow_forward</span>
              </HeadlessLink>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newGames.slice(0, 4).map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTAセクション */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primitive-neutral-900)] mb-4">
            もっとゲームを見る
          </h2>
          <p className="text-[var(--color-primitive-neutral-600)] mb-8">
            ユドナリウムコネクトで遊べるボードゲームを多数掲載中
          </p>
          <HeadlessLink
            href="/games"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)] text-white px-8 py-3 rounded-[var(--radius-md)] font-bold hover:shadow-[var(--elevation-3)] transition-shadow"
          >
            ゲーム一覧へ
            <span className="material-icons">arrow_forward</span>
          </HeadlessLink>
        </div>
      </section>
    </div>
  );
}