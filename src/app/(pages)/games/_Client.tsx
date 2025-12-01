"use client";

import { useState, useMemo } from "react";
import { MOCK_GAMES } from "@/app/_config/mockGames";
import GameCard from "@/app/_components/GameCard";
import Dropdown from "@/app/_components/ui/Dropdown";
import type { Genre } from "@/app/_types/game";

// TODO MicroCMSからデータを取得するように変更する
const GENRES: Genre[] = ["戦略", "協力", "パーティー", "推理", "カードゲーム", "ダイス", "その他"];

export default function Client() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | "all">("all");
  const [playerCount, setPlayerCount] = useState<string>("all");
  const [playTime, setPlayTime] = useState<string>("all");

  // フィルタリング
  const filteredGames = useMemo(() => {
    return MOCK_GAMES.filter((game) => {
      // ジャンルフィルター
      if (selectedGenre !== "all" && !game.genres.includes(selectedGenre)) {
        return false;
      }

      // プレイ人数フィルター
      if (playerCount !== "all") {
        const count = parseInt(playerCount);
        if (game.playerCount.min > count || game.playerCount.max < count) {
          return false;
        }
      }

      // プレイ時間フィルター
      if (playTime !== "all") {
        const time = parseInt(playTime);
        if (game.playTime.min > time || game.playTime.max < time) {
          return false;
        }
      }

      return true;
    });
  }, [selectedGenre, playerCount, playTime]);

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">ゲーム一覧</h1>
          <p className="text-lg opacity-90">
            ユドナリウムコネクトで遊べるボードゲーム {MOCK_GAMES.length}件
          </p>
        </div>
      </div>

      {/* フィルターセクション */}
      <div className="bg-[var(--color-background-secondary)] border-b border-[var(--color-card-border)] sticky top-16 z-40 shadow-[var(--elevation-1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* ジャンルフィルター */}
            <div className="flex-1">
              <Dropdown
                label="ジャンル"
                value={selectedGenre}
                onChange={(value) => setSelectedGenre(value as Genre | "all")}
                options={[
                  { value: "all", label: "すべて" },
                  ...GENRES.map((genre) => ({ value: genre, label: genre }))
                ]}
                placeholder="ジャンルを選択"
              />
            </div>

            {/* プレイ人数フィルター */}
            <div className="flex-1">
              <Dropdown
                label="プレイ人数"
                value={playerCount}
                onChange={(value) => setPlayerCount(value)}
                options={[
                  { value: "all", label: "すべて" },
                  { value: "2", label: "2人" },
                  { value: "3", label: "3人" },
                  { value: "4", label: "4人" },
                  { value: "5", label: "5人" },
                  { value: "6", label: "6人以上" }
                ]}
                placeholder="人数を選択"
              />
            </div>

            {/* プレイ時間フィルター */}
            <div className="flex-1">
              <Dropdown
                label="プレイ時間"
                value={playTime}
                onChange={(value) => setPlayTime(value)}
                options={[
                  { value: "all", label: "すべて" },
                  { value: "30", label: "〜30分" },
                  { value: "60", label: "〜60分" },
                  { value: "90", label: "〜90分" },
                  { value: "120", label: "〜120分" },
                  { value: "180", label: "120分以上" }
                ]}
                placeholder="時間を選択"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ゲームリスト */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 結果表示 */}
        <div className="mb-6">
          <p className="text-[var(--color-primitive-neutral-600)]">
            {filteredGames.length}件のゲームが見つかりました
          </p>
        </div>

        {/* ゲームカードグリッド */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--color-primitive-neutral-500)] text-lg">
              条件に一致するゲームが見つかりませんでした
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
