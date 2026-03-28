import Link from 'next/link';

export default function ProductBranch() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary">
            経営課題に合わせて選ぶ
          </h2>
          <p className="mt-3 text-gray-600">
            ボイテキ！製品ファミリーは、導入スピード・統制要件・投資回収の観点で最適な選択ができます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">クラウド提供</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              ボイテキクラウド！
            </h3>
            <p className="mt-3 text-gray-700">
              まずは短期間で成果を出したい企業向け。初期負担を抑えて立ち上げ、現場改善を高速に回せます。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>・短期導入で早く効果検証できる</li>
              <li>・運用負荷を抑えて継続しやすい</li>
              <li>・従量課金で投資対効果を管理しやすい</li>
            </ul>
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
              強い統制要件や閉域運用が必要な企業向け。FUJI
              RAG連携前提で、分析結果を社内ナレッジ活用までつなげます。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>・閉域/統制要件に対応しやすい</li>
              <li>・社内運用ルールに合わせて設計しやすい</li>
              <li>・分析からナレッジ活用まで内製基盤化できる</li>
            </ul>
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

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-gray-900">
            経営者が押さえる判断軸
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">
                立ち上がり速度
              </p>
              <p className="mt-1 text-sm text-gray-600">
                まず成果を早く出すならクラウドが有利。
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">
                統制とデータ管理
              </p>
              <p className="mt-1 text-sm text-gray-600">
                厳格な管理要件があるならオンプレが有利。
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">
                投資回収シナリオ
              </p>
              <p className="mt-1 text-sm text-gray-600">
                初期負担を抑えるか、基盤内製化を優先するかで選択。
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Link
              href="/products/compare"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              クラウド/オンプレ比較を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
