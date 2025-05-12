import { forwardRef } from 'react';
import type { ButtonTitle } from '~/utils/types';

import { cn } from '~/utils/utils';

const ButtonTitle = forwardRef<HTMLButtonElement, ButtonTitle>(
  ({ title, titleClassName, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'transition-all duration-300 h-[40px] px-15 bg-white-15 hover:bg-white-30 backdrop-blur-[30px] rounded-full flex items-center justify-between text-[15px] font-[600] text-white-100 gap-10',
          className
        )}
        {...props}
      >
        <span className={cn('flex-none capitalize', titleClassName)}>
          {title}
        </span>
      </button>
    );
  }
);

ButtonTitle.displayName = 'ButtonTitle';
export default ButtonTitle;
