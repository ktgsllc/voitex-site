'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbStructuredData } from '@/libs/seo';

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
  'what-is-voitex': 'ボイテキ！とは',
  'voitex-rec': 'ボイテキ！レコーダー',
  agreement: '利用規約',
};

export default function Breadcrumbs() {
  const pathname = usePathname(); // 例: /features/detail
  const pathSegments = pathname.split('/').filter(Boolean); // ["features", "detail"]

  if (pathSegments.length === 0) return null;

  // 構造化データを生成
  const structuredData = generateBreadcrumbStructuredData(
    pathSegments,
    breadcrumbMap
  );

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* パンくずリスト */}
      <nav className="mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex list-none flex-wrap items-center gap-2">
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
                <span className="mx-1" aria-hidden="true">
                  /
                </span>
                {isLast ? (
                  <span
                    className="font-semibold text-gray-800"
                    aria-current="page"
                  >
                    {label}
                  </span>
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
    </>
  );
}
