import Slider from '@sections/Slider';
import AboutJournal from '@sections/AboutJournal';
import Journals from '@sections/Journals/Journals';
import CallForPapers from '@sections/CallForPapers';
import CurrentArticles from '@sections/CurrentArticles/CurrentArticles';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LandingPage() {
  return (
    <main className='flex h-full min-h-fit min-w-screen flex-1 flex-col'>
      <Slider />
      <AboutJournal />
      <Journals />
      <CallForPapers />
      <CurrentArticles />
    </main>
  );
}
