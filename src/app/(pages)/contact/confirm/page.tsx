"use client"

import PageTitle from "@/app/_components/headings/PageTitle"
import { generateRandomStringArray, nl2br } from "@/app/_modules/string"
import Image from "next/image"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState, useMemo } from "react"
import { ContactValues, ContactErrors, getFormConfigs, initContactValues } from "../formConfigs"
import { currentPageAtom } from "@/app/_jotai/GlobalAtom"
import { useAtom } from "jotai"
import HeadlessButton from "@/app/_components/ui/HeadlessButton"
import FormGenerator from "../FormGenerator"
import { getCategories } from "../getCategories"
import PrimaryHeading from "@/app/_components/headings/PrimaryHeading"

type Props = {}

export default function Confirm(props: Props) {
  const router = useRouter()



  
  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)
  useLayoutEffect(() => {
    setCurrentPageName("contact_confirm")
  }, [])

  const [values, setValues] = useState<ContactValues>(initContactValues())
  const [submitButtonText, setSubmitButtonText] = useState("内容を送信する") // 値格納用
  const [errorMessages, setErrorMessages] = useState<ContactErrors>({})
  const [categories, setCategories] = useState<string[]>()

  useEffect(() => {
    const cookieValues = Cookies.get("contactValues")
    if (cookieValues) {
      const val = JSON.parse(Cookies.get("contactValues") as string)
      setValues(val)
    } else {
      router.push("/contact")
    }

    // カテゴリーを取得
    getCategories().then(setCategories)
  }, [router])

  const formConfigs = useMemo(() => getFormConfigs(values, errorMessages, categories), [values, errorMessages, categories])

  async function handleSubmit(e: any) {
    e.preventDefault()

    const submitButton = e.currentTarget
    submitButton.classList.add("disabled")
    setSubmitButtonText("送信中...")

    const cookieValues = Cookies.get("contactValues")

    if (cookieValues) {
      const values = JSON.parse(Cookies.get("contactValues") as string)
      // const identifier = generateRandomStringArray();

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

        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString()
        })
        if (res.status === 200) {
          Cookies.remove("contactValues")
          router.push("/contact/submitted")
        } else {
          alert("お問い合わせの送信に失敗しました。大変恐れ入りますが、しばらく時間を置いてもう一度お試しください。")
          submitButton.classList.remove("disabled")
          setSubmitButtonText("送信")
        }
      } catch (e) {
        alert("お問い合わせの送信に失敗しました。大変恐れ入りますが、しばらく時間を置いてもう一度お試しください。")
        submitButton.classList.remove("disabled")
        setSubmitButtonText("送信")
      }

    }

  }

  return (
    <>
      <main id="p__contact_confirm" className="l__content_width">
        <div className="contact_noise_background"></div>

        <div className="contact_avobe_background"></div>

        <div className="contact_wrapper">

          <PrimaryHeading>お問い合わせ</PrimaryHeading>


          <div className="contact_inner w-full max-w-[720px] mx-auto">

            <p className="text-lg text-bold leading-[1.92] text-center u__use_wbr max-lg:text-left">
              企業さま・個人さま<wbr />問わず、<wbr />丁寧に<wbr />取り組ませて<wbr />いただいて<wbr />おります。
              <br />お気軽に<wbr />お問い合わせ<wbr />ください。
            </p>

            <div className="mt-19">

              <FormGenerator formConfigs={formConfigs} excludeFields={["agreement"]} confirm={true} />
            </div>
            
            <div className="button_wrapper mt-16">
              <HeadlessButton
                type="submit"
                id="submit"
                onClick={(e: any) => handleSubmit(e)}
                className="c__button_primary mx-auto block"
              >
                <span className="text">{submitButtonText}</span>
              </HeadlessButton>

              <HeadlessButton
                type="button"
                onClick={() => router.push("/contact")}
                className="c__button_primary mx-auto block mt-6"
              >
                <span className="text">修正する</span>
              </HeadlessButton>
            </div>

          </div>

        </div>

      </main>
    </>
  )
}
