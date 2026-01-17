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
import { IconButton } from '@components/ui/IconButton';
import { itemLeftMotion, itemUpMotion } from '@lib/motions';

export default function Header() {
  const { startYear, issn, periodicity } = journalData;
  const {
    mail: { Icon, value, href },
  } = contactData;

  return (
    <motion.header
      {...itemUpMotion}
      className='bg-foreground before:bg-primary-darker relative z-10 flex h-full w-full flex-col before:absolute before:top-0 before:left-0 before:-z-1 before:h-11 before:w-full lg:h-33.75'
    >
      <div className='relative flex w-full overflow-hidden'>
        <motion.div
          {...itemLeftMotion}
          className='outline-foreground bg-primary relative h-28 min-w-30 rounded-tr-[100px] p-4 outline-18 lg:h-33.75 min-[1300px]:w-full min-[1300px]:max-w-72 min-[1300px]:pr-12 min-[1300px]:pl-8 2xl:max-w-96 2xl:min-w-44'
        >
          <Link href='/' className='relative flex h-full w-full items-center justify-center'>
            <Image
              src='/images/short-logo.png'
              alt='Profuture Logo'
              width={90}
              height={90}
              priority
              className='relative mt-3 -ml-6 flex h-full max-w-16 object-contain min-[1300px]:hidden'
            />

            <Image
              src='/images/logo.png'
              alt='Profuture Logo'
              width={380}
              height={90}
              priority
              className='relative -ml-3 hidden h-12 w-36 object-contain min-[1300px]:flex lg:h-auto lg:w-full'
            />
          </Link>
        </motion.div>

        <div className='flex w-full flex-col items-end px-4 min-[1300px]:px-0 min-[1310px]:items-start'>
          <div className='flex min-h-11 w-full items-center justify-end gap-2 min-[1300px]:pr-12 lg:relative lg:justify-between lg:gap-4 lg:pl-5'>
            <Link href={href} className='flex items-center gap-3.5 text-sm hover:underline lg:flex 2xl:text-base'>
              <Icon />
              <span>{value}</span>
            </Link>

            <div className='hidden items-center gap-2 text-xs text-nowrap lg:flex lg:gap-5 lg:text-sm 2xl:text-base'>
              <span>
                ISSN: <span className='font-bold'>{issn}</span>
              </span>
              <span>
                Başlangıç: <span className='font-bold'>{startYear}</span>
              </span>
              <span>
                Periyot: <span className='font-bold'>{periodicity}</span>
              </span>
            </div>
          </div>

          <div className='hidden h-[calc(100%-44px)] w-full items-center justify-between gap-6 min-[1300px]:pr-12 lg:flex lg:pl-5'>
            <motion.a
              href='/'
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, stiffness: 130, damping: 10, ease: 'easeInOut' }}
            >
              <HomeIcon className='h-6 w-6' />
            </motion.a>

            <div className='flex items-center justify-center gap-6'>
              <nav className='flex items-center gap-6'>
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

          <Menu />
        </div>
      </div>

      <div className='bg-primary-darker flex h-11 w-full items-center justify-between gap-4 px-4 text-xs text-nowrap lg:hidden'>
        <span>
          ISSN: <span className='font-bold'>{issn}</span>
        </span>
        <span>
          Başlangıç: <span className='font-bold'>{startYear}</span>
        </span>
        <span>
          Periyot: <span className='font-bold'>{periodicity}</span>
        </span>
      </div>
    </motion.header>
  );
}
