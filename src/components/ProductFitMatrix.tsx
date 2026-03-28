import Link from 'next/link';

export default function ProductFitMatrix() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            クラウド/オンプレの機能差分
          </h2>
          <p className="mt-3 text-gray-600">
            ボイテキクラウド！とボイテキオンプレ！は、共通の分析価値を持ちながら、運用要件に応じて強みが異なります。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 bg-blue-50/40 p-6">
            <p className="text-sm font-semibold text-blue-700">
              クラウド向けの強み
            </p>
            <h3 className="mt-1 text-xl font-bold text-gray-900">
              ボイテキクラウド！
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>・短期導入で早く現場運用を始めやすい</li>
              <li>・従量課金で段階的に拡張しやすい</li>
              <li>・運用負荷を抑えつつ改善サイクルを回しやすい</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/features"
                className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                クラウド機能を見る
              </Link>
            </div>
          </article>

          <article className="rounded-xl border border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-700">
              オンプレ向けの強み
            </p>
            <h3 className="mt-1 text-xl font-bold text-gray-900">
              ボイテキオンプレ！
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>・閉域運用や強い統制要件への適合性</li>
              <li>・認証/監査など社内ルールに合わせた設計</li>
              <li>・FUJI RAG連携で社内ナレッジ活用まで接続</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/products/voitex2"
                className="inline-flex rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                オンプレ機能を見る
              </Link>
              <a
                href="https://fujirag.voitex.biz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                FUJI RAGで相談する
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
