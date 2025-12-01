/**
 * WorkGridItem - 作品グリッドのアイテムコンポーネント  return (
 */

import React, { JSX } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import HeadlessLink from '@/app/_components/ui/HeadlessLink'
import { WorkContent } from '@/app/_modules/microcms'
import { imgSrc } from '@/app/_modules/projectModules'

export interface WorkGridItemProps {
  work: WorkContent
  index?: number
  showScrollToWorks?: boolean
  className?: string
  worksLoading?: boolean
}

const WorkGridItem: React.FC<WorkGridItemProps> = ({
  work,
  index = 0,
  showScrollToWorks = false,
  className,
  worksLoading,
}) => {



  // カテゴリを「　」で結合する関数
  const renderCategories = (categories: WorkContent['category']): string => {
    if (!categories || categories.length === 0) return ''
    return categories.map(cat => `#${cat.name}`).join('　')
  }


  return (
    <div
      key={work.id}
      className={clsx(
        "relative rounded-[10px] overflow-hidden pointer-events-none before:content-[''] before:block before:pt-[56.25%]",
        className
      )}
      style={{
        animationName: !worksLoading ? 'fadeInUp' : 'none',
        animationDuration: !worksLoading ? '0.6s' : '0s',
        animationTimingFunction: !worksLoading ? 'ease-out' : 'ease',
        animationFillMode: !worksLoading ? 'forwards' : 'none',
        animationDelay: !worksLoading ? `${index * 0.08}s` : '0s',
        transform: 'translateY(-10px)',
        opacity: 0,
      }}
      // style={{
      //   animationName: 'fadeInUp',
      //   animationDuration: '0.6s',
      //   animationTimingFunction: 'ease-out',
      //   animationFillMode: 'forwards',
      //   animationDelay: `${index * 0.08}s`,
      //   transform: 'translateY(-20px)',
      //   opacity: 0,
      // }}
    >
      <Image
        src={imgSrc(work.thumbnailImage?.url)}
        alt={work.title}
        fill
        style={{ objectFit: 'cover' }}
        className="thumbnail absolute top-0 right-0 bottom-0 left-0 h-full object-cover"
      />

      {/* リンクオーバーレイ */}
      <HeadlessLink
        href={`/works/${work.id}`}
        className={clsx(
          "pointer-events-auto absolute top-0 left-0 block text-white bg-[#232323bb] opacity-0 w-full h-full flex flex-col items-center justify-center p-5 transition-all duration-700 hover:opacity-100 max-md:hover:opacity-0 p-1.5",
        )}
        title={work.title}
        defaultHover={false}
      >

        {/* タイトル */}
        <p className="text-sm font-bold max-md:hidden text-center line-clamp-2 pt-3">
          {work.title}
        </p>
        {/* カテゴリ */}
        <p className="text-[0.8em] max-md:hidden mt-2 line-clamp-2 break-all px-5 text-center">
          {renderCategories(work.category)}
        </p>

      </HeadlessLink>
    </div>
  )
}

export default WorkGridItem