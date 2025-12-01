/**
 * HeadlessButton - ボタンの基本機能のみを提供するヘッドレスボタンコンポーネント
 * スタイリングは含まず、ボタンの基本機能のみを提供
 */

import React from 'react'
import { activateHoverCursor, deactivateHoverCursor } from './MouseStalker'

// HeadlessButtonのプロパティ
export interface HeadlessButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  defaultHover?: boolean
}

const HeadlessButton = React.forwardRef<HTMLButtonElement, HeadlessButtonProps>(({
  type = 'button',
  loading = false,
  disabled = false,
  children,
  defaultHover = true,
  onClick,
  onMouseOver,
  onMouseOut,
  ...rest
}, ref) => {
  const isDisabledOrLoading = disabled || loading

  const transitionStyle = defaultHover
    ? {
        // transition: '0.3s cubic-bezier(0.24, 1.4, 0.47, 1.3)',
      }
    : {}

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabledOrLoading) {
      activateHoverCursor()
      if (defaultHover) {
        // e.currentTarget.style.transform = 'scale(1.05)'
      }
    }
    if (onMouseOver) {
      onMouseOver(e)
    }
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabledOrLoading) {
      deactivateHoverCursor()
      if (defaultHover) {
        // e.currentTarget.style.transform = 'scale(1)'
      }
    }
    if (onMouseOut) {
      onMouseOut(e)
    }
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      tabIndex={isDisabledOrLoading ? -1 : undefined}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ ...transitionStyle, ...rest.style }}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

HeadlessButton.displayName = 'HeadlessButton'

export default HeadlessButton