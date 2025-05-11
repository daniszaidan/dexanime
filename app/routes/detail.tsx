import HeroLoading from '~/components/HeroLoading';
import type { Route } from './+types/detail';
import HeroError from '~/components/HeroError';
import { useDetailAnime } from '~/data/query';
import SectionHeroDetail from '~/components/SectionHeroDetail';
import Footer from '~/components/Footer';
import { extractURL } from '~/utils/utils';
import CardAnimeInfo from '~/components/CardAnimeInfo';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dexanime' },
    { name: 'description', content: 'Detail Anime' },
  ];
}

export default function Detail({ params }: Route.ComponentProps) {
  const url = extractURL(params?.id);
  const { data, isLoading, isError } = useDetailAnime(url?.id);

  if (isLoading) return <HeroLoading />;
  if (isError) return <HeroError />;
  return (
    <div className="bg-dark-primary">
      <SectionHeroDetail data={data!} />
      <section className="px-100 py-200 md:px-50 sm:px-30 md:py-100 sm:py-50">
        <div className="max-w-6xl mx-auto">
          <CardAnimeInfo data={data!} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
