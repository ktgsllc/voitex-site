import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'カスハラ義務化対応｜ボイテキ！健康経営LP',
  '2026年10月のカスハラ対策義務化に向けた、経営者向けLPです。ボイテキクラウド！・ボイテキオンプレ！の選定軸、健康経営優良法人対応、導入効果、A/Bテスト案まで整理しています。',
  '/lp/health-management'
);

const targetDate = new Date('2026-10-01T00:00:00+09:00');
const now = new Date();
const daysUntil = Math.max(
  0,
  Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
);

const painPoints = [
  '顧客から怒鳴られても、記録が残らず現場が疲弊する',
  '管理職の指導がパワハラ化しても、組織が気づけない',
  '離職や訴訟が起きてから、事後対応に追われる',
];

const solutionCards = [
  {
    title: 'ハラスメント自動検知',
    description: 'NGワードと文脈を同時に評価し、優先度付きでアラート化。',
  },
  {
    title: '感情変化の可視化',
    description: '会話中の感情推移を可視化し、危険な会話を早期把握。',
  },
  {
    title: '証跡保存と説明責任',
    description: '判断根拠を記録し、再発防止と監査対応に備える。',
  },
  {
    title: '組織健全性ダッシュボード',
    description: '部署別の傾向を追跡し、改善優先順位を明確化。',
  },
];

const productPlans = [
  {
    name: 'ボイテキクラウド！',
    fit: 'まずは早く始めたい企業向け',
    points: [
      '最短即日で導入開始',
      '月額固定費ゼロで検証しやすい',
      '運用負荷を抑えて拡張可能',
    ],
    ctaLabel: 'クラウドで相談する',
    ctaHref: '/contact',
    accent: 'border-blue-300 bg-blue-50',
  },
  {
    name: 'ボイテキオンプレ！',
    fit: '統制・閉域要件を重視する企業向け',
    points: [
      'データ外部送信なしの閉域運用',
      '認証・監査要件に合わせた構成',
      'FUJI RAG連携前提で社内活用を強化',
    ],
    ctaLabel: 'オンプレを相談する（FUJI RAG）',
    ctaHref: 'https://fujirag.voitex.biz/',
    accent: 'border-slate-500 bg-slate-100',
  },
];

const proofIndustries = [
  '証券会社',
  '生命保険会社',
  '損害保険会社',
  '弁護士事務所',
  '税理士事務所',
  '通信販売会社',
  '不動産会社',
  'コールセンター事業社',
];

const faqItems = [
  {
    q: '本当にAIでハラスメントの兆候を発見できますか？',
    a: 'NGワード検知、感情変化、発話パターンを組み合わせ、人間が見落としやすい兆候を検出します。業務ごとの設定調整も可能です。',
  },
  {
    q: '音声データのプライバシーは守られますか？',
    a: 'クラウド版は国内データセンターで運用し、オンプレ版はデータ外部送信なしの閉域運用が可能です。認証と暗号化にも対応しています。',
  },
  {
    q: '健康経営優良法人の認定に活用できますか？',
    a: 'ハラスメント対応の記録・分析・証跡整理に活用でき、認定要件に沿った運用設計を進めやすくなります。',
  },
];

export default function HealthManagementLpPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="bg-amber-300 px-4 py-2 text-center text-sm font-semibold text-slate-900">
        2026年10月の義務化まで、残り{daysUntil}日
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 px-4 py-20"
        id="sec2-hero"
      >
        <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-amber-300/50 bg-amber-300/10 px-4 py-1 text-sm font-semibold text-amber-300">
            健康経営・カスハラ義務化対策LP
          </p>
          <div className="mt-6 grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                その声が、組織を守る。
                <br />
                AIで進める、健康経営と義務化対応。
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-200">
                カスハラ・パワハラ・セクハラの兆候を、AIが会話から継続検知。
                2026年10月の義務化に向けて、証跡・再発防止・説明責任まで一気通貫で整備します。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-amber-300 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-amber-200"
                >
                  無料デモを申し込む
                </Link>
                <Link
                  href="/products/compare"
                  className="rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
                >
                  クラウド/オンプレ比較を見る
                </Link>
                <a
                  href="tel:050-6862-7075"
                  className="rounded-lg border border-amber-300 px-6 py-3 font-semibold text-amber-300 transition-colors hover:bg-amber-300 hover:text-slate-900"
                >
                  電話で相談する
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-amber-300">
                経営者が押さえる3つの論点
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="font-semibold">法対応</p>
                  <p className="mt-1 text-slate-300">
                    方針・相談体制・再発防止の運用実装
                  </p>
                </li>
                <li className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="font-semibold">人材保護</p>
                  <p className="mt-1 text-slate-300">
                    離職リスクの予兆把握とメンタル負荷低減
                  </p>
                </li>
                <li className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="font-semibold">経営判断</p>
                  <p className="mt-1 text-slate-300">
                    会話データを根拠にした改善投資の意思決定
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-900" id="sec1">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">今、対策を急ぐべき理由</h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            義務化は、単なる制度対応ではありません。顧客対応品質・従業員保護・企業ブランドを同時に守る経営課題です。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painPoints.map((pain) => (
              <article
                key={pain}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <p className="text-sm leading-7 text-gray-700">⚠ {pain}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-semibold text-amber-800">
              2026年10月の義務化まで残り{daysUntil}日
            </p>
            <p className="mt-2 text-sm text-slate-700">
              後回しにするほど、対応コストは増えます。今から運用を作ることで、現場負担を抑えながら整備できます。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-14 text-slate-900" id="sec2">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            ボイテキ！で実現する、運用可能な対策
          </h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            兆候の検知から証跡管理、改善アクションまで、現場で回る形に落とし込みます。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {solutionCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-t-4 border-red-500 bg-white p-5 shadow-sm">
              <p className="font-semibold text-red-700">Before（導入前）</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>・報告されないハラスメント</li>
                <li>・異変に気づかず突然離職</li>
                <li>・訴訟化してから事実確認</li>
              </ul>
            </div>
            <div className="rounded-xl border-t-4 border-green-500 bg-white p-5 shadow-sm">
              <p className="font-semibold text-green-700">After（導入後）</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>・AIによる常時監視とアラート</li>
                <li>・感情データで早期対応</li>
                <li>・証跡データで迅速な判断</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              健康経営優良法人対応にも有効
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
              <li>✅ カスハラ対策方針の明文化・周知</li>
              <li>✅ 相談・記録体制の整備</li>
              <li>✅ メンタルヘルス対応記録</li>
              <li>✅ 組織健全性データの取得・分析</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            導入形態を選ぶ（クラウド / オンプレ）
          </h2>
          <p className="mt-4 text-gray-700">
            立ち上げスピードを優先するか、統制要件を優先するか。意思決定に必要な軸で選べます。
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {productPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border p-6 shadow-sm ${plan.accent}`}
              >
                <p className="text-lg font-bold text-slate-900">{plan.name}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {plan.fit}
                </p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700">
                  {plan.points.map((point) => (
                    <li key={point}>・{point}</li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                >
                  {plan.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
          <Link
            href="/products/compare"
            className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            比較表で詳しく確認する →
          </Link>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-14 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">費用イメージと導入実績</h2>
          <p className="mt-4 text-gray-700">
            まずは小さく検証して、効果を見ながら拡張できる構成です。
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    ボイテキ！
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    他社A
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    他社B
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">
                    月額固定費
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-green-700">
                    ¥0
                  </td>
                  <td className="border border-slate-200 px-3 py-2">
                    月額〇〇万円〜
                  </td>
                  <td className="border border-slate-200 px-3 py-2">
                    月額〇〇万円
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">
                    初期費用
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-green-700">
                    ¥0
                  </td>
                  <td className="border border-slate-200 px-3 py-2">不要</td>
                  <td className="border border-slate-200 px-3 py-2">
                    〇〇万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">多業界で導入実績</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {proofIndustries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-900" id="sec2-faq">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">よくある質問</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-16 text-white"
        id="sec2-final-cta"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold">
            まず、あなたの組織の声を聴いてみませんか？
          </h2>
          <p className="mt-4 text-slate-100">
            課題ヒアリングから導入方針整理まで、専任スタッフが伴走します。
          </p>
          <p className="mt-3 text-sm font-semibold text-amber-300">
            2026年10月の義務化まで残り{daysUntil}
            日。今すぐ対策を始めることが組織を守る第一歩です。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-300 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-amber-200"
            >
              デモを申し込む
            </Link>
            <Link
              href="/products/compare"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              比較表を見る
            </Link>
            <a
              href="tel:050-6862-7075"
              className="rounded-lg border border-amber-300 px-6 py-3 font-semibold text-amber-300 transition-colors hover:bg-amber-300 hover:text-slate-900"
            >
              まず電話で相談する
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-300">
            ✅ 無料デモ実施 / ✅ 専任スタッフ対応 / ✅ 最短即日トライアル / ✅
            契約不要で終了可能
          </p>
        </div>
      </section>
    </main>
  );
}
