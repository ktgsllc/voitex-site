'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const links = [
  { label: '製品一覧', href: '/#products' },
  { label: '課題から選ぶ', href: '/#issues' },
  { label: '導入実績', href: '/#results' },
  { label: '選ばれる理由', href: '/#reasons' },
];

const productLinks = [
  { label: 'ボイテキクラウド！', href: '/products/voitex2/cloud' },
  { label: 'ボイテキオンプレ！', href: '/products/voitex2/onprem' },
  { label: 'ボイテキレック！', href: '/voitex-rec' },
  { label: 'ボイテキルームレック！', href: '/voitex-room-rec' },
  { label: 'QuickSum', href: '/quicksum' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="transition hover:opacity-85">
          <Image
            src="/logo.png"
            alt="ボイテキ！"
            width={169}
            height={34}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1 text-sm leading-none text-slate-700 transition hover:text-[var(--brand-core)]"
              aria-haspopup="menu"
              aria-label="製品メニューを開く"
            >
              製品
              <span className="text-xs text-slate-500 transition group-focus-within:rotate-180 group-hover:rotate-180">
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-8 z-20 w-64 -translate-y-1 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/#products"
                className="block rounded-md px-3 py-2 text-xs font-semibold text-[var(--brand-accent)] hover:bg-slate-100"
              >
                製品ファミリーを見る
              </Link>
              <div className="my-1 border-t border-slate-200" />
              {productLinks.map((product) => (
                <Link
                  key={product.label}
                  href={product.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex h-9 items-center text-sm leading-none text-slate-700 transition hover:text-[var(--brand-core)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-accent-hover)]"
          >
            お問い合わせ
          </Link>
        </nav>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700">
            メニュー
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 rounded bg-[var(--brand-accent)] px-3 py-2 text-center text-sm font-semibold text-white"
              >
                お問い合わせ
              </Link>
              <div className="mt-2 border-t border-slate-200 pt-2">
                {productLinks.map((product) => (
                  <Link
                    key={product.label}
                    href={product.href}
                    className="block rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
