import type { Metadata } from 'next'
import { composeMetaData, composeSiteTitle } from '@/app/_modules/seo';
import Client from './_Client';

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("About"),
  description: "",
  pagePath: '/about'
});

export default function Page() {
  return <Client />;
}