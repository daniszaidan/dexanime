import type { SectionError } from '~/utils/types';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function SectionError({ customError }: SectionError) {
  return (
    <div className="h-[322.75px] w-full flex justify-center items-center">
      <ExclamationCircleIcon className="w-50 h-50 mr-15" />
      <span className="text-[20px] font-[700] text-white-100">
        {customError || 'An error has occurred'}
      </span>
    </div>
  );
}
