/**
 * Titleコンポーネントのサンプル
 */

import React from 'react'
import Title from '@/app/_components/ui/Title'
import { ComponentSection, VariantGroup, ExampleItem } from './ExampleHelpers'

export const TitleExamples: React.FC = () => {
  const levels = [1, 2, 3, 4, 5, 6] as const

  return (
    <ComponentSection
      title="Title"
      description="タイトルコンポーネント - level（1-6）をサポートし、見出しレベルに応じたスタイリングを提供"
    >
      {/* レベル別サンプル */}
      <VariantGroup
        title="Heading Levels"
        description="利用可能な見出しレベルの一覧"
      >
        <div className="space-y-4 w-full">
          {levels.map((level) => (
            <ExampleItem
              key={level}
              title={`level={${level}} (h${level})`}
              code={`<Title level={${level}}>見出しレベル${level}</Title>`}
            >
              <Title level={level}>見出しレベル{level}</Title>
            </ExampleItem>
          ))}
        </div>
      </VariantGroup>

      {/* カスタムクラス付き */}
      <VariantGroup
        title="Custom Styling"
        description="カスタムスタイリングの例"
      >
        <div className="space-y-4 w-full">
          <ExampleItem
            title="カスタムクラス付き"
            code={`<Title level={2} className="text-primary">カスタムスタイル見出し</Title>`}
          >
            <Title level={2} className="text-primary">カスタムスタイル見出し</Title>
          </ExampleItem>

          <ExampleItem
            title="センタリング"
            code={`<Title level={3} className="text-center">中央揃えの見出し</Title>`}
          >
            <Title level={3} className="text-center">中央揃えの見出し</Title>
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* 実用例 */}
      <VariantGroup
        title="Practical Examples"
        description="実際の使用例"
      >
        <div className="space-y-6 w-full">
          <ExampleItem
            title="記事のタイトル構造"
            code={`<Title level={1}>メインタイトル</Title>
<Title level={2}>セクションタイトル</Title>
<Title level={3}>サブセクションタイトル</Title>`}
          >
            <div className="space-y-4">
              <Title level={1}>メインタイトル</Title>
              <Title level={2}>セクションタイトル</Title>
              <Title level={3}>サブセクションタイトル</Title>
            </div>
          </ExampleItem>

          <ExampleItem
            title="ナビゲーション構造"
            code={`<Title level={1}>JOGMEC AI</Title>
<Title level={2}>ダッシュボード</Title>
<Title level={3}>最近のチャット</Title>`}
          >
            <div className="space-y-3">
              <Title level={1}>JOGMEC AI</Title>
              <Title level={2}>ダッシュボード</Title>
              <Title level={3}>最近のチャット</Title>
            </div>
          </ExampleItem>
        </div>
      </VariantGroup>

      {/* サイズ比較 */}
      <VariantGroup
        title="Size Comparison"
        description="全レベルのサイズ比較"
      >
        <div className="w-full">
          <div className="bg-primitive-neutral-50 p-6 rounded-lg space-y-2">
            {levels.map((level) => (
              <div key={level} className="">
                <Title level={level}>レベル{level}の見出し</Title>
              </div>
            ))}
          </div>
        </div>
      </VariantGroup>
    </ComponentSection>
  )
}
