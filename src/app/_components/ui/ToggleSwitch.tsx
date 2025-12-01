/**
 * トグルスイッチコンポーネント
 */

'use client'

import React from 'react'

interface ToggleSwitchProps {
  /** スイッチの状態 */
  checked: boolean
  /** 状態変更時のコールバック */
  onChange: (checked: boolean) => void
  /** 無効状態 */
  disabled?: boolean
  /** アクセシビリティ用のラベル */
  'aria-label'?: string
  /** アクセシビリティ用の説明 */
  'aria-describedby'?: string
  /** カスタムクラス名 */
  className?: string
}

export default function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  className = '',
}: ToggleSwitchProps) {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`
        relative inline-flex w-10 h-6 rounded-full transition-colors focus:outline-none flex-shrink-0
        ${checked ? 'bg-primitive-blue-1000' : 'bg-neutral-200'}
        ${disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
        ${className}
      `}
    >
      <div
        className={`
          inline-block w-4 h-4 rounded-full bg-white shadow transform transition-transform m-1
          ${checked ? 'translate-x-4' : 'translate-x-0'}
        `}
      />
    </button>
  )
}
