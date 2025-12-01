import HeadlessLink from "@/app/_components/ui/HeadlessLink";
import Image from "next/image";
import { Game } from "@/app/_types/game";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <HeadlessLink
      href={`/games/${game.id}`}
      className="block bg-[var(--color-card-background)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-card-border)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* 画像 */}
      {/* TODO 画像の縦横比調整したい、16:9にするのか、OGPサイズにするのか、要検討 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-background-secondary)]">
        <Image
          src={game.imageUrl}
          alt={game.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {game.isNew && (
          <div className="absolute top-2 left-2 bg-[var(--color-brand-pink)] text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </div>
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-[var(--color-primitive-neutral-900)] mb-2 line-clamp-1 group-hover:text-[var(--color-brand-orange)] transition-colors">
          {game.title}
        </h3>
        <p className="text-sm text-[var(--color-primitive-neutral-600)] line-clamp-2 mb-3">
          {game.description}
        </p>

        {/* メタ情報 */}
        <div className="flex items-center gap-4 text-xs text-[var(--color-primitive-neutral-500)]">
          <div className="flex items-center gap-1">
            <span className="material-icons text-base">people</span>
            <span>
              {game.playerCount.min}〜{game.playerCount.max}人
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-base">schedule</span>
            <span>
              {game.playTime.min}〜{game.playTime.max}分
            </span>
          </div>
        </div>

        {/* ジャンル */}
        <div className="flex flex-wrap gap-1 mt-3">
          {game.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="text-xs px-2 py-1 rounded-full bg-[var(--color-primitive-orange-50)] text-[var(--color-brand-orange)] font-medium"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </HeadlessLink>
  );
}
