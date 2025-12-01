/**
 * アイコン付きの小さいボタンコンポーネント
 */

'use client'

import React from 'react'

interface TipButtonProps {
  onClick?: () => void
  icon: React.ReactNode
  children: React.ReactNode
  disabled?: boolean
  active?: boolean
  title?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  // 色の指定
  textColor?: string
  backgroundColor?: string
  hoverTextColor?: string
  hoverBackgroundColor?: string
  // アクティブ時の色
  activeTextColor?: string
  activeBackgroundColor?: string
}

export default function TipButton({
  onClick,
  icon,
  children,
  disabled = false,
  active = false,
  title,
  className = '',
  type = 'button',
  // デフォルトの色設定
  textColor = 'text-neutral-800',
  backgroundColor = 'bg-transparent',
  hoverTextColor = 'hover:text-neutral-800',
  hoverBackgroundColor = 'hover:bg-neutral-50',
  activeTextColor = 'text-neutral-600',
  activeBackgroundColor = 'hover:bg-neutral-50',
}: TipButtonProps) {
  const getColorClasses = () => {
    if (active) {
      return `${activeTextColor} ${activeBackgroundColor}`
    }
    return `${textColor} ${backgroundColor} ${hoverTextColor} ${hoverBackgroundColor}`
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-1 px-3 py-1 text-xs rounded-full transition-colors
        ${getColorClasses()}
        ${disabled ? 'opacity-50 pointer-events-none' : ''}
        ${className}
      `.trim()}
      title={title}
    >
      {icon}
      {children}
    </button>
  )
}
