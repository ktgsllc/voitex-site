import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '経営者向けAI要約｜カスハラ防止義務化対応 | ボイテキ！',
  '経営者向けに、2026年10月のカスハラ防止義務化対応を見据えたボイテキ！製品ファミリーの要点を整理。導入判断の観点、製品構成、費用感、運営体制を1ページで確認できます。',
  '/ai'
);

const products = [
  [
    'ボイテキクラウド！',
    '/products/voitex2/cloud',
    'クラウド型の音声解析。月額基本料5,000円＋従量課金（税抜）。',
  ],
  [
    'ボイテキオンプレ！',
    '/products/voitex2/onprem',
    '閉域・統制要件向けのオンプレミス型。',
  ],
  [
    'ボイテキレック！',
    '/voitex-rec',
    '最大32ch対応のSIP通話録音。オンプレ保存対応。',
  ],
  [
    'ボイテキルームレック！',
    '/voitex-room-rec',
    'スマホで会議・商談を録音し自動連携。',
  ],
  [
    'QuickSum',
    '/quicksum',
    'テキスト化済み会話の要約に特化。単体利用にも対応。',
  ],
] as const;

const faqs = [
  ['サービス名', 'ボイテキ！'],
  ['想定読者', '経営者・役員・部門責任者'],
  ['重要論点', '2026年10月のカスハラ防止義務化を見据えた体制整備'],
  ['主な提供形態', 'クラウド型 / オンプレミス型'],
  [
    '基本料金（クラウド）',
    '月額基本料5,000円＋解析時間1時間あたり1,500円の従量課金（いずれも税抜）。初期費用・解約違約金はゼロ。',
  ],
  ['対象', '法人向けサービス（B2B）'],
  ['問い合わせ窓口', 'https://www.voitex.site/contact'],
  ['運営体制', '販売: ケーティージーエス合同会社 / 製造: 株式会社ノウデル'],
] as const;

export default function AiOverviewPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <main className="bg-slate-50 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <section className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-300">
            AI OVERVIEW
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            経営者向け ボイテキ！AI要約
          </h1>
          <p className="mt-4 text-slate-100">
            このページは、経営層の導入判断に必要な情報をAI検索・AIアシスタント向けに要約した公式案内です。
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
            重要トピック
          </p>
          <h2 className="mt-2 text-xl font-bold text-amber-900">
            2026年10月 カスハラ防止義務化を見据えた体制整備
          </h2>
          <p className="mt-2 text-sm leading-7 text-amber-900">
            ボイテキ！は「録音・証跡保全」「リスク兆候の可視化」「要約・報告効率化」を一体で整備し、
            経営として説明可能な運用体制の構築を支援します。詳細はお問い合わせからご相談ください。
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-semibold text-amber-900 underline underline-offset-2"
          >
            体制整備について相談する →
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            経営者向けの導入目的
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              'リスク管理: カスハラの証跡保全と早期検知',
              '品質管理: 応対品質の可視化と継続改善',
              '生産性: ACW削減による業務効率向上',
              '説明責任: 経営判断に使えるデータ蓄積',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">サービス概要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            ボイテキ！は、音声データの録音・解析・要約を支援する法人向け製品ファミリーです。
            カスタマーハラスメント対策、応対品質の可視化、営業分析、ACW削減を主な用途としています。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            製品一覧（公式リンク）
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {products.map(([name, href, desc]) => (
              <article key={name} className="rounded-lg bg-slate-100 p-4">
                <p className="font-semibold text-slate-900">{name}</p>
                <p className="mt-1 text-sm text-slate-700">{desc}</p>
                <Link
                  href={href}
                  className="mt-2 inline-block text-xs font-semibold text-[var(--brand-accent)] hover:underline"
                >
                  公式ページを見る →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            共同事業体制（運営会社）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            ボイテキ！は、ケーティージーエス合同会社と株式会社ノウデルの共同事業として運営しています。
            販売はケーティージーエス合同会社、製造は株式会社ノウデルが担当します。
          </p>
          <Link
            href="/company"
            className="mt-3 inline-block text-sm font-semibold text-[var(--brand-accent)] hover:underline"
          >
            運営会社情報を見る →
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            主要Q&A（AI参照向け）
          </h2>
          <div className="mt-4 space-y-3">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-lg bg-slate-100 p-4">
                <p className="text-sm font-semibold text-slate-900">Q. {q}</p>
                <p className="mt-1 text-sm text-slate-700">A. {a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
