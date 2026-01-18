'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import CallIcon from '@icons/call.svg';
import { itemUpMotion } from '@lib/motions';
import NavigateButton from '@/common/components/ui/Buttons/NavigateButton';

export default function CallForPapers() {
  return (
    <section id='call-for-papers' className='mt-12 w-full px-4 lg:container lg:mx-auto lg:mt-20 xl:mt-40'>
      <div className='relative flex h-full max-h-full min-h-110 w-full flex-col items-center justify-between rounded-3xl bg-[url("/images/call-background.png")] bg-cover bg-center bg-no-repeat lg:flex-row lg:items-stretch lg:gap-8 lg:rounded-4xl'>
        <Image
          src='/images/call-cover-1.png'
          alt='Covers'
          width={440}
          height={600}
          className='w-full max-w-100 pt-4 lg:pt-0'
        />

        <motion.div
          {...itemUpMotion}
          className='relative z-10 flex w-full max-w-150 flex-col items-center gap-7.5 px-4 py-6 text-center lg:-ml-14 lg:pr-15 lg:pb-14 lg:pl-2'
        >
          <div className='flex flex-col items-center gap-2'>
            <CallIcon />
            <h4 className='text-primary-light text-lg font-medium 2xl:text-xl'>Makale Çağrısı</h4>
            <h2 className='text-primary text-2xl/relaxed font-bold 2xl:text-[28px]'>
              Türkiye Ulusal Dijital Veri ve Altyapıları
            </h2>
          </div>

          <p className='text-secondary-dark text-sm/relaxed 2xl:text-lg/relaxed line-clamp-6'>
            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay
            zeka uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel
            ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
          </p>

          <div className='flex items-center justify-center'>
            <NavigateButton content='Makale Gönder' variant='solid' className='bg-accent w-50' />
          </div>
        </motion.div>

        <div className='relative h-full min-h-115 min-w-75'>
          <Image
            src='/images/call-cover-2.png'
            alt='Poster'
            fill
            sizes='(max-width: 1024px) 100vw, 33vw'
            className='absolute -top-10 -left-5 h-full w-full lg:-top-10! lg:-left-10!'
          />
        </div>
      </div>
    </section>
  );
}
