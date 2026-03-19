import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '製品一覧｜ボイテキ！',
  'ボイテキ！製品ファミリーの一覧ページ。ボイテキクラウド！とボイテキオンプレ！、姉妹サービスを用途別に比較できます。',
  '/products'
);

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">製品一覧</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            ボイテキ！製品群を、導入形態に応じて分かりやすく再編しました。
            <br />
            クラウド運用とオンプレ運用の要件に合わせて最適な形を選択できます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm font-semibold text-primary">
              クラウド提供
            </p>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              ボイテキクラウド！
            </h2>
            <p className="mb-6 text-gray-600">
              既存サービスを名称整理したクラウド提供版です。短期間導入と運用負荷の低さを重視する企業に適しています。
            </p>
            <div className="space-y-3">
              <Link
                href="/what-is-voitex"
                className="block rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                ボイテキクラウド！の詳細を見る
              </Link>
              <Link
                href="/products/compare"
                className="block rounded-lg border border-primary px-4 py-3 text-center font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                クラウド/オンプレ比較を見る
              </Link>
            </div>
          </section>

          <section className="rounded-xl bg-white p-8 shadow-sm">
            <p className="mb-2 text-sm font-semibold text-primary">
              オンプレ提供
            </p>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              ボイテキオンプレ！
            </h2>
            <p className="mb-6 text-gray-600">
              通話分析をオンプレミス環境で運用したい企業向け。データ統制や認証連携など厳格な要件に対応します。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/products/voitex2"
                className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
              >
                製品概要
              </Link>
              <Link
                href="/products/voitex2/onprem"
                className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
              >
                オンプレ詳細
              </Link>
              <Link
                href="/products/voitex2/cloud"
                className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
              >
                クラウド詳細
              </Link>
              <Link
                href="/products/compare"
                className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
              >
                比較ページ
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            姉妹サービス
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/quicksum"
              className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
            >
              QuickSum
            </Link>
            <Link
              href="/voitex-rec"
              className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
            >
              ボイテキレック！
            </Link>
            <Link
              href="/voitex-converter"
              className="rounded-lg border px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-50"
            >
              ボイテキコンバーター！
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
