import CurrentArticles from '@sections/CurrentArticles/CurrentArticles';
import CallForPapers from '@sections/CallForPapers';

export default function LandingPage() {
  return (
    <main className='flex h-full min-h-fit min-w-screen flex-1 flex-col'>
      <CallForPapers />
      <CurrentArticles />
    </main>
  );
}
