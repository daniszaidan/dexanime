import type { Route } from './+types/home';
import Hero from '~/components/hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        deserunt, ipsum at mollitia, veniam inventore consequuntur ut eligendi
        aliquid quos, rerum hic laborum! Ad iste, repellendus modi eum mollitia
        quisquam?
      </p>
    </>
  );
}
