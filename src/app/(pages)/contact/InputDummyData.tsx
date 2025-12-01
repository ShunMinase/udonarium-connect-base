import { qs, qsAll } from "@/app/_modules/qs"
import { FormConfigs } from "./formConfigs"

type Props = {
  formConfigs: FormConfigs
}

/**
 * formConfigsの設定に基づいて自動でダミーデータを生成するコンポーネント
 * 開発環境でのみ表示されます
 */
export default function InputDummyData({ formConfigs }: Props) {
  function handleClick() {
    Object.entries(formConfigs).forEach(([key, config]) => {
      const { formPropaties } = config
      const { type, itemNameEn, dummyValue } = formPropaties

      // dummyValueが設定されていない場合はスキップ
      if (dummyValue === undefined) return

      // typeに応じてダミーデータを設定
      switch (type) {
        case "text":
        case "email":
        case "textarea":
          qs(`#${itemNameEn}`).value = dummyValue as string
          break

        case "checkbox":
          // dummyValueがtrueの場合、最初のチェックボックスにチェックを入れる
          if (dummyValue === true) {
            const firstCheckbox = qs(`input[name="${itemNameEn}"]`)
            if (firstCheckbox) {
              firstCheckbox.checked = true
            }
          }
          break

        case "agreement":
          if (dummyValue === true) {
            qs(`#${itemNameEn}`).checked = true
          }
          break
      }
    })
  }

  function handleReset() {
    Object.entries(formConfigs).forEach(([key, config]) => {
      const { formPropaties } = config
      const { type, itemNameEn } = formPropaties

      // typeに応じてリセット
      switch (type) {
        case "text":
        case "email":
        case "textarea":
          qs(`#${itemNameEn}`).value = ""
          break

        case "checkbox":
          qsAll(`input[name="${itemNameEn}"]`).forEach((el: any) => (el.checked = false))
          break

        case "agreement":
          qs(`#${itemNameEn}`).checked = false
          break
      }
    })
  }

  return (
    <>
      <button onClick={handleClick} className="input_dummy_button">
        ここを押すとダミーデータを入力できます
      </button>
      <br />
      <button onClick={handleReset} className="input_dummy_button">
        ここを押すとフォームをリセットできます
      </button>
    </>
  )
}
