import type { Metadata, ResolvingMetadata } from 'next'
import { fetchFromMicroCMS } from '@/app/_hooks/fetch/useFetch';
import { composeMetaData, composeSiteTitle } from '@/app/_modules/seo';
import { WorkContent } from '@/app/_modules/microcms';
import Client from './_Client';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const { success, contents, errorInfo } = await fetchFromMicroCMS<WorkContent>({
    endpoint: "works",
    contentId: resolvedParams.id
  });

  function composeExcerpt(content: string | undefined, maxLength: number = 100): string {
    if (!content) return "";

    // HTMLタグを除去
    const textOnly = content.replace(/<[^>]*>/g, "");

    // 改行や余分な空白を除去
    const cleanText = textOnly.replace(/\s+/g, " ").trim();

    // 指定文字数で切り取り
    if (cleanText.length > maxLength) {
      return cleanText.substring(0, maxLength) + "...";
    }

    return cleanText;
  }

  return composeMetaData({
    title: composeSiteTitle(contents?.title || "作品詳細"),
    description: composeExcerpt(contents?.content, 200),
    pagePath: `/works/${resolvedParams.id}`,
    ogImageUrl: contents?.thumbnailImage?.url
  });
}

export default async function Page(props: Props) {
  const params = await props.params;
  return <Client id={params.id} />;
}