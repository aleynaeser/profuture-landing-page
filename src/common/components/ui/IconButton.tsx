import { cn } from '@lib/utils';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  text?: string;
  href?: string;
  className?: string;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  Icon?: (props: TIconProps) => ReactNode;
}

export const IconButton = ({ className, variant = 'solid', text, href = '/', Icon, onClick }: IconButtonProps) => {
  const withHref = !onClick;
  const isOutlined = variant === 'outline';

  const animationProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.2, stiffness: 130, damping: 10 },
  };

  const commonClasses = cn(
    'group relative flex cursor-pointer items-center justify-center cursor-pointer overflow-hidden rounded-full font-medium  ',
    isOutlined
      ? 'border-stroke h-[55px] w-[55px] border bg-transparent '
      : 'h-[55px] w-[55px] min-[1300px]:min-w-[170px] text-nowrap px-4 text-white text-sm 2xl:text-base',

    className,
  );

  const commonContent = (
    <>
      <span
        className={cn(
          'via-secondary-light absolute inset-0 -translate-x-full bg-linear-to-r from-transparent to-transparent opacity-10 transition-transform duration-1000 group-hover:translate-x-full',
          isOutlined ? 'via-stroke' : 'via-white',
        )}
      />

      <div className='relative z-10 flex items-center gap-3'>
        {Icon && <Icon />}
        {text && <span className='hidden min-[1300px]:flex'>{text}</span>}
      </div>
    </>
  );

  return withHref ? (
    <motion.a href={href} {...animationProps} className={commonClasses}>
      {commonContent}
    </motion.a>
  ) : (
    <motion.button type='button' {...animationProps} className={commonClasses} onClick={onClick}>
      {commonContent}
    </motion.button>
  );
};
