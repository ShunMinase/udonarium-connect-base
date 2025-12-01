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
}

export default function RadioButton({ ...props }: Props) {
  const { choices, itemNameEn, itemNameJa, errorMessages, defaultValue } = props.formPropaties

  const errorMessage = errorMessages ? errorMessages[itemNameEn] : ""

  return (
    <div className="item_wrapper">
      <p id={`${itemNameEn}ErrorMessage`} className={"c__error_message" + (errorMessage ? " active" : "")}>
        {errorMessage}
      </p>

      <div className="form_field">
        <label className="c__contact_label required">{itemNameJa}</label>

        <div className="input_wrapper">
          <div className="form_field radio_buttons">
            {choices?.map((choice: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={itemNameEn + index}
                    name={itemNameEn}
                    value={choice}
                    className="c__contact_radio category_radio"
                    defaultChecked={index === 0 || defaultValue === choice}
                  />
                  <label htmlFor={itemNameEn + index}>
                    <span className="choice_dot"></span>
                    {choice}
                  </label>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
