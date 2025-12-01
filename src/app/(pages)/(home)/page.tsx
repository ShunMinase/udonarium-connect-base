import Client from './_Client';
import { Metadata, ResolvingMetadata } from 'next';
import { composeMetaData, composeSiteTitle, composeSiteUrl } from '@/app/_modules/seo';

type Props = {
}

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle(""),
  pagePath: '/'
});
export default function Page(props: Props) {
  return (
    <Client />
  );
}