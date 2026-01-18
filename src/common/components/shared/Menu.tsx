'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { menuData } from '@constants/menu-data';
import { IconButton } from '../ui/Buttons/IconButton';
import { AnimatePresence, motion } from 'motion/react';
import { useActiveSection } from '@hooks/useActiveSection';
import MenuIcon from '@icons/menu.svg';
import CloseIcon from '@icons/close.svg';
import ContactIcon from '@icons/contact.svg';
import SearchIcon from '@icons/search.svg';
import PublicIcon from '@icons/public.svg';
import { cn } from '@/common/lib/utils';

export default function Menu() {
  const { activeSection, scrollToSection } = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsOpen(false);
    scrollToSection(e, href);
  };

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
                  width={300}
                  height={120}
                  priority
                  className='relative h-auto w-50 object-contain'
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
                  {menuData.items.map((item, index) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, stiffness: 100, damping: 10 }}
                        onClick={(e) => handleMenuClick(e, item.href)}
                        className={cn(
                          'text-primary-darker p-2 text-center text-2xl/relaxed hover:underline sm:text-3xl lg:p-4',
                          isActive && 'text-primary underline',
                        )}
                      >
                        <span>{item.label}</span>
                      </motion.a>
                    );
                  })}
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
