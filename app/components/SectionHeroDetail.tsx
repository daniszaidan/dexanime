import { useState } from 'react';
import Navbar from './Navbar';
import ButtonTitle from './ButtonTitle';
import LoadingIcon from './LoadingIcon';
import type { SectionHeroDetail } from '~/utils/types';
import { StarIcon } from '@heroicons/react/24/solid';
import {
  PlayIcon,
  PhotoIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router';

export default function SectionHeroDetail(props: SectionHeroDetail) {
  const { data } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className="h-dvh w-full overflow-hidden relative">
        <div className="relative w-full h-full overflow-hidden z-0">
          {data?.trailer?.images?.maximum_image_url ? (
            <>
              {!loaded && (
                <div className="w-full h-full relative overflow-hidden z-0 bg-dark-secondary flex items-center justify-center">
                  <LoadingIcon className="animate-spin text-white h-50 w-50" />
                </div>
              )}
              <img
                src={data?.trailer?.images?.maximum_image_url}
                alt="backdrop"
                className="object-cover w-full h-full"
                onLoad={() => setLoaded(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <PhotoIcon className="w-30 h-30" />
              <span className="text-white text-[15px] font-[400]">
                No Image
              </span>
            </div>
          )}
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-[rgba(0,0,0,.6)] to-transparent p-100 md:p-50 sm:p-30 flex flex-col justify-between">
          <Navbar />
          <div className="flex items-center justify-between sm:flex-col sm:items-start md:gap-25 sm:gap-10">
            <div>
              <h1 className="text-white text-[50px] sm:text-[40px] font-[600] max-w-[550px]  line-clamp-3">
                {data?.title}
              </h1>
              <h2 className="italic text-white-80 text-[20px] sm:text-[17.5px] font-[400] max-w-[500px]">
                {data?.title_synonyms?.length ? data?.title_synonyms[0] : ''}
              </h2>
            </div>
            <div className="flex items-center gap-5 flex-none">
              <StarIcon className="w-[25px] h-[25px] text-[#FFEF00]" />
              <h2 className="text-white text-[40px] font-[700]">
                {String(data?.score).slice(0, 3)}
              </h2>
              <h3 className="text-white-60 text-[25px] font-[700] mt-[12.5px]">
                / 10
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-15 sm:gap-10 sm:hidden">
              <Link to={data?.trailer?.url || ''} target="_blank">
                <ButtonTitle
                  className="bg-white-30 hover:bg-white-45 h-[45px] cursor-pointer"
                  icon={
                    <PlayIcon className="w-[20px] h-[20px] text-white-100" />
                  }
                  title="Watch Trailer"
                />
              </Link>
            </div>
            <div className="flex items-center gap-15 sm:gap-10">
              <Link to={data?.url || ''} target="_blank">
                <ButtonTitle
                  className="bg-white-30 hover:bg-white-45 h-[45px] cursor-pointer"
                  icon={
                    <ArrowRightIcon className="w-[22.5px] h-[22.5px] text-white-100" />
                  }
                  title="MyAnimeList"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
