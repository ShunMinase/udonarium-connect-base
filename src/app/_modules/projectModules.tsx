import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { DEFAULT_OGP_PATH, SITE_TITLE } from "@/app/_config/Constants";

// サムネURLの設定
export function imgSrc(imgSrc: string | undefined) {
  return imgSrc ? imgSrc : DEFAULT_OGP_PATH
}

export function initDate(dateString: string) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Tokyo');
  let date = dayjs(dateString).format('YYYY.MM.DD');
  if (date === "Invalid Date") {
    date = "";
  }
  return date;
}

export function twitterShareHref(titleArg: string, hashtagArg: string = ""): string {
  // 複数のハッシュタグはカンマ区切りで指定
  // const hashtags = "example,hashtag,anotherTag";

  // if (typeof window === 'undefined') return 'https://twitter.com'; // サーバーサイドでは空文字を返す
  const url = encodeURIComponent(window.location.href);
  const truncatedTitle = titleArg.length > 34 ? (titleArg.substring(0, 34) + "...") : titleArg;
  const title = encodeURIComponent(`${truncatedTitle}｜${SITE_TITLE} @RYOZEN_SC`);
  const hashtag = encodeURIComponent(hashtagArg);
  return `https://twitter.com/share?url=${url}&text=${title}&hashtags=${hashtag}`
}

export function facebookShareHref(titleArg: string, hashtagArg: string = ""): string {
  // const url = window.location.href;
  // const url = "https://webdesign-trends.net/entry/3632"
  // const url = "https://ryozenweb-v3.netlify.app"
  // const url = encodeURIComponent("https://ryozenweb-v3.netlify.app/creations");
  const url = encodeURIComponent(window.location.href);
  // const title = encodeURIComponent(`${titleArg}｜${SITE_TITLE} @RYOZEN_SC`);
  // const hashtag = encodeURIComponent(hashtagArg);
  return `http://www.facebook.com/share.php?u=${url}`
}


export function isDevelopment() {
  return process.env.NODE_ENV === "development";
}
export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function getCookieValue(key: string) {
  const cookies = document.cookie.split(';')
  const foundCookie = cookies.find(
    (cookie) => cookie.split('=')[0].trim() === key.trim()
  )
  if (foundCookie) {
    const cookieValue = decodeURIComponent(foundCookie.split('=')[1])
    return cookieValue
  }
  return ''
}