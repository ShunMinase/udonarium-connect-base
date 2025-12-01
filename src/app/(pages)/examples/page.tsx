'use client'

/**
 * UIコンポーネントサンプルページ
 * 全てのUIコンポーネントのバリアント、サイズ、状態を確認できるページ
 */

import React from 'react'
import Title from '@/app/_components/ui/Title'
import DevOnlyGuard from '@/app/_components/guards/DevOnlyGuard'
import { LinkExamples } from './_components/LinkExamples'
import { InputExamples } from './_components/InputExamples'
import { TitleExamples } from './_components/TitleExamples'
import { DropdownExamples } from './_components/DropdownExamples'
import { TextareaExamples } from './_components/TextareaExamples'
import { ToggleSwitchExamples } from './_components/ToggleSwitchExamples'
import HeadlessLink from '@/app/_components/ui/HeadlessLink'

export default function ComponentExamplesPage() {



  return (
    <DevOnlyGuard>
      <div className="min-h-screen bg-white">
        {/* ヘッダー */}
        <div className="bg-primary  py-8">
          <div className="container mx-auto px-4">
            <Title level={1} className="">
              UI Component Examples
            </Title>
            <p className=" text-lg mt-2">
              JOGMEC AI Frontend - UIコンポーネントライブラリ
            </p>
            <p className=" text-sm mt-2">
              すべてのコンポーネントのバリアント、サイズ、状態を確認できます
            </p>
          </div>
        </div>

        {/* コンテンツ */}
        <main className="container mx-auto px-4 py-8">
          {/* 目次 */}
          <nav className="p-6 bg-primitive-neutral-50 rounded-lg">
            <Title level={2} className="">目次</Title>
            <ul className="space-y-3 mt-4">
              <li>
                <HeadlessLink
                  href="#link"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary  rounded-full flex items-center justify-center text-sm font-medium text-white">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      Link / Button
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      統合Linkコンポーネント - ボタンとリンクを統一インターフェースで使い分け
                    </p>
                  </div>
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="#input"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary  rounded-full flex items-center justify-center text-sm font-medium text-white">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      Input
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      入力フィールド - テキスト入力とバリデーション
                    </p>
                  </div>
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="#textarea"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary  rounded-full flex items-center justify-center text-sm font-medium text-white">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      Textarea
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      テキストエリア - 複数行テキスト入力とリサイズ設定
                    </p>
                  </div>
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="#dropdown"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary  rounded-full flex items-center justify-center text-sm font-medium text-white">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      Dropdown
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      ドロップダウンメニュー - 選択肢リストとフィルタリング
                    </p>
                  </div>
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="#title"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      Title
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      タイトル・見出し - 階層レベルとスタイリング
                    </p>
                  </div>
                </HeadlessLink>
              </li>
              <li>
                <HeadlessLink
                  href="#toggle-switch"
                  className="flex items-start gap-3 p-3 bg-white rounded-md hover:bg-primitive-neutral-100 transition-colors text-primary hover:text-primary-hover no-underline block"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                    6
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg underline">
                      ToggleSwitch
                    </div>
                    <p className="text-sm text-primitive-neutral-600 mt-1">
                      トグルスイッチ - オン・オフの切り替え
                    </p>
                  </div>
                </HeadlessLink>
              </li>
            </ul>
          </nav>

          {/* コンポーネントサンプル */}
          <div className="mt-12">
            <section id="link" className="scroll-mt-8">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <h2 className="text-2xl font-bold ">Link / Button コンポーネント</h2>
                  </div>
                  <p className=" text-sm mt-2">統合Linkコンポーネント - ボタンとリンクの統一インターフェース</p>
                </div>
                <div className="p-6">
                  <LinkExamples />
                </div>
              </div>
            </section>

            <section id="input" className="scroll-mt-8 mt-16">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold ">Input コンポーネント</h2>
                  </div>
                  <p className=" text-sm mt-2">テキスト入力とバリデーション機能</p>
                </div>
                <div className="p-6">
                  <InputExamples />
                </div>
              </div>
            </section>

            <section id="textarea" className="scroll-mt-8 mt-16">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold ">Textarea コンポーネント</h2>
                  </div>
                  <p className=" text-sm mt-2">複数行テキスト入力とリサイズ設定</p>
                </div>
                <div className="p-6">
                  <TextareaExamples />
                </div>
              </div>
            </section>

            <section id="dropdown" className="scroll-mt-8 mt-16">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold ">Dropdown コンポーネント</h2>
                  </div>
                  <p className=" text-sm mt-2">選択肢リストとフィルタリング機能</p>
                </div>
                <div className="p-6">
                  <DropdownExamples />
                </div>
              </div>
            </section>

            <section id="title" className="scroll-mt-8 mt-16">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <h2 className="text-2xl font-bold ">Title コンポーネント</h2>
                  </div>
                  <p className=" text-sm mt-2">階層レベルとスタイリングパターン</p>
                </div>
                <div className="p-6">
                  <TitleExamples />
                </div>
              </div>
            </section>

            <section id="toggle-switch" className="scroll-mt-8">
              <div className="bg-white border border-primitive-neutral-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      6
                    </div>
                    <div>
                      <Title level={2} className="">
                        ToggleSwitch
                      </Title>
                      <p className=" text-sm mt-1">
                        オン・オフを切り替えるトグルスイッチコンポーネント
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ToggleSwitchExamples />
                </div>
              </div>
            </section>

          </div>

          {/* フッター */}
          <footer className="mt-16 pt-8 border-t border-primitive-neutral-200">
            <div className="text-center text-primitive-neutral-600">
              <p className="">
                新しいコンポーネントやバリアントを追加した場合は、
                <br />
                このページにサンプルを追加してください。
              </p>
              <p className="text-sm mt-2">
                📁 ファイル場所: <code className="bg-primitive-neutral-100 px-2 py-1 rounded text-xs">
                  /src/app/(pages)/examples/
                </code>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </DevOnlyGuard>
  )
}
