import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'お知らせ｜ボイテキ！',
  'ボイテキ！の最新情報をお届け。音声解析AIの新機能、導入事例、カスハラ対策に関する情報など、サービスに関する最新ニュースを掲載。',
  '/news'
);

// ハードコーディングされたニュースデータ
const newsData = [
  {
    id: '1',
    title: 'ボイテキレック！リリース予定のお知らせ',
    date: '2024-12-01',
    category: 'リリース',
    excerpt:
      'ボイテキ！と連携する通話録音システム「ボイテキレック！」のリリース予定をお知らせします。',
    slug: 'voitexrec-release-announcement',
  },
  {
    id: '2',
    title: '東京都カスハラ防止条例奨励金制度への対応',
    date: '2024-11-15',
    category: 'お知らせ',
    excerpt:
      '東京都のカスハラ防止条例奨励金制度の対象となり、最大40万円の支援が受けられることをお知らせします。',
    slug: 'kasuhara-prevention-ordinance-support',
  },
  {
    id: '3',
    title: '音声解析AIの精度向上について',
    date: '2024-10-20',
    category: '機能改善',
    excerpt:
      'ボイテキ！の音声解析AIの精度が大幅に向上し、より正確な感情分析とNGワード検出が可能になりました。',
    slug: 'ai-accuracy-improvement',
  },
  {
    id: '4',
    title: 'セキュリティ強化のお知らせ',
    date: '2024-09-30',
    category: 'セキュリティ',
    excerpt:
      'データセキュリティの強化により、より安全な音声データの取り扱いが可能になりました。',
    slug: 'security-enhancement',
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-primary">お知らせ</h1>
          <p className="mb-12 text-lg text-gray-600">
            ボイテキ！の最新情報をお届けします。
          </p>

          <div className="space-y-8">
            {newsData.map((news) => (
              <article key={news.id} className="border-b border-gray-200 pb-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
                    {news.category}
                  </span>
                  <time className="text-sm text-gray-500">{news.date}</time>
                </div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  <Link
                    href={`/news/${news.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {news.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{news.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
