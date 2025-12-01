# サイトマップと URL 構造

このドキュメントは、サイトの全体構造と URL 設計を定義します。

---

## サイトマップ（モックアップフェーズ）

```
ユドナリウムコネクト対応ゲーム一覧
│
├─ トップページ (/)
│  ├─ ヒーローセクション
│  ├─ ピックアップゲーム
│  ├─ 新着ゲーム
│  ├─ カテゴリー別おすすめ
│  └─ CTAセクション（Discord誘導）
│
├─ ゲーム一覧 (/games)
│  ├─ ゲームカード表示
│  ├─ 検索バー（UI のみ）
│  ├─ フィルター（UI のみ）
│  └─ ページネーション（UI のみ）
│
├─ ゲーム詳細 (/games/[id])
│  ├─ ゲーム基本情報
│  ├─ 詳細説明
│  ├─ 画像ギャラリー
│  ├─ 購入リンク
│  └─ 関連ゲーム
│
├─ About (/about) - オプション
│  ├─ サイトについて
│  ├─ ユドナリウムコネクトとは
│  └─ 使い方ガイド
│
└─ お問い合わせ (/contact) - 将来的
```

---

## URL 構造設計

### 基本方針

- **シンプル**: わかりやすく短い URL
- **RESTful**: リソース指向の設計
- **SEO フレンドリー**: キーワードを含む
- **階層的**: 論理的な階層構造

### URL パターン

#### トップページ

```
/
```

- **目的**: サイトのエントリーポイント
- **タイトル**: ユドナリウムコネクト対応ゲーム一覧 - オンラインボードゲームを探そう

#### ゲーム一覧

```
/games
```

- **目的**: 全ゲームの一覧表示
- **タイトル**: 対応ゲーム一覧 | ユドナリウムコネクト

**クエリパラメータ（将来的）:**

```
/games?genre=strategy          # ジャンルフィルター
/games?players=2-4             # プレイ人数フィルター
/games?duration=30-60          # プレイ時間フィルター
/games?search=カタン           # キーワード検索
/games?page=2                  # ページネーション
/games?sort=newest             # ソート
```

#### ゲーム詳細

```
/games/[slug]
```

- **例**: `/games/catan`, `/games/splendor`
- **目的**: 個別ゲームの詳細情報
- **タイトル**: [ゲーム名] - ゲーム詳細 | ユドナリウムコネクト

**slug の命名規則:**

- 英数字とハイフンのみ
- 小文字
- 例: `catan`, `ticket-to-ride`, `azul`

#### カテゴリー別一覧（将来的）

```
/games/category/[category]
```

- **例**: `/games/category/strategy`, `/games/category/party`
- **目的**: カテゴリー別のゲーム一覧

#### ニュース一覧（将来的）

```
/news
```

- **目的**: 新着情報・アップデート情報
- **タイトル**: ニュース | ユドナリウムコネクト対応ゲーム一覧

#### ニュース詳細（将来的）

```
/news/[slug]
```

- **例**: `/news/2025-12-new-games`
- **目的**: 個別ニュース記事

#### About

```
/about
```

- **目的**: サイトとユドナリウムコネクトの説明

#### お問い合わせ（将来的）

```
/contact
```

- **目的**: お問い合わせフォーム

---

## ファイル構造（Next.js App Router）

```
src/app/
├── page.tsx                    # トップページ (/)
├── layout.tsx                  # 共通レイアウト
├── globals.css                 # グローバルスタイル
│
├── games/
│   ├── page.tsx                # ゲーム一覧 (/games)
│   ├── [slug]/
│   │   └── page.tsx            # ゲーム詳細 (/games/[slug])
│   └── category/
│       └── [category]/
│           └── page.tsx        # カテゴリー別一覧
│
├── news/                       # 将来的
│   ├── page.tsx                # ニュース一覧 (/news)
│   └── [slug]/
│       └── page.tsx            # ニュース詳細 (/news/[slug])
│
├── about/
│   └── page.tsx                # About (/about)
│
└── contact/                    # 将来的
    └── page.tsx                # お問い合わせ (/contact)
```

---

## ナビゲーション構造

### プライマリナビゲーション（ヘッダー）

1. **ホーム** → `/`
2. **ゲーム一覧** → `/games`
3. **About** → `/about`
4. **Discord** → 外部リンク

### フッターナビゲーション

**サイト情報:**

- About
- お問い合わせ（将来的）
- プライバシーポリシー（将来的）

**リンク:**

- ユドナリウムコネクト公式
- Discord
- Twitter/X（あれば）

**カテゴリー（将来的）:**

- 戦略ゲーム
- パーティーゲーム
- 協力ゲーム
- etc.

---

## パンくずリスト

### ゲーム詳細ページ

```
ホーム > ゲーム一覧 > [ゲーム名]
```

### カテゴリー別一覧（将来的）

```
ホーム > ゲーム一覧 > [カテゴリー名]
```

### ニュース詳細（将来的）

```
ホーム > ニュース > [記事タイトル]
```

---

## リダイレクト・エラーページ

### 404 Not Found

```
/404
```

- カスタム 404 ページ
- おすすめゲームへの誘導
- 検索ボックス

### 500 Server Error

```
/500
```

- カスタムエラーページ
- リトライボタン

---

## メタデータ設計

### トップページ

```typescript
{
  title: 'ユドナリウムコネクト対応ゲーム一覧 - オンラインボードゲームを探そう',
  description: 'ユドナリウムコネクトで遊べるボードゲームの一覧。プレイ人数や時間で検索して、あなたにぴったりのゲームを見つけよう。',
  keywords: 'ユドナリウムコネクト,ボードゲーム,オンライン,TRPG,ゲーム一覧'
}
```

### ゲーム一覧

```typescript
{
  title: '対応ゲーム一覧 | ユドナリウムコネクト',
  description: 'ユドナリウムコネクトで遊べる全ゲームの一覧。ジャンルやプレイ人数で絞り込んで検索できます。'
}
```

### ゲーム詳細

```typescript
{
  title: '[ゲーム名] - ゲーム詳細 | ユドナリウムコネクト',
  description: '[ゲームの簡単な説明]。プレイ人数: [人数]、プレイ時間: [時間]',
  openGraph: {
    images: ['[ゲーム画像URL]']
  }
}
```

---

## サイトマップ（本番リリース後）

追加される主要ページ:

```
ユドナリウムコネクト対応ゲーム一覧
│
├─ 既存ページ...
│
├─ ニュース (/news)
│  └─ ニュース詳細 (/news/[slug])
│
├─ カテゴリー別 (/games/category/[category])
│  ├─ 戦略ゲーム
│  ├─ パーティーゲーム
│  ├─ 協力ゲーム
│  └─ その他
│
├─ お問い合わせ (/contact)
│
└─ その他
   ├─ プライバシーポリシー (/privacy)
   ├─ 利用規約 (/terms)
   └─ サイトマップ (/sitemap)
```

---

## SEO 対策

### sitemap.xml（自動生成）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/games</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 各ゲームページ -->
  <url>
    <loc>https://example.com/games/catan</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

---

## まとめ

このサイトマップと URL 構造により:

- ✅ ユーザーが直感的にナビゲートできる
- ✅ SEO に最適化されている
- ✅ 将来の拡張に対応しやすい
- ✅ Next.js App Router の規約に準拠
