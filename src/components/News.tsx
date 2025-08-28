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
      id: '1',
      title: 'ボイテキレック！リリース予定のお知らせ',
      publishedAt: '2024-12-01',
      slug: 'voitexrec-release-announcement',
    },
    {
      id: '2',
      title: '東京都カスハラ防止条例奨励金制度への対応',
      publishedAt: '2024-11-15',
      slug: 'kasuhara-prevention-ordinance-support',
    },
    {
      id: '3',
      title: '音声解析AIの精度向上について',
      publishedAt: '2024-10-20',
      slug: 'ai-accuracy-improvement',
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">お知らせ</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id}>
            <p className="text-sm text-gray-600">
              {item.publishedAt.slice(0, 10)}
            </p>
            <Link href={`/news/${item.slug}`}>
              <p className="cursor-pointer text-lg text-blue-700 hover:underline">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
