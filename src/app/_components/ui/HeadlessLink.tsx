"use client";

/**
 * HeadlessLink - ナビゲーション機能のみを提供するヘッドレスリンクコンポーネント
 * スタイリングは含まず、リンクのナビゲーション機能のみを提供
 */

import React from 'react'
import NextLink from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { gsap } from "gsap"
// import { scrollTo, scrollToSelector } from "@/app/_modules/screen"
import useTransition from '@/app/_hooks/useTransition'
import { activateHoverCursor, deactivateHoverCursor } from './MouseStalker'
import { LenisScrollOptions, useLenis } from '@/app/_hooks/useLenis'


// HeadlessLinkのプロパティ
export interface HeadlessLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: React.ReactNode
  disabled?: boolean
  defaultHover?: boolean
}

const HeadlessLink: React.FC<HeadlessLinkProps> = ({ href, children, disabled = false, defaultHover = true, onClick, ...rest }) => {

  const transition = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const lenis = useLenis()

  // Linkの場合のクリックハンドラー
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // disabled状態の場合は何もしない
    if (disabled) {
      e.preventDefault()
      return
    }

    // propsで渡された関数を実行
    if (onClick) {
      onClick(e)
    }

    // target="_blank"の場合は通常の遷移
    if (e.currentTarget.getAttribute('target') === '_blank') {
      return
    }

    // デフォルトの遷移をキャンセル
    e.preventDefault()

    // eのリンク先を取得
    const element = e.currentTarget
    const hrefValue = element.getAttribute('href')

    // console.log("handleLinkClick", { hrefValue, pathname });

    // 遷移先が存在しない場合は何もしない
    if (!hrefValue) {
      return
    }

    // リンク先をpathとhashに分割
    const hrefHash = getHash(hrefValue)
    let hrefWithoutHash = removeHash(hrefValue)

    // ハッシュのみのhref（#linkのような形式）の場合は現在のパスを使用
    if (hrefValue.startsWith('#') && hrefWithoutHash === '') {
      hrefWithoutHash = pathname
    }

    // 遷移先リンクにハッシュが存在した場合
    if (hrefHash) {
      // console.log("hrefHash", hrefHash);
      // console.log("hrefWithoutHash", hrefWithoutHash);
      // console.log("pathname", pathname);

      // 現在ページと遷移先が同じだった場合
      if (hrefWithoutHash === pathname) {
        console.log("same page with hash");

        lenis.lenisScrollTo("#" + hrefHash)
        return
      } else {
        // 現在ページと遷移先が異なっていた場合
        console.log("different page with hash");

        navigate(hrefValue, hrefHash)
        return
      }
    }

    // ハッシュが存在せず、現在ページと遷移先が同じだった場合
    if (hrefWithoutHash === pathname) {
      lenis.lenisScrollTo(0)
      return
    }

    // その他の場合は普通に遷移
    navigate(hrefValue)
  }

  function navigate(href: string, hash?: string, options?: LenisScrollOptions) {
    transition.start()

    const tl = gsap.timeline()
    tl.to('.transition_container', {
      x: -10,
      y: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
      overwrite: true
    })

    // 遷移までの時間を稼ぐ
    setTimeout(() => {

      router.push(href)

      // ハッシュがある場合は、ページ遷移後にスクロール
      if (hash) {
        // ページの完全なレンダリングを待つ
        setTimeout(() => {
          lenis.lenisScrollTo("#" + hash, options)
        }, 800)
      }
    }, 300)
  }

  function getHash(pathname: string) {
    return pathname.indexOf('#') !== -1 ? pathname.split('#')[1] : ''
  }

  function removeHash(pathname: string) {
    return pathname.split('#')[0]
  }

  const transitionStyle = defaultHover
    ? {
      // transition: '0.3s cubic-bezier(0.24, 1.4, 0.47, 1.3)',
    }
    : {}

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    activateHoverCursor()
    if (defaultHover) {
      // e.currentTarget.style.transform = 'scale(1.05)'
    }
    if (rest.onMouseOver) {
      rest.onMouseOver(e)
    }
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    deactivateHoverCursor()
    if (defaultHover) {
      // e.currentTarget.style.transform = 'scale(1)'
    }
    if (rest.onMouseOut) {
      rest.onMouseOut(e)
    }
  }

  return (
    <NextLink
      href={href}
      onClick={(e: any) => handleClick(e)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ ...transitionStyle, ...rest.style }}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export default HeadlessLink