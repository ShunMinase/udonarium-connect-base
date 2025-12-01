/**
 * タイトルコンポーネント
 */

import React from 'react'

interface TitleProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const Title: React.FC<TitleProps> = ({ children, level = 1, className = '' }) => {
  const levelClasses = {
    1: 'text-2xl font-bold',
    2: 'text-xl font-bold',
    3: 'text-lg font-bold',
    4: 'text-base font-bold',
    5: 'text-sm font-bold',
    6: 'text-sm font-semibold'
  }

  const commonClassName = `${levelClasses[level]} ${className}`

  switch (level) {
    case 1:
      return <h1 className={commonClassName}>{children}</h1>
    case 2:
      return <h2 className={commonClassName}>{children}</h2>
    case 3:
      return <h3 className={commonClassName}>{children}</h3>
    case 4:
      return <h4 className={commonClassName}>{children}</h4>
    case 5:
      return <h5 className={commonClassName}>{children}</h5>
    case 6:
      return <h6 className={commonClassName}>{children}</h6>
    default:
      return <h1 className={commonClassName}>{children}</h1>
  }
}

export default Title
