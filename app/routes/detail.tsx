import type { Route } from './+types/detail';

export default function Detail({ params }: Route.ComponentProps) {
  return (
    <>
      <p>detail {params?.id}</p>
    </>
  );
}
