'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'ホーム', href: '/', icon: '🏠' },
  { label: '機能一覧', href: '/features', icon: '⚡' },
  { label: '料金', href: '/pricing', icon: '💰' },
  { label: '導入事例', href: '/cases', icon: '💼' },
  { label: 'FAQ', href: '/faq', icon: '❓' },
  { label: 'お知らせ', href: '/news', icon: '📢' },
  { label: 'マニュアル', href: 'https://manual.voitex.site/', external: true, icon: '📖' },
  { label: 'ブログ', href: 'https://manual.voitex.site/blog/', external: true, icon: '✍️' },
  {
    label: 'お問い合わせ',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdsOxJVvVHtMUDbPUiS58s_vDJcGGhQLGIE9HLjiqxlQxfbgg/viewform',
    external: true,
    icon: '📧',
  },
];

const sisterServices = [
  { label: 'QuickSum', href: '/quicksum', icon: '📝' },
  { label: 'ボイテキレック', href: '/voitex-rec', icon: '🎙️' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sisterServicesOpen, setSisterServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="ボイテキ！" 
            width={169} 
            height={34} 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.slice(0, 4).map(({ label, href, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors text-sm"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {label}
              </Link>
            )
          )}

          {/* Sister Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSisterServicesOpen(!sisterServicesOpen)}
              className={`text-sm transition-colors ${
                sisterServices.some((service) => pathname === service.href)
                  ? 'text-primary font-medium'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              姉妹サービス
              <span className="ml-1 text-xs">▼</span>
            </button>

            {sisterServicesOpen && (
              <div className="absolute left-0 top-full mt-1 min-w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {sisterServices.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === href
                        ? 'text-primary bg-gray-50'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setSisterServicesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Secondary nav items */}
          <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
            {navItems.slice(4).map(({ label, href, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm transition-colors ${
                    pathname === href ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-3 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-4">
            {/* Primary nav items */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
                メインメニュー
              </div>
              <div className="space-y-1">
                {navItems.slice(0, 4).map(({ label, href, external, icon }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="font-medium">{label}</span>
                      <span className="ml-auto text-xs text-gray-400">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                        pathname === href 
                          ? 'text-primary bg-primary/5 font-medium' 
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="font-medium">{label}</span>
                      {pathname === href && (
                        <span className="ml-auto text-primary">●</span>
                      )}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Sister Services */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
                姉妹サービス
              </div>
              <div className="space-y-1">
                {sisterServices.map(({ label, href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                      pathname === href 
                        ? 'text-primary bg-primary/5 font-medium' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="font-medium">{label}</span>
                    {pathname === href && (
                      <span className="ml-auto text-primary">●</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Secondary nav items */}
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
                その他
              </div>
              <div className="space-y-1">
                {navItems.slice(4).map(({ label, href, external, icon }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-3 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{icon}</span>
                      <span>{label}</span>
                      <span className="ml-auto text-xs text-gray-400">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                        pathname === href 
                          ? 'text-primary bg-primary/5 font-medium' 
                          : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{icon}</span>
                      <span>{label}</span>
                      {pathname === href && (
                        <span className="ml-auto text-primary">●</span>
                      )}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
