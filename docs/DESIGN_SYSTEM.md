# デザインシステム

このドキュメントは、サイト全体で使用するデザインシステムを定義します。

---

## 🎨 カラーパレット

### ブランドカラー（ユドナリウムコネクト）

**Primary（プライマリー）: ウドナリウムオレンジ**

```css
--primary-50: #fff7ed; /* 最も明るい */
--primary-100: #ffedd5;
--primary-200: #fed7aa;
--primary-300: #fdc078;
--primary-400: #fca855;
--primary-500: #ff9966; /* メイン - ロゴカラー */
--primary-600: #f97316; /* ホバー */
--primary-700: #ea580c;
--primary-800: #c2410c;
--primary-900: #9a3412; /* 最も暗い */
```

**用途:**

- プライマリボタン
- リンク
- アクセント要素
- ブランド要素

---

**Accent（アクセント）: ウドナリウムピンク**

```css
--accent-50: #fdf2f8;
--accent-100: #fce7f3;
--accent-200: #fbcfe8;
--accent-300: #f9a8d4;
--accent-400: #f472b6;
--accent-500: #e9527e; /* メイン - ロゴカラー */
--accent-600: #db2777; /* ホバー */
--accent-700: #be185d;
--accent-800: #9f1239;
--accent-900: #831843;
```

**用途:**

- CTA（Call To Action）
- 強調要素
- ピックアップセクション
- インタラクティブ要素

---

**Gradient（グラデーション）: ブランドグラデーション**

```css
--gradient-primary: linear-gradient(135deg, #ff9966 0%, #e9527e 100%);
--gradient-subtle: linear-gradient(135deg, #fff7ed 0%, #fdf2f8 100%);
```

**用途:**

- ヒーローセクション背景
- 見出しテキスト（控えめに）
- カードヘッダー（オプション）
- 装飾的アクセント

---

### ニュートラルカラー

**Neutral（グレー）**

```css
--neutral-50: #fafafa; /* 背景 */
--neutral-100: #f5f5f5; /* カード背景 */
--neutral-200: #e5e5e5; /* ボーダー */
--neutral-300: #d4d4d4;
--neutral-400: #a3a3a3; /* プレースホルダー */
--neutral-500: #737373; /* 補助テキスト */
--neutral-600: #525252;
--neutral-700: #404040; /* 本文 */
--neutral-800: #262626;
--neutral-900: #171717; /* 見出し */
```

---

### セマンティックカラー

**Success（成功）**

```css
--success-50: #f0fdf4;
--success-500: #22c55e; /* メイン */
--success-600: #16a34a;
--success-700: #15803d;
```

**Warning（警告）**

```css
--warning-50: #fefce8;
--warning-500: #eab308; /* メイン */
--warning-600: #ca8a04;
--warning-700: #a16207;
```

**Error（エラー）**

```css
--error-50: #fef2f2;
--error-500: #ef4444; /* メイン */
--error-600: #dc2626;
--error-700: #b91c1c;
```

**Info（情報）**

```css
--info-50: #f0f9ff;
--info-500: #0ea5e9; /* メイン */
--info-600: #0284c7;
--info-700: #0369a1;
```

---

### ジャンル別カラー（Material Design 準拠）

**戦略ゲーム**

```css
--genre-strategy: #2196f3; /* Material Blue */
```

**パーティーゲーム**

```css
--genre-party: #ffc107; /* Material Amber */
```

**協力ゲーム**

```css
--genre-coop: #4caf50; /* Material Green */
```

**カードゲーム**

```css
--genre-card: #f44336; /* Material Red */
```

**推理ゲーム**

```css
--genre-mystery: #9c27b0; /* Material Purple */
```

**ファミリーゲーム**

```css
--genre-family: #e91e63; /* Material Pink */
```

**その他**

```css
--genre-other: #607d8b; /* Material Blue Grey */
```

---

## 🔤 タイポグラフィ

### フォントファミリー

**日本語 + 英語（Material Design 準拠）**

```css
--font-primary: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Helvetica Neue", sans-serif;
```

- Material Design の推奨フォント
- システムフォントフォールバックでパフォーマンス向上
- シンプルで読みやすい

**代替案: ユドナリウムコネクトに合わせた丸ゴシック**

```css
--font-primary: "M PLUS Rounded 1c", "Noto Sans JP", sans-serif;
```

- 丸みを帯びた親しみやすいフォント
- ロゴの雰囲気に合う
- Google Fonts で利用可能（無料）

**推奨: M PLUS Rounded 1c**

- ブランドの温かみと合致
- Material Design のシンプルさも保持
- ウェイト: 400 (Regular), 500 (Medium), 700 (Bold)

**等幅フォント（コード用、管理画面用）**

```css
--font-mono: "Roboto Mono", "Consolas", "Monaco", monospace;
```

---

### フォントサイズ

**スケール（1.25 倍）**

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px - 本文 */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
```

### フォントウェイト

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### 行間

```css
--leading-tight: 1.25;
--leading-normal: 1.5; /* 本文 */
--leading-relaxed: 1.75;
--leading-loose: 2;
```

### レターケース

```css
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
```

---

### タイポグラフィスタイル定義

**H1 - ページタイトル**

```css
font-size: var(--text-5xl); /* 48px */
font-weight: var(--font-bold);
line-height: var(--leading-tight);
color: var(--neutral-900);
```

**H2 - セクションタイトル**

```css
font-size: var(--text-3xl); /* 30px */
font-weight: var(--font-semibold);
line-height: var(--leading-tight);
color: var(--neutral-800);
```

**H3 - サブセクション**

```css
font-size: var(--text-2xl); /* 24px */
font-weight: var(--font-semibold);
line-height: var(--leading-normal);
color: var(--neutral-800);
```

**H4 - カードタイトル**

```css
font-size: var(--text-xl); /* 20px */
font-weight: var(--font-medium);
line-height: var(--leading-normal);
color: var(--neutral-700);
```

**Body - 本文**

```css
font-size: var(--text-base); /* 16px */
font-weight: var(--font-normal);
line-height: var(--leading-relaxed);
color: var(--neutral-700);
```

**Small - 補助テキスト**

```css
font-size: var(--text-sm); /* 14px */
font-weight: var(--font-normal);
line-height: var(--leading-normal);
color: var(--neutral-500);
```

**Label - ラベル・タグ**

```css
font-size: var(--text-xs); /* 12px */
font-weight: var(--font-medium);
line-height: var(--leading-tight);
text-transform: uppercase;
letter-spacing: var(--tracking-wide);
```

---

## 📐 スペーシング

**8px ベースのスケール**

```css
--space-0: 0;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
```

---

## 🔲 ボーダー・角丸

### ボーダー幅

```css
--border-0: 0;
--border-1: 1px;
--border-2: 2px;
--border-4: 4px;
```

### 角丸（Material Design + ユドナリウムの柔らかさ）

```css
--rounded-none: 0;
--rounded-sm: 0.25rem; /* 4px - 小要素 */
--rounded-md: 0.5rem; /* 8px - 画像、小カード */
--rounded-lg: 0.75rem; /* 12px - カード、ボタン（推奨） */
--rounded-xl: 1rem; /* 16px - 大カード */
--rounded-2xl: 1.5rem; /* 24px - 特別な要素 */
--rounded-full: 9999px; /* 完全な円 - タグ、アバター */
```

**推奨使用:**

- カード: `12px` (--rounded-lg) - 柔らかさとシンプルさのバランス
- ボタン: `12px` (--rounded-lg) - Material Design より少し丸く
- 画像: `8px` (--rounded-md) - 統一感
- タグ: `9999px` (--rounded-full) - ピル形状

---

## 🌑 シャドウ（Material Design 準拠）

**Elevation（立体感）**
Material Design の elevation システムを採用。控えめで機能的な影。

```css
/* Material Design Elevation */
--elevation-0: none;
--elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* カード（安静時） */
--elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* カード（ホバー） */
--elevation-3: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); /* 浮き上がった要素 */
--elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); /* モーダル */
--elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); /* 最大 */
```

**内側シャドウ（控えめに使用）**

```css
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.06);
```

**推奨使用:**

- カード（通常）: elevation-1
- カード（ホバー）: elevation-2
- ドロップダウン: elevation-2
- モーダル: elevation-4

---

## ⏱️ トランジション

### デュレーション

```css
--duration-fast: 150ms; /* ホバー */
--duration-normal: 300ms; /* デフォルト */
--duration-slow: 500ms; /* スクロール */
```

### イージング

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1); /* おすすめ */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* デフォルト */
```

---

## 📏 レイアウト

### 最大幅

```css
--max-w-sm: 640px;
--max-w-md: 768px;
--max-w-lg: 1024px;
--max-w-xl: 1280px; /* コンテナ */
--max-w-2xl: 1536px;
```

### コンテナ

```css
--container-padding: var(--space-6); /* 24px */
--container-max-width: var(--max-w-xl);
```

### グリッド

```css
--grid-cols-1: repeat(1, minmax(0, 1fr));
--grid-cols-2: repeat(2, minmax(0, 1fr));
--grid-cols-3: repeat(3, minmax(0, 1fr));
--grid-cols-4: repeat(4, minmax(0, 1fr));
--grid-gap: var(--space-6);
```

---

## 🎨 使用例

### ボタンスタイル（Material Design 準拠）

**プライマリボタン（Contained Button）**

```css
.btn-primary {
  background: var(--gradient-primary); /* ブランドグラデーション */
  color: white;
  padding: 10px 24px; /* Material Design: 36px高さ推奨 */
  border-radius: var(--rounded-lg); /* 12px - 少し丸く */
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  box-shadow: var(--elevation-1);
  transition: all var(--duration-fast) var(--ease-out);
  border: none;
  min-height: 36px;
}

.btn-primary:hover {
  box-shadow: var(--elevation-2);
  transform: translateY(-1px);
}

.btn-primary:active {
  box-shadow: var(--elevation-1);
  transform: translateY(0);
}
```

**セカンダリボタン（Outlined Button）**

```css
.btn-secondary {
  background-color: transparent;
  color: var(--primary-500);
  border: 1px solid var(--primary-500);
  padding: 10px 24px;
  border-radius: var(--rounded-lg);
  font-weight: var(--font-medium);
  min-height: 36px;
  transition: all var(--duration-fast) var(--ease-out);
}

.btn-secondary:hover {
  background-color: var(--primary-50);
}
```

**テキストボタン（Text Button）**

```css
.btn-text {
  background-color: transparent;
  color: var(--primary-500);
  padding: 8px 16px;
  border-radius: var(--rounded-lg);
  border: none;
  font-weight: var(--font-medium);
  transition: background-color var(--duration-fast) var(--ease-out);
}

.btn-text:hover {
  background-color: var(--primary-50);
}
```

### カードスタイル（Material Card）

```css
.card {
  background-color: white;
  border-radius: var(--rounded-lg); /* 12px */
  box-shadow: var(--elevation-1);
  padding: var(--space-4);
  transition: all var(--duration-normal) var(--ease-out);
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--elevation-2);
  transform: translateY(-2px);
}

/* カード画像 */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--rounded-md); /* 8px */
}
```

### バッジスタイル（Chip）

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 4px 12px;
  border-radius: var(--rounded-full); /* ピル形状 */
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  background-color: var(--primary-100);
  color: var(--primary-700);
  height: 24px; /* Material Design推奨 */
}

/* ジャンル別バッジ */
.badge-strategy {
  background-color: #e3f2fd; /* Material Blue 50 */
  color: #1976d2; /* Material Blue 700 */
}
```

---

## 📱 レスポンシブブレークポイント

```css
/* Tailwind CSS スタイル */
--breakpoint-sm: 640px; /* モバイル横 */
--breakpoint-md: 768px; /* タブレット */
--breakpoint-lg: 1024px; /* ラップトップ */
--breakpoint-xl: 1280px; /* デスクトップ */
--breakpoint-2xl: 1536px; /* 大画面 */
```

### 使用例

```css
/* モバイル */
.grid {
  grid-template-columns: var(--grid-cols-1);
}

/* タブレット以上 */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: var(--grid-cols-2);
  }
}

/* ラップトップ以上 */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: var(--grid-cols-3);
  }
}
```

---

## 🎯 実装方法

### CSS Variables（推奨）

```css
:root {
  /* カラー */
  --primary-500: #3b82f6;
  --primary-600: #2563eb;

  /* タイポグラフィ */
  --text-base: 1rem;
  --font-normal: 400;

  /* スペーシング */
  --space-4: 1rem;
  --space-6: 1.5rem;
}
```

### Tailwind CSS 設定

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          // ...
        },
        accent: {
          500: "#f97316",
          // ...
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
};
```

---

## 🎯 デザイン原則（Material Design 準拠）

### 1. Material（マテリアル感）

- カードとエレベーションで階層を表現
- 影は控えめに、機能的に使用
- 物理的な動きをアニメーションで表現

### 2. Bold, Graphic, Intentional（大胆で意図的）

- ブランドカラーを明確に使用
- 余白を十分に確保
- 視覚階層を明確に

### 3. Motion Provides Meaning（意味のあるモーション）

- ユーザーの操作にフィードバック
- 過度なアニメーションは避ける
- トランジションは 0.2-0.3 秒

---

## ✅ チェックリスト

Phase 1（モックアップ）で実装すべき項目:

- [ ] ブランドカラーを CSS 変数で定義
  - [ ] オレンジ (#ff9966)
  - [ ] ピンク (#e9527e)
  - [ ] グラデーション
- [ ] Material Design カラーをジャンル別に定義
- [ ] フォント読み込み（Google Fonts: M PLUS Rounded 1c）
- [ ] タイポグラフィスタイル定義
- [ ] Material Design Elevation（影）システム
- [ ] ボタンコンポーネント（3 種類）
  - [ ] Contained Button（プライマリ）
  - [ ] Outlined Button（セカンダリ）
  - [ ] Text Button
- [ ] カードコンポーネント（Material Card）
- [ ] バッジコンポーネント（Chip）
- [ ] レスポンシブブレークポイント設定
- [ ] 12px 角丸の統一

---

## 📚 参考資料

### Material Design 公式

- [Material Design 3](https://m3.material.io/)
- [Material Design Color System](https://m3.material.io/styles/color/overview)
- [Material Design Elevation](https://m3.material.io/styles/elevation/overview)

### 実装

- Tailwind CSS の Material Design 対応
- Material UI（参考）
- シンプルな CSS 変数での実装

このデザインシステムに基づいて、ユドナリウムコネクトのブランドを尊重しつつ、Material Design 的なシンプルで機能的な UI を構築していきます。
