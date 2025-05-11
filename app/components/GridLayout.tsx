import type { GridLayout } from '~/utils/types';
import { cn } from '~/utils/utils';

export default function GridLayout({ children, className }: GridLayout) {
  return (
    <div
      className={cn(
        'grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-25 md:gap-15',
        className
      )}
    >
      {children}
    </div>
  );
}
