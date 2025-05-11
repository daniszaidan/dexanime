import { cn } from '~/utils/utils';
import { Link } from 'react-router';
import type { PageHeading } from '~/utils/types';

export default function PageHeading(props: PageHeading) {
  const { title, className, type } = props;

  return (
    <div
      className={cn(
        'flex justify-between items-center mt-100 gap-25 sm:flex-col sm:items-start',
        className
      )}
    >
      <div className="flex flex-col items-start gap-10">
        <Link
          className="transition-all duration-300 text-[20px] font-[500] text-white-60 hover:text-white-100"
          to="/search"
        >
          {type}
        </Link>
        <h1 className="text-[40px] sm:text-[30px] font-[600] text-white-100">
          {title}
        </h1>
      </div>
    </div>
  );
}
