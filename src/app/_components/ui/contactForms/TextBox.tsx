// "use client";

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import useTransition from "@/app/_hooks/useTransition"
import { splitText } from "@/app/_modules/string"
// import { Errors } from "@/app/(pages)/contact/Types";
import { addClass, qs, removeClass } from "@/app/_modules/qs"
import { FormPropaties } from "@/app/(pages)/contact/formConfigs"
import { activateHoverCursor, deactivateHoverCursor } from "@/app/_components/ui/MouseStalker"
// import { Errors, Values } from '@/app/_types/contact';

interface Props {
  // type: string
  // required: boolean
  // itemNameEn: string
  // itemNameJa: string
  // maxLength: number
  // defaultValue: string
  // placeholder: string
  // errorMessages: any | null
  formPropaties: FormPropaties
  confirm?: boolean
}

export default function TextBox({ ...props }: Props) {
  const confirm = props.confirm
  const { type, required, itemNameEn, itemNameJa, maxLength, errorMessages, defaultValue, placeholder } = props.formPropaties

  // const { type, required, itemNameEn, itemNameJa, maxLength, errorMessages, defaultValue, placeholder }: Props = props;

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

  const errorMessage = errorMessages ? errorMessages[itemNameEn] : ""

  return (
    <div className="item_wrapper">
      <p id={`${itemNameEn}ErrorMessage`} className={"c__error_message" + (errorMessages[itemNameEn] ? " active" : "")}>
        {errorMessage}
      </p>

      <div className="form_field textbox">
        <label className={"c__contact_label" + (required ? " required" : "")}>{itemNameJa}</label>

        <div className="input_wrapper">
          {!confirm && (
            <input
              type={type}
              id={`${itemNameEn}`}
              name={`${itemNameEn}`}
              className="c__contact_textbox"
              maxLength={maxLength}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onFocus={() => handleFocus(`.js__${itemNameEn}_wrapper`)}
              onBlur={() => handleBlur(`.js__${itemNameEn}_wrapper`)}
              onMouseOver={activateHoverCursor}
              onMouseOut={deactivateHoverCursor}
            />
          )}

          {confirm && <p className={"value_wrapper " + itemNameEn}>{defaultValue || "-"}</p>}

          {itemNameEn === "postalCode" && <span className="input_head">〒</span>}
        </div>
      </div>
    </div>
  )
}
