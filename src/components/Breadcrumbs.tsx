'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const breadcrumbMap: Record<string, string> = {
  features: '機能一覧',
  quicksum: 'QuickSum',
  manuals: 'マニュアル',
  faq: 'FAQ',
  news: 'お知らせ',
  blog: 'ブログ',
  cases: '導入事例',
  pricing: '料金プラン',
  contact: 'お問い合わせ',
  company: '運営会社',
  partner: 'パートナーについて',
  terms: '利用規約',
  'privacy-policy': 'プライバシーポリシー',
  security: 'セキュリティ',
};

export default function Breadcrumbs() {
  const pathname = usePathname(); // 例: /features/detail
  const pathSegments = pathname.split('/').filter(Boolean); // ["features", "detail"]

  if (pathSegments.length === 0) return null;

  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="list-none flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ホーム
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          // URLエンコードされた日本語スラッグをデコード
          const decodedSegment = decodeURIComponent(segment);
          const label = breadcrumbMap[segment] || decodedSegment;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold">{label}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
