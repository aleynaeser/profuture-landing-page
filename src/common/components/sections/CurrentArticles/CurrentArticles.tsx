'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleDownload } from '@lib/utils';
import { itemLeftMotion, itemListMotion, itemUpMotion } from '@/common/lib/motions';
import { IconButton } from '@/common/components/ui/Buttons/IconButton';
import { useCallback, useMemo, useState } from 'react';
import CurrentArticleItem from './CurrentArticleItem';
import EyeIcon from '@icons/eye.svg';
import DownloadIcon from '@icons/download.svg';
import articlesData from '@constants/article-data';
import ArticleModal from '@/common/components/ui/Modals/ArticleModal';
import NavigateButton from '@/common/components/ui/Buttons/NavigateButton';

export default function CurrentArticles() {
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);

  const coverArticle = useMemo(() => {
    return articlesData[0];
  }, []);

  const handleView = useCallback((a: IArticle) => {
    setSelectedArticle(a);
  }, []);

  return (
    <section id='current-articles' className='my-12 w-full px-4 lg:container lg:mx-auto lg:my-20 xl:my-40'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <motion.div
          {...itemLeftMotion}
          className='border-accent-light bg-foreground flex w-full flex-col justify-between rounded-3xl border-5 lg:max-w-115'
        >
          <div className='relative z-10 p-4'>
            <Image
              src='/images/current-articles-cover.png'
              alt='Current Articles Cover'
              width={400}
              height={600}
              priority
              className='relative z-10 mx-auto flex h-auto w-50 scale-100 object-cover transition-all duration-150 ease-in-out hover:scale-[1.01] lg:mx-0 lg:w-full'
            />

            <div className='bg-accent absolute top-1/2 -left-9.5 z-20 h-12 w-fit -translate-y-1/2 -rotate-90 transform rounded-br-3xl rounded-bl-3xl px-5 py-2 text-lg font-bold lg:-left-11 lg:h-17 lg:rounded-br-4xl lg:rounded-bl-4xl lg:px-6 lg:py-4 lg:text-2xl'>
              Son Sayı
            </div>
          </div>

          <div className='flex h-full items-center justify-center gap-3 p-4 pt-0'>
            <IconButton onClick={() => handleDownload(coverArticle)} variant='outline' Icon={DownloadIcon} />

            <IconButton
              content='Görüntüle'
              variant='solid'
              className='bg-primary min-[1300px]:min-w-37.5'
              Icon={EyeIcon}
              onClick={() => handleView(coverArticle)}
            />
          </div>
        </motion.div>

        <div className='w-full pt-6'>
          <motion.div
            {...itemUpMotion}
            className='flex flex-col items-center justify-between gap-4 pb-11 text-center lg:flex-row lg:text-start'
          >
            <div>
              <h3 className='text-primary-light text-lg font-medium 2xl:text-xl'>Profuture Teknoloji Dergisi</h3>
              <h2 className='text-accent text-2xl/relaxed font-bold 2xl:text-[28px]'>Güncel Yazılar</h2>
            </div>

            <NavigateButton content='Tümünü Görüntüle' variant='outline' className='w-55' />
          </motion.div>

          <motion.div {...itemListMotion} className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1'>
            {articlesData.map((a) => (
              <CurrentArticleItem key={a.id} article={a} onView={handleView} />
            ))}
          </motion.div>
        </div>
      </div>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </section>
  );
}
