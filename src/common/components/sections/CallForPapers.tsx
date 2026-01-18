import Image from 'next/image';
import CallIcon from '@icons/call.svg';
import NavigateButton from '@components/ui/NavigateButton';

export default function CallForPapers() {
  return (
    <section id='call-for-papers' className='mt-12 w-full px-4 lg:container lg:mx-auto lg:mt-40'>
      <div className='relative flex h-full min-h-110 w-full flex-col items-center justify-between rounded-3xl bg-[url("/images/call-background.png")] bg-cover bg-center bg-no-repeat lg:flex-row lg:items-start lg:gap-8 lg:rounded-4xl'>
        <div className='relative mt-4 h-96 w-full max-w-96 lg:mt-0 lg:h-full'>
          <Image src='/images/call-cover-1.png' alt='Covers' fill className='absolute right-0' />
        </div>

        <div className='relative z-10 flex w-full max-w-150 flex-col items-center gap-7.5 px-4 py-6 text-center lg:-ml-16 lg:pr-15 lg:pl-2'>
          <div className='flex flex-col items-center gap-2'>
            <CallIcon />
            <h4 className='text-primary-light text-lg font-medium 2xl:text-xl'>Makale Çağrısı</h4>
            <h2 className='text-primary text-2xl/relaxed font-bold 2xl:text-[28px]'>
              Türkiye Ulusal Dijital Veri ve Altyapıları
            </h2>
          </div>

          <p className='text-secondary-dark text-sm/relaxed 2xl:text-lg/relaxed'>
            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay
            zeka uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel
            ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
          </p>

          <div className='flex items-center justify-center'>
            <NavigateButton content='Makale Gönder' variant='solid' className='bg-accent' />
          </div>
        </div>

        <div className='relative h-96 w-full max-w-62 lg:h-full lg:scale-110'>
          <Image src='/images/call-cover-2.png' alt='Poster' fill className='absolute lg:-mt-5 lg:-ml-14' />
        </div>
      </div>
    </section>
  );
}
