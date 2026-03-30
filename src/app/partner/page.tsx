export default function PartnerPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
          <p className="text-sm tracking-[0.2em] text-blue-200">PARTNER</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            パートナー募集
          </h1>
          <p className="mt-4 max-w-3xl text-slate-200">
            ボイテキ！の価値を広げる販売・技術パートナーを募集しています。
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            パートナーシップの方針
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            貴社の業界知見と、ボイテキ！の音声AI技術を組み合わせ、
            顧客課題に即したソリューションを共同提供します。
          </p>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">販売パートナー</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              導入提案・業務整理・定着支援まで含めて、顧客への価値提供を共同で行います。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>・営業支援</li>
              <li>・導入コンサルティング</li>
              <li>・運用定着支援</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              技術連携パートナー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              既存システムへの連携や、業種要件に合わせた機能拡張を共同で推進します。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>・API連携</li>
              <li>・システム統合</li>
              <li>・共同開発</li>
            </ul>
          </article>
        </div>

        <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">パートナー相談窓口</h2>
          <p className="mt-3 text-blue-100">
            協業モデルや体制設計について、まずはお気軽にご相談ください。
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900"
          >
            お問い合わせ
          </a>
        </section>
      </div>
    </main>
  );
}
