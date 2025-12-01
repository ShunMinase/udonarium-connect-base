import { Metadata } from 'next';
import Client from './_Client';

export const metadata: Metadata = {
  title: '500 - Internal Server Error',
  description: 'サーバーエラーが発生しました。',
};

export default function InternalServerError() {
  return <Client />;
}