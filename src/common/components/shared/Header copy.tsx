'use client';

import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import HomeIcon from '@icons/home.svg';
import AuthorIcon from '@icons/author.svg';
import SearchIcon from '@icons/search.svg';
import PublicIcon from '@icons/public.svg';
import { menuData } from '@constants/menu-data';
import { contactData } from '@constants/contact-data';
import { journalData } from '@constants/journal-data';
import { itemLeftMotion, itemUpMotion } from '@lib/motions';
import { IconButton } from '@/common/components/ui/IconButton';

export default function Header() {
  const { startYear, issn, periodicity } = journalData;
  const {
    mail: { Icon, value, href },
  } = contactData;

  return (
    <motion.header
      {...itemUpMotion}
  className='bg-foreground before:bg-primary-darker relative z-10 flex h-full w-full flex-col overflow-hidden before:absolute before:top-0 before:left-0 before:-z-1 before:h-11 before:w-full lg:h-33.75 lg:flex-row'
    >
      <motion.div
        {...itemLeftMotion}
        className='lg:outline-foreground bg-primary relative mt-11 flex w-full items-center justify-between px-4 py-4 lg:mt-0 lg:h-33.75 lg:max-w-96 lg:min-w-44 lg:rounded-tr-[100px] lg:pr-12 lg:pl-8 lg:outline-18'
      >
        <Link href='/' className='relative flex h-full items-start lg:w-full lg:items-center lg:justify-center'>
          <Image
            src='/images/short-logo.png'
            alt='Profuture Logo'
            width={380}
            height={90}
            priority
            className='relative flex h-12 w-20 object-contain  lg:h-auto lg:w-full'
          />

          <Image
            src='/images/logo.png'
            alt='Profuture Logo'
            width={380}
            height={90}
            priority
            className='relative hidden h-12 w-36 object-contain  lg:h-auto lg:w-full'
          />
        </Link>

        <Menu />
      </motion.div>

      <div className='flex w-full flex-col'>
        <div className='absolute top-0 flex min-h-11 w-full items-center justify-between gap-2 px-4 text-white lg:relative lg:top-0 lg:gap-4 lg:pr-12 lg:pl-5'>
          <Link href={href} className='flex items-center gap-3.5 text-sm hover:underline lg:flex 2xl:text-base'>
            <Icon />

            <span className='hidden lg:flex'>{value}</span>
          </Link>

          <div className='flex items-center gap-2 text-xs text-nowrap lg:gap-5 lg:text-sm 2xl:text-base'>
            <span>
              ISSN: <span className='font-bold text-nowrap'>{issn}</span>
            </span>
            <span>
              Başlangıç: <span className='font-bold text-nowrap'>{startYear}</span>
            </span>
            <span>
              Periyot: <span className='font-bold text-nowrap'>{periodicity}</span>
            </span>
          </div>
        </div>

        <div className='hidden h-[calc(100%-44px)] items-center justify-between gap-6 px-4 lg:flex lg:pl-5'>
          <motion.a
            href='/'
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2, stiffness: 130, damping: 10, ease: 'easeInOut' }}
            className='text-primary hover:text-primary-dark flex items-center justify-center transition-colors'
          >
            <HomeIcon className='h-6 w-6' />
          </motion.a>

          <div className='flex items-center justify-center gap-5'>
            <nav className='hidden items-center gap-4 lg:flex'>
              {menuData.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='text-secondary-dark hover:text-primary text-sm text-nowrap hover:underline 2xl:text-base'
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className='flex items-center justify-center gap-2'>
              <IconButton text='Dergi Kurulu' Icon={PublicIcon} className='bg-primary' />
              <IconButton text='Yazar Rehberi' Icon={AuthorIcon} className='bg-neutral' />
              <IconButton variant='outline' Icon={SearchIcon} />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
