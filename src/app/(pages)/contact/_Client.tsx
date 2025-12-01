"use client"
// React
import React, { useLayoutEffect, useRef } from "react"
import { useEffect, useState } from "react"
// 外部ライブラリ
import Cookies from "js-cookie"

// 内部ライブラリ
import { qs, qsAll, hasClass, addClass, removeClass, addClassAll, removeClassAll, toggleClass } from "@/app/_modules/qs"
import { generateRandomStringArray, join, nl2br, nodeListToArray } from "@/app/_modules/string"
import { scrollTo, scrollToSelector, scrollToScrollTarget } from "@/app/_modules/screen"
import { commonAnimationObserver } from "@/app/_modules/ISObserver"
import Image from "next/image"
import { validateLength, validatePresence, validate, validateJapanese } from "@/app/_modules/validate"
// コンポーネント
// 型定義
import { ContactValues, ContactErrors, getFormConfigs, initContactValues } from "./formConfigs"
// 定数
import { SITE_TITLE } from "@/app/_config/Constants"
// 画像
// その他
import InputDummyData from "./InputDummyData" // ダミーデータ入力用

import PageTitle from "@/app/_components/headings/PageTitle"

import { toggleAccordion } from "@/app/_modules/ui"
import { useRouter } from "next/navigation"


import { useAtom } from "jotai"
import { isDevelopment } from "@/app/_modules/projectModules"
import { currentPageAtom } from "@/app/_jotai/GlobalAtom"
import { useNavigate } from "@/app/_hooks/useNavigate"
import HeadlessButton from "@/app/_components/ui/HeadlessButton"
import FormGenerator from "./FormGenerator"
import { getCategories } from "./getCategories"
import PrimaryHeading from "@/app/_components/headings/PrimaryHeading"

type Props = {
  categories?: string[]
}

export default function Client({ categories }: Props) {
  /*=======================================
    初期化
  =======================================*/

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("contact")
  }, [])

  const router = useRouter()
  const navigate = useNavigate()

  const [errorItems, setErrorItems] = useState<Array<string>>([]) // ページ上部のエラー項目一覧格納用
  const [errorMessages, setErrorMessages] = useState<ContactErrors>({}) // 各項目のエラー詳細格納用
  const [submitButtonText, setSubmitButtonText] = useState("送信する") // 値格納用

  const initialValues = Cookies.get("contactValues") ? JSON.parse(Cookies.get("contactValues") as string) : initContactValues()

  const formConfigs = getFormConfigs(initialValues, errorMessages, categories)

  /*=======================================
    フォーム入力のCookie保存
  =======================================*/

  // フォーム初期化：Cookieの値をチェックボックスとテキストエリアに反映
  useEffect(() => {
    const formElement = document.querySelector('form[name="contact"]')
    if (!formElement) return

    // チェックボックスの初期状態を設定
    if (initialValues.category) {
      const selectedCategories = initialValues.category.split(",")
      const checkboxes = qsAll('input[name="category"]')
      checkboxes.forEach((checkbox: any) => {
        checkbox.checked = selectedCategories.includes(checkbox.value)
      })
    }

    // テキストエリアの高さを調整し、必要に応じてdata-lenis-preventを設定
    const textareas = qsAll('textarea')
    textareas.forEach((textarea: any) => {
      if (textarea.value) {
        const offset = 2
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight + offset}px`
        
        // テキストがはみ出ていたらdata-lenis-preventを付ける
        if (textarea.scrollHeight > textarea.clientHeight) {
          textarea.setAttribute("data-lenis-prevent", "true")
        }
      }
    })
  }, [])

  // フォーム要素が変更されたらCookieに保存
  useEffect(() => {
    const formElement = document.querySelector('form[name="contact"]')
    if (!formElement) return

    const handleChange = () => {
      const values = getValuesFromFormConfigs()
      Cookies.set("contactValues", JSON.stringify(values), { expires: 7 })
    }

    // 全てのinput, textarea, selectにイベントリスナーを追加
    formElement.addEventListener("input", handleChange)
    formElement.addEventListener("change", handleChange)

    return () => {
      formElement.removeEventListener("input", handleChange)
      formElement.removeEventListener("change", handleChange)
    }
  }, [formConfigs])

  /*=======================================
    バリデーション
  =======================================*/

  // 全てのバリデーションを実行（FormConfigsベース）
  function validateAll(values: ContactValues): ContactErrors | null {
    const errMessages: ContactErrors = {}
    const errItems: string[] = []

    // formConfigsから動的にバリデーションを実行
    Object.keys(formConfigs).forEach((key) => {
      const config = formConfigs[key]
      const value = values[key as keyof ContactValues]
      validate(config, value, errMessages, errItems)
    })

    // console.log("errMessages", errMessages);
    // console.log("errItems", errItems);

    setErrorMessages(errMessages)
    setErrorItems(errItems)
    return errItems.length ? errMessages : null
  }

  function getCheckboxValues(propatyName: string): string {
    const values = qsAll(`input[name="${propatyName}"]:checked`)
    // console.log("values", values)
    // カンマ区切りの文字列に変換
    const value = nodeListToArray(values)
      ?.map((item: any) => item.value)
      .join(",") || ""
    // const value = nodeListToArray(values)?.map((item: any) => item.value)
    // console.log("value", value)

    return value
  }

  // FormConfigsから値を取得する関数
  function getValuesFromFormConfigs(): ContactValues {
    const values: any = {}

    Object.keys(formConfigs).forEach((key) => {
      const config = formConfigs[key]
      const { type, itemNameEn } = config.formPropaties

      if (type === "checkbox") {
        values[key] = getCheckboxValues(itemNameEn)
      } else if (type === "agreement") {
        const element = qs(`#${itemNameEn}`)
        values[key] = element ? String(element.checked) : ""
      } else {
        const element = qs(`#${itemNameEn}`)
        values[key] = element ? element.value : ""
      }
    })

    return values as ContactValues
  }

  async function handleSubmit(e: any) {
    e.preventDefault()

    const submitButton = e.currentTarget
    submitButton.classList.add("disabled")

    const values = getValuesFromFormConfigs()

    const errors = validateAll(values)

    // console.log("errors", errors)

    if (errors == null) {
      setSubmitButtonText("送信中...")

      try {
        // formConfigsから送信データを自動生成（agreementは除外）
        const data: Record<string, string> = {}
        Object.entries(formConfigs).forEach(([key, config]) => {
          const { itemNameEn, type } = config.formPropaties
          // agreementは送信しない
          if (type !== "agreement" && values[itemNameEn as keyof ContactValues]) {
            data[itemNameEn] = values[itemNameEn as keyof ContactValues] as string
          }
        })
        data["form-name"] = "contact"

        // 件名を生成（Rubyのロジックと同じ）
        const organization = values.organization ? values.organization + " - " : ""
        const name = values.name + "様"
        const from = organization + name
        data["subject"] = `【${from}】${SITE_TITLE}へのお問い合わせ`

        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString()
        })

        if (res.status === 200) {
          // 送信成功：Cookieをリセットして完了画面へ遷移
          Cookies.remove("contactValues")
          navigate("/contact/submitted")
        } else {
          alert("お問い合わせの送信に失敗しました。大変恐れ入りますが、しばらく時間を置いてもう一度お試しください。")
          submitButton.classList.remove("disabled")
          setSubmitButtonText("送信する")
        }
      } catch (e) {
        alert("お問い合わせの送信に失敗しました。大変恐れ入りますが、しばらく時間を置いてもう一度お試しください。")
        submitButton.classList.remove("disabled")
        setSubmitButtonText("送信する")
      }
    } else {
      // バリデーションエラーの場合
      submitButton.classList.remove("disabled")
      setSubmitButtonText("送信する")

      // エラーメッセージが画面にセットされるのを一瞬待ってからスクロール
      setTimeout(() => {
        // scrollToSelector("#js__error_existence");
        scrollTo(0)
      }, 100)
    }
  }

  return (
    <>
      <main id="p__contact" className="l__content_width">

        <div className="contact_noise_background"></div>
        <div className="contact_avobe_background"></div>

        <div className="contact_wrapper">

          <PrimaryHeading>お問い合わせ</PrimaryHeading>

          <div className="contact_inner w-full max-w-[720px] mx-auto">


            <p className="text-lg text-bold leading-[1.92] text-center u__use_wbr max-lg:text-left">
              企業さま・個人さま<wbr />問わず、<wbr />丁寧に<wbr />取り組ませて<wbr />いただいて<wbr />おります。
              <br />お気軽に<wbr />お問い合わせ<wbr />ください。
            </p>


            <form name="contact" method="post" className="mt-19">
              {/* ==================== エラーメッセージ ==================== */}
              <p id="js__error_existence" className={"c__error_message all_error_messages" + (errorItems.length ? " active" : "")}>
                入力内容をご確認ください。
                <br />
                {errorItems.map((error: any, index: number) => {
                  return (
                    <span key={index} className="u__error_list">
                      {"・" + error}
                    </span>
                  )
                })}
              </p>

              <FormGenerator formConfigs={formConfigs} />

              <HeadlessButton
                // as="button"
                className="c__button_primary mx-auto block mt-20"
                type="submit"
                id="submit"
                onClick={(e: any) => handleSubmit(e)}
              // external={false}
              >
                <span className="text">{submitButtonText}</span>

              </HeadlessButton>
            </form>

            {/* 開発環境であればダミーデータ入力用のボタンを表示 */}
            {isDevelopment() && <InputDummyData formConfigs={formConfigs} />}




          </div>

        </div>




      </main>
    </>
  )
}
