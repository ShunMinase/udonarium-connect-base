# お問い合わせフォームの自動生成システム

このディレクトリには、`formConfigs.ts`の設定に基づいて自動的にフォームを生成するシステムが実装されています。

## 概要

`FormGenerator`コンポーネントを使用することで、`formConfigs.ts`で定義した設定に基づいて、入力画面と確認画面のフォーム要素が自動的に生成されます。

## 主な機能

- ✅ フォーム要素の自動生成
- ✅ バリデーションの自動適用
- ✅ ダミーデータの自動入力（開発環境）
- ✅ 送信データの自動生成
- ✅ **microCMS からカテゴリー一覧を自動取得** ← NEW!

## 使い方

### 1. フォーム項目の追加・編集

`formConfigs.ts`の`getFormConfigs`関数内で設定を変更します。

```typescript
export function getFormConfigs(
  initialValues: ContactValues,
  errorMessages: ContactErrors
): FormConfigs {
  return {
    // 新しい項目を追加
    companyName: {
      formPropaties: {
        type: "text",
        required: true,
        itemNameEn: "companyName",
        itemNameJa: "会社名",
        maxLength: 100,
        errorMessages: errorMessages,
        defaultValue: initialValues.companyName || "",
        placeholder: "例）株式会社〇〇",
        dummyValue: "株式会社テスト", // 開発環境用のダミーデータ
      },
    },
    // 既存の項目...
  };
}
```

### 2. 型定義の更新

`ContactValues`インターフェースに新しい項目を追加します。

```typescript
export interface ContactValues {
  companyName: string; // 追加
  organization: string;
  name: string;
  // ...
}
```

### 3. 初期値の設定

`initContactValues`関数に初期値を追加します。

```typescript
export function initContactValues(): ContactValues {
  return {
    companyName: "", // 追加
    organization: "",
    name: "",
    // ...
  };
}
```

### 4. 自動生成

入力画面と確認画面で`FormGenerator`を使用すると、自動的に新しい項目が表示されます。

```tsx
// 入力画面（_Client.tsx）
<FormGenerator formConfigs={formConfigs} />

// 確認画面（confirm/page.tsx）
<FormGenerator formConfigs={formConfigs} excludeFields={["agreement"]} confirm={true} />
```

## サポートされているフォームタイプ

- `text`: テキストボックス
- `email`: メールアドレス入力
- `textarea`: 複数行テキスト入力
- `checkbox`: チェックボックス（複数選択）
- `agreement`: 同意チェックボックス

## FormGenerator のプロパティ

| プロパティ      | 型            | 必須 | 説明                                |
| --------------- | ------------- | ---- | ----------------------------------- |
| `formConfigs`   | `FormConfigs` | ○    | フォーム設定オブジェクト            |
| `excludeFields` | `string[]`    | ×    | 除外するフィールド名の配列          |
| `confirm`       | `boolean`     | ×    | 確認画面モード（デフォルト: false） |

## フォーム項目の設定プロパティ

各フォーム項目には以下のプロパティを設定できます：

| プロパティ       | 型                                                             | 必須 | 説明                                       |
| ---------------- | -------------------------------------------------------------- | ---- | ------------------------------------------ |
| `type`           | `"text" \| "email" \| "textarea" \| "checkbox" \| "agreement"` | ○    | フォーム要素のタイプ                       |
| `required`       | `boolean`                                                      | ○    | 必須項目かどうか                           |
| `itemNameEn`     | `string`                                                       | ○    | 項目の英語名（HTML の id/name 属性に使用） |
| `itemNameJa`     | `string`                                                       | ○    | 項目の日本語名（ラベルに表示）             |
| `maxLength`      | `number`                                                       | ×    | 最大文字数                                 |
| `errorMessages`  | `any`                                                          | ○    | エラーメッセージオブジェクト               |
| `defaultValue`   | `string`                                                       | ×    | デフォルト値                               |
| `defaultChecked` | `boolean`                                                      | ×    | デフォルトでチェックされているか           |
| `placeholder`    | `string`                                                       | ×    | プレースホルダーテキスト                   |
| `choices`        | `string[]`                                                     | ×    | チェックボックスの選択肢                   |
| `dummyValue`     | `string \| boolean`                                            | ×    | **開発環境用のダミーデータ**               |

### ダミーデータの自動入力

開発環境では、各フォーム項目に設定した`dummyValue`が自動的に入力されます。

```typescript
name: {
  formPropaties: {
    type: "text",
    // ... その他の設定
    dummyValue: "すなやますなこ", // このボタンを押すと自動入力される
  },
},
```

開発環境でのみ表示される「ダミーデータを入力」ボタンを押すと、すべての`dummyValue`が一括で入力されます。

## microCMS との連携

### カテゴリー選択肢の自動取得

チェックボックスの選択肢（カテゴリー）は、microCMS の`categories`エンドポイントから自動的に取得されます。

**仕組み:**

1. `getCategories.ts`が microCMS からカテゴリー一覧を取得
2. サーバーコンポーネント（`page.tsx`）で取得したカテゴリーをクライアントコンポーネントに渡す
3. `formConfigs.ts`でカテゴリーを`choices`として使用

**フォールバック:**

microCMS からの取得に失敗した場合は、デフォルトのカテゴリーリストが使用されます。

```typescript
// getCategories.ts
return [
  "雑貨",
  "文具",
  "ぬいぐるみ",
  // ... デフォルトのカテゴリー
];
```

## 例: 特定の項目を除外

```tsx
// agreementとphoneNumberを除外
<FormGenerator
  formConfigs={formConfigs}
  excludeFields={["agreement", "phoneNumber"]}
/>
```

## 注意事項

1. **表示順序**: `formConfigs`に定義した順序で表示されます
2. **バリデーション**: `_Client.tsx`の`validateAll`関数も更新する必要があります
3. **送信データ**: 自動生成されるため、個別に追加する必要はありません
4. **ダミーデータ**: `dummyValue`を設定すると、開発環境で自動入力機能が使えます（本番環境には影響しません）
5. **カテゴリー**: microCMS の`categories`エンドポイントから自動取得されます

## ファイル構成

```
contact/
├── formConfigs.ts         # フォーム設定の定義（ダミーデータも含む）
├── FormGenerator.tsx      # フォーム自動生成コンポーネント
├── InputDummyData.tsx     # ダミーデータ自動入力コンポーネント
├── getCategories.ts       # microCMSからカテゴリー取得
├── page.tsx              # サーバーコンポーネント（カテゴリー取得）
├── _Client.tsx           # 入力画面
├── confirm/
│   └── page.tsx         # 確認画面
└── submitted/
    └── _Client.tsx      # 送信完了画面
```

## メリット

- ✅ フォーム項目の追加・削除が`formConfigs.ts`の編集だけで完結
- ✅ 入力画面と確認画面が自動的に同期
- ✅ ダミーデータも設定ファイルで一元管理
- ✅ 送信データも自動生成（手動での追加不要）
- ✅ カテゴリーは microCMS から自動取得（更新の手間なし）
- ✅ コードの重複が大幅に削減され、保守性が向上
