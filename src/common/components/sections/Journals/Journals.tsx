'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { journalData } from '@constants/journal-data';
import { itemListMotion, itemLeftMotion } from '@lib/motions';
import JournalItem from './JournalItem';
import SlideButton from '@/common/components/ui/Buttons/SlideButton';
import JournalModal from '@/common/components/ui/Modals/JournalModal';
import NavigateButton from '@/common/components/ui/Buttons/NavigateButton';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Journals() {
  const [selected, setSelected] = useState<IJournal | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const handleView = (j: IJournal) => setSelected(j);

  const handleSlideChange = (swiper: SwiperType) => {
    setSlideConfig({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  return (
    <section id='journals' className='mt-12 w-full px-4 lg:container lg:mx-auto lg:mt-6'>
      <div className='mb-7.5 flex flex-col items-center justify-between gap-6 lg:flex-row'>
        <div className='flex items-end gap-14 text-center lg:text-start'>
          <motion.div {...itemLeftMotion} className='flex flex-col gap-1'>
            <h3 className='text-primary-light text-lg font-medium 2xl:text-xl'>Sayılar</h3>
            <h2 className='text-primary text-2xl/relaxed font-bold 2xl:text-[28px]'>Dergiler</h2>
          </motion.div>

          <div className='hidden gap-2.5 pb-2 lg:flex'>
            <SlideButton direction='prev' onClick={() => swiperInstance?.slidePrev()} disabled={slideConfig.isBeginning} />
            <SlideButton direction='next' onClick={() => swiperInstance?.slideNext()} disabled={slideConfig.isEnd} />
          </div>
        </div>

        <NavigateButton content='Tümünü Görüntüle' variant='outline' className='w-55' />
      </div>

      <div className='flex items-center justify-between gap-2.5 pb-6 lg:hidden'>
        <SlideButton direction='prev' onClick={() => swiperInstance?.slidePrev()} disabled={slideConfig.isBeginning} />
        <SlideButton direction='next' onClick={() => swiperInstance?.slideNext()} disabled={slideConfig.isEnd} />
      </div>

      <motion.div {...itemListMotion} className='flex flex-wrap gap-5'>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className='p-1!'
        >
          {journalData.map((journal) => (
            <SwiperSlide key={journal.id}>
              <JournalItem key={journal.id} item={journal} onView={handleView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <JournalModal journal={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
