import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '会社情報｜共同事業体制と運営会社',
  'ボイテキ！製品ファミリー（ボイテキクラウド！・ボイテキオンプレ！）の共同事業体制と運営会社情報。ケーティージーエス合同会社（販売）と株式会社ノウデル（製造）の役割分担を掲載。',
  '/company'
);

export default function CompanyPage() {
  return (
    <>
      <StructuredData type="organization" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm tracking-[0.2em] text-blue-200">会社情報</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">会社概要</h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              ボイテキ！は「ボイテキクラウド！」と「ボイテキオンプレ！」の2製品を持つ製品ファミリーです。
              ケーティージーエス合同会社と株式会社ノウデルの共同事業として運営しています。
            </p>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">共同事業体制</h2>
            <p className="mt-4 leading-8 text-slate-600">
              ボイテキ！は、ケーティージーエス合同会社と株式会社ノウデルの共同事業として運営しています。
              役割分離により、販売はケーティージーエス合同会社、製造は株式会社ノウデルが担当しています。
              両社の専門性を活かし、企画から提供・改善まで一貫して品質向上に取り組んでいます。
            </p>
          </section>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                ケーティージーエス合同会社（販売担当）
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>会社名: ケーティージーエス合同会社</li>
                <li>
                  住所: 〒164-0003 東京都中野区東中野5-10-5 フォーカルビル4B
                </li>
                <li>代表者: 片ケ瀬敏夫</li>
                <li>設立: 2022年5月</li>
                <li>業務内容:</li>
                <li>
                  ・ソフトウェア及びハードウェアの販売・保守・役務提供及びコンサルティング業務
                </li>
                <li>・スポーツ・健康教授業務</li>
                <li>
                  ・広告代理業及び各種の宣伝に関する業務（各種印刷物・広告等のデザイン・イラスト制作）
                </li>
                <li>
                  URL:{' '}
                  <a
                    href="https://ktgs.llc/"
                    className="text-blue-700 hover:underline"
                  >
                    https://ktgs.llc/
                  </a>
                </li>
              </ul>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                株式会社ノウデル（製造担当）
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>会社名: 株式会社ノウデル</li>
                <li>代表者: 片ケ瀬敏夫</li>
                <li>設立: 2023年7月</li>
                <li>業務内容: ソフトウェア開発</li>
                <li>
                  URL:{' '}
                  <a
                    href="https://www.knowdel.jp/"
                    className="text-blue-700 hover:underline"
                  >
                    https://www.knowdel.jp/
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              企業の歴史とビジョン
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              ボイテキ！製品ファミリーは、会話の見えない化という課題を解決し、データドリブンなマネジメントと組織の健全性向上を実現することを目指しています。
              最新のAI技術を活用し、誰でも簡単に使える音声解析ツールを提供します。
              両社の専門性を活かした共同事業により、より高品質なサービスをお客様にお届けします。
            </p>
          </section>

          <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">
              取材・提携・導入に関するお問い合わせ
            </h2>
            <p className="mt-3 text-blue-100">
              目的に応じて、販売窓口と技術窓口の双方でご案内します。
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
    </>
  );
}
