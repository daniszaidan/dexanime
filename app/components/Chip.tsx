import { forwardRef } from 'react';

import type { Chip } from '~/utils/types';
import { cn } from '~/utils/utils';

const Chip = forwardRef<HTMLButtonElement, Chip>(
  ({ title, isHover, counter, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-10 bg-[#434956] py-[7.5px] px-20 rounded-full text-white text-[15px] font-[400] transition-all duration-300 shrink-0',
          isHover && 'hover:bg-[#4e5565]',
          className
        )}
        {...props}
      >
        {title}
        {counter ? <span>{counter}</span> : ''}
      </button>
    );
  }
);

Chip.displayName = 'Chip';
export default Chip;
