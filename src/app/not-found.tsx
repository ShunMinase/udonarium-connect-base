import { Metadata } from 'next';
import Client from './(pages)/(errors)/_NotFound/_Client';
import { composeMetaData, composeSiteTitle } from './_modules/seo';

export const metadata: Metadata = composeMetaData({
  title: composeSiteTitle("404 - Page Not Found"),
  description: "お探しのページが見つかりませんでした。",
  pagePath: '/404'
});

export default function NotFound() {
  return <Client />;
}