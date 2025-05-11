import type { SearchResult } from '~/utils/types';
import SectionLoading from '~/components/SectionLoading';
import SectionError from '~/components/SectionError';
import GridLayout from '~/components/GridLayout';
import CardAnime from '~/components/CardAnime';

export default function SearchResult(props: SearchResult) {
  const { data, isLoading, isError } = props;

  if (isLoading)
    return (
      <div className="mt-50 z-0 w-full">
        <SectionLoading />
      </div>
    );
  if (isError)
    return (
      <div className="mt-50 z-0 w-full">
        <SectionError />
      </div>
    );
  if (!data?.length) return <SectionError customError="No matching results" />;

  return (
    <div className="mt-50 z-0 w-full">
      <GridLayout>
        {data?.map((item: any, index: number) => (
          <CardAnime item={item} key={index} />
        ))}
      </GridLayout>
    </div>
  );
}
