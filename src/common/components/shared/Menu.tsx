'use client';
import Image from 'next/image';
import { useState } from 'react';
import { menuData } from '@constants/menu-data';
import { IconButton } from '../ui/IconButton';
import { AnimatePresence, motion } from 'motion/react';
import MenuIcon from '@icons/menu.svg';
import CloseIcon from '@icons/close.svg';
import AuthorIcon from '@icons/author.svg';
import SearchIcon from '@icons/search.svg';
import PublicIcon from '@icons/public.svg';
import { tr } from 'motion/react-client';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex h-full items-center justify-center lg:hidden lg:px-4 lg:pr-12'>
      <IconButton variant='outline' onClick={() => setIsOpen(!isOpen)} Icon={MenuIcon} className='bg-primary' />

      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='bg-foreground fixed inset-0 z-30 flex items-center justify-center'
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.2 }}
              className='relative flex h-full w-full flex-col items-center gap-10 px-6 py-10'
            >
              <div className='flex w-full items-center justify-between'>
                <Image
                  src='/images/dark-logo.png'
                  alt='Profuture Logo'
                  width={200}
                  height={90}
                  priority
                  className='relative h-auto object-contain'
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
                      className='text-primary-darker p-2 text-center text-2xl leading-relaxed hover:underline sm:text-3xl lg:p-4'
                    >
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className='flex items-center justify-center gap-4'>
                  <IconButton text='Dergi Kurulu' Icon={PublicIcon} className='bg-primary' />
                  <IconButton text='Yazar Rehberi' Icon={AuthorIcon} className='bg-neutral' />
                  <IconButton variant='outline' Icon={SearchIcon} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
