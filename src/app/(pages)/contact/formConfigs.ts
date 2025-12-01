import { validateJapanese } from "@/app/_modules/validate";

/**
 * お問い合わせフォームの値の型定義
 */
export interface ContactValues {
  organization: string;
  name: string;
  email: string;
  phoneNumber: string;
  // postalCode: string;
  // address: string;
  relatedURL: string;
  category: string;
  schedule: string;
  budget: string;
  detail: string;
  agreement: string;
}

/**
 * エラーメッセージの型定義
 */
export type ContactErrors = {
  [key: string]: string;
};

/**
 * フォーム設定全体の型定義
 */
export interface FormConfigs {
  [key: string]: FormConfig;
}

/**
 * 個別フォーム項目の設定の型定義
 */
export interface FormConfig {
  formPropaties: FormPropaties;
  additionalValidations?: ((
    propaties: FormPropaties,
    value: string
  ) => string)[];
}

/**
 * フォーム項目のプロパティの型定義
 */
export interface FormPropaties {
  type: "text" | "email" | "radio" | "textarea" | "checkbox" | "agreement";
  required: boolean;
  itemNameEn: string;
  itemNameJa: string;
  maxLength?: number;
  errorMessages: any | null;
  defaultValue?: string;
  defaultChecked?: boolean;
  placeholder?: string;
  choices?: string[];
  dummyValue?: string | boolean; // ダミーデータ用の値
}

/**
 * フォーム設定を生成する関数
 *
 * ここでフォーム項目を追加・削除・編集することで、
 * 入力画面と確認画面の両方に自動的に反映されます。
 *
 * @param initialValues - 初期値（Cookieから取得した値）
 * @param errorMessages - エラーメッセージ
 * @param categories - microCMSから取得したカテゴリー一覧（オプション）
 * @returns フォーム設定オブジェクト
 *
 * @example
 * // 新しいフィールドを追加する場合:
 * // 1. ContactValuesインターフェースに項目を追加
 * // 2. この関数内に設定を追加
 * // 3. FormGeneratorが自動的に対応するコンポーネントを生成
 */
export function getFormConfigs(
  initialValues: ContactValues,
  errorMessages: ContactErrors,
  categories?: string[]
): FormConfigs {
  return {
    organization: {
      formPropaties: {
        type: "text",
        required: false,
        itemNameEn: "organization",
        itemNameJa: "会社名または所属団体名",
        maxLength: 60,
        errorMessages: errorMessages,
        defaultValue: initialValues.organization || "",
        placeholder: "例）株式会社テスト",
        dummyValue: "株式会社テスト",
      },
    },
    name: {
      formPropaties: {
        type: "text",
        required: true,
        itemNameEn: "name",
        itemNameJa: "お名前",
        maxLength: 60,
        errorMessages: errorMessages,
        defaultValue: initialValues.name || "",
        placeholder: "田中太郎",
        dummyValue: "例）田中太郎",
      },
    },
    email: {
      formPropaties: {
        type: "email",
        required: true,
        itemNameEn: "email",
        itemNameJa: "メールアドレス",
        maxLength: 256,
        errorMessages: errorMessages,
        defaultValue: initialValues.email || "",
        placeholder: "例）xxxxxxxx@xxxxxxx.com",
        dummyValue: "xxxxxxxx@xxxxxxxx.com",
      },
    },
    category: {
      formPropaties: {
        type: "checkbox",
        required: true,
        itemNameEn: "category",
        itemNameJa: "ご相談内容",
        errorMessages: errorMessages,
        defaultValue: initialValues.category || "",
        choices: categories,
        dummyValue: true, // チェックボックスの場合はtrue
      },
    },
    schedule: {
      formPropaties: {
        type: "text",
        required: true,
        itemNameEn: "schedule",
        itemNameJa: "ご希望納期",
        maxLength: 60,
        errorMessages: errorMessages,
        defaultValue: initialValues.schedule || "",
        placeholder: "例）20xx年xx月xx日まで",
        dummyValue: "2025年6月30日まで",
      },
    },
    budget: {
      formPropaties: {
        type: "text",
        required: true,
        itemNameEn: "budget",
        itemNameJa: "ご希望費用",
        maxLength: 60,
        errorMessages: errorMessages,
        defaultValue: initialValues.budget || "",
        placeholder: "例）xx万円",
        dummyValue: "100,000円",
      },
    },
    phoneNumber: {
      formPropaties: {
        type: "text",
        required: false,
        itemNameEn: "phoneNumber",
        itemNameJa: "電話番号",
        maxLength: 13,
        errorMessages: errorMessages,
        defaultValue: initialValues.phoneNumber || "",
        placeholder: "例）000-0000-0000",
        dummyValue: "090-0000-0000",
      },
    },
    relatedURL: {
      formPropaties: {
        type: "text",
        required: false,
        itemNameEn: "relatedURL",
        itemNameJa: "WebサイトやSNS",
        maxLength: 512,
        errorMessages: errorMessages,
        defaultValue: initialValues.relatedURL || "",
        placeholder: "例）https://",
        dummyValue: "https://www.google.com/",
      },
    },
    // 以下の項目はコメントアウトされています。使用する場合はコメントを解除してください。
    // postalCode: {
    //   formPropaties: {
    //     type: "text",
    //     required: false,
    //     itemNameEn: "postalCode",
    //     itemNameJa: "郵便番号",
    //     maxLength: 8,
    //     errorMessages: errorMessages,
    //     defaultValue: initialValues.postalCode || "",
    //     placeholder: "000-0000",
    //   },
    // },
    // address: {
    //   formPropaties: {
    //     type: "text",
    //     required: false,
    //     itemNameEn: "address",
    //     itemNameJa: "ご住所",
    //     maxLength: 256,
    //     errorMessages: errorMessages,
    //     defaultValue: initialValues.address || "",
    //     placeholder: "例）〇〇県〇〇市〇〇町　建物名〇〇階",
    //   },
    // },
    detail: {
      formPropaties: {
        type: "textarea",
        required: true,
        itemNameEn: "detail",
        itemNameJa: "詳しいお問い合わせ内容",
        maxLength: 2000,
        errorMessages: errorMessages,
        defaultValue: initialValues.detail || "",
        placeholder: "こちらに詳しいご相談内容をご記入ください。",
        dummyValue:
          "こちらの件について、ご依頼させていただきたいのですがいかがでしょうか。よろしくお願いいたします。",
      },
      additionalValidations: [validateJapanese],
    },
    agreement: {
      formPropaties: {
        type: "agreement",
        required: true,
        itemNameEn: "agreement",
        itemNameJa: "プライバシーポリシー",
        errorMessages: errorMessages,
        defaultChecked: Boolean(initialValues.agreement || ""),
        placeholder: "",
        dummyValue: true,
      },
    },
  };
}

export function initContactValues(): ContactValues {
  return {
    organization: "",
    name: "",
    email: "",
    category: "",
    schedule: "",
    budget: "",
    phoneNumber: "",
    relatedURL: "",
    // postalCode: "",
    // address: "",
    detail: "",
    agreement: "",
  };
}
