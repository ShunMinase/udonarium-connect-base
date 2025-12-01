/**
 * Link/Button コンポーネント用のスタイルユーティリティ
 */

import { clsx } from 'clsx'

export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Variant = 'solidPrimary' | 'solidSecondary' | 'outline' | 'text' | 'ghost'

// サイズクラス定義
export const sizeClasses = {
  xs: ['px-6', 'py-2', 'text-xs', 'sm:px-5', 'sm:py-1.5', 'sm:text-xs'],     // 12px base: x24px, y12px
  sm: ['px-8', 'py-3', 'text-sm', 'sm:px-6', 'sm:py-2', 'sm:text-xs'],       // 14px base: x28px, y14px  
  md: ['px-12', 'py-4', 'text-base', 'sm:px-10', 'sm:py-3', 'sm:text-sm'],   // 16px base: x50px, y16px
  lg: ['px-16', 'py-5', 'text-lg', 'sm:px-12', 'sm:py-4', 'sm:text-base']    // 18px base: x56px, y18px
}

// バリアントクラス定義
export const variantClasses = {
  solidPrimary: [
    'bg-primary',
    'text-black',
    'border-primary',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-primary'
  ],
  solidSecondary: [
    'bg-white',
    'text-black',
    'border-primary',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-primary'
  ],
  outline: [
    'bg-white',
    'text-black',
    'border-primary',
    'focus:ring-primary'
  ],
  text: [
    'text-black',
    'border-transparent',
    'bg-transparent',
    'focus:ring-primary',
    'underline',
    'decoration-solid',
    'underline-offset-[0.26em]'
  ],
  ghost: [
    'text-black',
    'border-transparent',
    'bg-transparent',
    'focus:ring-black'
  ],
}

// ベースクラス定義
export const getBaseClasses = (isDisabledOrLoading: boolean) => [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'rounded-[100vmax]',
  'border-2',
  'border-primary',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  // !isDisabledOrLoading && 'hover:scale-105',
  !isDisabledOrLoading && 'focus:outline-none focus:ring-2 focus:ring-offset-2',
  isDisabledOrLoading && 'pointer-events-none'
]

// 幅指定の処理
export const getWidthClasses = (width: string | number | undefined) => {
  if (!width) return ''
  return 'truncate' // テキストの省略を可能にする
}

// インラインスタイルでの幅指定（レスポンシブ対応）
export const getWidthStyle = (width: string | number | undefined): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    transition: 'all 0.3s cubic-bezier(0.24, 1.8, 0.61, 1)',
  }

  if (!width) return baseStyle

  const widthValue = typeof width === 'number' ? `${width}px` : width
  return {
    ...baseStyle,
    width: widthValue,
    minWidth: '0',
    // レスポンシブ対応
    '--tw-width-base': widthValue,
    '--tw-width-sm': `calc(${widthValue} * 0.9)`,
    '--tw-width-xs': `calc(${widthValue} * 0.8)`,
  } as React.CSSProperties
}

// 統合されたクラス生成関数
export const getStyledClasses = (
  variant: Variant,
  size: Size,
  width: string | number | undefined,
  isDisabledOrLoading: boolean,
  className?: string
) => {
  return clsx(
    getBaseClasses(isDisabledOrLoading),
    variantClasses[variant],
    sizeClasses[size],
    getWidthClasses(width),
    className
  )
}