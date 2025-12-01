// "use client";

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import useTransition from "@/app/_hooks/useTransition"
import { splitText } from "@/app/_modules/string"
// import { Errors } from "@/app/(pages)/contact/Types";
import { addClass, qs, removeClass } from "@/app/_modules/qs"
import { FormPropaties } from "@/app/(pages)/contact/formConfigs"
import { activateHoverCursor, deactivateHoverCursor } from "../MouseStalker"
// import { Errors, Values } from '@/app/_types/contact';

interface Props {
  formPropaties: FormPropaties
  confirm?: boolean
}

export default function TextArea({ ...props }: Props) {
  const confirm = props.confirm
  const { required, itemNameEn, itemNameJa, maxLength, errorMessages, defaultValue, placeholder } = props.formPropaties

  const errorMessage = errorMessages ? errorMessages[itemNameEn] : ""

  function handleFocus(selector: string) {
    if (!selector) return
    const element = qs(selector)
    if (element) addClass(element, "active")
  }
  function handleBlur(selector: string) {
    if (!selector) return
    const element = qs(selector)
    if (element) removeClass(element, "active")
  }

  // テキストエリア自動伸縮
  function handleTextareaInput(e: any) {
    const offset = 2
    const target = e.target as HTMLTextAreaElement
    target.style.height = "auto"
    target.style.height = `${e.target.scrollHeight + offset}px`

    // テキストがはみ出ていたらdata-lenis-preventを付ける
    if (target.scrollHeight > target.clientHeight) {
      target.setAttribute("data-lenis-prevent", "true");
    }
    // テキストがはみ出ていなければdata-lenis-preventを外す
    else {
      target.removeAttribute("data-lenis-prevent");
    }
  }

  return (
    <div className="item_wrapper">
      <p id={`${itemNameEn}ErrorMessage`} className={"c__error_message" + (errorMessage ? " active" : "")}>
        {errorMessage}
      </p>

      {/* <div className="form_field textbox js__detail_wrapper">
        <label className="c__contact_label required">お問い合わせ内容</label>
        <textarea id="detail" name="detail" className="c__contact_textarea" maxLength={2000} placeholder="こちらに詳しいお問い合わせ内容をご入力ください" defaultValue={inputValues.detail} onFocus={() => handleFocus(".js__detail_wrapper")} onBlur={() => handleBlur(".js__detail_wrapper")} onInput={(e) => handleTextareaInput(e)} />
      </div> */}

      <div className="form_field">
        <label className={"c__contact_label" + (required ? " required" : "")}>{itemNameJa}</label>

        <div className="input_wrapper">
          {!confirm && (
            <textarea
              id={`${itemNameEn}`}
              name={`${itemNameEn}`}
              className="c__contact_textarea"
              maxLength={maxLength}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onFocus={() => handleFocus(`.js__${itemNameEn}_wrapper`)}
              onBlur={() => handleBlur(`.js__${itemNameEn}_wrapper`)}
              onInput={(e) => handleTextareaInput(e)}
              onMouseOver={activateHoverCursor}
              onMouseOut={deactivateHoverCursor}
            />
          )}
          {confirm && <p className="value_wrapper">{defaultValue || "-"}</p>}
        </div>
      </div>
    </div>
  )
}
