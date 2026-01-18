'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import CookieIcon from '@icons/cookie.svg';
import { getLocalStorage, setLocalStorage } from '@lib/utils';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getLocalStorage('cookie_consent');
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, []);

  const handleAccept = () => {
    setLocalStorage('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setLocalStorage('cookie_consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className='fixed right-3 bottom-3 z-50 w-full max-w-90 sm:right-6 sm:bottom-6 sm:max-w-155'
        >
          <div className='bg-foreground flex flex-col items-end gap-4 rounded-[20px] p-4 shadow-lg lg:flex-row lg:items-center'>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full'>
                <CookieIcon />
              </div>

              <p className='text-secondary-dark text-xs lg:text-sm leading-relaxed'>
                We use cookies to ensure that we give you the best experience on our website.{' '}
                <Link href='#' className='text-primary hover:underline'>
                  Read cookies policies.
                </Link>
              </p>
            </div>

            <div className='flex w-fit items-center gap-3'>
              <button
                onClick={handleDecline}
                className='bg-primary/10 hover:bg-primary/15 text-secondary-dark flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors'
              >
                Decline
              </button>

              <button
                onClick={handleAccept}
                className='bg-primary hover:bg-primary-dark flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors'
              >
                Allow
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
