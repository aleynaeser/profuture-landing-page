'use client';

import { motion } from 'motion/react';
import { cn } from '@lib/utils';
import RightIcon from '@icons/right.svg';

interface SlideButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export default function SlideButton({ direction, onClick, disabled, className }: SlideButtonProps) {
  return (
    <motion.button
      type='button'
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.09 } : undefined}
      whileTap={!disabled ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.2, stiffness: 130, damping: 10, ease: 'easeInOut' }}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-2xl transition-colors',
        disabled ? 'bg-neutral-light cursor-default' : 'bg-neutral cursor-pointer',
        className
      )}
    >
      <RightIcon
        className={cn(
          direction === 'prev' && 'rotate-180',
          disabled ? 'text-stroke' : 'text-primary'
        )}
      />
    </motion.button>
  );
}
