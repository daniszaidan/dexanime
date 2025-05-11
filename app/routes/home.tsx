import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dexanime' },
    { name: 'description', content: 'Discover Anime' },
  ];
}

export default function Home() {
  return (
    <>
      <p>Home</p>
    </>
  );
}
