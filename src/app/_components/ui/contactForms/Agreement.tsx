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

import HeadlessLink from "@/app/_components/ui/HeadlessLink"
// import { Errors, Values } from '@/app/_types/contact';

interface Props {
  formPropaties: FormPropaties
}

export default function Agreement({ ...props }: Props) {
  const { required, type, itemNameEn, itemNameJa, errorMessages, defaultChecked } = props.formPropaties

  const errorMessage = errorMessages ? errorMessages[itemNameEn] : ""

  return (
    <div className="item_wrapper">
      {/* <div className="contact_annotation ">
        <p className="title c__common_text_primary u__bold">注意事項</p>
        <div className="content">
          <p className="c__common_text_primary">
            頂いた内容は土日祝を除いた3営業日以内にお戻し致しますが、
            <br className="u__sp_none" />
            お戻しが無い場合は誠に恐れ入りますが再度ご連絡を頂けますと幸いです。
            <br />
            <br />
            下記ご連絡にはお返事をしておりませんのでご容赦頂けますと幸いです。
          </p>

          <ol className="c__common_text_primary">
            <li>営業のご連絡</li>
            <li>登録系サイト登録依頼（明確な案件がある場合は例外とします）</li>
            <li>記載内容が不明瞭なお問い合わせ</li>
            <li>無償依頼</li>
          </ol>
        </div>
      </div> */}

      {/* <label className="c__contact_label required">{itemNameJa}</label> */}

      <p id={`${itemNameEn}ErrorMessage`} className={"c__error_message" + (errorMessage ? " active" : "")}>
        {errorMessage}
      </p>

      {/* <div className="privacy_field_wrapper ">
        <div className="form_field radio_buttons">
          <label className={"c__contact_label" + (required ? " required" : "")}>{itemNameJa}</label>
          <p className="terms_annotation">
            <HeadlessLink href="/terms" className="related_link_item c__external_link" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </HeadlessLink>
            を<wbr />
            ご一読ください。
          </p>
          <input type="checkbox" id={itemNameEn} name={itemNameEn} value="agreed" className="c__contact_checkbox" defaultChecked={defaultChecked} />
          <label className={`${itemNameEn}_label`} htmlFor={itemNameEn}>
            <span className="choice_dot"></span>
            同意する。
          </label>
        </div>
      </div> */}

      <div className="privacy_field_wrapper ">
        <div className="form_field radio_buttons">

          <label className={"c__contact_label block" + (required ? " required" : "")}>{itemNameJa}</label>


          <input type="checkbox" id={itemNameEn} name={itemNameEn} value="agreed" className="c__contact_checkbox" defaultChecked={defaultChecked} />
          <label className={`${itemNameEn}_label`} htmlFor={itemNameEn} onMouseOver={activateHoverCursor}
            onMouseOut={deactivateHoverCursor}>
            <span className="choice_dot"></span>
            <HeadlessLink href="/terms" className="related_link_item c__external_link underline" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </HeadlessLink>
            に<wbr />
            同意する
          </label>

        </div>
      </div>
    </div>
  )
}
