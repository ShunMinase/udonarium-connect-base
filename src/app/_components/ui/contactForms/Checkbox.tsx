// "use client";

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import useTransition from "@/app/_hooks/useTransition"
import { splitText } from "@/app/_modules/string"
// import { Errors } from "@/app/(pages)/contact/Types";
import { addClass, qs, removeClass } from "@/app/_modules/qs"
import React from "react"
import { activateHoverCursor, deactivateHoverCursor } from "@/app/_components/ui/MouseStalker"
import { FormPropaties } from "@/app/(pages)/contact/formConfigs"
// import { Errors, Values } from '@/app/_types/contact';

interface Props {
  formPropaties: FormPropaties
  confirm?: boolean
}

export default function Checkbox({ ...props }: Props) {
  const confirm = props.confirm
  const { choices, itemNameEn, itemNameJa, errorMessages, defaultValue } = props.formPropaties

  // カンマ区切りの文字列を配列に変換
  const defaultValues = defaultValue?.split(",") || []

  const errorMessage = errorMessages ? errorMessages[itemNameEn] : ""

  return (
    <div className="item_wrapper">
      <p id={`${itemNameEn}ErrorMessage`} className={"c__error_message" + (errorMessage ? " active" : "")}>
        {errorMessage}
      </p>

      <div className="form_field">
        <label className="c__contact_label required">{itemNameJa}</label>

        <div className="input_wrapper">
          {!confirm && (
            <div className="form_field radio_buttons"
              onMouseOver={activateHoverCursor}
              onMouseOut={deactivateHoverCursor}
            >
              {choices?.map((choice: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <input
                      type="checkbox"
                      id={itemNameEn + index}
                      name={itemNameEn}
                      value={choice}
                      className="c__contact_radio category_radio"
                      defaultChecked={defaultValues.includes(choice)}
                    />
                    <label htmlFor={itemNameEn + index}>
                      <span className="choice_dot"></span>
                      {choice}
                    </label>
                  </React.Fragment>
                )
              })}
            </div>
          )}

          {confirm && <p className={"value_wrapper " + itemNameEn}>{defaultValue || "-"}</p>}
        </div>
      </div>
    </div>
  )
}
