'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { floatingMotion } from '@lib/motions';
import NavigateButton from '@components/ui/NavigateButton';

export default function AboutJournal() {
  return (
    <section
      id='about-journal'
      className='mt-12 flex w-full flex-col-reverse justify-between px-4 lg:container lg:mx-auto lg:my-19 lg:flex-row'
    >
      <div className='flex w-full flex-col items-center justify-center gap-1 text-center lg:max-w-xl lg:items-start lg:justify-baseline lg:text-start'>
        <h3 className='text-primary-light text-lg font-medium 2xl:text-xl'>Dergi Amacı ve Kapsamı</h3>
        <h2 className='text-primary text-2xl/relaxed font-bold 2xl:text-[28px]'>Profuture Teknoloji Dergisi</h2>

        <p className='text-secondary-dark max-w-sm text-sm/relaxed lg:max-w-fit 2xl:text-lg/relaxed'>
          Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve
          geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren,
          uluslararası hakemli ve açık erişimli bir akademik yayındır.
        </p>

        <div className='mt-12 max-w-52'>
          <NavigateButton content='Detay' className='w-37.5'/>
        </div>
      </div>

      <motion.div {...floatingMotion} className='relative mx-auto w-80 h-64 lg:h-auto lg:mx-0 lg:w-150 lg:pt-0'>
        <Image
          src='/images/journal.png'
          alt='About Journal Illustration'
          width={900}
          height={700}
          className='z-40  absolute -top-2/7  lg:-top-3/5'
        />
      </motion.div>
    </section>
  );
}
