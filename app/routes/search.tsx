import { useNavigate, useSearchParams } from 'react-router';
import type { Route } from './+types/search';
import Navbar from '~/components/Navbar';
import PageHeading from '~/components/PageHeading';
import SearchBoxAdvanced from '~/components/SearchBoxAdvanced';
import { SubmitHandler } from 'react-hook-form';
import { FormSearch } from '~/utils/types';
import { useState } from 'react';
import SearchResult from '~/components/SearchResult';
import Footer from '~/components/Footer';
import { useSearchAnime } from '~/data/query';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Search' },
    { name: 'description', content: 'Discover Anime' },
  ];
}

const pageName = 'Discover Anime';
const type = 'Search';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormSearch | null>({
    search: query || '',
  });

  const { data, isLoading, isError } = useSearchAnime(query || '');

  const onSubmit: SubmitHandler<FormSearch> = (data) => {
    setFormData(data);
    navigate(`/search?query=${encodeURIComponent(data?.search || '')}`);
  };

  return (
    <>
      <div className="bg-dark-primary">
        <section className="p-100 md:p-50 sm:p-30 ">
          <div className="max-w-6xl mx-auto flex flex-col items-start">
            <Navbar isHiddenSearch={true} />
            <PageHeading type={type} title={pageName} />
            <SearchBoxAdvanced
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
            />
            <SearchResult data={data} isLoading={isLoading} isError={isError} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
