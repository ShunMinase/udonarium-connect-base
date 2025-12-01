/**
 * 入力フィールドコンポーネント（Headless UI使用）
 */

import React from 'react'
import { Field, Label, Input as HeadlessInput, Description } from '@headlessui/react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  prefix?: string
  suffix?: string
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  prefix,
  suffix,
  className = '',
  ...props
}) => {
  const hasPrefix = !!prefix
  const hasSuffix = !!suffix

  return (
    <Field className="w-full">
      {label && (
        <Label className="block text-sm font-medium text-primitive-neutral-700">
          {label}
        </Label>
      )}

      {(hasPrefix || hasSuffix) ? (
        <div className="relative flex items-stretch mt-1">
          {hasPrefix && (
            <div className="flex items-center px-3 bg-primitive-neutral-100 border border-r-0 border-primitive-neutral-300 rounded-l-md text-sm text-primitive-neutral-600">
              {prefix}
            </div>
          )}

          <HeadlessInput
            className={`
              flex-1 px-3 py-2 border bg-white
              focus:outline-none focus:ring-2 focus:z-10
              disabled:bg-primitive-neutral-50 disabled:text-primitive-neutral-500
              data-[invalid]:border-error data-[invalid]:focus:ring-error data-[invalid]:focus:border-error
              ${error
                ? 'border-error focus:ring-error focus:border-error'
                : 'border-primitive-neutral-300 focus:ring-primary focus:border-primary'
              }
              ${hasPrefix && hasSuffix ? 'rounded-none border-x-0' : ''}
              ${hasPrefix && !hasSuffix ? 'rounded-l-none border-l-0 rounded-r-md' : ''}
              ${!hasPrefix && hasSuffix ? 'rounded-r-none border-r-0 rounded-l-md' : ''}
              ${!hasPrefix && !hasSuffix ? 'rounded-md' : ''}
              ${className}
            `}
            invalid={!!error}
            {...props}
          />

          {hasSuffix && (
            <div className="flex items-center px-3 bg-primitive-neutral-100 border border-l-0 border-primitive-neutral-300 rounded-r-md text-sm text-primitive-neutral-600">
              {suffix}
            </div>
          )}
        </div>
      ) : (
        <HeadlessInput
          className={`
            w-full px-3 py-2 border rounded-md mt-1 bg-white
            focus:outline-none focus:ring-2
            disabled:bg-primitive-neutral-50 disabled:text-primitive-neutral-500
            data-[invalid]:border-error data-[invalid]:focus:ring-error data-[invalid]:focus:border-error
            ${error
              ? 'border-error focus:ring-error focus:border-error'
              : 'border-primitive-neutral-300 focus:ring-primary focus:border-primary'
            }
            ${className}
          `}
          invalid={!!error}
          {...props}
        />
      )}

      {error && (
        <Description className="mt-1 text-sm text-error whitespace-pre-wrap">
          {error}
        </Description>
      )}
      {helperText && !error && (
        <Description className="mt-1 text-sm text-primitive-neutral-400 whitespace-pre-wrap">
          {helperText}
        </Description>
      )}

    </Field>
  )
}

export default Input
