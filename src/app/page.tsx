import Slider from '@sections/Slider';
import CallForPapers from '@sections/CallForPapers';
import CurrentArticles from '@sections/CurrentArticles/CurrentArticles';
import AboutJournal from '@sections/AboutJournal';

export default function LandingPage() {
  return (
    <main className='flex h-full min-h-fit min-w-screen flex-1 flex-col'>
      <Slider />
      <AboutJournal />
      <CallForPapers />
      <CurrentArticles />
    </main>
  );
}
