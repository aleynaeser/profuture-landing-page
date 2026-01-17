'use client';

import Link from 'next/link';
import InboxIcon from '@icons/inbox.svg';
import { IconButton } from '../ui/IconButton';
import { contactData } from '@constants/contact-data';

export default function Footer() {
  const { editorsMail, mail, address } = contactData;

  return (
    <footer className='bg-primary-darker text-foreground w-full'>
      <div className='px-4 lg:container lg:mx-auto lg:px-0'>
        <div className='xs:items-center flex flex-col justify-between gap-4 py-8 sm:flex-row sm:flex-wrap lg:pt-15 lg:pb-10'>
          <div className='flex items-center gap-4'>
            <IconButton variant='outline' href={editorsMail.href} Icon={editorsMail.Icon} />

            <div className='flex flex-col gap-0.5'>
              <h4 className='text-xs font-light'>{editorsMail.title}</h4>
              <p className='text-sm font-bold 2xl:text-base'>{editorsMail.name}</p>
              <Link href={editorsMail.href} className='flex gap-1.5 text-xs font-light hover:underline'>
                <InboxIcon />
                {editorsMail.value}
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <IconButton variant='outline' href={mail.href} Icon={mail.Icon} />

            <div className='flex flex-col gap-0.5'>
              <h4 className='text-xs font-light'>{mail.title}</h4>
              <Link href={mail.href} className='text-sm font-bold hover:underline 2xl:text-base'>
                {mail.value}
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <IconButton variant='outline' href={address.href} Icon={address.Icon} />
            <p className='max-w-[calc(100%-74px)] text-sm md:max-w-75 2xl:text-base'>{address.value}</p>
          </div>
        </div>

        <div className='bg-stroke/91 h-[0.5px]' />

        <p className='py-4 text-center text-[8px] leading-relaxed font-light italic md:py-8 md:text-sm'>
          Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde
          sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her
          türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul
          etmiş sayılır.
        </p>
      </div>

      <p className='bg-accent py-2 text-center text-xs md:text-sm'>
        Profuture Teknoloji - Tüm Hakları Saklıdır. © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
