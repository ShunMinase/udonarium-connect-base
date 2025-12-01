"use client"
// React
import { useEffect, useLayoutEffect, useState } from "react"
// 外部ライブラリ

// 内部ライブラリ
import { qs, qsAll, hasClass, addClass, removeClass, addClassAll, removeClassAll, toggleClass } from "@/app/_modules/qs"
import { join, nl2br } from "@/app/_modules/string"
import { scrollTo, scrollToSelector } from "@/app/_modules/screen"
import { commonAnimationObserver } from "@/app/_modules/ISObserver"
import Image from "next/image"
// コンポーネント
import HeadlessLink from "@/app/_components/ui/HeadlessLink"
// 定数
import Head from "next/head"
import { getParam } from "@/app/_modules/url"
import PageTitle from "@/app/_components/headings/PageTitle"
import TertiaryHeading from "@/app/_components/headings/TertiaryHeading"

import { currentPageAtom } from "@/app/_jotai/GlobalAtom"
import { useAtom } from "jotai"
import PrimaryHeading from "@/app/_components/headings/PrimaryHeading"

// 型定義

// 画像
// その他
type Props = {}
export default function Client(props: Props) {
  const [contactId, setContactId] = useState("")

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("contact_submitted")
  }, [])

  useEffect(() => {
    const param = getParam("contactId")
    if (param) {
      setContactId(param)
    }
  }, [])

  // アニメーション用
  useEffect(() => {
    const observer = commonAnimationObserver()
    return () => {
      observer?.disconnect()
    }
  }, [])


  return (
    <>
      <main id="p__contact_submitted" className="l__content_width">
        <div className="contact_noise_background"></div>

        <div className="contact_avobe_background"></div>

        <div className="contact_wrapper">

          <PrimaryHeading>お問い合わせ</PrimaryHeading>

          <div className="contact_inner w-full max-w-[720px] mx-auto">

            <h2 className="text-xl font-bold text-center tracking-wide">送信完了</h2>

            <p className="submitted_description contact_inner u__use_wbr text-center max-md:text-left leading-8">
              この度は<wbr />お問い合わせ<wbr />いただき<wbr />ありがとう<wbr />ございます。<br />
              お返事<wbr />まで<wbr />しばらく<wbr />お待ち<wbr />ください。<br />
              なお、<wbr />2～3日<wbr />経過<wbr />しても<wbr />お返事が<wbr />ない<wbr />場合は、<br />
              入力<wbr />いただいた<wbr />メール<wbr />アドレス<wbr />に<wbr />誤りが<wbr />ある<wbr />可能性が<wbr />ございます。<br />
              その際は、<wbr />お手数<wbr />ですが<wbr />再度<wbr />お問い合わせを<wbr />お願い<wbr />いたします。

              <HeadlessLink href="/" className="c__button_primary back_to_top font-normal">
                <span className="text">Topへ戻る</span>
              </HeadlessLink>
            </p>

          </div>


        </div>

      </main>
    </>
  )

}