'use client';

import { structuredData } from '@/libs/seo';

interface StructuredDataProps {
  type: 'softwareApplication' | 'organization' | 'faq';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const data = structuredData[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
