/**
 * SolidPrimary - Primary色のソリッドボタン/リンク
 */

import React from 'react'
import HeadlessLink, { HeadlessLinkProps } from '../HeadlessLink'
import HeadlessButton, { HeadlessButtonProps } from '../HeadlessButton'
import { ExternalLinkIcon } from '@/app/_components/icons/SvgIcons'
import { getStyledClasses, getWidthStyle, Size } from './styles'

// 共通のプロパティ
interface BaseProps {
  size?: Size
  width?: string | number
  className?: string
  children: React.ReactNode
}

// Link版のプロパティ
interface SolidPrimaryLinkProps extends BaseProps {
  as: 'link'
  href: string
  disabled?: boolean
  target?: string
  rel?: string
  onClick?: HeadlessLinkProps['onClick']
}

// Button版のプロパティ
interface SolidPrimaryButtonProps extends BaseProps {
  as: 'button'
  type?: HeadlessButtonProps['type']
  loading?: boolean
  disabled?: boolean
  onClick?: HeadlessButtonProps['onClick']
}

type SolidPrimaryProps = SolidPrimaryLinkProps | SolidPrimaryButtonProps

const SolidPrimary: React.FC<SolidPrimaryProps> = (props) => {
  const {
    size = 'md',
    width,
    className = '',
    children,
    ...rest
  } = props

  const isDisabledOrLoading = ('disabled' in props ? props.disabled : false) || ('loading' in props ? props.loading : false) || false

  const styledClasses = getStyledClasses('solidPrimary', size, width, isDisabledOrLoading, className)
  const style = getWidthStyle(width)

  // 外部リンクかどうかを判定
  const isExternalLink = props.as === 'link' && 'target' in props && props.target === '_blank'

  if (props.as === 'link') {
    const { href, disabled, onClick, target, rel, ...linkRest } = props
    return (
      <HeadlessLink
        href={href}
        disabled={disabled}
        onClick={onClick}
        target={target}
        rel={rel}
        className={styledClasses}
        style={style}
        {...linkRest}
      >
        {children}
        {isExternalLink && (
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        )}
      </HeadlessLink>
    )
  }

  const { type, loading, disabled, onClick, ...buttonRest } = props
  return (
    <HeadlessButton
      type={type}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={styledClasses}
      style={style}
      {...buttonRest}
    >
      {children}
    </HeadlessButton>
  )
}

export default SolidPrimary