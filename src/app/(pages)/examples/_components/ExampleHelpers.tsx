/**
 * コンポーネントサンプル表示用のヘルパーコンポーネント
 */

import React from 'react'

interface ComponentSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const ComponentSection: React.FC<ComponentSectionProps> = ({
  title,
  description,
  children
}) => {
  return (
    <section className="mt-12 first:mt-0">
      <div>
        <h2 className="text-2xl font-bold text-primitive-neutral-900">
          {title}
        </h2>
        {description && (
          <p className="text-primitive-neutral-600 mt-2">{description}</p>
        )}
      </div>
      <div className="space-y-8 mt-6">
        {children}
      </div>
    </section>
  )
}

interface VariantGroupProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const VariantGroup: React.FC<VariantGroupProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="border border-primitive-neutral-200 rounded-lg p-6">
      <div>
        <h3 className="text-lg font-semibold text-primitive-neutral-800">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-primitive-neutral-600 mt-1">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-4">
        {children}
      </div>
    </div>
  )
}

interface CodeBlockProps {
  code: string
  language?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx'
}) => {
  return (
    <div className="mt-3">
      <pre className="bg-primitive-neutral-50 border border-primitive-neutral-200 rounded-md p-3 text-sm overflow-x-auto">
        <code className="text-primitive-neutral-800">
          {code}
        </code>
      </pre>
    </div>
  )
}

interface ExampleItemProps {
  title: string
  code: string
  children: React.ReactNode
}

export const ExampleItem: React.FC<ExampleItemProps> = ({
  title,
  code,
  children
}) => {
  return (
    <div className="border-l-4 border-primary pl-4">
      <h4 className="text-sm font-medium text-primitive-neutral-700">
        {title}
      </h4>
      <div className="mt-2">
        {children}
      </div>
      <div className="mt-2">
        <CodeBlock code={code} />
      </div>
    </div>
  )
}
