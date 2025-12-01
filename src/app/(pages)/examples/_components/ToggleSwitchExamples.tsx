/**
 * ToggleSwitch コンポーネントの使用例
 */

'use client'

import React, { useState } from 'react'
import ToggleSwitch from '@/app/_components/ui/ToggleSwitch'
import { ComponentSection, VariantGroup } from './ExampleHelpers'

export function ToggleSwitchExamples() {
  const [basicToggle, setBasicToggle] = useState(false)
  const [checkedToggle, setCheckedToggle] = useState(true)
  const [disabledOffToggle, setDisabledOffToggle] = useState(false)
  const [disabledOnToggle, setDisabledOnToggle] = useState(true)
  const [settingsToggle1, setSettingsToggle1] = useState(true)
  const [settingsToggle2, setSettingsToggle2] = useState(false)
  const [settingsToggle3, setSettingsToggle3] = useState(true)

  return (
    <ComponentSection
      title="ToggleSwitch"
      description="オン・オフを切り替えるトグルスイッチコンポーネント。設定画面などで使用します。"
    >
      {/* 基本の使用例 */}
      <VariantGroup
        title="基本の使用例"
        description="オフ状態とオン状態の基本的な表示"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={basicToggle}
              onChange={setBasicToggle}
              aria-label="基本トグル"
            />
            <span className="text-sm text-neutral-700">
              {basicToggle ? 'オン' : 'オフ'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={checkedToggle}
              onChange={setCheckedToggle}
              aria-label="チェック済みトグル"
            />
            <span className="text-sm text-neutral-700">
              {checkedToggle ? 'オン' : 'オフ'}
            </span>
          </div>
        </div>
      </VariantGroup>

      {/* 無効状態 */}
      <VariantGroup
        title="無効状態"
        description="disabled状態のトグルスイッチ"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={disabledOffToggle}
              onChange={setDisabledOffToggle}
              disabled={true}
              aria-label="無効オフトグル"
            />
            <span className="text-sm text-neutral-500">無効状態（オフ）</span>
          </div>

          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={disabledOnToggle}
              onChange={setDisabledOnToggle}
              disabled={true}
              aria-label="無効オントグル"
            />
            <span className="text-sm text-neutral-500">無効状態（オン）</span>
          </div>
        </div>
      </VariantGroup>

      {/* 実際の設定画面風 */}
      <VariantGroup
        title="設定画面での使用例"
        description="実際の設定画面のような表示"
      >
        <div className="space-y-6 max-w-md w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">通知を受け取る</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                新しいメッセージが届いた時に通知を表示します
              </div>
            </div>
            <ToggleSwitch
              checked={settingsToggle1}
              onChange={setSettingsToggle1}
              aria-label="通知設定"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">ダークモード</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                画面を暗いテーマで表示します
              </div>
            </div>
            <ToggleSwitch
              checked={settingsToggle2}
              onChange={setSettingsToggle2}
              aria-label="ダークモード設定"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">自動保存</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                作業内容を自動的に保存します
              </div>
            </div>
            <ToggleSwitch
              checked={settingsToggle3}
              onChange={setSettingsToggle3}
              aria-label="自動保存設定"
            />
          </div>
        </div>
      </VariantGroup>

      {/* カスタムスタイル */}
      <VariantGroup
        title="カスタムスタイル"
        description="カスタムクラスを適用したトグルスイッチ"
      >
        <div className="flex items-center gap-3">
          <ToggleSwitch
            checked={basicToggle}
            onChange={setBasicToggle}
            className="ring-red-200 focus:ring-red-200"
            aria-label="カスタムスタイルトグル"
          />
          <span className="text-sm text-neutral-700">カスタムフォーカスリング</span>
        </div>
      </VariantGroup>

      {/* コード例 */}
      <VariantGroup
        title="実装例"
        description="ToggleSwitchコンポーネントの基本的な使い方"
      >
        <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm font-mono overflow-x-auto w-full">
          <pre>{`import ToggleSwitch from '@/components/ui/ToggleSwitch'

function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <div className="text-sm font-medium">通知を受け取る</div>
        <div className="text-xs text-neutral-500 mt-0.5">
          新しいメッセージが届いた時に通知を表示します
        </div>
      </div>
      <ToggleSwitch
        checked={notifications}
        onChange={setNotifications}
        aria-label="通知設定"
      />
    </div>
  )
}`}</pre>
        </div>
      </VariantGroup>
    </ComponentSection>
  )
}
