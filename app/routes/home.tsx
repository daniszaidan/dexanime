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
    <>
      <header className="w-full h-dvh flex items-center justify-center p-30">
        <div className="w-full h-full rounded-[50px] flex items-center justify-center overflow-hidden relative">
          <iframe
            src="https://www.youtube.com/embed/TEjHDF9QXTY?autoplay=1&mute=1&controls=0&loop=1&playlist=TEjHDF9QXTY&modestbranding=1&showinfo=0&rel=0"
            title="YouTube video background"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="aspect-video min-h-[150%] w-auto"
          />
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-[700] mb-5">
                Dex<span className="font-[400]">anime</span>
              </h1>
              <p className="mb-30">Anime Database Website</p>

              <Link to="/search?query=&page=1">
                <ButtonTitle className="cursor-pointer" title="Discover Now" />
              </Link>
            </div>
          </div>
          <span className="absolute bottom-15 text-center text-[12.5px]">
            Embedded YouTube videos are for <br /> non-commercial portfolio
            purposes.
          </span>
        </div>
      </header>
    </>
  );
}
