import Badge from './Badge';
import Image from 'next/image';
import { useEffect } from 'react';
import { IconButton } from '../ui/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@icons/close.svg';
import AuthorIcon from '@icons/author.svg';
import PageIcon from '@icons/page.svg';

interface IArticleModalProps {
  article: IArticle | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: IArticleModalProps) {
  useEffect(() => {
    if (article) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  return (
    <AnimatePresence mode='wait'>
      {article && (
        <motion.div
          key={article.id}
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
            className='bg-foreground relative z-10 mx-4 w-full max-w-3xl overflow-auto rounded-3xl p-6 shadow-lg'
          >
            <div className='flex items-start justify-between gap-6'>
              <div className='flex w-full flex-col gap-6 lg:w-[calc(100%-60px)] lg:flex-row'>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={140}
                  height={140}
                  className='h-20 w-20 rounded-lg object-cover lg:h-56 lg:w-56 lg:rounded-2xl'
                />

                <div className='flex flex-col gap-4'>
                  <h3 className='text-secondary-dark text-2xl font-bold md:text-2xl'>{article.title}</h3>

                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='bg-neutral-lighter flex h-7 w-7 items-center justify-center rounded-full'>
                        <PageIcon />
                      </div>

                      <div className='text-secondary-dark w-[calc(100%-36px)] text-sm'>
                        Sayfa:<span className='font-bold'> {article.pages}</span>
                      </div>
                    </div>

                    <div className='flex items-center gap-2'>
                      <div className='bg-neutral-lighter flex h-7 w-7 items-center justify-center rounded-full'>
                        <AuthorIcon />
                      </div>

                      <div className='text-secondary-dark w-[calc(100%-36px)] text-sm'>{article.authors?.join(', ')}</div>
                    </div>
                  </div>

                  <div className='mt-2 flex gap-2'>
                    <Badge content={article.category} className='bg-primary text-foreground' />
                    <Badge content={article.type} />
                  </div>
                </div>
              </div>

              <IconButton
                variant='outline'
                onClick={onClose}
                Icon={CloseIcon}
                className='bg-primary-darker absolute right-4'
              />
            </div>

            <article className='mt-4 text-sm whitespace-pre-wrap text-slate-800 2xl:text-base'>{article.content}</article>
          </motion.div>{' '}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
