import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';

export default function HeroError() {
  return (
    <div className="h-dvh w-full overflow-hidden p-100 md:p-50 sm:p-30 flex flex-col  justify-center items-center gap-25">
      <div className="flex justify-center items-center">
        <ExclamationCircleIcon className="w-50 h-50 sm:w-30 sm:h-30 mr-15" />
        <span className="text-[20px] sm:text-[17.5px] font-[700] text-white-100">
          An error has occurred
        </span>
      </div>

      <Link
        to="/"
        className="text-[15px] font-[400] bg-dark-secondary py-10 px-20 sm:px-15 rounded-[10px]"
      >
        Back to Home
      </Link>
    </div>
  );
}
