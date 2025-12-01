import { composeMetaData, composeSiteTitle, composeSiteUrl } from "@/app/_modules/seo"
import Client from "./_Client"
import { Metadata } from "next"
import { title } from "process"

type Props = {}

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("お問い合わせ送信完了"),
  pagePath: "/contact/submitted"
})
export default function Page(props: Props) {
  return <Client />
}
