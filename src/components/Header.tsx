'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'ホーム', href: '/' },
  { label: '機能一覧', href: '/features' },
  { label: 'マニュアル', href: 'https://manual.voitex.site/', external: true },
  { label: 'FAQ', href: '/faq' },
  { label: 'お知らせ', href: '/news' },
  { label: 'ブログ', href: '/blog' },
  { label: '導入事例', href: '/cases' },
  { label: '料金', href: '/pricing' },
  { label: 'お問い合わせ', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdsOxJVvVHtMUDbPUiS58s_vDJcGGhQLGIE9HLjiqxlQxfbgg/viewform', external: true },
];

const sisterServices = [
  { label: 'QuickSum', href: '/quicksum' },
  { label: 'ボイテキレック', href: '/voitex-rec' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sisterServicesOpen, setSisterServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-primary">
          ボイテキ！
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ label, href, external }) => (
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary text-gray-700"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`transition hover:text-primary ${
                  pathname === href ? 'underline text-primary' : 'text-gray-700'
                }`}
              >
                {label}
              </Link>
            )
          ))}
          
          {/* Sister Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSisterServicesOpen(!sisterServicesOpen)}
              className={`transition hover:text-primary ${
                sisterServices.some(service => pathname === service.href) 
                  ? 'underline text-primary' 
                  : 'text-gray-700'
              }`}
            >
              姉妹サービス ▼
            </button>
            
            {sisterServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
                {sisterServices.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block px-4 py-2 text-sm transition hover:bg-gray-50 ${
                      pathname === href ? 'text-primary bg-gray-50' : 'text-gray-700'
                    }`}
                    onClick={() => setSisterServicesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ label, href, external }) => (
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-primary text-gray-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`block transition hover:text-primary ${
                  pathname === href ? 'underline text-primary' : 'text-gray-700'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          ))}
          
          {/* Mobile Sister Services */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="text-sm font-medium text-gray-500 mb-2">姉妹サービス</div>
            {sisterServices.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`block pl-4 transition hover:text-primary ${
                  pathname === href ? 'underline text-primary' : 'text-gray-700'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
