import PDFIcon from '@icons/pdf.svg';
import EyeIcon from '@icons/eye.svg';
import PageIcon from '@icons/page.svg';
import SendIcon from '@icons/send.svg';
import Badge from '@components/ui/Badge';
import AuthorIcon from '@icons/author.svg';
import DownloadIcon from '@icons/download.svg';
import { motion } from 'framer-motion';
import { itemMotion } from '@lib/motions';
import { handleDownload } from '@lib/utils';
import { IconButton } from '@/common/components/ui/Buttons/IconButton';

interface ICurrentArticleItemProps {
  article: IArticle;
  onView: (a: IArticle) => void;
}

export default function CurrentArticleItem({ article, onView }: ICurrentArticleItemProps) {
  return (
    <motion.div
      {...itemMotion}
      className='bg-foreground border-stroke flex flex-col gap-2.5 rounded-[20px] border px-4 py-5 shadow-sm'
    >
      <div className='flex gap-2'>
        <Badge content={article.category} className='bg-primary text-foreground' />
        <Badge content={article.type} />
      </div>

      <div className='flex h-full flex-col items-center justify-between gap-2 lg:flex-row lg:items-start'>
        <div className='flex w-full flex-col items-start gap-2.5'>
          <div className='flex items-center justify-center gap-2'>
            <PDFIcon />
            <h4 className='text-secondary-dark w-[calc(100%-20px)] text-lg font-bold lg:line-clamp-1'>{article.title}</h4>
          </div>

          <div className='flex flex-col gap-4 lg:flex-row'>
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

              <div className='text-secondary-dark w-[calc(100%-36px)] text-sm sm:line-clamp-1'>
                {article.authors?.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-1.5'>
          <IconButton href='mailto:profuture@gmail.com' variant='outline' Icon={SendIcon} />
          <IconButton onClick={() => handleDownload(article)} variant='outline' Icon={DownloadIcon} />
          <IconButton onClick={() => onView(article)} Icon={EyeIcon} className='bg-primary' content='Görüntüle' />
        </div>
      </div>
    </motion.div>
  );
}
