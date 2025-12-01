/**
 * 汎用ドロップダウンコンポーネント
 */

'use client'

import React, { ReactNode, useEffect, useRef, useState, useId, useCallback } from 'react'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react'
import { ChevronUpDownIcon, CheckIcon } from '@/app/_components/icons/SvgIcons'

export interface DropdownOption<T = any> {
  value: T
  label: string
  description?: string
  disabled?: boolean
  icon?: ReactNode
}

interface DropdownProps<T = any> {
  value: T
  onChange: (value: T) => void
  options: DropdownOption<T>[]
  placeholder?: string
  disabled?: boolean
  className?: string
  buttonClassName?: string
  optionsClassName?: string
  label?: string
  error?: string
  helperText?: string
  width?: string
  id?: string
  placement?: 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end'
  showDescriptionOnButton?: boolean
  // カスタムレンダリング関数
  renderOption?: (option: DropdownOption<T>, selected: boolean, active: boolean) => ReactNode
  renderButton?: (selectedOption: DropdownOption<T> | undefined, isOpen: boolean) => ReactNode
}

export default function Dropdown<T = any>({
  value,
  onChange,
  options,
  placeholder = "選択してください",
  disabled = false,
  className = "",
  buttonClassName = "",
  optionsClassName = "",
  label,
  error,
  helperText,
  width = "w-full",
  id,
  placement = "bottom-start",
  renderOption,
  renderButton,
  showDescriptionOnButton = false,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const generatedId = useId()

  // ユニークなIDを生成（idが提供されない場合、SSR対応）
  const fieldId = id || `dropdown-${generatedId}`

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift({ padding: 8 })],
    placement,
    whileElementsMounted: autoUpdate,
  })

  // refを安全にセットするためのコールバック
  const setRefs = useCallback((node: HTMLButtonElement | null) => {
    refs.setReference(node)
    buttonRef.current = node
  }, [refs.setReference])

  const selectedOption = options.find(option => option.value === value)

  const handleSelect = (option: DropdownOption<T>) => {
    if (option.disabled) return
    onChange(option.value)
    setIsOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        setIsOpen(!isOpen)
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        }
        break
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.floating.current &&
        !refs.floating.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, refs.floating])

  const defaultRenderButton = (selectedOption: DropdownOption<T> | undefined, isOpen: boolean) => (
    <button
      type="button"
      id={fieldId}
      ref={setRefs}
      onClick={() => !disabled && setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={`
        relative ${width} rounded-[var(--radius-md)] bg-[var(--color-form-background)] py-2 pl-3 pr-10 text-left border mt-1
        focus:outline-none focus:ring-2
        disabled:bg-[var(--color-form-background-disabled)] disabled:text-[var(--color-primitive-neutral-500)] hover:ring-[var(--color-brand-orange)] transition duration-100 ease
        ${disabled
          ? 'pointer-events-none border-[var(--color-form-border)]'
          : error
            ? 'cursor-default border-[var(--color-error)] focus:ring-[var(--color-error)] focus:border-[var(--color-error)]'
            : 'cursor-default border-[var(--color-form-border)] focus:ring-[var(--color-brand-orange)] focus:border-[var(--color-brand-orange)]'
        } ${buttonClassName}
      `}
    >
      <span className="flex items-center">
        {selectedOption?.icon && (
          <span className="mr-2 flex-shrink-0">
            {selectedOption.icon}
          </span>
        )}
        {!showDescriptionOnButton &&
          <span className={`block truncate ${selectedOption ? 'text-[var(--color-primitive-neutral-900)]' : 'text-[var(--color-form-placeholder)]'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        }
        {showDescriptionOnButton &&
          <div className="flex flex-col">
            <span className={`block truncate ${selectedOption ? 'text-[var(--color-primitive-neutral-900)]' : 'text-[var(--color-form-placeholder)]'}`}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="text-[11px] text-[var(--color-primitive-neutral-600)] truncate">
              {selectedOption?.description}
            </span>
          </div>
        }


      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon className="h-4 w-4 text-[var(--color-primitive-neutral-400)]" aria-hidden="true" />
      </span>
    </button>
  )

  const defaultRenderOption = (option: DropdownOption<T>, selected: boolean, active: boolean) => (
    <div className="flex items-center">
      {option.icon && (
        <span className="mr-2 flex-shrink-0">
          {option.icon}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
          {option.label}
        </span>
        {option.description && (
          <span className="block truncate text-xs text-primitive-neutral-500">
            {option.description}
          </span>
        )}
      </div>
      {selected && (
        <CheckIcon className="ml-2 h-4 w-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
      )}
    </div>
  )

  return (
    <div className={className}>
      {label && (
        <label htmlFor={fieldId} className="block text-sm font-medium text-[var(--color-primitive-neutral-700)]">
          {label}
        </label>
      )}

      <div className="relative">
        {renderButton ? renderButton(selectedOption, isOpen) : defaultRenderButton(selectedOption, isOpen)}

        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={`z-50 max-h-56 ${width} overflow-auto rounded-[var(--radius-md)] bg-[var(--color-card-background)] py-1 text-base shadow-[var(--elevation-3)] border border-[var(--color-card-border)] focus:outline-none sm:text-sm ${optionsClassName}`}
          >
            {options.map((option, optionIdx) => {
              const selected = option.value === value
              return (
                <button
                  type="button"
                  key={optionIdx}
                  onClick={() => handleSelect(option)}
                  disabled={option.disabled}
                  className={`relative w-full cursor-default select-none py-2 px-3 text-left transition duration-100 ease ${option.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-[var(--color-list-hover)]'
                    } ${selected ? 'bg-[var(--color-primitive-orange-50)]' : 'text-[var(--color-primitive-neutral-900)]'
                    }`}
                >
                  {renderOption
                    ? renderOption(option, selected, false)
                    : defaultRenderOption(option, selected, false)
                  }
                </button>
              )
            })}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-[var(--color-error)] whitespace-pre-wrap">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-[var(--color-primitive-neutral-400)] whitespace-pre-wrap">
          {helperText}
        </p>
      )}
    </div>
  )
}
