'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { itemListMotion } from '@lib/motions';
import { journalData } from '@constants/journal-data';
import JournalItem from './JournalItem';
import RightIcon from '@icons/right.svg';
import JournalModal from '@components/ui/JournalModal';
import NavigateButton from '@components/ui/NavigateButton';

export default function Journals() {
  const [selected, setSelected] = useState<IJournal | null>(null);

  const handleView = (j: IJournal) => setSelected(j);

  return (
    <section id='journals' className='mt-6 w-full px-4 lg:container lg:mx-auto'>
      <div className='mb-7.5 flex items-center justify-between'>
        <div className='flex items-end gap-14'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-primary-light text-lg font-medium 2xl:text-xl'>Sayılar</h3>
            <h2 className='text-primary text-2xl/relaxed font-bold 2xl:text-[28px]'>Dergiler</h2>
          </div>

          <div className='flex gap-2.5 pb-2'>
            <motion.button
              id='slider-back-button'
              type='button'
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, stiffness: 130, damping: 10, ease: 'easeInOut' }}
              className='bg-neutral-light flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl'
            >
              <RightIcon className='text-stroke rotate-180' />
            </motion.button>

            <motion.button
              id='slider-next-button'
              type='button'
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, stiffness: 130, damping: 10, ease: 'easeInOut' }}
              className='bg-neutral flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl'
            >
              <RightIcon className='text-primary' />
            </motion.button>
          </div>
        </div>

        <NavigateButton content='Tümünü Görüntüle' variant='outline' className='w-55' />
      </div>

      <motion.div {...itemListMotion}  className='flex gap-5 flex-wrap'>
        {journalData.map((journal) => (
          <JournalItem key={journal.id} item={journal} onView={handleView} />
        ))}
      </motion.div>

      <JournalModal journal={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
