import Link from 'next/link';

export default function ProductBranch() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary">導入形態で選ぶ</h2>
          <p className="mt-3 text-gray-600">
            ボイテキ！製品ファミリーは、クラウド運用とオンプレ運用の両方に対応しています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">クラウド提供</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              ボイテキクラウド！
            </h3>
            <p className="mt-3 text-gray-700">
              短期間で導入しやすく、運用負荷を抑えたい企業向け。現行の機能一覧・料金・導入事例をすぐ確認できます。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/features"
                className="rounded-lg bg-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                機能一覧
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                料金
              </Link>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">オンプレ提供</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              ボイテキオンプレ！
            </h3>
            <p className="mt-3 text-gray-700">
              データ統制、閉域運用、認証連携など厳格な要件に対応。機能概要・比較・導入相談に進めます。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/products/voitex2"
                className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                機能一覧
              </Link>
              <Link
                href="/products/compare"
                className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                料金・比較
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
