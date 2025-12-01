import { isProduction } from "../_modules/projectModules";

export const DEV_FRONTEND_URL = "http://localhost:3000";
export const PROD_FRONTEND_URL = "https://yoake-creative.com";

export const SITE_TITLE = "ユドコネベース";
export const SITE_CATCHPHRASE =
  "ユドナリウムコネクトで、次に遊ぶゲームを見つけよう";
export const SITE_FRONTEND_URL_BASE = frontendBase();
export const SITE_DESCRIPTION_BASE =
  "ユドナリウムコネクト対応のボードゲーム一覧サイト。お気に入りのボードゲームを見つけて、オンラインで楽しもう。";
export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const DEFAULT_OGP_PATH = "/img/ogp.jpg";

// TODO: Google Analytics IDを設定する
export const GOOGLE_ANALYTICS_ID = "G-B";

// 外部リンク
export const UDONARIUM_CONNECT_URL = "https://udonarium-connect.com/";
export const DISCORD_URL = "https://discord.gg/udonarium-connect";
export const DEVELOPER_TWITTER_URL = "https://x.com/BlastGames_bg";
export const DEVELOPER_WEBSITE_URL = "https://ryozen-sc.com/";

// microCMS設定（環境変数から取得）
export const MICROCMS_SERVICE_DOMAIN =
  process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "";
export const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "";

function frontendBase() {
  return isProduction() ? PROD_FRONTEND_URL : DEV_FRONTEND_URL;
}
