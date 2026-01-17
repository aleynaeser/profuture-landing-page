import { cn } from '@lib/utils';

interface IBadgeProps {
  content: string;
  className?: string;
}

export default function Badge({ content, className = '' }: IBadgeProps) {
  return (
    <div className={cn(`bg-secondary-lighter text-primary-darker rounded-lg px-2.5 py-0.75 text-xs lg:text-sm`, className)}>
      {content}
    </div>
  );
}
