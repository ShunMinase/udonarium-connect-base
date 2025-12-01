# UI Component Examples

UIコンポーネントライブラリのサンプル表示ページです。

## 📁 ファイル構造

```
/src/app/(pages)/examples/
├── page.tsx                           # メインページ
├── _components/
│   ├── ExampleHelpers.tsx            # サンプル表示用ヘルパーコンポーネント
│   ├── ButtonExamples.tsx            # Buttonコンポーネントのサンプル
│   ├── LinkExamples.tsx              # Linkコンポーネントのサンプル
│   ├── InputExamples.tsx             # Inputコンポーネントのサンプル
│   ├── TitleExamples.tsx             # Titleコンポーネントのサンプル
│   └── [新しいコンポーネント]Examples.tsx
└── README.md                         # このファイル
```

## 🎯 利用方法

### 表示確認
```
http://localhost:3000/examples
```

### 目的
- 全コンポーネントのバリアント・サイズ・状態を一覧表示
- デザインシステムの確認
- 開発時のビジュアルテスト
- コンポーネントの使用例・コード例の提供

## ➕ 新しいコンポーネントの追加方法

### 1. 新しいコンポーネントのサンプルファイルを作成

```tsx
// _components/[ComponentName]Examples.tsx
import React from 'react'
import YourComponent from '@/app/_components/ui/YourComponent'
import { ComponentSection, VariantGroup, ExampleItem } from './ExampleHelpers'

export const YourComponentExamples: React.FC = () => {
  return (
    <ComponentSection 
      title="YourComponent" 
      description="コンポーネントの説明"
    >
      <VariantGroup title="Basic Usage">
        <ExampleItem
          title="基本形"
          code={\`<YourComponent>例</YourComponent>\`}
        >
          <YourComponent>例</YourComponent>
        </ExampleItem>
      </VariantGroup>
    </ComponentSection>
  )
}
```

### 2. メインページに追加

```tsx
// page.tsx
import { YourComponentExamples } from './_components/YourComponentExamples'

// 目次に追加
<li>
  <Link href="#your-component">YourComponent</Link>
  <p className="text-sm text-primitive-neutral-600">説明</p>
</li>

// コンテンツに追加
<div id="your-component">
  <YourComponentExamples />
</div>
```

## 🧩 ヘルパーコンポーネント

### ComponentSection
コンポーネント全体のセクション

```tsx
<ComponentSection title="コンポーネント名" description="説明">
  {children}
</ComponentSection>
```

### VariantGroup
バリアントやサイズごとのグループ

```tsx
<VariantGroup title="グループ名" description="説明">
  {children}
</VariantGroup>
```

### ExampleItem
個別のサンプル項目

```tsx
<ExampleItem title="項目名" code="<Component />">
  <Component />
</ExampleItem>
```

### CodeBlock
コードブロック表示

```tsx
<CodeBlock code="const example = 'code'" language="tsx" />
```

## 💡 ベストプラクティス

### 1. 網羅的なサンプル
- 全バリアントを表示
- 全サイズを表示
- 特殊状態（loading, disabled, error等）を表示
- インタラクティブな例を含める

### 2. 分かりやすいコード例
- 実際に使用する形でコードを記載
- propの値を明示
- TypeScriptの型も考慮

### 3. 実用的な例
- 実際のユースケースを想定
- 組み合わせパターンを表示
- レスポンシブ対応の確認

## 🔄 更新タイミング

- 新しいコンポーネントを追加した時
- 既存コンポーネントにバリアントを追加した時
- 新しいpropやオプションを追加した時
- デザインシステムを変更した時

このページを常に最新の状態に保つことで、開発効率とコードの品質を向上させることができます。
