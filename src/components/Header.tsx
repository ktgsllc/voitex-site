'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const cloudItems = [
  { label: '機能一覧', href: '/features', icon: '⚡' },
  { label: '料金', href: '/pricing', icon: '💰' },
  { label: '導入事例', href: '/cases', icon: '💼' },
  { label: 'FAQ', href: '/faq', icon: '❓' },
  {
    label: 'マニュアル',
    href: 'https://manual.voitex.site/',
    external: true,
    icon: '📖',
  },
];

const onPremItems = [
  { label: '機能一覧', href: '/products/voitex2', icon: '⚡' },
  { label: '料金', href: '/products/compare', icon: '💰' },
  { label: '導入事例', href: '/cases', icon: '💼' },
  { label: 'FAQ', href: '/faq', icon: '❓' },
  {
    label: 'マニュアル',
    href: 'https://manual.voitex.site/',
    external: true,
    icon: '📖',
  },
];

const sisterServices = [
  { label: 'QuickSum', href: '/quicksum', icon: '📝' },
  { label: 'ボイテキレック！', href: '/voitex-rec', icon: '🎙️' },
  { label: 'ボイテキコンバーター！', href: '/voitex-converter', icon: '🔄' },
];

const utilityItems = [
  { label: 'お知らせ', href: '/news', icon: '📢' },
  {
    label: 'ブログ',
    href: 'https://manual.voitex.site/blog/',
    external: true,
    icon: '✍️',
  },
  {
    label: 'お問い合わせ',
    href: '/contact',
    icon: '📧',
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cloudOpen, setCloudOpen] = useState(false);
  const [onPremOpen, setOnPremOpen] = useState(false);
  const [sisterServicesOpen, setSisterServicesOpen] = useState(false);
  const pathname = usePathname();
  const isActiveNav = (href: string) => pathname === href;
  const cloudActive = cloudItems.some(
    (item) => !item.external && pathname === item.href
  );
  const onPremActive = onPremItems.some(
    (item) => !item.external && pathname === item.href
  );
  const sisterActive = sisterServices.some((item) => pathname === item.href);

  // モバイルメニューの開閉時にbodyのスクロールを制御
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt="ボイテキ！"
            width={169}
            height={34}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center space-x-6 lg:flex">
          <Link
            href="/"
            className={`flex items-center text-sm transition-colors ${
              isActiveNav('/')
                ? 'font-medium text-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            ホーム
          </Link>

          {/* Cloud Dropdown */}
          <div className="relative flex items-center">
            <button
              onClick={() => {
                setCloudOpen(!cloudOpen);
                setOnPremOpen(false);
                setSisterServicesOpen(false);
              }}
              className={`flex h-full items-center text-sm transition-colors ${
                cloudActive
                  ? 'font-medium text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              ボイテキクラウド
              <span className="ml-1 text-xs">▼</span>
            </button>

            {cloudOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 min-w-52 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {cloudItems.map(({ label, href, external }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      onClick={() => setCloudOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === href
                          ? 'bg-gray-50 font-medium text-primary'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setCloudOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          {/* On-Prem Dropdown */}
          <div className="relative flex items-center">
            <button
              onClick={() => {
                setOnPremOpen(!onPremOpen);
                setCloudOpen(false);
                setSisterServicesOpen(false);
              }}
              className={`flex h-full items-center text-sm transition-colors ${
                onPremActive
                  ? 'font-medium text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              ボイテキオンプレ
              <span className="ml-1 text-xs">▼</span>
            </button>

            {onPremOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 min-w-52 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {onPremItems.map(({ label, href, external }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      onClick={() => setOnPremOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === href
                          ? 'bg-gray-50 font-medium text-primary'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                      }`}
                      onClick={() => setOnPremOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          {/* Sister Services Dropdown */}
          <div className="relative flex items-center">
            <button
              onClick={() => {
                setSisterServicesOpen(!sisterServicesOpen);
                setCloudOpen(false);
                setOnPremOpen(false);
              }}
              className={`flex h-full items-center text-sm transition-colors ${
                sisterActive
                  ? 'font-medium text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              姉妹サービス
              <span className="ml-1 text-xs">▼</span>
            </button>

            {sisterServicesOpen && (
              <div className="absolute left-0 top-full mt-1 min-w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {sisterServices.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === href
                        ? 'bg-gray-50 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
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
          <div className="ml-6 flex items-center space-x-4 border-l border-gray-200 pl-6">
            {utilityItems.map(({ label, href, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-500 transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center text-sm transition-colors ${
                    isActiveNav(href)
                      ? 'font-medium text-primary'
                      : 'text-gray-500 hover:text-primary'
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
          className="rounded-lg p-3 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[73px] z-40 bg-white lg:hidden">
          <div className="h-full overflow-y-auto px-4 py-4">
            {/* Primary nav items */}
            <div className="mb-6">
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                メインメニュー
              </div>
              <div className="space-y-1">
                <Link
                  href="/"
                  className={`flex items-center space-x-3 rounded-lg px-3 py-3 transition-colors ${
                    isActiveNav('/')
                      ? 'bg-primary/5 font-medium text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-lg">🏠</span>
                  <span className="font-medium">ホーム</span>
                  {isActiveNav('/') && (
                    <span className="ml-auto text-primary">●</span>
                  )}
                </Link>
              </div>
            </div>

            {/* Cloud menu */}
            <div className="mb-6">
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                ボイテキクラウド
              </div>
              <div className="space-y-1">
                {cloudItems.map(({ label, href, external, icon }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
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
                      className={`flex items-center space-x-3 rounded-lg px-3 py-3 transition-colors ${
                        pathname === href
                          ? 'bg-primary/5 font-medium text-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
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

            {/* On-prem menu */}
            <div className="mb-6">
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                ボイテキオンプレ
              </div>
              <div className="space-y-1">
                {onPremItems.map(({ label, href, external, icon }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
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
                      className={`flex items-center space-x-3 rounded-lg px-3 py-3 transition-colors ${
                        pathname === href
                          ? 'bg-primary/5 font-medium text-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
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
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                姉妹サービス
              </div>
              <div className="space-y-1">
                {sisterServices.map(({ label, href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center space-x-3 rounded-lg px-3 py-3 transition-colors ${
                      pathname === href
                        ? 'bg-primary/5 font-medium text-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
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
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                その他
              </div>
              <div className="space-y-1">
                {utilityItems.map(({ label, href, external, icon }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 rounded-lg px-3 py-3 text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
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
                      className={`flex items-center space-x-3 rounded-lg px-3 py-3 transition-colors ${
                        pathname === href
                          ? 'bg-primary/5 font-medium text-primary'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
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
