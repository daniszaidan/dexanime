import type { Anime } from '~/utils/types';
import { StarIcon } from '@heroicons/react/24/solid';
import {
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Chip from './Chip';

export default function CardAnimeInfo(props: { data: Anime }) {
  const { data } = props;

  return (
    <div className="bg-dark-secondary rounded-30 p-50 sm:p-25 flex gap-50 md:flex-col sm:gap-25">
      <div className="flex gap-25">
        {data?.images?.webp?.large_image_url ? (
          <div className="h-[300px] md:w-[25%] md:h-auto sm:h-auto sm:w-full relative aspect-[0.74/1] rounded-20 overflow-hidden shrink-0">
            <img src={data?.images?.webp?.large_image_url} alt="poster" />
          </div>
        ) : (
          <div className="h-[300px] md:w-[25%] md:h-auto sm:h-auto sm:w-full relative aspect-[0.74/1] rounded-20 overflow-hidden shrink-0 bg-dark-primary flex flex-col gap-5 items-center justify-center">
            <PhotoIcon className="w-30 h-30" />
            <span className="text-white text-[15px] font-[400]">No Image</span>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-25">
        <div className="flex flex-col gap-15">
          <h3 className="text-white text-[25px] font-[600]">
            {data?.title || 'No Title'}
          </h3>
          <div className="flex gap-[15px] flex-wrap">
            <div className="px-[7.5px] py-[2.5px] rounded-full bg-white-15 backdrop-blur-[30px] flex items-center">
              <span className="border-0">
                <StarIcon className="w-[12.5px] h-[12.5px]" />
              </span>
              <span className="text-[12.5px] font-[700] line-clamp-1 ml-[5px] mr-[2.5px]">
                {String(data?.score).slice(0, 3)}
              </span>
            </div>

            <div className="flex items-center">
              <span className="border-0 text-[12.5px]">
                <CalendarIcon className="w-[20px] h-[20px] text-white-60" />
              </span>
              <span className="text-[15px] font-[600] text-white-60 line-clamp-1 ml-5">
                {data?.year}
              </span>
            </div>
            <div className="flex items-center">
              <span className="border-0 text-[12.5px]">
                <ClockIcon className="w-[20px] h-[20px] text-white-60" />
              </span>
              <span className="text-[15px] font-[600] text-white-60 line-clamp-1 ml-5">
                {data?.duration}
              </span>
            </div>
            <div className="flex items-center">
              <span className="border-0 text-[12.5px]">
                <UsersIcon
                  name="users"
                  className="w-[20px] h-[20px] text-white-60"
                />
              </span>
              <span className="text-[15px] font-[600] text-white-60 line-clamp-1 ml-5">
                {data?.rating}
              </span>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap">
            {data?.genres?.map((item, index) => (
              <Chip key={index} title={item?.name} />
            ))}
          </div>
        </div>
        <p className="text-white text-[17.5px] font-[400] line-clamp-5">
          {data?.synopsis || 'No Description'}
        </p>
      </div>
    </div>
  );
}
