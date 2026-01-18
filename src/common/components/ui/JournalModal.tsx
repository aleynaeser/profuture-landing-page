import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { IconButton } from './IconButton';
import CloseIcon from '@icons/close.svg';

interface IJournalModalProps {
  journal: any | null;
  onClose: () => void;
  onDownload?: (j: any) => void;
}

export default function JournalModal({ journal, onClose, onDownload }: IJournalModalProps) {
  useEffect(() => {
    if (journal) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [journal]);

  return (
    <AnimatePresence>
      {journal && (
        <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className='bg-foreground relative z-10 mx-4 w-full max-w-3xl overflow-auto rounded-3xl p-6 shadow-lg'
          >
            <div className='flex items-start justify-between gap-6'>
              <div className='flex w-full flex-col gap-4 lg:flex-row'>
                <Image
                  src={journal.cover}
                  alt={journal.title}
                  width={220}
                  height={300}
                  className='h-48 w-36 rounded-lg object-cover lg:h-72 lg:w-48'
                />

                <div className='flex flex-1 flex-col gap-4'>
                  <h3 className='text-secondary-dark text-2xl font-bold'>{journal.title}</h3>

                  <div className='text-secondary-dark text-sm'>
                    Cilt: <strong>{journal.volume}</strong> • Sayı: <strong>{journal.issue}</strong>
                  </div>

                  <div className='text-secondary-dark text-sm'>
                    Yayın: <strong>{journal.date}</strong>
                  </div>

                  <p className='mt-2 text-sm text-slate-800'>Bu, dergi hakkında kısa bir önizleme metnidir.</p>

                  <div className='flex gap-2'>
                    <IconButton onClick={() => onDownload?.(journal)} variant='outline' Icon={() => <svg />} />
                    <IconButton onClick={onClose} variant='outline' Icon={CloseIcon} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
