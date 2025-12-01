# プロジェクトサマリー - ユドコネベース

**最終更新**: 2025 年 12 月 2 日  
**プロジェクト状態**: Phase 2 完了、許可申請準備完了

---

## 🎯 プロジェクト概要

### サイト名

**ユドコネベース**

### 目的

ユドナリウムコネクトで遊べるボードゲームの情報を一元化し、ユーザーが簡単にゲームを探して購入・プレイできるようにする。

### キャッチコピー

「ユドナリウムコネクトで、次に遊ぶゲームを見つけよう」

### ターゲットユーザー

- ユドナリウムコネクトでボードゲームを遊びたい人
- 新しいボードゲームを探している人
- オンラインボードゲームに興味がある人

---

## ✅ 完成した機能（Phase 2 完了）

### 1. ページ構成

| ページ           | URL             | 実装状況 | 備考                              |
| ---------------- | --------------- | -------- | --------------------------------- |
| トップページ     | `/`             | ✅ 完成  | ヒーロー、ピックアップ、新作、CTA |
| ゲーム一覧       | `/games`        | ✅ 完成  | フィルター機能付き                |
| ゲーム詳細       | `/games/[slug]` | ✅ 完成  | パンくずリスト、購入リンク        |
| コンポーネント例 | `/examples`     | ✅ 完成  | 開発用 UI カタログ                |

### 2. デザインシステム

- **ブランドカラー**: オレンジ #ff9966 → ピンク #e9527e グラデーション
- **デザイン**: Material Design 準拠
- **レスポンシブ**: 対応済み（モバイル、タブレット、デスクトップ）

### 3. UI コンポーネント

| コンポーネント       | 機能                 | colorScheme 対応 |
| -------------------- | -------------------- | ---------------- |
| SolidPrimaryButton   | グラデーションボタン | -                |
| SolidSecondaryButton | セカンダリボタン     | ✅               |
| OutlineButton        | アウトラインボタン   | ✅               |
| TextButton           | テキストボタン       | ✅               |
| Dropdown             | ドロップダウン選択   | ✅               |
| ToggleSwitch         | ON/OFF スイッチ      | ✅               |
| HeadlessLink         | ページ遷移           | -                |
| GameCard             | ゲームカード         | -                |

### 4. データ構造

- **モックゲーム数**: 20 件
- **データ型**: 完全な型定義（TypeScript）
- **フィルター機能**: ジャンル、プレイ人数、プレイ時間

### 5. テクニカルスタック

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel 準備完了

---

## 📊 実装進捗状況

### Phase 1: 企画・設計（完了率: 100%）

- ✅ 要件定義
- ✅ 技術選定
- ✅ 情報設計
- ✅ デザイン設計

### Phase 2: 基盤構築（完了率: 100%）

- ✅ プロジェクト基盤
- ✅ デザインシステム
- ✅ 共通レイアウト
- ✅ モックデータ

### Phase 3: コア機能開発（完了率: 60%）

- ✅ トップページ
- ✅ ゲーム一覧ページ
- ✅ ゲーム詳細ページ
- ✅ 基本フィルター機能
- ⏸️ **About ページ（ユドナリウムコネクト紹介）**（許可後実装・高優先度）
- ⏸️ キーワード検索（許可後実装）
- ⏸️ ソート機能（許可後実装）
- ⏸️ ページネーション（許可後実装）

### Phase 4-8: 未着手

- ⏸️ UX 向上・機能拡張
- ⏸️ 管理機能開発
- ⏸️ テスト・品質保証
- ⏸️ デプロイ・公開準備
- ⏸️ 運用・改善

---

## 🎯 次のアクション

### 1. 許可申請（現在進行中）

**提示先**: ユドナリウムコネクト開発者（藍田あん @Lantern_wf）

**提示内容**:

- モックアップサイト（完成済み）
- サイトの目的と概要
- 使用する素材（ロゴ、リンク等）
- 運営方針

**確認事項**:

- サイト作成の許可
- ユドナリウムコネクトのロゴ・名称使用の可否
- 公式サイトへのリンク掲載の可否
- その他注意事項

### 2. 許可取得後の作業（Phase 3 続き）

1. **About ページ（ユドナリウムコネクト紹介）** - 優先度: 高
   - ユドナリウムコネクトとは？
   - ユドコネベースについて
   - よくある質問（FAQ）
   - 公式リンク・関連リソース
2. **キーワード検索機能** - 優先度: 高
3. **URL 状態管理** - 優先度: 高
4. **ソート機能** - 優先度: 高
5. **ページネーション** - 優先度: 中
6. **microCMS 連携** - 優先度: 中

---

## 📁 重要なファイル一覧

### ドキュメント（docs/）

```
docs/
├── TASK_LIST.md              # タスク一覧（チェックリスト形式）
├── PROJECT_INFO.md            # サイト基本情報
├── DESIGN_SYSTEM.md           # デザインシステム詳細
├── UI_COMPONENT_GUIDE.md      # コンポーネント使用ガイド
├── DEVELOPMENT_RESUME.md      # 開発再開ガイド
└── PROJECT_SUMMARY.md         # このファイル
```

### 設定・データ（src/app/\_config/）

```
src/app/_config/
├── mockGames.ts               # 20件のモックゲームデータ
└── Constants.ts               # サイト定数
```

### コンポーネント（src/app/\_components/）

```
src/app/_components/
├── Header.tsx                 # ヘッダー
├── Footer.tsx                 # フッター
├── GameCard.tsx               # ゲームカード
└── ui/                        # UIコンポーネント
    ├── styledButton/          # ボタン系
    │   ├── SolidPrimaryButton.tsx
    │   ├── SolidSecondaryButton.tsx
    │   ├── OutlineButton.tsx
    │   ├── TextButton.tsx
    │   └── styles.ts          # 共通スタイル定義
    ├── Dropdown.tsx           # ドロップダウン
    ├── ToggleSwitch.tsx       # トグルスイッチ
    └── HeadlessLink.tsx       # リンク
```

### ページ（src/app/(pages)/）

```
src/app/(pages)/
├── (home)/_Client.tsx         # トップページ
├── games/_Client.tsx          # ゲーム一覧
├── games/[slug]/_Client.tsx   # ゲーム詳細
└── examples/                  # コンポーネントサンプル
```

---

## 🎨 デザインシステム詳細

### カラーパレット

```css
/* ブランドカラー */
--color-brand-orange: #ff9966;
--color-brand-pink: #e9527e;
--color-brand-orange-50: rgba(255, 153, 102, 0.1);
--color-brand-gradient-start: #ff9966;
--color-brand-gradient-end: #e9527e;

/* Material Design準拠 */
--color-primitive-neutral-50: #fafafa;
--color-primitive-neutral-100: #f5f5f5;
--color-primitive-neutral-200: #eeeeee;
/* ... 他のカラー定義は tailwind.scss 参照 */
```

### タイポグラフィ

- **フォント**: Noto Sans JP（日本語）、Inter（英数字）
- **サイズ**: Material Design 準拠

### 角丸

- **radius-md**: 12px（統一）

### シャドウ

- **elevation-1**: 軽いシャドウ
- **elevation-2**: 中程度のシャドウ
- **elevation-3**: 強いシャドウ

---

## 🔧 開発コマンド

```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:3001）
npm run dev

# ビルド
npm run build

# 本番環境で起動
npm start

# Lintチェック
npm run lint
```

---

## 📞 外部リンク・連絡先

### ユドナリウムコネクト

- **公式サイト**: https://udonarium-connect.com/
- **Discord**: https://t.co/9FZ2lmLbth
- **開発者**: 藍田あん (@Lantern_wf) - https://x.com/Lantern_wf

### ユドコネベース開発

- **ブラストゲームズ**: @BlastGames_bg - https://x.com/BlastGames_bg
- **RYOZEN - Creative Studio**: https://ryozen-sc.com/

### GitHub

- **リポジトリ**: https://github.com/ShunMinase/udonarium-connect-base
- **ブランチ**: main

---

## 🚀 デプロイ情報

### Vercel 設定（準備済み）

- **プロジェクト**: udonarium-connect-base
- **ブランチ**: main（自動デプロイ設定可能）
- **環境変数**: 現時点ではなし（microCMS 連携時に追加予定）

---

## 📝 メモ・注意事項

### 開発ポリシー

1. **モックアップ優先**: 見た目と UX を完成させる
2. **許可取得**: ユドナリウムコネクト開発者への確認
3. **段階的リリース**: MVP → 機能追加の流れ

### コーディング規約

- **内部リンク**: HeadlessLink 必須
- **外部リンク**: 通常の a タグ + target="\_blank"
- **型定義**: TypeScript 厳格モード
- **コンポーネント**: Client/Server 分離

### デザイン原則

- **Material Design 準拠**: 統一感のある UI
- **ブランドカラー**: オレンジ → ピンクのグラデーション
- **レスポンシブ**: モバイルファースト
- **アクセシビリティ**: WCAG 2.1 AA 準拠目標

---

## ✅ 開発再開前チェックリスト

- [ ] `npm install` で依存関係を更新
- [ ] `npm run dev` でローカルサーバー起動確認
- [ ] http://localhost:3001 でサイト表示確認
- [ ] `docs/TASK_LIST.md` で次のタスク確認
- [ ] 許可取得状況の確認
- [ ] Phase 3 タスクの優先順位決定

---

**プロジェクト開始日**: 2025 年 11 月下旬  
**Phase 2 完了日**: 2025 年 12 月 2 日  
**次回開始予定**: 許可取得後
