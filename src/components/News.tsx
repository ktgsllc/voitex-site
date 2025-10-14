'use client';
import Link from 'next/link';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
  slug: string;
};

export default function News() {
  // ハードコーディングされたニュースデータ（最新3件）
  const news: NewsItem[] = [
    {
      id: '8',
      title: '🚀 Voitex v1.4.0 リリース - 役割別ダッシュボードとUI/UX大幅改善',
      publishedAt: '2025-10-14',
      slug: 'voitex-v1-4-0-role-based-dashboard-ui-ux-improvement',
    },
    {
      id: '7',
      title:
        '🎉 ボイテキ！iPhoneアプリ「ボイテキ！クライアント」正式リリース！',
      publishedAt: '2025-09-25',
      slug: 'voitex-iphone-app-voitexclient-official-release',
    },
    {
      id: '6',
      title: '🚀 Voitex v1.3.0 リリース - プロンプト指定機能の追加',
      publishedAt: '2025-09-21',
      slug: 'voitex-v1-3-0-prompt-specification',
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          お知らせ
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`}>
              <div className="group h-full rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {item.publishedAt.slice(0, 10)}
                  </span>
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
