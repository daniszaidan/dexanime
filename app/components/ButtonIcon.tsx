import type { ButtonIcon } from '~/utils/types';
import { cn } from '~/utils/utils';

export default function ButtonIcon({ icon, className, ...props }: ButtonIcon) {
  return (
    <button
      className={cn(
        'transition-all duration-300 bg-white-15 hover:bg-white-30 backdrop-blur-[30px] rounded-full flex items-center justify-center w-[40px] h-[40px]',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
