import * as React from 'react';
import { cn } from '@/lib/utils';

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-xs font-medium text-ink/70',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
