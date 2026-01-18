'use client';

import { cn } from '@lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import RightIcon from '@icons/right.svg';

interface INavigateButtonProps {
  content: string;
  href?: string;
  className?: string;
  variant?: 'outline' | 'solid';
}

export default function NavigateButton({ content, href = '/', className = '', variant = 'outline' }: INavigateButtonProps) {
  const isOutline = variant === 'outline';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative flex h-13.75 items-center gap-3 overflow-hidden rounded-full px-5 py-2',
        isOutline ? 'bg-background text-secondary-dark border-stroke hover:border-primary border' : 'bg-primary',

        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        initial={{ x: -12, opacity: 0, scale: 1 }}
        animate={isHovered ? { x: 16, opacity: 1, scale: 1.02 } : { x: -12, opacity: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 130, duration: 0.3, damping: 10 }}
        className='absolute left-0'
      >
        <RightIcon className={cn(isOutline ? 'text-secondary-dark' : 'text-white')} />
      </motion.span>

      <motion.div
        initial={{ x: 0 }}
        animate={isHovered ? { x: 33 } : { x: 0 }}
        transition={{ type: 'spring', stiffness: 130, duration: 0.3, damping: 10 }}
      >
        {content}
      </motion.div>

      <motion.span
        initial={{ x: -18, opacity: 1, scale: 1 }}
        animate={isHovered ? { x: 12, opacity: 0, scale: 1.02 } : { x: -18, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 130, duration: 0.3, damping: 10 }}
        className='absolute right-0'
      >
        <RightIcon className={cn(isOutline ? 'text-secondary-dark' : 'text-white')} />
      </motion.span>
    </motion.a>
  );
}
