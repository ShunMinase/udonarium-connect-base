import HeadlessLink from "@/app/_components/ui/HeadlessLink";
import {
  UDONARIUM_CONNECT_URL,
  DISCORD_URL,
  DEVELOPER_TWITTER_URL,
  DEVELOPER_WEBSITE_URL,
  SITE_TITLE,
} from "@/app/_config/Constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-background-secondary)] border-t border-[var(--color-card-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* サイト情報 */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primitive-neutral-900)] mb-4">
              {SITE_TITLE}
            </h3>
            <p className="text-sm text-[var(--color-primitive-neutral-600)] leading-relaxed">
              ユドナリウムコネクト対応のボードゲーム一覧サイト。
              お気に入りのボードゲームを見つけて、オンラインで楽しもう。
            </p>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primitive-neutral-900)] mb-4">
              リンク
            </h3>
            <ul className="space-y-2">
              <li>
                <HeadlessLink
                  href="/"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors"
                >
                  ホーム
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="/games"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors"
                >
                  ゲーム一覧
                </HeadlessLink>
              </li>
            </ul>
          </div>

          {/* 外部リンク */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primitive-neutral-900)] mb-4">
              外部リンク
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={UDONARIUM_CONNECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors inline-flex items-center"
                >
                  ユドナリウムコネクト公式
                  <span className="ml-1">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors inline-flex items-center"
                >
                  {/* TODO このへんの表記変えたい */}
                  Discord
                  <span className="ml-1">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors inline-flex items-center"
                >
                  {/* TODO このへんの表記変えたい */}
                  開発者 Twitter
                  <span className="ml-1">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primitive-neutral-600)] hover:text-[var(--color-brand-orange)] transition-colors inline-flex items-center"
                >
                  {/* TODO このへんの表記変えたい */}
                  開発者サイト
                  <span className="ml-1">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-[var(--color-card-border)]">
          <p className="text-center text-sm text-[var(--color-primitive-neutral-500)]">
            © {currentYear} <HeadlessLink href={DEVELOPER_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="underline">RYOZEN inc.</HeadlessLink> All rights reserved.
          </p>
          {/* TODO ユドコネとユドコネベース、両方のコピーライトをのせる */}
        </div>
      </div>
    </footer>
  );
}
