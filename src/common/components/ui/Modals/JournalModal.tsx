import { useEffect } from 'react';
import { IconButton } from '../Buttons/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import Badge from '../Badge';
import Image from 'next/image';
import BookIcon from '@icons/book.svg';
import CloseIcon from '@icons/close.svg';
import CountIcon from '@icons/count.svg';
import CalendarIcon from '@icons/calendar.svg';

interface IJournalModalProps {
  journal: IJournal | null;
  onClose: () => void;
}

export default function JournalModal({ journal, onClose }: IJournalModalProps) {
  useEffect(() => {
    if (journal) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [journal]);

  return (
    <AnimatePresence>
      {journal && (
        <motion.div
          key={journal.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-lg'
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, stiffness: 100, damping: 10, type: 'spring' }}
            className='bg-foreground relative z-10 mx-4 flex w-full max-w-90 flex-col items-center justify-center gap-8 overflow-auto rounded-3xl p-6 text-center shadow-lg'
          >
            <div className='flex w-full flex-col items-end justify-end'>
              <IconButton variant='outline' onClick={onClose} Icon={CloseIcon} className='bg-primary-darker' />

              <Image
                src={journal.cover}
                alt={journal.title}
                width={180}
                height={180}
                priority
                className='border-stroke mx-auto h-auto rounded-2xl border object-cover'
              />
            </div>

            <div className='flex flex-col items-center justify-center gap-6'>
              <div className='flex items-center gap-4'>
                <Badge content='Yeni' className='bg-secondary-light text-foreground w-14 rounded-full px-1 text-xs' />

                <Badge content='Dergi' className='w-14' />
              </div>

              <h4 className='text-primary-darker text-lg font-bold'>{journal.title}</h4>

              <div className='text-secondary-dark flex justify-center gap-5 text-center'>
                <div className='flex items-center justify-center gap-2'>
                  <BookIcon fill='#2a2c31' />
                  Cilt:<strong> {journal.issue}</strong>
                </div>

                <div className='flex items-center justify-center gap-2'>
                  <CountIcon fill='#2a2c31' />
                  Sayı: <strong>{journal.issue}</strong>
                </div>
              </div>

              <div className='text-secondary-dark flex items-center justify-center gap-2 font-bold'>
                <CalendarIcon fill='#2a2c31' />
                <span className='w-[calc(100%-24px)]'>{journal.date}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
