import React from "react"
import { FormConfigs } from "./formConfigs"
import TextBox from "@/app/_components/ui/contactForms/TextBox"
import TextArea from "@/app/_components/ui/contactForms/TextArea"
import Checkbox from "@/app/_components/ui/contactForms/Checkbox"
import Agreement from "@/app/_components/ui/contactForms/Agreement"

type Props = {
  formConfigs: FormConfigs
  excludeFields?: string[]
  confirm?: boolean
}

/**
 * formConfigsの設定に基づいて自動でフォーム要素を生成するコンポーネント
 * 
 * 使い方:
 * 1. formConfigs.tsでフォーム設定を定義
 * 2. <FormGenerator formConfigs={formConfigs} /> でフォームを自動生成
 * 
 * @param formConfigs - フォーム設定オブジェクト（formConfigs.tsで定義）
 * @param excludeFields - 除外するフィールド名の配列（確認画面でagreementを除外する場合など）
 * @param confirm - 確認画面モードかどうか（trueの場合、各コンポーネントにconfirmプロパティを渡す）
 * 
 * @example
 * // 入力画面
 * <FormGenerator formConfigs={formConfigs} />
 * 
 * // 確認画面（agreementを除外）
 * <FormGenerator formConfigs={formConfigs} excludeFields={["agreement"]} confirm={true} />
 */
export default function FormGenerator({ formConfigs, excludeFields = [], confirm = false }: Props) {
  // formConfigsから除外フィールドを除いたエントリーを取得
  const entries = Object.entries(formConfigs).filter(
    ([key]) => !excludeFields.includes(key)
  )

  return (
    <>
      {entries.map(([key, config]) => {
        const { formPropaties } = config
        const { type } = formPropaties

        // typeに応じて適切なコンポーネントを返す
        switch (type) {
          case "text":
          case "email":
            return <TextBox key={key} formPropaties={formPropaties} confirm={confirm} />

          case "textarea":
            return <TextArea key={key} formPropaties={formPropaties} confirm={confirm} />

          case "checkbox":
            return <Checkbox key={key} formPropaties={formPropaties} confirm={confirm} />

          case "agreement":
            return <Agreement key={key} formPropaties={formPropaties} />

          default:
            console.warn(`Unknown form type: ${type} for field: ${key}`)
            return null
        }
      })}
    </>
  )
}
