import Link from 'next/link';

export default function ExecutiveValue() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            経営者が押さえる、導入価値
          </h2>
          <p className="mt-3 text-gray-600">
            ボイテキ！は「現場改善」だけでなく、「経営判断の精度向上」に直結する設計を重視しています。
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              品質と生産性の両立
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              応対品質・会話品質を定量で把握しながら、改善施策を継続。属人的な振り返りから脱却し、現場の再現性を高めます。
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              リスクの早期検知
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              感情変化や要注意発話を可視化し、重大化前に対応。クレーム・離職・監査指摘につながる兆候の先回りを支援します。
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              投資判断しやすい設計
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              クラウドは短期検証、オンプレは統制重視の基盤化に適合。導入目的に応じた選択ができ、投資回収シナリオを描きやすくします。
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">
            まずは、どちらの導入方針かを決める
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            早期成果を優先するならクラウド、統制や閉域要件を優先するならオンプレが適しています。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/features"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              クラウドで検証を始める
            </Link>
            <a
              href="https://fujirag.voitex.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              オンプレを相談する（FUJI RAG）
            </a>
            <Link
              href="/products/compare"
              className="rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              比較表で判断する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
