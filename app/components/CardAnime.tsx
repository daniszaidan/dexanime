import { createURL } from '~/utils/utils';
import type { CardAnime } from '~/utils/types';
import { StarIcon } from '@heroicons/react/24/solid';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';

export default function CardAnime(props: CardAnime) {
  const { item } = props;

  return (
    <div className="transition-all duration-300 relative z-10 hover:z-20 rounded-20 bg-dark-secondary">
      <Link to={`/anime/${createURL(item?.title, item?.mal_id)}`}>
        <div className="p-15">
          <div className="absolute top-0 right-0 z-10 m-20 px-[7.5px] py-[2.5px] rounded-full bg-white-30 backdrop-blur-[30px] flex items-center">
            <span className="border-0">
              <StarIcon className="w-[12.5px] h-[12.5px] drop-shadow text-[#FFEF00]" />
            </span>
            <span className="text-[12.5px] font-[700] line-clamp-1 ml-[5px] mr-[2.5px] drop-shadow">
              {String(item?.score).slice(0, 3)}
            </span>
          </div>
          {item?.images?.webp ? (
            <div className="relative z-0 aspect-[0.74/1] rounded-10 overflow-hidden flex items-center justify-center bg-dark-primary">
              <img src={item?.images?.webp?.image_url} alt="poster" />
            </div>
          ) : (
            <div className="bg-dark-primary flex flex-col gap-5 aspect-[0.74/1] items-center justify-center rounded-[15px] shrink-0">
              <PhotoIcon className="w-30 h-30" />
              <span className="text-white text-[15px] font-[400]">
                No Image
              </span>
            </div>
          )}
          <h2 className="text-[17.5px] sm:text-[16px] font-[700] text-white-100 line-clamp-1 mt-10">
            {item?.title || '-'}
          </h2>
          <span className="text-[15px] font-[600] text-white-60 line-clamp-1">
            {item?.genres?.length ? item?.genres[0]?.name : 'No Genre'}
          </span>
        </div>
      </Link>
    </div>
  );
}
