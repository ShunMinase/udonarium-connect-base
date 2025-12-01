# UI コンポーネント使用ガイドライン

## 基本方針

このプロジェクトでは、`src/app/_components/ui/` にある共通 UI コンポーネントを優先的に使用します。

## 必須のコンポーネント置き換え

### Link → HeadlessLink

通常の`next/link`の`Link`コンポーネントの代わりに、`HeadlessLink`を使用してください。

```tsx
// ❌ 使わない
import Link from "next/link";

// ✅ 使う
import HeadlessLink from "@/app/_components/ui/HeadlessLink";
```

**HeadlessLink の特徴:**

- ページ遷移時のトランジションアニメーション対応
- スムーズスクロール機能
- ハッシュリンク（`#anchor`）の自動処理
- マウスストーカーとの連携

**使用例:**

```tsx
<HeadlessLink href="/games" className="custom-class">
  ゲーム一覧
</HeadlessLink>

<HeadlessLink href="/games#top" className="custom-class">
  ゲーム一覧へ（トップにスクロール）
</HeadlessLink>

<HeadlessLink href="https://example.com" target="_blank" rel="noopener noreferrer">
  外部リンク
</HeadlessLink>
```

### その他の推奨コンポーネント

`src/app/_components/ui/` ディレクトリにある以下のコンポーネントも活用してください:

#### Dropdown（ドロップダウン選択）

通常の`<select>`タグの代わりに使用します。

```tsx
import Dropdown from "@/app/_components/ui/Dropdown";

<Dropdown
  label="ジャンル"
  value={selectedGenre}
  onChange={(value) => setSelectedGenre(value)}
  options={[
    { value: "all", label: "すべて" },
    { value: "strategy", label: "戦略" },
    { value: "party", label: "パーティー" },
  ]}
  placeholder="ジャンルを選択"
/>;
```

**Dropdown の特徴:**

- Floating UI による賢いポジショニング
- キーボードナビゲーション対応
- アイコン・説明文のサポート
- エラー表示・ヘルパーテキスト対応
- ユドコネベースのデザインシステムに最適化済み

#### ボタンコンポーネント共通仕様

すべてのボタンコンポーネントは以下の共通プロパティをサポートします:

- **size**: `xs` | `sm` | `md` | `lg` (デフォルト: `md`)
- **colorScheme**: `white` | `orange` (デフォルト: `white`)
  - `white`: 白背景ベースのデザイン（通常のページ背景用）
  - `orange`: オレンジ/グラデーション背景上で使用するデザイン
- **as**: `button` | `link` (ボタンまたはリンクとして動作)
- **width**: 固定幅指定（オプション）

---

#### SolidPrimaryButton（プライマリボタン）

最重要アクション用。常にグラデーションデザイン。

```tsx
import SolidPrimary from "@/app/_components/ui/styledButton/SolidPrimaryButton";

<SolidPrimary as="button" onClick={handleClick}>
  ボタンテキスト
</SolidPrimary>

<SolidPrimary as="link" href="/games">
  ゲーム一覧へ
</SolidPrimary>
```

**特徴:**

- Orange #ff9966 → Pink #e9527e のグラデーション背景
- 白テキスト、角丸 12px
- ホバー時にシャドウ（elevation-3）

---

#### SolidSecondaryButton（セカンダリボタン）

プライマリボタンに次ぐ重要度のアクション用。colorScheme で背景色の使い分けが可能。

```tsx
import SolidSecondary from "@/app/_components/ui/styledButton/SolidSecondary";

// 白背景用（デフォルト）
<SolidSecondary as="button" onClick={handleClick}>
  キャンセル
</SolidSecondary>

// オレンジ背景用（グラデーション背景上など）
<SolidSecondary as="button" colorScheme="orange" onClick={handleClick}>
  キャンセル
</SolidSecondary>
```

**特徴:**

- `white`: 白背景 + オレンジテキスト/ボーダー → ホバーでグラデーション
- `orange`: オレンジ背景 + 白テキスト → ホバーでグラデーション
- 角丸 12px、ホバー時シャドウ

---

#### OutlineButton（アウトラインボタン）

控えめなアクション用。colorScheme で背景に応じた配色変更が可能。

```tsx
import Outline from "@/app/_components/ui/styledButton/Outline";

// 白背景用（デフォルト）
<Outline as="button" onClick={handleClick}>
  詳細を見る
</Outline>

// オレンジ/グラデーション背景用
<Outline as="link" href="/about" colorScheme="orange">
  詳細を見る
</Outline>
```

**特徴:**

- `white`: 透明背景 + オレンジテキスト/ボーダー → ホバーでオレンジ背景（薄）
- `orange`: 透明背景 + 白テキスト/ボーダー → ホバーで白背景（薄）
- 角丸 12px、軽いアクション向け

---

#### TextButton（テキストボタン）

最も控えめなアクション用。インラインリンクやサブアクションに適しています。

```tsx
import TextButton from "@/app/_components/ui/styledButton/Text";

// 白背景用（デフォルト）
<TextButton as="link" href="/about" size="sm">
  もっと見る
</TextButton>

// オレンジ/グラデーション背景用
<TextButton as="link" href="/about" colorScheme="orange" size="sm">
  もっと見る
</TextButton>
```

**特徴:**

- `white`: オレンジテキスト → ホバーで不透明度 80%
- `orange`: 白テキスト → ホバーで不透明度 80%
- 背景・ボーダーなし、アンダーラインなし
- 最小限の UI 占有面積

---

#### 使用例：colorScheme の使い分け

```tsx
// 通常の白背景ページ
<SolidSecondary as="button" colorScheme="white">キャンセル</SolidSecondary>
<Outline as="button" colorScheme="white">詳細</Outline>

// グラデーション背景のヒーローセクション内
<section className="bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)]">
  <SolidSecondary as="link" href="/games" colorScheme="orange">
    ゲーム一覧
  </SolidSecondary>
  <Outline as="link" href="/about" colorScheme="orange">
    詳しく見る
  </Outline>
  <TextButton as="link" href="/help" colorScheme="orange">
    ヘルプ
  </TextButton>
</section>
```

#### ToggleSwitch（トグルスイッチ）

ON/OFF 切り替えスイッチ。ON 状態時にブランドグラデーションが適用されます。

```tsx
import ToggleSwitch from "@/app/_components/ui/ToggleSwitch";

<ToggleSwitch
  checked={isEnabled}
  onChange={(checked) => setIsEnabled(checked)}
  aria-label="機能を有効化"
/>;
```

#### HeadlessButton（ボタン）

スタイルなしのボタンコンポーネント。カスタムスタイルを適用する際に使用します。

```tsx
import HeadlessButton from "@/app/_components/ui/HeadlessButton";

<HeadlessButton
  onClick={handleClick}
  className="bg-[var(--color-brand-orange)] text-white px-4 py-2 rounded-[var(--radius-md)]"
>
  ボタンテキスト
</HeadlessButton>;
```

#### その他

- **MouseStalker**: マウスストーカー（カーソル追従エフェクト）
- **Input**: フォーム入力フィールド
- **Textarea**: テキストエリア
- **ToggleSwitch**: トグルスイッチ
- **Pagenation**: ページネーション

## スタイルのカスタマイズ

テンプレートの UI コンポーネントが今回のプロジェクト（ユドコネベース）のデザインシステムに合わない場合:

1. **カラー変更**: `tailwind.scss`で定義したブランドカラー（Orange #ff9966 → Pink #e9527e）を使用
2. **スタイル上書き**: `className`プロパティで Tailwind クラスを指定して上書き可能
3. **コンポーネント修正**: 必要に応じて`_components/ui/`内のコンポーネント自体を修正して OK

## 注意事項

- **HeadlessLink は必須**: すべての内部リンクで使用してください
- **外部リンク**: `target="_blank"`の場合は通常の HTML 動作になります
- **disabled 属性**: HeadlessLink は`disabled`プロパティをサポートしています

## 実装状況

- [x] Header: HeadlessLink に置き換え完了
- [x] Footer: HeadlessLink に置き換え完了
- [x] GameCard: HeadlessLink に置き換え完了
- [x] ホームページ: HeadlessLink に置き換え完了
- [x] ゲーム一覧ページ: HeadlessLink に置き換え完了
- [x] ゲーム詳細ページ: HeadlessLink に置き換え完了
