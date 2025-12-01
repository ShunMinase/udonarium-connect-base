import HeadlessLink from "@/app/_components/ui/HeadlessLink";
import { SITE_TITLE } from "@/app/_config/Constants";

// TODO レスポンシブ対応 SP用のメニューを実装する
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background-primary)] border-b border-[var(--color-card-border)] shadow-[var(--elevation-2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <HeadlessLink href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)] flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
              U
            </div>
            <span className="text-xl font-bold text-[var(--color-primitive-neutral-900)] group-hover:text-[var(--color-brand-orange)] transition-colors">
              {SITE_TITLE}
            </span>
          </HeadlessLink>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-6">
            <HeadlessLink
              href="/"
              className="text-[var(--color-primitive-neutral-700)] hover:text-[var(--color-brand-orange)] transition-colors font-medium"
            >
              ホーム
            </HeadlessLink>
            <HeadlessLink
              href="/games"
              className="text-[var(--color-primitive-neutral-700)] hover:text-[var(--color-brand-orange)] transition-colors font-medium"
            >
              ゲーム一覧
            </HeadlessLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
