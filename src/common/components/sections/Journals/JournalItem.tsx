'use client';

import Image from 'next/image';
import EyeIcon from '@icons/eye.svg';
import PDFIcon from '@icons/pdf.svg';
import RightIcon from '@icons/right.svg';
import BookIcon from '@icons/book.svg';
import CountIcon from '@icons/count.svg';
import DownloadIcon from '@icons/download.svg';
import CalendarIcon from '@icons/calendar.svg';
import { motion } from 'framer-motion';
import { itemMotion } from '@lib/motions';
import { handleDownload } from '@lib/utils';
import { IconButton } from '@components/ui/IconButton';
import Badge from '../../ui/Badge';

interface IJournalItemProps {
  item: IJournal;
  onView: (i: IJournal) => void;
}

export default function JournalItem({ item, onView }: IJournalItemProps) {
  return (
    <motion.div
      {...itemMotion}
      className='bg-foreground border-neutal-dark flex min-h-80 w-116.5 gap-4 rounded-[20px] border p-4 shadow-sm'
    >
      <div className='relative h-70 w-60'>
        <Image src={item.cover} alt={item.title} fill />
      </div>

      <div className='flex flex-col items-end justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <PDFIcon />
            <Badge content='Yeni' className='bg-secondary-light text-foreground w-14 rounded-full px-1 text-xs' />
          </div>

          <Badge content='Dergi' className='w-14' />
          <h4 className='text-primary-darker text-lg font-bold'>{item.title}</h4>

          <div className='text-secondary-dark flex gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <BookIcon fill='#2a2c31' />
              Cilt:<strong> {item.issue}</strong>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <CountIcon fill='#2a2c31' />
              Sayı: <strong>{item.issue}</strong>
            </div>
          </div>

          <div className='text-secondary-dark flex items-center justify-center gap-2 font-bold'>
            <CalendarIcon fill='#2a2c31' />
            <span className='w-[calc(100%-24px)]'>{item.date}</span>
          </div>
        </div>

        <div className='mt-3 flex items-center gap-2'>
          <IconButton onClick={() => onView(item)} Icon={EyeIcon} variant='outline' className='bg-primary' />
          <IconButton onClick={() => onView(item)} Icon={DownloadIcon} variant='outline' />
          <IconButton
            onClick={() => handleDownload(item)}
            variant='outline'
            className='text-secondary-dark'
            Icon={RightIcon}
          />
        </div>
      </div>
    </motion.div>
  );
}
