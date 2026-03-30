'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 360);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-40 rounded-full bg-[var(--brand-accent)] px-4 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[var(--brand-accent-hover)] md:bottom-8"
      aria-label="ページ上部へ戻る"
      title="ページ上部へ戻る"
    >
      ↑ 上部へ戻る
    </button>
  );
}
