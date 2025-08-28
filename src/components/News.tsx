'use client';
import Link from 'next/link';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
  slug: string;
};

export default function News() {
  // ハードコーディングされたニュースデータ（最新2件）
  const news: NewsItem[] = [
    {
      id: '1',
      title: '【ご案内】ISO/IEC 27017（クラウド情報セキュリティ）取得に向けた対応状況について',
      publishedAt: '2025-07-06',
      slug: 'iso-27017-acquisition-status',
    },
    {
      id: '2',
      title: '「ボイテキ！」正式リリース｜録音音声をAIで解析するバッチ処理型クラウド',
      publishedAt: '2025-08-01',
      slug: 'voitex-official-release',
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
