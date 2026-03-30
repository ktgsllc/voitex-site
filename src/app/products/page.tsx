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
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 rounded-2xl bg-slate-900 px-8 py-12 text-white">
          <p className="text-sm tracking-[0.2em] text-blue-200">製品一覧</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">製品一覧</h1>
          <p className="mt-4 max-w-3xl text-slate-200">
            ボイテキ！製品ファミリーを、導入形態と活用目的で整理しています。
            クラウドで素早く始めるか、オンプレで統制要件に対応するかを比較できます。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">クラウド提供</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              ボイテキクラウド！
            </h2>
            <p className="mt-3 text-slate-600">
              短期導入・従量課金を重視する企業向け。運用負荷を抑えながら、
              会話品質分析とカスハラ対策を迅速に立ち上げられます。
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/products/voitex2/cloud"
                className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
              >
                ボイテキクラウド！の詳細を見る
              </Link>
              <Link
                href="/products/compare"
                className="block rounded-lg border border-blue-600 px-4 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                クラウド/オンプレ比較を見る
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">オンプレ提供</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              ボイテキオンプレ！
            </h2>
            <p className="mt-3 text-slate-600">
              閉域ネットワークや厳格な統制要件に対応した個別設計向け。 FUJI
              RAG連携を前提に、運用・認証まで含めた設計が可能です。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/products/voitex2"
                className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
              >
                製品概要
              </Link>
              <Link
                href="/products/voitex2/onprem"
                className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
              >
                オンプレ詳細
              </Link>
              <Link
                href="/products/voitex2/cloud"
                className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
              >
                クラウド詳細
              </Link>
              <Link
                href="/products/compare"
                className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
              >
                比較ページ
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">姉妹サービス</h2>
          <p className="mt-2 text-slate-600">
            録音・要約サービスと組み合わせることで、業務全体を最適化できます。
          </p>
          <div className="grid gap-3 sm:grid-cols-4">
            <Link
              href="/quicksum"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
            >
              QuickSum
            </Link>
            <Link
              href="/voitex-rec"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
            >
              ボイテキレック！
            </Link>
            <Link
              href="/voitex-converter"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
            >
              ボイテキコンバーター！
            </Link>
            <Link
              href="/voitex-room-rec"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-700 transition hover:bg-slate-50"
            >
              ボイテキルームレック！
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
