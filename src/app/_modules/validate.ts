/*=======================================
  プロジェクト固有バリデーション
=======================================*/

import {
  ContactErrors,
  FormConfig,
  FormPropaties,
} from "../(pages)/contact/formConfigs";

export function validate(
  config: FormConfig,
  value: string,
  errors: ContactErrors,
  errorItems: Array<string>
) {
  const errorMessages = [];

  const formPropaties = config.formPropaties;

  if (formPropaties.required) {
    if (formPropaties.type !== "checkbox") {
      const err = validatePresence(formPropaties, value);
      if (err) {
        errorMessages.push(err);
      }
    }
  }

  if (formPropaties.maxLength) {
    const err = validateLength(formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  if (formPropaties.type === "radio" && formPropaties.choices) {
    const err = validateChoice(formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  if (formPropaties.type === "checkbox" && formPropaties.choices) {
    const err = validateCheckbox(formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  if (formPropaties.type === "email") {
    const err = validateEmailFormat(formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  if (formPropaties.type === "agreement") {
    const err = validateAgreement(formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  const additionalValidations = config.additionalValidations || [];
  for (const validation of additionalValidations) {
    const err = validation(config.formPropaties, value);
    if (err) {
      errorMessages.push(err);
    }
  }

  if (errorMessages.length) {
    const itemNameEn = config.formPropaties.itemNameEn;
    const itemNameJa = config.formPropaties.itemNameJa;
    const composedMessage = composeErrorMessage(errorMessages);
    errors[itemNameEn] = composedMessage;
    errorItems.push(itemNameJa);
  }
}

// 名前
// export function validateName(itemNameEn: string, itemNameJa: string, value: string, errors: ContactErrors) {
//   const validations = [
//     () => validateLength(value, 60),
//     () => validatePresence(value, itemNameJa),
//   ];
//   // const composedMessage = validate(validations);
//   // errors[itemNameEn] = composedMessage;
//   // if (composedMessage) errors.errorItems.push(itemNameJa);
// }

// // 件名
// export function validateSubject(value: string, errors: ContactErrors) {
//   const itemName = "件名";
//   let msg: Array<String> = [];
//   msg.push(validateLength(value, 60))
//   const composedMessage = composeErrorMessage(msg)
//   errors.subject = composedMessage;
//   if (composedMessage) errors.errorItems.push(itemName);
// }

// // メールアドレス
// export function validateEmail(value: string, errors: ContactErrors) {
//   const itemName = "メールアドレス";
//   let msg: Array<String> = [];
//   if (value) {
//     msg.push(validateLength(value, 256))
//     msg.push(validateEmailFormat(value, itemName))
//   } else {
//     msg.push(validatePresence(value, itemName))
//   }
//   const composedMessage = composeErrorMessage(msg)
//   errors.email = composedMessage;
//   if (composedMessage) errors.errorItems.push(itemName);
// }

// // 詳細
// export function validateDetail(value: string, errors: ContactErrors) {
//   const itemName = "お問い合わせ内容";
//   let msg: Array<String> = [];
//   if (value) {
//     msg.push(validateLength(value, 2000))
//     msg.push(validateJapanese(value))
//   } else {
//     msg.push(validatePresence(value, itemName))
//   }
//   const composedMessage = composeErrorMessage(msg)
//   errors.detail = composedMessage;
//   if (composedMessage) errors.errorItems.push(itemName);
// }

// // 規約への同意
// export function validateAgreement(checked: boolean, errors: ContactErrors) {
//   const itemName = "プライバシーポリシー";
//   let msg: Array<String> = [];
//   if (!checked) {
//     msg.push("プライバシーポリシーへのご同意をお願いします。");
//   };
//   const composedMessage = composeErrorMessage(msg)
//   errors.agreement = composedMessage;
//   if (composedMessage) errors.errorItems.push(itemName);
// }

/*=======================================
  共通関数
=======================================*/

// 存在チェック
export function validatePresence(
  propaties: FormPropaties,
  value: string
): string {
  if (value?.length) return "";
  const itemName = propaties.itemNameJa;
  // return itemName + "をご入力ください。";
  return "未入力です。";
}
// maxlengthチェック
export function validateLength(
  propaties: FormPropaties,
  value: string
): string {
  if (!value) return "";
  if (!propaties.maxLength) return "";
  const maxlength = propaties.maxLength;
  if (value.length <= maxlength) return "";
  return maxlength + "文字以内でご入力ください。";
}
// 選択肢チェック
export function validateChoice(
  propaties: FormPropaties,
  value: string
): string {
  if (!propaties.choices) return "";
  const choices = propaties.choices;
  if (choices.includes(value)) return "";
  return "選択肢からお選びください。";
}
// チェックボックスチェック
export function validateCheckbox(
  propaties: FormPropaties,
  value: string
): string {
  if (!propaties.choices) return "";
  const choices = propaties.choices;

  const valueArray = value.split(",").map((item) => item.trim());

  // 選択肢にないものが含まれている場合、または空だった場合
  const invalidChoices = valueArray.filter((item) => !choices.includes(item));
  if (invalidChoices.length === 0) return "";
  return "選択肢からお選びください。";
}
// メールアドレス形式チェック
export function validateEmailFormat(
  propaties: FormPropaties,
  value: string
): string {
  if (!value) return "";
  if (value?.match(/.+@.+\..+/)) return "";
  const itemName = propaties.itemNameJa;
  return itemName + "の形式をご確認ください。";
}
// 日本語10文字バリデーション
export function validateJapanese(
  propaties: FormPropaties,
  value: string
): string {
  if (!value) return "";
  if (
    value?.match(
      /[ぁ-ゖァ-ヶ「」ー～〜、。・￥／＼（）！？＠：※々…〒↑→↓←一-龠]{10,}/
    )
  )
    return "";
  return "スパム対策のため、最低10文字以上の連続した日本語をご入力ください。";
}

// // 規約への同意
export function validateAgreement(propaties: FormPropaties, value: string) {
  if (value === "true") return "";
  const itemName = propaties.itemNameJa;
  return itemName + "へのご同意をお願いします。";
}

// 各項目のエラーメッセージについて、空要素を削除して結合
function composeErrorMessage(msg: Array<string>) {
  return msg.filter(Boolean).join("また、");
}
