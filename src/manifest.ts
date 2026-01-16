import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Profuture',
    short_name: 'Profuture',
    description: '2022 yılında yayın hayatına başlayan teknoloji dergisi Profuture',
    start_url: '/',
    display: 'standalone',
    background_color: '#FBFBFD',
    theme_color: '#273D89',
    icons: [
      {
        src: '/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
