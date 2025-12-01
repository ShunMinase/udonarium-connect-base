/**
 * Textareaコンポーネントのサンプル
 */

import React, { useState } from 'react'
import Textarea from '@/app/_components/ui/Textarea'
import { ComponentSection, VariantGroup, CodeBlock } from './ExampleHelpers'

export function TextareaExamples() {
  const [basicValue, setBasicValue] = useState('')
  const [errorValue, setErrorValue] = useState('')
  const [helperValue, setHelperValue] = useState('')
  const [disabledValue] = useState('これは無効なテキストエリアです')
  const [noResizeValue, setNoResizeValue] = useState('')

  return (
    <ComponentSection title="Textarea" description="テキストエリアコンポーネント">
      {/* 基本的な使用例 */}
      <VariantGroup title="基本的な使用例" description="基本的なテキストエリアの表示">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Textarea
            label="基本的なテキストエリア"
            placeholder="メッセージを入力してください"
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
            rows={4}
          />
          <Textarea
            label="ラベルなし"
            placeholder="ラベルなしのテキストエリア"
            rows={3}
          />
        </div>
        <CodeBlock code={`<Textarea
  label="基本的なテキストエリア"
  placeholder="メッセージを入力してください"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={4}
/>`} />
      </VariantGroup>

      {/* エラー状態 */}
      <VariantGroup title="エラー状態" description="エラー表示の例">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Textarea
            label="エラーのあるテキストエリア"
            placeholder="テキストを入力してください"
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error="このフィールドは必須です"
            rows={3}
          />
          <Textarea
            label="複数行エラー"
            placeholder="テキストを入力してください"
            error={`エラーメッセージの1行目\nエラーメッセージの2行目`}
            rows={3}
          />
        </div>
        <CodeBlock code={`<Textarea
  label="エラーのあるテキストエリア"
  error="このフィールドは必須です"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`} />
      </VariantGroup>

      {/* ヘルパーテキスト */}
      <VariantGroup title="ヘルパーテキスト" description="ヘルパーテキストの表示">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Textarea
            label="ヘルパーテキスト付き"
            placeholder="コメントを入力してください"
            value={helperValue}
            onChange={(e) => setHelperValue(e.target.value)}
            helperText="最大500文字まで入力できます"
            rows={4}
          />
          <Textarea
            label="複数行ヘルパー"
            placeholder="説明を入力してください"
            helperText={`ヘルパーテキストの1行目\nヘルパーテキストの2行目`}
            rows={4}
          />
        </div>
        <CodeBlock code={`<Textarea
  label="ヘルパーテキスト付き"
  helperText="最大500文字まで入力できます"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`} />
      </VariantGroup>

      {/* 無効状態 */}
      <VariantGroup title="無効状態" description="無効化と読み取り専用">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Textarea
            label="無効なテキストエリア"
            value={disabledValue}
            disabled
            rows={3}
          />
          <Textarea
            label="読み取り専用"
            value="これは読み取り専用のテキストです"
            readOnly
            rows={3}
            helperText="このテキストエリアは編集できません"
          />
        </div>
        <CodeBlock code={`<Textarea
  label="無効なテキストエリア"
  value="無効な状態のテキスト"
  disabled
/>`} />
      </VariantGroup>

      {/* リサイズオプション */}
      <VariantGroup title="リサイズオプション" description="テキストエリアのリサイズ設定">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Textarea
            label="リサイズなし"
            placeholder="リサイズできません"
            value={noResizeValue}
            onChange={(e) => setNoResizeValue(e.target.value)}
            resize="none"
            rows={4}
            helperText="resize='none'"
          />
          <Textarea
            label="縦方向のみリサイズ"
            placeholder="縦方向にのみリサイズできます"
            resize="vertical"
            rows={4}
            helperText="resize='vertical' (デフォルト)"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
          <Textarea
            label="横方向のみリサイズ"
            placeholder="横方向にのみリサイズできます"
            resize="horizontal"
            rows={4}
            helperText="resize='horizontal'"
          />
          <Textarea
            label="両方向リサイズ"
            placeholder="両方向にリサイズできます"
            resize="both"
            rows={4}
            helperText="resize='both'"
          />
        </div>
        <CodeBlock code={`<Textarea
  resize="none"        // リサイズなし
  resize="vertical"    // 縦方向のみ（デフォルト）
  resize="horizontal"  // 横方向のみ
  resize="both"        // 両方向
/>`} />
      </VariantGroup>

      {/* APIリファレンス */}
      <VariantGroup title="Props API" description="利用可能なプロパティ一覧">
        <div className="bg-primitive-neutral-50 p-4 rounded-lg w-full">
          <h4 className="font-medium text-primitive-neutral-900 mb-3">TextareaProps</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>基本プロパティ:</strong>
              <ul className="mt-2 space-y-1 text-primitive-neutral-600">
                <li><code>label?: string</code> - ラベルテキスト</li>
                <li><code>error?: string</code> - エラーメッセージ</li>
                <li><code>helperText?: string</code> - ヘルパーテキスト</li>
                <li><code>resize?: &apos;none&apos; | &apos;vertical&apos; | &apos;horizontal&apos; | &apos;both&apos;</code></li>
              </ul>
            </div>
            <div>
              <strong>継承プロパティ:</strong>
              <ul className="mt-2 space-y-1 text-primitive-neutral-600">
                <li><code>React.TextareaHTMLAttributes</code></li>
                <li><code>placeholder, value, onChange, rows, cols</code></li>
                <li><code>disabled, readOnly, required</code></li>
                <li><code>className, style, id</code></li>
              </ul>
            </div>
          </div>
        </div>
      </VariantGroup>
    </ComponentSection>
  )
}
