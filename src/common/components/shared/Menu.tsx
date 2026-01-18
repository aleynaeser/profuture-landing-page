'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IconButton } from '../ui/Buttons/IconButton';
import { menuData } from '@constants/menu-data';
import { AnimatePresence, motion } from 'motion/react';
import MenuIcon from '@icons/menu.svg';
import CloseIcon from '@icons/close.svg';
import ContactIcon from '@icons/contact.svg';
import SearchIcon from '@icons/search.svg';
import PublicIcon from '@icons/public.svg';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className='relative z-50 flex h-full items-center justify-center lg:hidden lg:px-4 lg:pr-12'>
      <IconButton variant='outline' onClick={() => setIsOpen(!isOpen)} Icon={MenuIcon} className='bg-primary' />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='bg-foreground fixed inset-0 z-50 flex items-center justify-center'
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, stiffness: 100, damping: 10, type: 'spring' }}
              className='relative flex h-full w-full flex-col items-center gap-10 px-6 py-10'
            >
              <div className='flex w-full items-center justify-between'>
                <Image
                  src='/images/dark-logo.png'
                  alt='Profuture Logo'
                  width={200}
                  height={90}
                  priority
                  className='relative h-auto w-auto object-contain'
                />

                <IconButton
                  variant='outline'
                  onClick={() => setIsOpen(!isOpen)}
                  Icon={CloseIcon}
                  className='bg-primary-darker'
                />
              </div>

              <div className='flex h-full flex-col justify-around'>
                <nav className='flex flex-col items-center justify-center gap-7'>
                  {menuData.items.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15, stiffness: 100, damping: 10 }}
                      onClick={() => setIsOpen(false)}
                      className='text-primary-darker p-2 text-center text-2xl/relaxed hover:underline sm:text-3xl lg:p-4'
                    >
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className='flex items-center justify-center gap-4'>
                  <IconButton content='Dergi Kurulu' Icon={PublicIcon} className='bg-primary' />
                  <IconButton content='Yazar Rehberi' Icon={ContactIcon} className='bg-accent-lighter' />
                  <IconButton variant='outline' Icon={SearchIcon} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
