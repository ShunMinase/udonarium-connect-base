/**
 * Inputコンポーネントのサンプル
 */

import React, { useState } from 'react'
import Input from '@/app/_components/ui/Input'
import { ComponentSection, VariantGroup, ExampleItem } from './ExampleHelpers'

export const InputExamples: React.FC = () => {
  const [value, setValue] = useState('')
  const [errorValue, setErrorValue] = useState('')

  return (
    <ComponentSection
      title="Input"
      description="入力フィールドコンポーネント - label、error、helperTextをサポート"
    >
      {/* 基本的な入力フィールド */}
      <VariantGroup
        title="Basic Input"
        description="基本的な入力フィールド"
      >
        <ExampleItem
          title="基本形"
          code={`<Input placeholder="テキストを入力してください" />`}
        >
          <Input placeholder="テキストを入力してください" />
        </ExampleItem>
      </VariantGroup>

      {/* ラベル付き */}
      <VariantGroup
        title="With Label"
        description="ラベル付きの入力フィールド"
      >
        <ExampleItem
          title="ラベル付き"
          code={`<Input label="お名前" placeholder="山田太郎" />`}
        >
          <Input label="お名前" placeholder="山田太郎" />
        </ExampleItem>
      </VariantGroup>

      {/* ヘルパーテキスト付き */}
      <VariantGroup
        title="With Helper Text"
        description="ヘルパーテキスト付きの入力フィールド"
      >
        <ExampleItem
          title="ヘルパーテキスト付き"
          code={`<Input 
  label="メールアドレス" 
  placeholder="example@company.com" 
  helperText="会社のメールアドレスを入力してください"
/>`}
        >
          <Input
            label="メールアドレス"
            placeholder="example@company.com"
            helperText="会社のメールアドレスを入力してください"
          />
        </ExampleItem>
      </VariantGroup>

      {/* エラー状態 */}
      <VariantGroup
        title="Error State"
        description="エラー状態の入力フィールド"
      >
        <ExampleItem
          title="エラー状態"
          code={`<Input 
  label="パスワード" 
  type="password"
  placeholder="パスワードを入力"
  error="パスワードは8文字以上である必要があります"
/>`}
        >
          <Input
            label="パスワード"
            type="password"
            placeholder="パスワードを入力"
            error="パスワードは8文字以上である必要があります"
          />
        </ExampleItem>
      </VariantGroup>

      {/* 無効状態 */}
      <VariantGroup
        title="Disabled State"
        description="無効状態の入力フィールド"
      >
        <ExampleItem
          title="無効状態"
          code={`<Input label="無効なフィールド" value="編集できません" disabled />`}
        >
          <Input label="無効なフィールド" value="編集できません" disabled />
        </ExampleItem>
      </VariantGroup>

      {/* 必須フィールド */}
      <VariantGroup
        title="Required Field"
        description="必須フィールド"
      >
        <ExampleItem
          title="必須フィールド"
          code={`<Input label="必須項目" placeholder="必須項目です" required />`}
        >
          <Input label="必須項目" placeholder="必須項目です" required />
        </ExampleItem>
      </VariantGroup>

      {/* プレフィックス・サフィックス */}
      <VariantGroup
        title="Prefix & Suffix"
        description="固定テキストを前後に表示する入力フィールド"
      >
        <div className="space-y-4 w-full">
          <ExampleItem
            title="プレフィックス"
            code={`<Input 
  label="ウェブサイトURL" 
  prefix="https://"
  placeholder="example.com"
  helperText="https://は自動で付与されます"
/>`}
          >
            <Input
              label="ウェブサイトURL"
              prefix="https://"
              placeholder="example.com"
              helperText="https://は自動で付与されます"
            />
          </ExampleItem>

          <ExampleItem
            title="サフィックス"
            code={`<Input 
  label="メールアドレス" 
  suffix="@jogmec.go.jp"
  placeholder="ユーザー名"
  helperText="@jogmec.go.jpは自動で付与されます"
/>`}
          >
            <Input
              label="メールアドレス"
              suffix="@jogmec.go.jp"
              placeholder="ユーザー名"
              helperText="@jogmec.go.jpは自動で付与されます"
            />
          </ExampleItem>

          <ExampleItem
            title="金額入力"
            code={`<Input 
  label="金額" 
  prefix="¥"
  suffix="円"
  placeholder="1000"
  helperText="金額を入力してください"
  type="number"
/>`}
          >
            <Input
              label="金額"
              prefix="¥"
              suffix="円"
              placeholder="1000"
              helperText="金額を入力してください"
              type="number"
            />
          </ExampleItem>

          <ExampleItem
            title="エラー状態での表示"
            code={`<Input 
  label="メールアドレス" 
  suffix="@company.com"
  placeholder="ユーザー名"
  error="このユーザー名は既に使用されています"
/>`}
          >
            <Input
              label="メールアドレス"
              suffix="@company.com"
              placeholder="ユーザー名"
              error="このユーザー名は既に使用されています"
            />
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* インタラクティブな例 */}
      <VariantGroup
        title="Interactive Examples"
        description="実際に入力できるフィールドの例"
      >
        <div className="space-y-4 w-full">
          <ExampleItem
            title="制御されたコンポーネント"
            code={`const [value, setValue] = useState('')
<Input 
  label="制御されたフィールド" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="何か入力してください"
/>`}
          >
            <Input
              label="制御されたフィールド"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="何か入力してください"
            />
            <p className="text-sm text-primitive-neutral-600 mt-2">
              入力値: {value || '（空）'}
            </p>
          </ExampleItem>

          <ExampleItem
            title="エラー検証付き"
            code={`const [errorValue, setErrorValue] = useState('')
<Input 
  label="バリデーション付きフィールド" 
  value={errorValue}
  onChange={(e) => setErrorValue(e.target.value)}
  error={errorValue.length > 0 && errorValue.length < 3 ? "3文字以上入力してください" : ""}
  placeholder="3文字以上入力してください"
/>`}
          >
            <Input
              label="バリデーション付きフィールド"
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              error={errorValue.length > 0 && errorValue.length < 3 ? "3文字以上入力してください" : ""}
              placeholder="3文字以上入力してください"
            />
          </ExampleItem>
        </div>
      </VariantGroup>
    </ComponentSection>
  )
}
