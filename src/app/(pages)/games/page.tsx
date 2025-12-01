import Client from './_Client';
import { Metadata } from 'next';
import { composeMetaData, composeSiteTitle } from '@/app/_modules/seo';

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("ゲーム一覧"),
  pagePath: '/games'
});

export default function Page() {
  return <Client />;
}
