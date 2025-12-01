import Client from './_Client';
import { Metadata } from 'next';
import { composeMetaData, composeSiteTitle } from '@/app/_modules/seo';
import { MOCK_GAMES } from '@/app/_config/mockGames';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = MOCK_GAMES.find((g) => g.id === slug);

  if (!game) {
    return composeMetaData({
      title: composeSiteTitle("ゲームが見つかりません"),
      pagePath: `/games/${slug}`
    });
  }

  return composeMetaData({
    title: composeSiteTitle(game.title),
    pagePath: `/games/${slug}`,
    description: game.description
  });
}

export async function generateStaticParams() {
  return MOCK_GAMES.map((game) => ({
    slug: game.id,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const game = MOCK_GAMES.find((g) => g.id === slug);

  if (!game) {
    notFound();
  }

  return <Client game={game} />;
}
