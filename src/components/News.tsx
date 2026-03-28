'use client';
import Link from 'next/link';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
  category: 'リリース' | 'アップデート' | 'セキュリティ';
  pinned?: boolean;
  slug: string;
};

const categoryStyle: Record<NewsItem['category'], string> = {
  リリース: 'bg-emerald-100 text-emerald-800',
  アップデート: 'bg-blue-100 text-blue-800',
  セキュリティ: 'bg-amber-100 text-amber-800',
};

export default function News() {
  // ハードコーディングされたニュースデータ（トップ表示用）
  const news: NewsItem[] = [
    {
      id: '10',
      title: '📢 2026年4月「ボイテキオンプレ！」リリース予定のお知らせ',
      publishedAt: '2026-03-19',
      category: 'リリース',
      pinned: true,
      slug: 'voitex-onprem-release-scheduled-2026-04',
    },
    {
      id: '7',
      title:
        '🎉 ボイテキ！iPhoneアプリ「ボイテキ！クライアント」正式リリース！',
      publishedAt: '2025-09-25',
      category: 'リリース',
      slug: 'voitex-iphone-app-voitexclient-official-release',
    },
    {
      id: '9',
      title:
        '🔒 React Server Componentsの脆弱性（CVE-2025-55182）への対応について',
      publishedAt: '2025-12-06',
      category: 'セキュリティ',
      slug: 'react-server-components-cve-2025-55182-security-update',
    },
  ];
  const topNews = [...news]
    .sort((a, b) => {
      if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
      return b.publishedAt.localeCompare(a.publishedAt);
    })
    .slice(0, 3);

  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          お知らせ
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topNews.map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`}>
              <div className="group h-full rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyle[item.category]}`}
                    >
                      {item.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {item.publishedAt.slice(0, 10)}
                    </span>
                    {item.pinned && (
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                        新着固定
                      </span>
                    )}
                  </div>
                  <div className="text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-700">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>詳細を見る</span>
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
          >
            すべてのお知らせを見る
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
