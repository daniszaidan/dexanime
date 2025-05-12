import type { SearchResult } from '~/utils/types';
import SectionLoading from '~/components/SectionLoading';
import SectionError from '~/components/SectionError';
import GridLayout from '~/components/GridLayout';
import CardAnime from '~/components/CardAnime';
import ButtonIcon from '~/components/ButtonIcon';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function SearchResult(props: SearchResult) {
  const { data, isLoading, isError, page, pagination, handlePageChange } =
    props;

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

      {pagination && (
        <div className="w-full flex items-center justify-center gap-15 mt-50">
          <ButtonIcon
            disabled={page <= 1}
            onClick={() => handlePageChange(page - 1)}
            className="bg-white-30 hover:bg-white-45 w-[40px] h-[40px] cursor-pointer disabled:cursor-not-allowed disabled:bg-white-15"
            type="submit"
            icon={
              <ArrowLeftIcon className="w-[20px] h-[20px] text-white-100" />
            }
          />

          <span>
            Page {page} of {pagination.last_visible_page}
          </span>
          <ButtonIcon
            disabled={!pagination.has_next_page}
            onClick={() => handlePageChange(page + 1)}
            className="bg-white-45 w-[40px] h-[40px] cursor-pointer disabled:cursor-not-allowed disabled:bg-white-15"
            type="submit"
            icon={
              <ArrowRightIcon className="w-[20px] h-[20px] text-white-100" />
            }
          />
        </div>
      )}
    </div>
  );
}
