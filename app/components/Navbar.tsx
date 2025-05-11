import { Link } from 'react-router';
import ButtonIcon from '~/components/ButtonIcon';
import SearchBox from '~/components/SearchBox';
import { Bars3Icon } from '@heroicons/react/24/outline';
import type { Navbar } from '~/utils/types';

export default function Navbar(props: Navbar) {
  const { isHiddenSearch } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-25 sm:gap-15">
        <ButtonIcon
          className="w-[45px] h-[45px]"
          icon={<Bars3Icon className="w-[25px] h-[25px] text-white-100" />}
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
