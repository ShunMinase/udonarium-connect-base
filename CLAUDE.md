# Frontend - 開発ルール・ガイドライン

_Claude AI との協働開発により策定された開発規約_

## 📋 プロジェクト概要

- **プロジェクト名**: Web Frontend
- **技術スタック**: Next.js 15.5.2 (App Router) + React 19.1.1 + TypeScript + Tailwind CSS v4 + Sass 1.79.4 + clsx 2.1.1 + microCMS 3.2.0
- **開発方針**: 型安全性重視、コンポーネント指向、アニメーション重視

## 🎯 基本開発ルール

### 1. コードスタイル

- **言語**: TypeScript 5.x
- **CSS**: Tailwind CSS v4 + Sass (FLOCSS 準拠) + clsx
- **状態管理**: Jotai 2.10.0
- **アニメーション**: GSAP 3.12.5

#### 🚨 重要：コメントアウトの取り扱い

**コメントアウトされたコードは、明示的な指示がない限り削除してはいけません。**

- コメントアウトされたコードには、以下のような重要な意図が含まれている可能性があります：
  - 一時的に無効化しているが、将来的に使用する予定のコード
  - デバッグ用に残している代替実装
  - 過去の実装との比較のために残されているコード
  - 検討中の機能や実装パターン
- コメントアウトされたコードを削除する場合は、必ずユーザーに確認を取ること
- リファクタリング時も、コメントアウトされたコードは保持すること
- 例外：明らかに古い実装で削除が妥当な場合でも、削除する旨を説明し承認を得ること

### 2. ファイル・ディレクトリ構造

```
src/
├── app/
│   ├── layout.tsx                    # ルートレイアウト (Google Analytics, マウスストーカー)
│   ├── not-found.tsx                # 404ページ
│   ├── template.tsx                  # 共通テンプレート
│   ├── (pages)/                      # ページルートグループ
│   │   ├── (home)/                   # ホームページ
│   │   ├── boardgames/              # ボードゲームページ
│   │   ├── about/                  # アバウトページ
│   │   ├── contact/                # コンタクトページ
│   │   ├── _errors/                 # エラーページ群
│   │   └── _terms/                  # 利用規約ページ
│   ├── api/                         # APIルート
│   ├── _atom/                       # Jotaiアトム
│   │   └── GlobalAtom.ts
│   ├── _components/                 # 再利用可能コンポーネント
│   │   ├── ui/                      # UIコンポーネント (Link等)
│   │   ├── headings/               # 見出しコンポーネント (PageTitle, SecondaryHeading等)
│   │   ├── loading/                # ローディングコンポーネント
│   │   ├── contactForms/           # お問い合わせフォーム
│   │   ├── models/                 # DBモデル関連
│   │   ├── svg/                    # SVGコンポーネント
│   │   └── videos/                 # 動画コンポーネント
│   ├── _config/                    # 設定ファイル
│   │   └── Constants.ts            # Google Analytics ID等の定数
│   ├── _hooks/                     # カスタムフック
│   │   ├── fetch/                  # fetchフック (useClientFetch等)
│   │   ├── useCurrentPage.tsx
│   │   ├── useNavigate.tsx
│   │   ├── useNotFound.tsx
│   │   ├── useTargetBlank.tsx
│   │   ├── useTransition.tsx
│   │   ├── useTwitterEmbbedWidget.tsx
│   │   └── useYTIframe.tsx
│   ├── _layouts/                   # レイアウトコンポーネント
│   │   ├── LoadingOverlay.tsx
│   │   ├── TransitionDiv.tsx
│   │   ├── header/
│   │   └── footer/
│   ├── _modules/                   # ユーティリティモジュール
│   │   ├── calc.ts                 # 計算関連
│   │   ├── humbergerMenuUtils.ts   # ハンバーガーメニュー
│   │   ├── ISObserver.ts          # Intersection Observer
│   │   ├── mouseStalker.ts        # マウスストーカー
│   │   ├── microcms.ts            # microCMS連携・型定義
│   │   ├── projectModules.tsx     # プロジェクト固有モジュール
│   │   ├── qs.ts                  # DOM操作ユーティリティ
│   │   ├── screen.ts              # スクリーン関連
│   │   ├── seo.ts                 # SEO関連
│   │   ├── string.tsx             # 文字列操作
│   │   ├── ui.ts                  # UI関連
│   │   ├── url.ts                 # URL操作
│   │   └── validate.ts            # バリデーション
│   └── _queries/                   # データ取得クエリ
│       ├── characters.ts
│       ├── profile.ts
│       └── tags.ts
├── assets/
│   └── styles/                     # SCSS構造（FLOCSS準拠）
│       ├── application.scss        # メインエントリーポイント
│       ├── foundation/            # 基盤（変数、関数、mixin）
│       │   ├── _fonts.scss
│       │   ├── _variables.scss    # カラー、フォント変数
│       │   ├── _foundation.scss
│       │   ├── _mixin.scss        # レスポンシブ、フォント系mixin
│       │   └── _functions.scss    # clamp関数等
│       ├── layout/               # レイアウト
│       │   └── _layout.scss
│       ├── object/              # オブジェクト（コンポーネント、ページ）
│       │   ├── _component.scss   # 共通コンポーネント
│       │   └── _page.scss       # ページ固有スタイル (#p__home等)
│       ├── project/             # プロジェクト固有
│       │   └── _fanart_2025.scss # ファンアート2025イベント専用
│       └── utility/            # ユーティリティ
│           └── _utility.scss
└── public/                         # 静的ファイル
    ├── img/                       # 画像ファイル
    │   ├── home/                 # ホームページ素材
    │   └── common/              # 共通素材 (ロゴ、アイコン等)
    └── __forms.html              # フォーム関連
```

````

#### ファイル命名規則
- **コンポーネント**: `PascalCase.tsx` (`FirstView.tsx`, `About.tsx`)
- **ページ**: `page.tsx` (Next.js 15 App Router規約)
- **クライアントコンポーネント**: `_Client.tsx` (ファンアート2025等)
- **Hook**: `useXxx.tsx` (`useCurrentPage.tsx`, `useNavigate.tsx`)
- **ユーティリティ**: `camelCase.ts` (`mouseStalker.ts`, `screen.ts`)
- **型定義**: `小文字.ts` (`characters.ts`, `profile.ts`)
- **設定ファイル**: `PascalCase.ts` (`Constants.ts`)
- **SCSS**: `_小文字.scss` (`_variables.scss`, `_fanart_2025.scss`)

### 3. 技術スタック詳細

#### 主要ライブラリ・依存関係
```json
{
  "dependencies": {
    "next": "15.5.2",                    // App Router使用
    "react": "19.1.1",                   // 最新React
    "react-dom": "19.1.1",
    "typescript": "^5",
    "sass": "^1.79.4",                  // Dart Sass
    "tailwindcss": "^4.1.13",           // Tailwind CSS v4
    "@tailwindcss/postcss": "^4.1.13",   // Tailwind PostCSS プラグイン
    "clsx": "^2.1.1",                   // 条件付きクラス名管理
    "gsap": "^3.12.5",                  // アニメーション
    "jotai": "^2.10.0",                // 軽量状態管理
    "dayjs": "^1.11.13",               // 日付操作
    "js-cookie": "^3.0.5",             // Cookie管理
    "lenis": "^1.2.3",                 // スムーススクロール
    "microcms-js-sdk": "^3.2.0",        // microCMS JavaScript SDK
    "react-device-detect": "^2.2.3",    // デバイス検出
    "react-paginate": "^8.2.0",        // ページネーション
    "swiper": "^8.4.5",                // スライダー
    "@next/third-parties": "15.5.2",   // Google Analytics等
    "@svgr/webpack": "^8.1.0"          // SVG最適化
  }
}
````

### 4. コンポーネント設計

#### コンポーネント構成原則

- **単一責任**: 1 つのコンポーネントは 1 つの責任を持つ
- **Props 型安全性**: 必ず TypeScript interface を定義
- **再利用性**: UI コンポーネントは `_components/ui/` に配置
- **Image 最適化**: Next.js の `Image` コンポーネントを使用
- **クライアント指定**: インタラクティブなコンポーネントは `"use client"` を明記

#### 関数命名規則 【必須遵守】

**親コンポーネントから子コンポーネントに関数を渡す際は、関数名を統一する**

- ❌ **禁止**: `onXxxxxClick` のような異なる名前を子コンポーネントの props に使用
- ✅ **正しい**: 親の関数名 `handleXxxxxChange` と同じ名前で props に渡す

```typescript
// ✅ 正しい例
// 親コンポーネント
const handleCategoryChange = useCallback((categoryId: string) => {
  // 処理
}, []);

// 子コンポーネントへの渡し方
<WorkGridItem
  work={work}
  handleCategoryChange={handleCategoryChange} // 親と同じ関数名
/>;

// 子コンポーネントのprops定義
interface WorkGridItemProps {
  work: WorkContent;
  handleCategoryChange?: (categoryId: string) => void; // 親と同じ関数名
}

// ❌ 間違った例
<WorkGridItem
  work={work}
  onCategoryClick={handleCategoryChange} // 異なる名前は禁止
/>;
```

**理由**:

- 可読性の向上（どの関数が渡されているかが一目瞭然）
- デバッグの容易さ（親子間での関数の追跡が簡単）
- 一貫性のあるコードベース
- 保守性の向上（関数名変更時の影響範囲が明確）

```typescript
// ✅ 正しいコンポーネント定義例
"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  title?: string;
  className?: string;
};

export default function Client(props: Props) {
  // アニメーション用
  useEffect(() => {
    // GSAP等のセットアップ
  }, []);

  return (
    <div className="nmik-container">
      <Image
        src="/img/fanart/2025/fv_bg.png"
        alt=""
        width="1920"
        height="1080"
        className="fv-background"
      />
    </div>
  );
}
```

### 5. スタイリング戦略

#### 現在の構成

- **メイン**: Tailwind CSS v4 + Sass (FLOCSS 準拠) - `src/assets/styles/application.scss`
- **アーキテクチャ**: Utility-First CSS (Tailwind) + モジュラー CSS、BEM ベースの命名規則
- **条件付きクラス**: clsx を使用して動的なクラス名管理

#### Tailwind CSS v4 + clsx の使用方法

```typescript
// ✅ clsx を使った条件付きクラス名の例
import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  isActive,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        // ベースクラス
        "flex items-center justify-center font-bold transition-colors",
        // バリアントによる分岐
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300":
            variant === "secondary",
        },
        // サイズによる分岐
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        // 条件付きクラス
        {
          "ring-2 ring-blue-500": isActive,
        },
        // 外部から渡されたカスタムクラス
        className
      )}
      {...props}
    />
  );
}
```

#### SCSS 構造 (FLOCSS 準拠)

```scss
// application.scss
@use "foundation/fonts";
@use "foundation/variables"; // カラー、フォント変数
@use "foundation/foundation";
@use "foundation/mixin"; // レスポンシブ、フォント系mixin
@use "foundation/functions"; // clamp関数等

@use "layout/layout"; // 全体レイアウト

@use "object/component"; // 再利用可能コンポーネント
@use "object/page"; // ページ固有スタイル

@use "utility/utility"; // ユーティリティクラス

@use "project/fanart_2025"; // プロジェクト固有（ファンアート2025）
```

#### カスタム変数・関数例

```scss
// _variables.scss - NMIKブランドカラー
$red: #ff0064;
$blue: #00b5ff;
$pink: #ff007b;
$purple: #4800ff;
$navy: #002266;

// _functions.scss - レスポンシブ対応
@function clamp_prf($min, $max) {
  $base: decimal-round(calc(v.$pc_min / 100), 2);
  $prefered: decimal-round(calc($max / $base * 0.85), 2) + vw;
  @return clamp($min, $prefered, $max);
}

// _mixin.scss - ブレークポイント
@mixin sp {
  @media (max-width: (v.$sp_max)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: (v.$tab_max)) {
    @content;
  }
}
```

#### レスポンシブ対応

- **PC**: 1200px 以上
- **タブレット**: 768px-1199px
- **スマホ**: 767px 以下
- **小型スマホ**: 374px 以下 (max-[374px]:...)

### 6. アニメーション・インタラクション

#### GSAP 3.12.5 活用

- **ScrollTrigger**: スクロール連動アニメーション
- **Timeline**: 複雑なアニメーション制御
- **hover-effect**: 画像ホバーエフェクト (distortionMap 等)

#### マウスストーカー

```typescript
// layout.tsx
<div
  id="mouse_stalker"
  className="disabled"
  style={{ transform: "translate(0, 0)" }}
>
  <Image
    src="/img/common/pointer.svg"
    alt=""
    width="100"
    height="100"
    className="pointer"
  />
</div>
```

#### Intersection Observer 活用

```typescript
// ISObserver.ts
import { generateISObserver } from "@/app/_modules/ISObserver";

useEffect(() => {
  const observer = commonAnimationObserver();
  return () => observer?.disconnect();
}, []);
```

### 7. 状態管理・データ取得

#### Jotai 2.10.0

```typescript
// _atom/GlobalAtom.ts
import { atom } from "jotai";

export const currentPageAtom = atom<string>("");
export const loadingAtom = atom<boolean>(false);
```

#### カスタムフック例

```typescript
// _hooks/useCurrentPage.tsx
export default function useCurrentPage() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  // ページ固有ロジック
  return { currentPage, setCurrentPage };
}
```

#### microCMS 連携

```typescript
// _modules/microcms.ts
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

// 基本コンテンツ型
export interface MicroCMSContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// リストレスポンス型
export interface MicroCMSListResponse<T extends MicroCMSContent> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 使用例: Helloコンテンツ型
export interface HelloContent extends MicroCMSContent {
  name: string;
}
```

### 8. SEO・メタデータ管理

#### layout.tsx 設定

```typescript
export const metadata: Metadata = composeMetaData({});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

// Google Analytics
import { GoogleAnalytics } from "@next/third-parties/google";
<GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />;
```

#### SEO ユーティリティ

````typescript
// _modules/seo.ts
export function composeMetaData({
  title,
  description,
  ogImage
}: MetaDataProps): Metadata {
  return {
    title: title ? `${title} | ${SITE_TITLE}` : SITE_TITLE,
    description: description || SITE_DESCRIPTION_BASE,
    // OpenGraph設定
  }
### 9. 開発ワークフロー・ベストプラクティス

#### 開発サーバー起動
```bash
yarn dev              # http://localhost:3000 でサーバー起動
yarn build            # 本番ビルド
yarn start            # 本番サーバー起動
yarn lint             # ESLintによるコード検証
````

#### Cookie 管理

```typescript
// js-cookie使用例
import Cookies from "js-cookie";

// 初回訪問フラグ
if (Cookies.get("VISITED") === "true") {
  allowScroll();
} else {
  // ローディングアニメーション
  Cookies.set("VISITED", "true", { expires: 7 });
}
```

#### デバイス検出

```typescript
import { isMobile, isTablet, isDesktop } from "react-device-detect";

// レスポンシブ対応ロジック
if (isMobile) {
  // モバイル固有処理
}
```

### 10. プロジェクト固有ルール（yoake-creative）

#### microCMS データ取得システム

リファクタリングにより、microCMS 専用の型安全なデータ取得システムを導入しました。

```typescript
// クライアントサイドでの使用例
import useClientFetch from "@/app/_hooks/fetch/useClientFetch";
import { HelloContent, MicroCMSListResponse } from "@/app/_modules/microcms";

const { contents, isLoading, errorInfo } = useClientFetch<
  MicroCMSListResponse<HelloContent>
>({
  endpoint: "hello",
  queries: {
    limit: 10,
    fields: "id,name,publishedAt",
    filters: "category[equals]featured",
    orders: "-publishedAt",
  },
  revalidate: false,
});

// サーバーサイドでの使用例
import { useServerFetch } from "@/app/_hooks/fetch/useServerFetch";

const result = await useServerFetch<HelloContent>({
  endpoint: "hello",
  contentId: "specific-id",
});
```

#### ファイル構成（リファクタリング後）

```
_hooks/fetch/
├── useFetch.tsx          # microCMS専用コア関数
├── useClientFetch.tsx    # クライアントサイドHook
├── useServerFetch.ts     # サーバーサイドHook
└── Types.ts              # 後方互換性用型

_modules/
└── microcms.ts           # 全microCMS関連型定義・クライアント
```

#### 主な改善点

- **型安全性**: 完全な型推論と IntelliSense 対応
- **保守性**: コードが一箇所に集約され、変更が容易
- **パフォーマンス**: 不要なコードの削除で軽量化
- **可読性**: 明確な構造とコメント
- **開発体験**: より良いエラーメッセージとログ出力

### 11. パフォーマンス・最適化

#### 画像最適化

- Next.js `Image` コンポーネント必須使用
- WebP 形式推奨
- `width`・`height` 属性必須指定

#### 読み込み最適化

- 初回訪問時のローディングアニメーション
- Intersection Observer による遅延読み込み
- Critical CSS の優先読み込み

#### SEO 対策

- Google Analytics 自動設定（layout.tsx）
- メタデータ自動生成（seo.ts）
- sitemap.xml 対応

### 12. デプロイ・インフラ

#### Netlify 連携

- **プラグイン**: `@netlify/plugin-nextjs 5.8.1`
- **ビルドコマンド**: `yarn build`
- **出力ディレクトリ**: `.next`

#### 環境変数

```typescript
// 必要な環境変数
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=  // microCMS サービスドメイン
NEXT_PUBLIC_MICROCMS_API_KEY=         // microCMS APIキー
NEXT_PUBLIC_GA_ID=                    // Google Analytics ID
```

---

## 📚 リファレンス・参考資料

### 技術ドキュメント

- [Next.js 15 App Router](https://nextjs.org/docs)
- [React 19](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Sass (SCSS)](https://sass-lang.com/documentation/)
- [GSAP](https://gsap.com/docs/)
- [Newt CMS](https://www.newt.so/docs)

### プロジェクト固有リソース

- NAMAIKI GIRLS ブランドガイドライン
- デザインシステム仕様書
- アセット管理ガイドライン

---

_最終更新: 2025 年 9 月 3 日_
_Claude AI 協働により継続的に更新_

- [ ] `camelCase.ts` 命名規則を遵守
- [ ] 純粋関数として設計
- [ ] 適切な型定義を追加

### 3. エラーハンドリング原則

#### API エラー

```typescript
// ✅ 推奨パターン（useApiClientを使用）
import { useApiClient } from "@/app/_hooks/useApiClient";

const { execute, error, isLoading } = useApiClient();

const handleApiCall = async () => {
  const result = await execute("GET", "/api/v1/chats");
  if (result) {
    // 成功処理
  }
  // エラーは自動的にerror状態に設定される
};

// ✅ 直接fetch使用時（CSVダウンロード等）
try {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // 成功処理
} catch (error) {
  console.error("API呼び出しエラー:", error);
  // ユーザーフレンドリーなエラー表示
}
```

#### 認証エラー

- **自動処理**: `useApiClient` が 401 エラーを自動検出
- **リダイレクト**: 認証エラー時は自動的にログイン画面にリダイレクト
- **トークン更新**: `TokenManager` による自動トークン更新

#### 環境エラー

- **フォールバック**: sessionStorage → API Route → デフォルト値
- **エラー回復**: 環境取得失敗時の適切なフォールバック処理

## 🔍 コードレビューポイント

### 必須チェック項目

- [ ] 適切なファイル命名規則に従っているか（コンポーネント: PascalCase、Hook: useXxx、Utils: camelCase）
- [ ] Props に適切な TypeScript 型を定義しているか
- [ ] コンポーネントの責任が明確に分離されているか
- [ ] `@/` から始まる絶対パスでインポートしているか
- [ ] 上下方向の間隔調整で `margin-top` を使用しているか
- [ ] 適切なディレクトリ構造に配置されているか（`_components/ui/`, `_hooks/`, `_modules/` 等）
- [ ] Next.js の `Image` コンポーネントを使用しているか
- [ ] アニメーションで適切なクラス名を使用しているか（`lp-fadeIn` 等）

### セキュリティ・パフォーマンス

- [ ] 入力値の適切なバリデーション
- [ ] 不要な再レンダリングが発生していないか
- [ ] 適切な `use client` ディレクティブの使用
- [ ] 画像の最適化（Next.js Image コンポーネント使用）
- [ ] CMS データのキャッシュ戦略

## 🚨 避けるべきパターン

### ❌ アンチパターン

1. **相対パスでのインポート**

   ```typescript
   // ❌ 相対パスの使用
   import Button from "../../_components/ui/Button";

   // ✅ 絶対パスの使用
   import Button from "@/app/_components/ui/Button";
   ```

2. **img タグの直接使用**

   ```typescript
   // ❌ 通常のimgタグ
   <img src="/img/fanart/2025/header.png" />

   // ✅ Next.js Image コンポーネント
   <Image src="/img/fanart/2025/header.png" alt="Header" width={500} height={300} />
   ```

3. **margin-bottom の使用**

   ```typescript
   // ❌ margin-bottomを使用
   <div className="mb-4">
     <h1>タイトル</h1>
   </div>
   <p>段落</p>

   // ✅ margin-topを使用
   <div>
     <h1>タイトル</h1>
     <p className="mt-4">段落</p>
   </div>
   ```

## 📚 参考リソース

### 技術ドキュメント

- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Sass (SCSS)](https://sass-lang.com/documentation/)
- [Jotai](https://jotai.org/)
- [GSAP](https://greensock.com/docs/)
- [Newt CMS](https://www.newt.so/docs)

### 開発環境

- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)

## 🌍 環境管理・デプロイ

### 環境設定

```bash
# 環境変数例（.env.local）
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-domain
NEXT_PUBLIC_MICROCMS_API_KEY=your-api-key
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### 開発コマンド

```bash
# 開発サーバー起動
yarn dev

# ビルド
yarn build

# 本番サーバー起動
yarn start

# Lint実行
yarn lint
```

---

_このドキュメントは継続的に更新され、プロジェクトの成長に合わせて改善されます。_

## 🎨 スタイリング規則

### 1. CSS フレームワーク

- **メイン**: Tailwind CSS v4
- **補助**: SCSS (FLOCSS準拠)
- **条件分岐**: clsx ライブラリを使用

### 2. 条件分岐クラス名

```tsx
// ❌ 避けるべき書き方
className={`base-class ${condition ? 'active' : ''}`}

// ✅ 推奨する書き方 (clsx使用)
className={clsx('base-class', {
  'active': condition
})}

// ✅ 複数条件
className={clsx(
  'base-class common-styles',
  {
    'active': isActive,
    'disabled': isDisabled,
    'loading': isLoading
  }
)}
```

### 3. レスポンシブデザイン

- **原則**: PC-first (デスクトップ優先)
- **ブレークポイント**: max-sm:, max-md:, max-lg: を使用

```tsx
// ❌ 避けるべき書き方 (モバイルファースト)
className="text-sm md:text-base lg:text-lg"

// ✅ 推奨する書き方 (PC-first)
className="text-lg max-lg:text-base max-md:text-sm"
```

### 4. ブレークポイント定義

```scss
// Tailwind CSS v4 基準
max-sm:   // max-width: 639px  (スマートフォン以下)
max-md:   // max-width: 767px  (タブレット以下)
max-lg:   // max-width: 1023px (ラップトップ以下)
max-xl:   // max-width: 1279px (デスクトップ以下)
```

## 🔧 関数・Props 命名規則

### 1. 親→子 関数受け渡し

```tsx
// 親コンポーネント
const ParentComponent = () => {
  const handleCategoryChange = (categoryId: string) => {
    // 処理
  }

  return (
    <ChildComponent handleCategoryChange={handleCategoryChange} />
  )
}

// 子コンポーネント
interface ChildProps {
  // ❌ 避けるべき書き方
  onCategoryChange: (categoryId: string) => void
  
  // ✅ 推奨する書き方 (親の関数名と統一)
  handleCategoryChange: (categoryId: string) => void
}
```

### 2. イベントハンドラ命名

- **基本形**: `handle + 動作名`
- **例**: `handleClick`, `handleSubmit`, `handleCategoryChange`
- **Props名も同じ**: 親から渡す関数名と子で受け取るProps名を統一

_最終更新: 2025-01-15 - スタイリング規則・関数命名規則追加_
