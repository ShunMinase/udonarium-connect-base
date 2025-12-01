/**
 * Dropdownコンポーネントの使用例
 */

'use client'

import React, { useState } from 'react'
import Dropdown, { type DropdownOption } from '@/app/_components/ui/Dropdown'
import Title from '@/app/_components/ui/Title'

interface User {
  id: number
  name: string
  email: string
  role: string
}

interface Status {
  value: string
  label: string
  color: string
}

export function DropdownExamples() {
  // 基本的な例
  const [selectedBasic, setSelectedBasic] = useState<string>('')
  const basicOptions: DropdownOption<string>[] = [
    { value: 'option1', label: 'オプション 1' },
    { value: 'option2', label: 'オプション 2' },
    { value: 'option3', label: 'オプション 3' },
  ]

  // オブジェクト選択の例
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const users: User[] = [
    { id: 1, name: '山田太郎', email: 'yamada@jogmec.go.jp', role: '管理者' },
    { id: 2, name: '佐藤花子', email: 'sato@jogmec.go.jp', role: '編集者' },
    { id: 3, name: '田中次郎', email: 'tanaka@jogmec.go.jp', role: 'ユーザー' },
  ]

  const userOptions: DropdownOption<User>[] = users.map(user => ({
    value: user,
    label: user.name,
    description: `${user.role} - ${user.email}`,
  }))

  // ステータス選択（アイコン付き）
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)
  const statusOptions: DropdownOption<Status>[] = [
    {
      value: { value: 'active', label: 'アクティブ', color: 'green' },
      label: 'アクティブ',
      icon: <div className="w-2 h-2 rounded-full bg-green-500" />
    },
    {
      value: { value: 'pending', label: '保留中', color: 'yellow' },
      label: '保留中',
      icon: <div className="w-2 h-2 rounded-full bg-yellow-500" />
    },
    {
      value: { value: 'inactive', label: '無効', color: 'red' },
      label: '無効',
      icon: <div className="w-2 h-2 rounded-full bg-primitive-red-500" />
    },
  ]

  // 無効化された例
  const [selectedDisabled, setSelectedDisabled] = useState<string>('')
  const disabledOptions: DropdownOption<string>[] = [
    { value: 'available1', label: '利用可能な選択肢 1' },
    { value: 'available2', label: '利用可能な選択肢 2' },
    { value: 'disabled1', label: '無効化された選択肢 1', disabled: true },
    { value: 'disabled2', label: '無効化された選択肢 2', disabled: true },
  ]

  // エラー状態の例
  const [selectedWithError, setSelectedWithError] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleErrorDropdownChange = (value: string) => {
    setSelectedWithError(value)
    if (!value) {
      setError('選択が必要です')
    } else {
      setError('')
    }
  }

  return (
    <section className="mb-16">
      <Title level={2} className="mb-8 text-2xl font-bold text-neutral-900">
        Dropdown
      </Title>

      <div className="space-y-8">
        {/* 基本的な使用例 */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            基本的な使用例
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="基本のドロップダウン"
              placeholder="選択してください"
            />
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="無効化されたドロップダウン"
              placeholder="選択してください"
              disabled
            />
          </div>
        </div>

        {/* オブジェクト選択 */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            オブジェクト選択（詳細情報付き）
          </Title>
          <div className="max-w-md">
            <Dropdown
              value={selectedUser}
              onChange={setSelectedUser}
              options={userOptions}
              label="ユーザー選択"
              placeholder="ユーザーを選択してください"
              width="w-full"
            />
            {selectedUser && (
              <div className="mt-3 p-3 bg-neutral-50 rounded-md">
                <p className="text-sm text-neutral-600">
                  選択されたユーザー: <strong>{selectedUser.name}</strong> ({selectedUser.role})
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Email: {selectedUser.email}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* アイコン付きドロップダウン */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            アイコン付きドロップダウン
          </Title>
          <div className="max-w-md">
            <Dropdown
              value={selectedStatus}
              onChange={setSelectedStatus}
              options={statusOptions}
              label="ステータス選択"
              placeholder="ステータスを選択してください"
              width="w-full"
            />
          </div>
        </div>

        {/* サイズバリエーション */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            幅のバリエーション
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="小 (w-32)"
              width="w-32"
            />
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="中 (w-48)"
              width="w-48"
            />
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="大 (w-full)"
              width="w-full"
            />
          </div>
        </div>

        {/* 配置オプション */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            配置オプション
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="左寄せ (bottom-start)"
              placement="bottom-start"
              width="w-full"
            />
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="中央 (bottom)"
              placement="bottom"
              width="w-full"
            />
            <Dropdown
              value={selectedBasic}
              onChange={setSelectedBasic}
              options={basicOptions}
              label="右寄せ (bottom-end)"
              placement="bottom-end"
              width="w-full"
            />
          </div>
        </div>

        {/* 一部無効化された選択肢 */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            一部無効化された選択肢
          </Title>
          <div className="max-w-md">
            <Dropdown
              value={selectedDisabled}
              onChange={setSelectedDisabled}
              options={disabledOptions}
              label="混在ドロップダウン"
              placeholder="選択してください"
              width="w-full"
            />
          </div>
        </div>

        {/* エラー状態 */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            エラー状態
          </Title>
          <div className="max-w-md">
            <Dropdown
              value={selectedWithError}
              onChange={handleErrorDropdownChange}
              options={basicOptions}
              label="必須ドロップダウン"
              placeholder="選択してください（必須）"
              error={error}
              width="w-full"
            />
          </div>
        </div>

        {/* カスタムレンダリング */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            カスタムレンダリング
          </Title>
          <div className="max-w-md">
            <Dropdown
              value={selectedUser}
              onChange={setSelectedUser}
              options={userOptions}
              label="カスタムボタンスタイル"
              placeholder="ユーザーを選択してください"
              width="w-full"
              renderButton={(selectedOption, isOpen) => (
                <button
                  className={`relative w-full cursor-default rounded-lg py-3 pl-4 pr-10 text-left shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-1000 ${isOpen
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                    }`}
                >
                  <span className="block truncate font-medium">
                    {selectedOption ? `👤 ${selectedOption.label}` : '👤 ユーザーを選択'}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </span>
                </button>
              )}
            />
          </div>
        </div>

        {/* コード例 */}
        <div className="space-y-4">
          <Title level={3} className="text-lg font-semibold text-neutral-800">
            使用例コード
          </Title>
          <div className="bg-neutral-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`import Dropdown, { DropdownOption } from '@/app/_components/ui/Dropdown'

// 基本的な使用例
const [selected, setSelected] = useState<string>('')
const options: DropdownOption<string>[] = [
  { value: 'option1', label: 'オプション 1' },
  { value: 'option2', label: 'オプション 2' },
]

<Dropdown
  value={selected}
  onChange={setSelected}
  options={options}
  label="ラベル"
  placeholder="選択してください"
  width="w-full"
/>

// オブジェクト選択
const [selectedUser, setSelectedUser] = useState<User | null>(null)
const userOptions: DropdownOption<User>[] = users.map(user => ({
  value: user,
  label: user.name,
  description: user.email,
  icon: <UserIcon className="w-4 h-4" />
}))

<Dropdown
  value={selectedUser}
  onChange={setSelectedUser}
  options={userOptions}
  label="ユーザー選択"
  width="w-full"
  placement="bottom-start"
/>

// カスタムレンダリング
<Dropdown
  renderButton={(option, isOpen) => <CustomButton />}
  renderOption={(option, selected) => <CustomOption />}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
