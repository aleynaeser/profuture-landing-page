import React from 'react';
import Image from 'next/image';
import NavigateButton from '@components/ui/NavigateButton';

export default function CallForPapers() {
  return (
    <section id='call-for-papers' className='my-12 w-full px-4 lg:container lg:mx-auto lg:my-40 lg:px-0'>
      <div className='relative overflow-hidden rounded-3xl bg-secondary-lighter p-6'>
        <Image src='/images/call-background.png' alt='Call background' width={1600} height={420} className='absolute inset-0 -z-10 h-full w-full object-cover' />

        <div className='relative z-10 flex flex-col items-center gap-6 lg:flex-row lg:items-center'>
          <div className='hidden lg:block lg:w-1/3 lg:pl-6'>
            <Image src='/images/call-cover-1.png' alt='Covers' width={420} height={360} className='object-contain' />
          </div>

          <div className='w-full lg:w-1/3 px-2 text-center lg:text-left'>
            <h4 className='text-secondary-dark text-lg font-medium'>Makale Çağrısı</h4>
            <h2 className='text-primary text-3xl font-bold'>Türkiye Ulusal Dijital Veri ve Altyapıları</h2>

            <p className='mt-4 text-secondary-dark'>
              Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zeka uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
            </p>

            <div className='mt-6 flex justify-center lg:justify-start'>
              <NavigateButton content='Makale Gönder' href='/' variant='solid' className='bg-accent' />
            </div>
          </div>

          <div className='hidden lg:block lg:w-1/3 lg:pr-6'>
            <Image src='/images/call-cover-2.png' alt='Poster' width={320} height={480} className='object-contain rounded-2xl shadow-lg' />
          </div>
        </div>
      </div>
    </section>
  );
}
