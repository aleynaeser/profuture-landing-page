import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

export const handleDownload = (item: IArticle | IJournal) => {
  const journal = item as IJournal;
  const article = item as IArticle;
  
  const content = article.content
    ? article.content
    : `${journal.title} - Cilt ${journal.volume} Sayı ${journal.issue} (${journal.date})`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const aEl = document.createElement('a');
  const safeName = item.title.replace(/[^a-z0-9ğüşöçİĞÜŞÖÇ\s-]/gi, '').replace(/\s+/g, '_');
  aEl.href = url;
  aEl.download = `${safeName || item.id}.txt`;
  document.body.appendChild(aEl);
  aEl.click();
  aEl.remove();
  URL.revokeObjectURL(url);
};
