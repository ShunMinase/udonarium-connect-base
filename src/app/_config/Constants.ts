import { isProduction } from "../_modules/projectModules";

export const DEV_FRONTEND_URL = "http://localhost:3000";
export const PROD_FRONTEND_URL = "https://yoake-creative.com";

export const SITE_TITLE = "yoake creative";
export const SITE_FRONTEND_URL_BASE = frontendBase();
export const SITE_DESCRIPTION_BASE =
  "「企画の始まり」「新しい挑戦」「生まれ変わる」など始まりに不可欠なクリエイティブ。常にお客様の幸せを願うそんなお仕事が出来ればいいと思い、誠意活動しております。";
export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const DEFAULT_OGP_PATH = "/img/ogp.jpg";

// TODO: Google Analytics IDを設定する
export const GOOGLE_ANALYTICS_ID = "G-B";

// SNS URLs
export const X_URL = "https://x.com/YoakeCreative";
export const YOUTUBE_URL = "https://www.youtube.com/@YoakeCreative";

// microCMS設定（環境変数から取得）
export const MICROCMS_SERVICE_DOMAIN =
  process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "";
export const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "";

function frontendBase() {
  return isProduction() ? PROD_FRONTEND_URL : DEV_FRONTEND_URL;
}
