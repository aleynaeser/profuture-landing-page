'use client';

import { motion } from 'motion/react';
import BookIcon from '@icons/book.svg';
import CountIcon from '@icons/count.svg';
import { itemLeftMotion } from '@lib/motions';
import CalendarIcon from '@icons/calendar.svg';
import NavigateButton from '../ui/Buttons/NavigateButton';

export default function Slider() {
  return (
    <section id='journal-slider' className='relative bg-[url("/images/slide.png")] bg-cover bg-center bg-no-repeat'>
      <div className='px-4 lg:container lg:mx-auto lg:px-4'>
        <motion.div
          {...itemLeftMotion}
          className='my-32.5 flex w-full flex-col items-center justify-center gap-4 text-center lg:max-w-99.5 lg:items-start lg:justify-baseline lg:text-start'
        >
          <h1 className='text-secondary flex flex-col text-2xl font-bold 2xl:text-[28px]'>
            Profuture Teknoloji Dergisi
            <span className='text-[32px]'>Son Sayı Yayında</span>
          </h1>

          <p className='text-foreground max-w-80 text-sm/relaxed lg:max-w-fit 2xl:text-lg/relaxed'>
            Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi
            erişin.
          </p>

          <div className='flex gap-5 text-base'>
            <div className='flex items-center justify-center gap-2'>
              <BookIcon fill='white' />
              Cilt:<strong> 2</strong>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <CountIcon fill='white' />
              Sayı: <strong>3</strong>
            </div>

            <div className='flex items-center justify-center gap-2 font-bold'>
              <CalendarIcon fill='white' />
              <span className='w-[calc(100%-24px)]'>Haziran 2025</span>
            </div>
          </div>

          <div className='mt-5 max-w-52'>
            <NavigateButton content='Dergiyi Görüntüle' variant='solid' className='w-52' />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
