import ButtonTitle from '~/components/ButtonTitle';
import type { Route } from './+types/home';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dexanime' },
    { name: 'description', content: 'Discover Anime' },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <h1 className="text-5xl font-[700] mb-15">
        Dex<span className="font-[400]">anime</span>
      </h1>
      <p>Anime Database Website</p>

      <Link to="/search?query=&page=1">
        <ButtonTitle className="mt-30 cursor-pointer" title="Discover Now" />
      </Link>
    </div>
  );
}
