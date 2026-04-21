'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaIntent = 'contact' | 'trial' | 'materials' | 'demo';

type Props = {
  href: string;
  location: string;
  intent?: CtaIntent;
  label?: string;
  className?: string;
  children: ReactNode;
};

export default function CtaLink({
  href,
  location,
  intent = 'contact',
  label,
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (typeof window === 'undefined') return;
        window.gtag?.('event', 'cta_click', {
          location,
          intent,
          label,
          destination: href,
        });
      }}
    >
      {children}
    </Link>
  );
}
