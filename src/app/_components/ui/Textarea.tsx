/**
 * テキストエリアコンポーネント（Headless UI使用）
 */

import React from 'react'
import { Field, Label, Textarea as HeadlessTextarea, Description } from '@headlessui/react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  resize = 'vertical',
  className = '',
  ...props
}) => {
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  }

  return (
    <Field className="w-full">
      {label && (
        <Label className="block text-sm font-medium text-primitive-neutral-700">
          {label}
        </Label>
      )}

      <HeadlessTextarea
        className={`
          w-full px-3 py-2 border rounded-md mt-1 bg-white
          focus:outline-none focus:ring-2
          disabled:bg-primitive-neutral-50 disabled:text-primitive-neutral-500
          data-[invalid]:border-error data-[invalid]:focus:ring-error data-[invalid]:focus:border-error
          placeholder:text-primitive-neutral-300
          ${resizeClasses[resize]}
          ${error
            ? 'border-error focus:ring-error focus:border-error'
            : 'border-primitive-neutral-300 focus:ring-primary focus:border-primary'
          }
          ${className}
        `}
        invalid={!!error}
        {...props}
      />

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

export default Textarea
