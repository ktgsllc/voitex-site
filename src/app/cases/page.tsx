import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '導入事例｜ボイテキクラウド！・ボイテキオンプレ！',
  'ボイテキ！製品ファミリー（ボイテキクラウド！・ボイテキオンプレ！）の導入事例・トライアル状況をご紹介します。',
  '/cases'
);

export default function Page() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm tracking-[0.2em] text-blue-200">CASES</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              導入事例・対応業種
            </h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              ボイテキ！は、金融・士業・不動産・コールセンターなど、
              多様な業種でトライアル導入が進んでいます。
            </p>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">対応業種</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                '証券会社',
                '生命保険会社',
                '損害保険会社',
                '弁護士事務所',
                '税理士事務所',
                '通信販売会社',
                '不動産会社',
                '建築業',
                'コールセンター事業者',
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700"
                >
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">品質向上</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                会話品質を数値で可視化し、指導の属人化を減らす運用を支援。
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">リスク管理</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                NGワード検知・感情分析で、ハラスメントやクレーム兆候の早期把握を支援。
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">業務効率化</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                要約と検索の活用で、アフターコールワークや振り返り工数を削減。
              </p>
            </article>
          </section>

          <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">
              導入事例の掲載にご協力いただける企業様へ
            </h2>
            <p className="mt-3 text-blue-100">
              活用背景・導入効果・運用体制を含めたケースとして掲載準備を進めています。
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              お問い合わせ
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
