# ユドコネベース (Udonarium Connect Base)

ユドナリウムコネクトで遊べるボードゲームの情報を一元化するサイト

## 📍 プロジェクト状態（2025年12月2日）

### ✅ Phase 2 完了 - モックアップ完成

**完成した機能:**
- トップページ（ヒーロー、ピックアップ、新作ゲーム）
- ゲーム一覧ページ（ジャンル・人数・時間フィルター）
- ゲーム詳細ページ（パンくずリスト、購入リンク）
- ブランドデザインシステム（オレンジ #ff9966 → ピンク #e9527e グラデーション）
- 20件のモックゲームデータ

### 🎯 次のステップ
**ユドナリウムコネクト開発者への許可申請中**
- 許可取得後、Phase 3（検索機能強化、CMS連携）を開始

---

## 🚀 Getting Started

開発サーバーを起動:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 📂 プロジェクト構成

### 主要ページ
- `/` - トップページ
- `/games` - ゲーム一覧
- `/games/[slug]` - ゲーム詳細
- `/examples` - UIコンポーネントサンプル（開発用）

### 重要なディレクトリ
- `src/app/_components/` - 共通コンポーネント
  - `Header.tsx`, `Footer.tsx`, `GameCard.tsx`
  - `ui/` - UIコンポーネント（Button, Dropdown, ToggleSwitch等）
- `src/app/_config/` - 設定・モックデータ
  - `mockGames.ts` - 20件のゲームデータ
  - `Constants.ts` - サイト定数
- `src/assets/styles/` - スタイル
  - `tailwind.scss` - Tailwind CSS v4設定（デザイントークン定義）
- `docs/` - ドキュメント
  - `TASK_LIST.md` - タスク一覧（チェックリスト）
  - `PROJECT_INFO.md` - プロジェクト情報
  - `DESIGN_SYSTEM.md` - デザインシステム
  - `UI_COMPONENT_GUIDE.md` - コンポーネント使用ガイド

### 技術スタック
- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: 独自デザインシステム（Material Design準拠）
- **Deployment**: Vercel

---

## 🎨 デザインシステム

### ブランドカラー
- **グラデーション**: オレンジ #ff9966 → ピンク #e9527e
- **Material Design準拠**: 統一感のあるUI

### ボタンコンポーネント（colorScheme機能）
- **SolidPrimary**: グラデーション背景（最重要アクション）
- **SolidSecondary**: 白/オレンジベース切り替え可能
- **Outline**: 透明背景 + ボーダー
- **Text**: テキストのみ

詳細: `docs/DESIGN_SYSTEM.md`, `docs/UI_COMPONENT_GUIDE.md`

---

## 📋 開発再開時のチェックリスト

### 1. 環境確認
```bash
npm install
npm run dev
```

### 2. 確認すべきページ
- http://localhost:3001/ （トップページ）
- http://localhost:3001/games （ゲーム一覧）
- http://localhost:3001/games/catan （ゲーム詳細サンプル）
- http://localhost:3001/examples （UIコンポーネント一覧）

### 3. 重要なドキュメント
1. `docs/TASK_LIST.md` - 完了タスクと次のステップ
2. `docs/PROJECT_INFO.md` - サイト情報、外部リンク
3. `docs/DESIGN_SYSTEM.md` - デザイン仕様
4. `docs/UI_COMPONENT_GUIDE.md` - コンポーネント使用方法

### 4. 許可取得後の作業（Phase 3）
- キーワード検索機能の実装
- URL状態管理（フィルター連携）
- ソート機能（新着順、人気順）
- ページネーション
- microCMS連携準備

---

## 📞 連絡先

**開発:**
- ブラストゲームズ (@BlastGames_bg)
- RYOZEN - Creative Studio

**ユドナリウムコネクト公式:**
- 藍田あん (@Lantern_wf)
- https://udonarium-connect.com/

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
