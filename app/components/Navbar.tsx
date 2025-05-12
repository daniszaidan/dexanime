import { Link, useNavigate } from 'react-router';
import ButtonIcon from '~/components/ButtonIcon';
import SearchBox from '~/components/SearchBox';
import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/24/outline';
import type { Navbar } from '~/utils/types';

export default function Navbar(props: Navbar) {
  const { isHiddenSearch } = props;
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-25 sm:gap-15">
        <ButtonIcon
          onClick={() => navigate(-1)}
          className="w-[45px] h-[45px] cursor-pointer"
          icon={<ArrowLeftIcon className="w-[25px] h-[25px] text-white-100" />}
        />
        <Link to="/" className="text-[25px] font-[700]">
          Dex
          <span className="font-[400]">anime</span>
        </Link>
      </div>
      {isHiddenSearch ? '' : <SearchBox />}
    </div>
  );
}
