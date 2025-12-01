import { composeMetaData, composeSiteTitle, composeSiteUrl } from "@/app/_modules/seo"
import Client from "./_Client"
import { Metadata } from "next"
import { title } from "process"
import { getCategories } from "./getCategories"

type Props = {}

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("お問い合わせ"),
  pagePath: '/contact'
})

export default async function Page(props: Props) {
  const categories = await getCategories()
  return <Client categories={categories} />
}
