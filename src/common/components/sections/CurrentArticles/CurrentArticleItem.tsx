import PDFIcon from '@icons/pdf.svg';
import EyeIcon from '@icons/eye.svg';
import PageIcon from '@icons/page.svg';
import SendIcon from '@icons/send.svg';
import Badge from '@components/ui/Badge';
import AuthorIcon from '@icons/author.svg';
import DownloadIcon from '@icons/download.svg';
import { motion } from 'framer-motion';
import { itemMotion } from '@/common/lib/motions';
import { IconButton } from '@components/ui/IconButton';

interface ICurrentArticleItemProps {
  article: IArticle;
  onView: (a: IArticle) => void;
  onDownload: (a: IArticle) => void;
}

export default function CurrentArticleItem({ article, onView, onDownload }: ICurrentArticleItemProps) {
  return (
    <motion.div
      {...itemMotion}
      className='bg-foreground border-stroke flex flex-col gap-2.5 rounded-[20px] border px-4 py-5 shadow-sm'
    >
      <div className='flex gap-2'>
        <Badge content={article.category} className='bg-primary text-foreground' />
        <Badge content={article.type} />
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2'>
        <div className='flex flex-col gap-2.5 items-start w-full'>
          <div className='flex items-center justify-center gap-2'>
            <PDFIcon />
            <h4 className='text-secondary-dark w-[calc(100%-30px)] lg:line-clamp-1 text-lg font-bold'>{article.title}</h4>
          </div>

          <div className='flex flex-col lg:flex-row gap-4'>
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
        </div>

        <div className='flex items-center gap-1.5'>
          <IconButton href='mailto:profuture@gmail.com' variant='outline' Icon={SendIcon} />
          <IconButton onClick={() => onDownload(article)} variant='outline' Icon={DownloadIcon} />
          <IconButton onClick={() => onView(article)} Icon={EyeIcon} className='bg-primary' content='Görüntüle' />
        </div>
      </div>
    </motion.div>
  );
}
