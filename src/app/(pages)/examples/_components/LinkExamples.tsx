/**
 * Linkコンポーネントのサンプル
 */

import React from 'react'
import SolidPrimary from '@/app/_components/ui/styledButton/SolidPrimaryButton'
import SolidSecondary from '@/app/_components/ui/styledButton/SolidSecondaryButton'
import Outline from '@/app/_components/ui/styledButton/OutlineButton'
import Text from '@/app/_components/ui/styledButton/TextButton'
import Ghost from '@/app/_components/ui/styledButton/GhostButton'
import HeadlessLink from '@/app/_components/ui/HeadlessLink'
import HeadlessButton from '@/app/_components/ui/HeadlessButton'
import { ComponentSection, VariantGroup, ExampleItem } from './ExampleHelpers'

export const LinkExamples: React.FC = () => {

  return (
    <ComponentSection
      title="Link"
      description="統合Linkコンポーネント - LinkとButtonを1つのインターフェースで使い分け。適切な要素選択でアクセシビリティとUXを向上。"
    >
      {/* 使い分けガイド */}
      <VariantGroup
        title="Usage Guide - Link vs Button"
        description="リンクとボタンの使い分け方法"
      >
        <div className="bg-primitive-neutral-50 p-6 rounded-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold text-lg mb-3 text-primary">📄 Link として使用</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">必須条件:</p>
                  <code className="text-sm bg-primitive-neutral-100 px-2 py-1 rounded">href</code> プロパティが必要
                </div>
                <div>
                  <p className="font-medium mb-1">用途:</p>
                  <ul className="text-sm space-y-1 text-primitive-neutral-700">
                    <li>• ページ間の移動</li>
                    <li>• 外部サイトへのリンク</li>
                    <li>• アンカーリンク（ページ内移動）</li>
                    <li>• ファイルダウンロード</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">コード例:</p>
                  <code className="text-xs block bg-primitive-neutral-100 p-2 rounded whitespace-pre">
                    {`<Link href="/about">About</Link>
<Link href="https://example.com" target="_blank">
  External
</Link>`}
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-secondary">
              <h4 className="font-semibold text-lg mb-3 text-secondary">🔘 Button として使用</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">必須条件:</p>
                  <code className="text-sm bg-primitive-neutral-100 px-2 py-1 rounded">as=&quot;button&quot;</code> プロパティが必要
                </div>
                <div>
                  <p className="font-medium mb-1">用途:</p>
                  <ul className="text-sm space-y-1 text-primitive-neutral-700">
                    <li>• フォーム送信</li>
                    <li>• JavaScript関数の実行</li>
                    <li>• モーダル・ドロワーの開閉</li>
                    <li>• データの操作（追加・削除等）</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">コード例:</p>
                  <code className="text-xs block bg-primitive-neutral-100 p-2 rounded whitespace-pre">
                    {`<Link as="button" onClick={handleClick}>
  Action
</Link>
<Link as="button" type="submit">
  Submit
</Link>`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h5 className="font-semibold text-amber-800 mb-2">💡 選択の指針</h5>
            <div className="text-sm text-amber-700 space-y-1">
              <p><strong>リンク:</strong> ユーザーが「どこかに移動する」と期待する場合</p>
              <p><strong>ボタン:</strong> ユーザーが「何かのアクションを実行する」と期待する場合</p>
              <p><strong>アクセシビリティ配慮:</strong> スクリーンリーダーが適切な要素として認識されます</p>
            </div>
          </div>
        </div>
      </VariantGroup>

      {/* バリアント別サンプル */}
      <VariantGroup
        title="Variants"
        description="利用可能なバリアントの一覧"
      >
        <div className="bg-primitive-neutral-100 p-6 rounded-lg">
          <ExampleItem
            title="solidPrimary"
            code={`<SolidPrimary as="link" href="#">リンク</SolidPrimary>`}
          >
            <SolidPrimary as="link" href="#" size="md">リンク</SolidPrimary>
          </ExampleItem>
          <ExampleItem
            title="solidSecondary"
            code={`<SolidSecondary as="link" href="#">リンク</SolidSecondary>`}
          >
            <SolidSecondary as="link" href="#" size="md">リンク</SolidSecondary>
          </ExampleItem>
          <ExampleItem
            title="outline"
            code={`<Outline as="link" href="#">リンク</Outline>`}
          >
            <Outline as="link" href="#" size="md">リンク</Outline>
          </ExampleItem>
          <ExampleItem
            title="text"
            code={`<Text as="link" href="#">リンク</Text>`}
          >
            <Text as="link" href="#" size="md">リンク</Text>
          </ExampleItem>
          <ExampleItem
            title="ghost"
            code={`<Ghost as="link" href="#">リンク</Ghost>`}
          >
            <Ghost as="link" href="#" size="md">リンク</Ghost>
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* ColorScheme サンプル */}
      <VariantGroup
        title="Color Schemes"
        description="背景色に応じたボタンのカラーバリエーション（white / orange）"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-blue-800 mb-2">🎨 colorScheme の使い分け</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <code className="bg-white px-2 py-1 rounded">colorScheme=&quot;white&quot;</code>: 白背景ページ用（デフォルト）</li>
              <li>• <code className="bg-white px-2 py-1 rounded">colorScheme=&quot;orange&quot;</code>: グラデーション/オレンジ背景用</li>
              <li>• SolidPrimary は常にグラデーション（colorScheme 指定不要）</li>
            </ul>
          </div>

          {/* 白背景用 */}
          <div className="bg-primitive-neutral-100 p-6 rounded-lg">
            <h5 className="font-medium text-primitive-neutral-700 mb-4">白背景用（colorScheme=&quot;white&quot; - デフォルト）</h5>
            <div className="space-y-4">
              <ExampleItem
                title="SolidPrimary（常にグラデーション）"
                code={`<SolidPrimary as="button">プライマリアクション</SolidPrimary>`}
              >
                <SolidPrimary as="button" size="md">プライマリアクション</SolidPrimary>
              </ExampleItem>
              <ExampleItem
                title="SolidSecondary（白背景 + オレンジテキスト）"
                code={`<SolidSecondary as="button" colorScheme="white">セカンダリ</SolidSecondary>`}
              >
                <SolidSecondary as="button" colorScheme="white" size="md">セカンダリ</SolidSecondary>
              </ExampleItem>
              <ExampleItem
                title="Outline（透明背景 + オレンジボーダー）"
                code={`<Outline as="button" colorScheme="white">詳細を見る</Outline>`}
              >
                <Outline as="button" colorScheme="white" size="md">詳細を見る</Outline>
              </ExampleItem>
              <ExampleItem
                title="Text（オレンジテキスト）"
                code={`<Text as="link" href="#" colorScheme="white">もっと見る</Text>`}
              >
                <Text as="link" href="#" colorScheme="white" size="md">もっと見る</Text>
              </ExampleItem>
            </div>
          </div>

          {/* グラデーション背景用 */}
          <div className="bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)] p-6 rounded-lg">
            <h5 className="font-medium text-white mb-4">グラデーション背景用（colorScheme=&quot;orange&quot;）</h5>
            <div className="space-y-4">
              <ExampleItem
                title="SolidPrimary（常にグラデーション）"
                code={`<SolidPrimary as="button">プライマリアクション</SolidPrimary>`}
              >
                <SolidPrimary as="button" size="md">プライマリアクション</SolidPrimary>
              </ExampleItem>
              <ExampleItem
                title="SolidSecondary（オレンジ背景 + 白テキスト）"
                code={`<SolidSecondary as="button" colorScheme="orange">セカンダリ</SolidSecondary>`}
              >
                <SolidSecondary as="button" colorScheme="orange" size="md">セカンダリ</SolidSecondary>
              </ExampleItem>
              <ExampleItem
                title="Outline（透明背景 + 白ボーダー）"
                code={`<Outline as="button" colorScheme="orange">詳細を見る</Outline>`}
              >
                <Outline as="button" colorScheme="orange" size="md">詳細を見る</Outline>
              </ExampleItem>
              <ExampleItem
                title="Text（白テキスト）"
                code={`<Text as="link" href="#" colorScheme="orange">もっと見る</Text>`}
              >
                <Text as="link" href="#" colorScheme="orange" size="md">もっと見る</Text>
              </ExampleItem>
            </div>
          </div>

          {/* 実践的な使用例 */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-amber-800 mb-2">💡 実践例</h5>
            <div className="text-sm text-amber-700 space-y-2">
              <p><strong>ヒーローセクション（グラデーション背景）:</strong></p>
              <code className="block bg-white p-2 rounded text-xs whitespace-pre">{`<section className="bg-gradient-to-r from-[var(--color-brand-gradient-start)] to-[var(--color-brand-gradient-end)]">
  <SolidSecondary as="link" href="/games" colorScheme="orange">
    ゲーム一覧
  </SolidSecondary>
  <Outline as="link" href="/about" colorScheme="orange">
    詳しく見る
  </Outline>
</section>`}</code>
              <p className="mt-2"><strong>通常セクション（白背景）:</strong></p>
              <code className="block bg-white p-2 rounded text-xs whitespace-pre">{`<section className="bg-white">
  <SolidPrimary as="button" onClick={handleSubmit}>
    送信する
  </SolidPrimary>
  <SolidSecondary as="button">キャンセル</SolidSecondary>
</section>`}</code>
            </div>
          </div>
        </div>
      </VariantGroup>

      {/* サイズ別サンプル */}
      <VariantGroup
        title="Sizes"
        description="利用可能なサイズの一覧"
      >
        <div className="bg-primitive-neutral-100 p-6 rounded-lg">
          <ExampleItem
            title="size='sm'"
            code={`<SolidPrimary as="link" href="#" size="sm">リンク</SolidPrimary>`}
          >
            <SolidPrimary as="link" href="#" size="sm">リンク</SolidPrimary>
          </ExampleItem>
          <ExampleItem
            title="size='md'"
            code={`<SolidPrimary as="link" href="#" size="md">リンク</SolidPrimary>`}
          >
            <SolidPrimary as="link" href="#" size="md">リンク</SolidPrimary>
          </ExampleItem>
          <ExampleItem
            title="size='lg'"
            code={`<SolidPrimary as="link" href="#" size="lg">リンク</SolidPrimary>`}
          >
            <SolidPrimary as="link" href="#" size="lg">リンク</SolidPrimary>
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* 外部リンク例 */}
      <VariantGroup
        title="External Links"
        description="別タブで開く外部リンクの例（target='_blank'でopen_in_newアイコンが表示）"
      >
        <div className="bg-primitive-neutral-100 p-6 rounded-lg">
          <ExampleItem
            title="外部リンク"
            code={`<SolidPrimary as="link" href="https://example.com" target="_blank">外部サイト</SolidPrimary>`}
          >
            <SolidPrimary as="link" href="https://example.com" size="md" target="_blank">外部サイト</SolidPrimary>
          </ExampleItem>

          <ExampleItem
            title="外部リンク（各バリアント）"
            code={`<SolidPrimary as="link" href="https://example.com" target="_blank">SolidPrimary</SolidPrimary>
<Outline as="link" href="https://example.com" target="_blank">Outline</Outline>
<Text as="link" href="https://example.com" target="_blank">Text</Text>
<Ghost as="link" href="https://example.com" target="_blank">Ghost</Ghost>`}
          >
            <div className="flex gap-2 flex-wrap">
              <SolidPrimary as="link" href="https://example.com" size="md" target="_blank">SolidPrimary</SolidPrimary>
              <Outline as="link" href="https://example.com" size="md" target="_blank">Outline</Outline>
              <Text as="link" href="https://example.com" size="md" target="_blank">Text</Text>
              <Ghost as="link" href="https://example.com" size="md" target="_blank">Ghost</Ghost>
            </div>
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* 全組み合わせサンプル */}
      <VariantGroup
        title="All Combinations"
        description="すべてのバリアントとサイズの組み合わせ"
      >
        <div className="bg-primitive-neutral-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {/* SolidPrimary */}
            <div className="space-y-3">
              <h5 className="font-medium text-primitive-neutral-700 capitalize">solidPrimary</h5>
              <SolidPrimary as="link" href="#" size="xs">solidPrimary xs</SolidPrimary>
              <SolidPrimary as="link" href="#" size="sm">solidPrimary sm</SolidPrimary>
              <SolidPrimary as="link" href="#" size="md">solidPrimary md</SolidPrimary>
              <SolidPrimary as="link" href="#" size="lg">solidPrimary lg</SolidPrimary>
            </div>
            {/* SolidSecondary */}
            <div className="space-y-3">
              <h5 className="font-medium text-primitive-neutral-700 capitalize">solidSecondary</h5>
              <SolidSecondary as="link" href="#" size="xs">solidSecondary xs</SolidSecondary>
              <SolidSecondary as="link" href="#" size="sm">solidSecondary sm</SolidSecondary>
              <SolidSecondary as="link" href="#" size="md">solidSecondary md</SolidSecondary>
              <SolidSecondary as="link" href="#" size="lg">solidSecondary lg</SolidSecondary>
            </div>
            {/* Outline */}
            <div className="space-y-3">
              <h5 className="font-medium text-primitive-neutral-700 capitalize">outline</h5>
              <Outline as="link" href="#" size="xs">outline xs</Outline>
              <Outline as="link" href="#" size="sm">outline sm</Outline>
              <Outline as="link" href="#" size="md">outline md</Outline>
              <Outline as="link" href="#" size="lg">outline lg</Outline>
            </div>
            {/* Text */}
            <div className="space-y-3">
              <h5 className="font-medium text-primitive-neutral-700 capitalize">text</h5>
              <Text as="link" href="#" size="xs">text xs</Text>
              <Text as="link" href="#" size="sm">text sm</Text>
              <Text as="link" href="#" size="md">text md</Text>
              <Text as="link" href="#" size="lg">text lg</Text>
            </div>
            {/* Ghost */}
            <div className="space-y-3">
              <h5 className="font-medium text-primitive-neutral-700 capitalize">ghost</h5>
              <Ghost as="link" href="#" size="xs">ghost xs</Ghost>
              <Ghost as="link" href="#" size="sm">ghost sm</Ghost>
              <Ghost as="link" href="#" size="md">ghost md</Ghost>
              <Ghost as="link" href="#" size="lg">ghost lg</Ghost>
            </div>
          </div>
        </div>
      </VariantGroup>

      {/* 幅指定とレスポンシブ対応 */}
      <VariantGroup
        title="Width Specification & Responsive"
        description="固定幅指定とレスポンシブ対応 - 画面幅に応じて自動縮小"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-blue-800 mb-2">📐 幅指定機能</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <code className="bg-white px-2 py-1 rounded">width</code> プロパティで固定幅を指定可能</li>
              <li>• 数値（px単位）または文字列（rem, %, vw等）で指定</li>
              <li>• レスポンシブ対応：画面幅に応じて自動で90%、80%に縮小</li>
              <li>• テキストが長い場合は自動で省略表示（...)</li>
            </ul>
          </div>

          <div className="bg-primitive-neutral-100 p-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 数値指定 */}
              <div>
                <h5 className="font-medium text-primitive-neutral-700 mb-3">数値指定（px単位）</h5>
                <div className="space-y-3">
                  <ExampleItem
                    title="幅120px"
                    code={`<SolidPrimary as="button" width={120}>120px Button</SolidPrimary>`}
                  >
                    <SolidPrimary as="button" size="md" width={120}>120px Button</SolidPrimary>
                  </ExampleItem>
                  <ExampleItem
                    title="幅200px"
                    code={`<SolidPrimary as="link" href="/about" width={200}>200px Link</SolidPrimary>`}
                  >
                    <SolidPrimary as="link" href="/about" size="md" width={200}>200px Link</SolidPrimary>
                  </ExampleItem>
                  <ExampleItem
                    title="幅300px（長いテキスト）"
                    code={`<SolidPrimary as="button" width={300}>Very Long Button Text Example</SolidPrimary>`}
                  >
                    <SolidPrimary as="button" size="md" width={300}>Very Long Button Text Example</SolidPrimary>
                  </ExampleItem>
                </div>
              </div>

              {/* 文字列指定 */}
              <div>
                <h5 className="font-medium text-primitive-neutral-700 mb-3">文字列指定（CSS単位）</h5>
                <div className="space-y-3">
                  <ExampleItem
                    title="rem単位"
                    code={`<SolidPrimary as="button" width="12rem">12rem Button</SolidPrimary>`}
                  >
                    <SolidPrimary as="button" size="md" width="12rem">12rem Button</SolidPrimary>
                  </ExampleItem>
                  <ExampleItem
                    title="パーセント"
                    code={`<SolidPrimary as="link" href="/portfolio" width="50%">50% Width Link</SolidPrimary>`}
                  >
                    <SolidPrimary as="link" href="/portfolio" size="md" width="50%">50% Width Link</SolidPrimary>
                  </ExampleItem>
                  <ExampleItem
                    title="vw単位"
                    code={`<SolidPrimary as="button" width="25vw">25vw Button</SolidPrimary>`}
                  >
                    <SolidPrimary as="button" size="md" width="25vw">25vw Button</SolidPrimary>
                  </ExampleItem>
                </div>
              </div>
            </div>
          </div>

          {/* バリアント×幅の組み合わせ */}
          <div className="bg-primitive-neutral-100 p-6 rounded-lg">
            <h5 className="font-medium text-primitive-neutral-700 mb-3">バリアント × 幅の組み合わせ</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ExampleItem
                title="Primary 150px"
                code={`<SolidPrimary as="button" width={150}>Primary</SolidPrimary>`}
              >
                <SolidPrimary as="button" size="md" width={150}>Primary</SolidPrimary>
              </ExampleItem>
              <ExampleItem
                title="Outline 150px"
                code={`<Outline as="button" width={150}>Outline</Outline>`}
              >
                <Outline as="button" size="md" width={150}>Outline</Outline>
              </ExampleItem>
              <ExampleItem
                title="Text 150px"
                code={`<Text as="link" href="/text" width={150}>Text Link</Text>`}
              >
                <Text as="link" href="/text" size="md" width={150}>Text Link</Text>
              </ExampleItem>
              <ExampleItem
                title="Ghost 150px"
                code={`<Ghost as="link" href="/ghost" width={150}>Ghost Link</Ghost>`}
              >
                <Ghost as="link" href="/ghost" size="md" width={150}>Ghost Link</Ghost>
              </ExampleItem>
            </div>
          </div>

          {/* レスポンシブデモ */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-amber-800 mb-3">📱 レスポンシブ動作デモ</h5>
            <p className="text-sm text-amber-700 mb-3">
              ブラウザの幅を変更して確認してください：
            </p>
            <div className="space-y-3">
              <ExampleItem
                title="レスポンシブボタン"
                code={`<SolidPrimary as="button" width={250} size="lg">Responsive Button (250px base)</SolidPrimary>`}
              >
                <SolidPrimary as="button" width={250} size="lg">Responsive Button (250px base)</SolidPrimary>
              </ExampleItem>
              <div className="text-xs text-amber-600 mt-2 space-y-1">
                <p>• デスクトップ: 250px</p>
                <p>• タブレット (640px以下): 250px × 0.9 = 225px</p>
                <p>• モバイル (480px以下): 250px × 0.8 = 200px</p>
              </div>
            </div>
          </div>
        </div>
      </VariantGroup>

      {/* 実用的な使い分け例 */}
      <VariantGroup
        title="Practical Usage Examples"
        description="実際のWebアプリケーションでの使い分け例"
      >
        <div className="space-y-6">
          {/* ナビゲーション系 */}
          <div className="bg-white p-4 rounded-lg border">
            <h5 className="font-semibold mb-3 text-primary">🧭 ナビゲーション系（Link使用）</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExampleItem
                title="ヘッダーメニュー"
                code={`<Text as="link" href="/about">About</Text>`}
              >
                <Text as="link" href="/about" size="md">About</Text>
              </ExampleItem>
              <ExampleItem
                title="外部リンク"
                code={`<Outline as="link" href="https://github.com" target="_blank" size="sm">GitHub</Outline>`}
              >
                <Outline as="link" href="https://github.com" target="_blank" size="sm">GitHub</Outline>
              </ExampleItem>
              <ExampleItem
                title="ドキュメントリンク"
                code={`<Ghost as="link" href="/docs">Documentation</Ghost>`}
              >
                <Ghost as="link" href="/docs" size="md">Documentation</Ghost>
              </ExampleItem>
              <ExampleItem
                title="戻るリンク"
                code={`<Ghost as="link" href="/list" size="sm">← 一覧に戻る</Ghost>`}
              >
                <Ghost as="link" href="/list" size="sm">← 一覧に戻る</Ghost>
              </ExampleItem>
            </div>
          </div>

          {/* アクション系 */}
          <div className="bg-white p-4 rounded-lg border">
            <h5 className="font-semibold mb-3 text-secondary">⚡ アクション系（Button使用）</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExampleItem
                title="フォーム送信"
                code={`<SolidPrimary as="button" type="submit">送信</SolidPrimary>`}
              >
                <SolidPrimary as="button" size="md" type="submit">送信</SolidPrimary>
              </ExampleItem>
              <ExampleItem
                title="データ削除"
                code={`<Outline as="button" onClick={() => confirm('削除しますか？')}>削除</Outline>`}
              >
                <Outline as="button" size="md" onClick={() => confirm('削除しますか？')}>削除</Outline>
              </ExampleItem>
              <ExampleItem
                title="モーダル表示"
                code={`<SolidSecondary as="button" onClick={() => alert('Modal!')}>詳細を見る</SolidSecondary>`}
              >
                <SolidSecondary as="button" size="md" onClick={() => alert('Modal!')}>詳細を見る</SolidSecondary>
              </ExampleItem>
              <ExampleItem
                title="API呼び出し"
                code={`<Text as="button">データを取得</Text>`}
              >
                <Text as="button" size="md">データを取得</Text>
              </ExampleItem>
            </div>
          </div>

          {/* 判断に迷う例 */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h5 className="font-semibold mb-3 text-amber-800">🤔 判断に迷いやすい例</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <strong>「お問い合わせ」:</strong>
                  <code className="ml-2 text-xs bg-white px-2 py-1 rounded">href=&quot;/contact&quot;</code>
                  <span className="ml-2 text-primitive-neutral-600">→ 別ページに移動するのでLink</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <strong>「ログアウト」:</strong>
                  <code className="ml-2 text-xs bg-white px-2 py-1 rounded">as=&quot;button&quot; onClick={`{logout}`}</code>
                  <span className="ml-2 text-primitive-neutral-600">→ 関数実行なのでButton</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <strong>「PDFダウンロード」:</strong>
                  <code className="ml-2 text-xs bg-white px-2 py-1 rounded">href=&quot;/api/pdf&quot; download</code>
                  <span className="ml-2 text-primitive-neutral-600">→ リソースへの移動なのでLink</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VariantGroup>

      {/* ヘッドレスコンポーネントの使用例 */}
      <VariantGroup
        title="🏗️ Headless Components"
        description="新しいヘッドレスアーキテクチャの使用例 - より柔軟なカスタマイゼーションが可能"
      >
        <div className="bg-blue-50 p-6 rounded-lg space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-blue-800">個別Variantコンポーネント</h4>
            <p className="text-sm text-blue-700 mb-4">
              各variantが独立したコンポーネントとして提供されており、より明示的で型安全な実装が可能です。
            </p>

            <div className="space-y-4">
              <ExampleItem
                title="SolidPrimaryコンポーネント"
                code={`import SolidPrimary from '@/app/_components/ui/SolidPrimary'

// Link版
<SolidPrimary as="link" href="/about" size="md">
  About
</SolidPrimary>

// Button版
<SolidPrimary as="button" size="md" onClick={handleClick}>
  Submit
</SolidPrimary>`}
              >
                <div className="flex gap-3">
                  <code className="text-xs bg-white px-2 py-1 rounded">SolidPrimary as=&quot;link&quot;</code>
                  <code className="text-xs bg-white px-2 py-1 rounded">SolidPrimary as=&quot;button&quot;</code>
                </div>
              </ExampleItem>

              <ExampleItem
                title="HeadlessLinkコンポーネント"
                code={`import HeadlessLink from '@/app/_components/ui/link/HeadlessLink'

<HeadlessLink 
  href="/custom" 
  className="custom-styles"
>
  完全にカスタムなリンク
</HeadlessLink>`}
              >
                <HeadlessLink
                  href="#"
                  className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded border-2 border-purple-300 transition-colors"
                >
                  カスタムスタイルのリンク
                </HeadlessLink>
              </ExampleItem>

              <ExampleItem
                title="HeadlessButtonコンポーネント"
                code={`import HeadlessButton from '@/app/_components/ui/link/HeadlessButton'

<HeadlessButton 
  className="custom-button-styles"
  onClick={handleSubmit}
>
  カスタムボタン
</HeadlessButton>`}
              >
                <HeadlessButton
                  className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded border-2 border-green-300 transition-colors"
                  onClick={() => alert('HeadlessButton clicked!')}
                >
                  カスタムスタイルのボタン
                </HeadlessButton>
              </ExampleItem>
            </div>
          </div>

          <div className="border-t border-blue-200 pt-4">
            <h5 className="font-medium text-blue-800 mb-2">アーキテクチャの利点</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>型安全性</strong>: 各variantが独立した型定義を持つ</li>
              <li>• <strong>カスタマイゼーション</strong>: HeadlessコンポーネントでUI部分を完全制御</li>
              <li>• <strong>再利用性</strong>: 機能とスタイルの分離により高い再利用性</li>
              <li>• <strong>テスタビリティ</strong>: 機能とUIを独立してテスト可能</li>
              <li>• <strong>後方互換性</strong>: 既存のLinkコンポーネントAPIは維持</li>
            </ul>
          </div>
        </div>
      </VariantGroup>
    </ComponentSection>
  )
}
