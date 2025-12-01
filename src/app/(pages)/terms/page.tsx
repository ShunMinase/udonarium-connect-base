import { composeMetaData, composeSiteTitle, composeSiteUrl } from '@/app/_modules/seo';
import Client from './_Client';
import { Metadata, ResolvingMetadata } from 'next';
import { title } from 'process';
import { useServerFetch } from '@/app/_hooks/fetch/useServerFetch';
import { imgSrc } from '@/app/_modules/projectModules';
// import { apiParamsObj, composeApiUrl } from '@/app/_modules/url';
import { SITE_DESCRIPTION_BASE } from '@/app/_config/Constants';

type Props = {
}

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("Terms(利用規約)"),
  pagePath: "/terms",
});

export default function Page(props: Props) {
  return (
    <Client />
  );
}