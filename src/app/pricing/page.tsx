import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '料金・導入について｜ボイテキクラウド！',
  'ボイテキ！製品ファミリーのうち、ボイテキクラウド！の料金ページです。従量課金制で必要な分だけ利用でき、オンプレ導入は比較ページから確認できます。',
  '/pricing'
);

export default function Page() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm tracking-[0.2em] text-blue-200">PRICING</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              料金・導入について
            </h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              ボイテキクラウド！は従量課金制です。月額契約不要で、必要な分だけ利用できます。
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">基本料金</h2>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
                  <p className="font-medium text-slate-800">
                    解析時間 1時間あたり
                  </p>
                  <p className="text-xl font-bold text-blue-700">
                    ¥1,500（税込）
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-800">月額基本料</p>
                  <p className="font-bold text-slate-700">¥0</p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-800">標準エンジン</p>
                  <p className="font-bold text-slate-700">追加費用なし</p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4">
                  <p className="font-medium text-slate-800">カスタムエンジン</p>
                  <p className="font-bold text-amber-700">別途見積</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                料金の考え方
              </h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>・課金対象は「解析処理を実施した時間」です。</li>
                <li>・録音時間や通話時間そのものは課金対象ではありません。</li>
                <li>・処理失敗分は課金対象外です。</li>
                <li>・利用時間が安定する場合は固定プランの相談も可能です。</li>
              </ul>
              <p className="mt-5 rounded-lg bg-slate-100 p-4 text-sm text-slate-600">
                詳細な見積は、対象業務・月間処理時間・運用体制を確認したうえでご案内します。
              </p>
            </section>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              料金シミュレーション
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">
                  小規模（100時間/月）
                </h3>
                <p className="mt-2 text-sm text-slate-600">月額目安</p>
                <p className="mt-1 text-xl font-bold text-blue-700">¥150,000</p>
              </article>
              <article className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">
                  中規模（500時間/月）
                </h3>
                <p className="mt-2 text-sm text-slate-600">月額目安</p>
                <p className="mt-1 text-xl font-bold text-blue-700">¥750,000</p>
              </article>
              <article className="rounded-xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">
                  大規模（1000時間/月）
                </h3>
                <p className="mt-2 text-sm text-slate-600">月額目安</p>
                <p className="mt-1 text-xl font-bold text-blue-700">
                  ¥1,500,000
                </p>
              </article>
            </div>
          </section>

          <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">
              料金詳細の相談・トライアルはこちら
            </h2>
            <p className="mt-3 text-blue-100">
              導入規模に合わせた試算と、最適な開始プランをご提案します。
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
