# 開発再開ガイド

このドキュメントは、開発を再開する際にすぐに状況を把握できるようにまとめたものです。

---

## 📍 現在の状況（2025 年 12 月 2 日時点）

### プロジェクトの状態

- **Phase**: Phase 2（基盤構築）完了 ✅
- **次のステップ**: ユドナリウムコネクト開発者への許可申請
- **開発中断理由**: 許可取得のため一時停止

### 完成した機能

#### 1. ページ実装（完成度: 100%）

- **トップページ** (`/`)

  - ヒーローセクション（グラデーション背景 + CTA）
  - ピックアップゲーム（3 件表示）
  - 新作ゲーム（4 件表示）
  - CTA セクション（ゲーム一覧への誘導）

- **ゲーム一覧ページ** (`/games`)

  - グリッドレイアウト（レスポンシブ対応）
  - 3 種類のフィルター（Dropdown コンポーネント）
    - ジャンル
    - プレイ人数
    - プレイ時間
  - フィルター結果の即時反映

- **ゲーム詳細ページ** (`/games/[slug]`)
  - パンくずリスト
  - ゲーム画像 + NEW バッジ
  - 2 カラムレイアウト
  - ゲーム情報テーブル（人数、時間、難易度、発売年、出版社、デザイナー）
  - 購入リンク（Amazon、駿河屋）
  - ゲーム説明文

#### 2. コンポーネント実装

- **レイアウト**: Header, Footer
- **カード**: GameCard（ホバー効果、NEW バッジ付き）
- **UI コンポーネント**:
  - HeadlessLink（ページ遷移、スムーススクロール、外部リンク対応）
  - SolidPrimaryButton（グラデーションボタン）
  - SolidSecondaryButton（白/オレンジベース切り替え）
  - OutlineButton（透明背景 + ボーダー）
  - TextButton（テキストのみ）
  - Dropdown（Floating UI、キーボードナビゲーション対応）
  - ToggleSwitch（グラデーション対応）

#### 3. デザインシステム（完成度: 100%）

- **ブランドカラー**: オレンジ #ff9966 → ピンク #e9527e
- **Material Design 準拠**: 統一感のある UI
- **colorScheme 機能**: 白背景/オレンジ背景で自動切り替え
- **Tailwind CSS v4**: デザイントークン定義済み（`tailwind.scss`）

#### 4. データ構造

- **モックゲームデータ**: 20 件（`src/app/_config/mockGames.ts`）
- **Game 型定義**: 完全な型安全性
- **ヘルパー関数**:
  - `getPickupGames()` - ピックアップゲーム取得
  - `getNewGames()` - 新作ゲーム取得
  - `getGameById()` - ID/slug 指定取得
  - `filterGames()` - ジャンル・人数・時間フィルター

---

## 🎯 許可取得後の次のステップ（Phase 3）

### 優先度: 高

1. **キーワード検索機能**

   - 検索 UI 実装（トップページ + ゲーム一覧ページ）
   - タイトル・説明文での全文検索
   - 検索結果のハイライト

2. **URL 状態管理**

   - フィルター状態を URL クエリパラメータに反映
   - ブラウザバック/フォワード対応
   - 共有可能なフィルター URL

3. **ソート機能**

   - 新着順、人気順、名前順
   - ソート UI の実装

4. **ページネーション**
   - 1 ページあたり 12 件表示
   - ページ番号 UI
   - 無限スクロール検討

### 優先度: 中

5. **About ページ（ユドナリウムコネクト紹介）**

   - ページ作成（`/about`）
   - ユドナリウムコネクトとは？セクション
   - ユドコネベースについてセクション
   - よくある質問（FAQ）
   - 公式リンク・関連リソース
   - ヘッダーナビゲーションに追加

6. **microCMS 連携**

   - アカウント作成
   - コンテンツモデル設計
   - API 統合
   - モックデータからの移行

7. **アニメーション**

   - ページトランジション強化
   - スクロールアニメーション
   - カードホバー効果

8. **SEO 対策**
   - メタタグ最適化
   - OGP 画像生成
   - 構造化データ（JSON-LD）

---

## 📂 重要なファイルパス

### ドキュメント

- `docs/TASK_LIST.md` - タスク一覧（チェックリスト形式）
- `docs/PROJECT_INFO.md` - サイト基本情報、外部リンク
- `docs/DESIGN_SYSTEM.md` - デザインシステム詳細
- `docs/UI_COMPONENT_GUIDE.md` - コンポーネント使用ガイド

### コア実装

- `src/app/_config/mockGames.ts` - モックデータ（20 件）
- `src/app/_config/Constants.ts` - サイト定数
- `src/app/_components/GameCard.tsx` - ゲームカード
- `src/app/_components/Header.tsx` - ヘッダー
- `src/app/_components/Footer.tsx` - フッター

### UI コンポーネント

- `src/app/_components/ui/styledButton/` - ボタン系コンポーネント
  - `SolidPrimaryButton.tsx`
  - `SolidSecondaryButton.tsx`
  - `OutlineButton.tsx`
  - `TextButton.tsx`
  - `styles.ts` - 共通スタイル定義
- `src/app/_components/ui/Dropdown.tsx` - ドロップダウン
- `src/app/_components/ui/ToggleSwitch.tsx` - トグルスイッチ
- `src/app/_components/ui/HeadlessLink.tsx` - リンク

### ページ

- `src/app/(pages)/(home)/_Client.tsx` - トップページ
- `src/app/(pages)/games/_Client.tsx` - ゲーム一覧
- `src/app/(pages)/games/[slug]/_Client.tsx` - ゲーム詳細
- `src/app/(pages)/examples/` - コンポーネントサンプル（開発用）

### スタイル

- `src/assets/styles/tailwind.scss` - Tailwind CSS v4 設定

---

## 🔧 開発環境セットアップ

### 1. 依存関係インストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

→ http://localhost:3001 で起動

### 3. 確認すべきページ

- http://localhost:3001/ （トップページ）
- http://localhost:3001/games （ゲーム一覧）
- http://localhost:3001/games/catan （ゲーム詳細サンプル）
- http://localhost:3001/examples （UI コンポーネント一覧）

---

## 🎨 デザインシステムの使い方

### ボタンコンポーネント

#### 1. SolidPrimaryButton（最重要アクション）

```tsx
import SolidPrimary from '@/app/_components/ui/styledButton/SolidPrimaryButton';

<SolidPrimary as="button" onClick={handleClick}>
  送信する
</SolidPrimary>

<SolidPrimary as="link" href="/games">
  ゲーム一覧へ
</SolidPrimary>
```

#### 2. SolidSecondaryButton（セカンダリアクション）

```tsx
import SolidSecondary from '@/app/_components/ui/styledButton/SolidSecondaryButton';

// 白背景用（デフォルト）
<SolidSecondary as="button">キャンセル</SolidSecondary>

// グラデーション背景用
<SolidSecondary as="button" colorScheme="orange">
  キャンセル
</SolidSecondary>
```

#### 3. colorScheme 機能

- `colorScheme="white"`: 白背景ページ用（デフォルト）
- `colorScheme="orange"`: グラデーション/オレンジ背景用

詳細: `docs/UI_COMPONENT_GUIDE.md`

---

## 🚨 注意事項

### 1. 内部リンクは必ず HeadlessLink を使用

```tsx
// ❌NG
<a href="/games">ゲーム一覧</a>

// ✅OK
<HeadlessLink href="/games">ゲーム一覧</HeadlessLink>
```

### 2. 外部リンクは通常の a タグで OK

```tsx
<a
  href="https://udonarium-connect.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  ユドコネ公式
</a>
```

### 3. フィルター機能の実装パターン

```tsx
// Dropdownコンポーネントを使用
<Dropdown
  label="ジャンル"
  value={selectedGenre}
  onChange={(value) => setSelectedGenre(value)}
  options={[...]}
/>
```

---

## 📊 データ構造

### Game 型定義

```typescript
interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  genre: string[];
  image: string;
  minPlayers: number;
  maxPlayers: number;
  minPlaytime: number;
  maxPlaytime: number;
  difficulty: number;
  releaseYear: number;
  publisher: string;
  designer: string;
  purchaseLinks: {
    amazon?: string;
    surugaya?: string;
  };
  isNew?: boolean;
  isPickup?: boolean;
}
```

### モックデータの位置

`src/app/_config/mockGames.ts`

---

## 🔄 Git 管理

### リポジトリ

- GitHub: https://github.com/ShunMinase/udonarium-connect-base
- ブランチ: `main`

### コミット済み

- 2025 年 12 月 2 日時点の全実装

---

## 📞 連絡先・リンク

### ユドナリウムコネクト

- 公式サイト: https://udonarium-connect.com/
- Discord: https://t.co/9FZ2lmLbth
- 開発者: 藍田あん (@Lantern_wf) https://x.com/Lantern_wf

### ユドコネベース開発

- ブラストゲームズ (@BlastGames_bg) https://x.com/BlastGames_bg
- RYOZEN - Creative Studio: https://ryozen-sc.com/

---

## ✅ 開発再開時のチェックリスト

### 環境確認

- [ ] `npm install` 実行
- [ ] `npm run dev` でローカルサーバー起動
- [ ] http://localhost:3001 で表示確認

### ドキュメント確認

- [ ] `docs/TASK_LIST.md` で完了タスク確認
- [ ] `docs/PROJECT_INFO.md` でサイト情報確認
- [ ] `docs/UI_COMPONENT_GUIDE.md` でコンポーネント仕様確認

### 許可取得状況確認

- [ ] ユドナリウムコネクト開発者からの返答確認
- [ ] 許可内容の確認（使用可能な範囲、注意事項等）

### Phase 3 開始準備

- [ ] `docs/TASK_LIST.md` の Phase 3 タスクを確認
- [ ] 優先度の高い機能から着手計画を立てる
- [ ] microCMS 連携の準備（アカウント、API 設計）

---

**開発を中断した日**: 2025 年 12 月 2 日  
**次回開始時の最初の作業**: 許可取得状況の確認 → Phase 3 タスクの着手
