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
    id: '4',
    title:
      'セキュリティ強化のお知らせ - WAF導入とファイルアップロード検証の改善',
    date: '2025-09-08',
    category: 'セキュリティ',
    excerpt:
      'Webアプリケーションファイアウォール（WAF）の導入とファイルアップロード時のセキュリティ検証の改善を実施いたします。より安全なサービス利用環境を提供するため、9月13日より順次リリースされます。',
    slug: 'security-enhancement-waf-file-upload',
  },
  {
    id: '3',
    title:
      'ボイテキ！、会話評価機能を大幅刷新 - 感情解析結果の視覚化とAI改善アドバイスを実装',
    date: '2025-09-05',
    category: 'アップデート',
    excerpt:
      '音声解析プラットフォーム「ボイテキ！」の会話評価機能を大幅に刷新しました。感情解析結果をカード形式で視覚化し、AI改善アドバイスを分離表示することで、営業・カスタマーサポートの効率化を実現します。',
    slug: 'voitex-evaluation-feature-update',
  },
  {
    id: '2',
    title:
      '「ボイテキ！」正式リリース｜録音音声をAIで解析するバッチ処理型クラウド',
    date: '2025-08-01',
    category: 'リリース',
    excerpt:
      '2025年8月1日、音声解析クラウド「ボイテキ！」は正式リリースを迎えました。カスタマーハラスメント対策や、通話品質評価・離職防止を支援するため、録音データをAIで解析・可視化するバッチ処理特化型サービスです。',
    slug: 'voitex-official-release',
  },
  {
    id: '1',
    title:
      '【ご案内】ISO/IEC 27017（クラウド情報セキュリティ）取得に向けた対応状況について',
    date: '2025-07-06',
    category: 'セキュリティ',
    excerpt:
      '当社（ケーティージーエス合同会社）では、クラウドサービスをご利用いただく皆様に、より安心してお使いいただける環境を提供するため、国際的な情報セキュリティ規格「ISO/IEC 27017」の取得に向けた取り組みを進めております。',
    slug: 'iso-27017-acquisition-status',
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
