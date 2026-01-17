'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { itemListMotion } from '@/common/lib/motions';
import { IconButton } from '@components/ui/IconButton';
import { useCallback, useMemo, useState } from 'react';
import CurrentArticleItem from './CurrentArticleItem';
import EyeIcon from '@icons/eye.svg';
import DownloadIcon from '@icons/download.svg';
import articlesData from '@constants/article-data';
import ArticleModal from '@components/ui/ArticleModal';
import NavigateButton from '@components/ui/NavigateButton';

export default function CurrentArticles() {
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);

  const coverArticle = useMemo(() => {
    return articlesData[0];
  }, []);

  const handleView = useCallback((a: IArticle) => {
    setSelectedArticle(a);
  }, []);

  const handleDownload = (a: IArticle) => {
    const blob = new Blob([a.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const aEl = document.createElement('a');
    const safeName = a.title.replace(/[^a-z0-9ğüşöçİĞÜŞÖÇ\s-]/gi, '').replace(/\s+/g, '_');
    aEl.href = url;
    aEl.download = `${safeName || a.id}.txt`;
    document.body.appendChild(aEl);
    aEl.click();
    aEl.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id='current-articles' className='my-12 w-full px-4 lg:container lg:mx-auto lg:my-40 lg:px-0'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='border-accent-light bg-foreground flex w-full flex-col justify-between rounded-3xl border-5 lg:max-w-115'>
          <div className='relative z-10 p-4'>
            <Image
              src='/images/current-articles-cover.png'
              alt='Current Articles Cover'
              width={400}
              height={600}
              className='relative z-10 flex h-auto w-full scale-100 object-cover transition-all duration-150 ease-in-out hover:scale-[1.01]'
            />

            <div className='bg-accent absolute top-1/2 -left-11 z-20 h-17 w-fit -translate-y-1/2 -rotate-90 transform rounded-br-3xl rounded-bl-3xl px-6 py-5 text-2xl font-bold'>
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
        </div>

        <div className='w-full pt-6'>
          <div className='flex flex-col items-center justify-between gap-4 pb-11 text-center lg:flex-row lg:text-start'>
            <div>
              <h3 className='text-primary-light text-xl font-medium'>Profuture Teknoloji Dergisi</h3>
              <h2 className='text-accent text-2xl/relaxed font-bold'>Güncel Yazılar</h2>
            </div>

            <NavigateButton content='Tümünü Görüntüle' href='/' variant='outline' />
          </div>

          <motion.div {...itemListMotion} className='flex flex-col gap-5'>
            {articlesData.map((a) => (
              <CurrentArticleItem key={a.id} article={a} onView={handleView} onDownload={handleDownload} />
            ))}
          </motion.div>
        </div>
      </div>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </section>
  );
}
