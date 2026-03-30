import Link from 'next/link';
import type { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキオンプレ！— 声のデータで、健康経営を前へ。| ボイテキ！',
  '通話・面談・応対に潜む見えない負荷を可視化。FUJI RAG連携前提で、離職予防・現場改善・組織の健全性向上を支援するオンプレミス対話分析基盤。',
  '/products/voitex2/onprem'
);

const issues = [
  [
    '😓',
    '現場の疲弊やストレスを把握できない',
    '通話・面談に潜む心理的負荷を可視化できず、ケアや配置改善が後手になっている。',
  ],
  [
    '🚨',
    'クレーム・ハラスメント兆候の見逃し',
    '問題が顕在化してから対応する状態を脱し、早期介入できる仕組みが必要。',
  ],
  [
    '📉',
    '応対品質改善が定性的に止まる',
    '振り返りが感覚ベースで、部門横断で再現可能な改善アクションに落ちにくい。',
  ],
  [
    '🔒',
    '機密性の高い音声を外部に出せない',
    '個人情報・機密情報の観点でクラウド利用が難しい業界要件に対応したい。',
  ],
  [
    '🧩',
    '部門ごとに必要な分析軸が違う',
    '経営・人事・法務・品質管理で同じデータを別視点で活用したい。',
  ],
  [
    '📚',
    '分析結果をナレッジ活用へ繋げたい',
    '分析で終わらせず、FUJI RAG連携で教育・改善・意思決定へ循環させたい。',
  ],
];

const featureCards = [
  [
    '📈',
    '感情解析で見えない負荷を可視化',
    '通話・面談を発話単位で分析し、怒り・緊張・不安などの変化を時系列で把握。要注意発話を自動抽出できます。',
  ],
  [
    '🗂️',
    '柔軟な入力導線',
    'GUIアップロード・NAS・S3/MinIO連携に対応。既存運用に合わせて段階的に導入できます。',
  ],
  [
    '🆔',
    '社内認証統合',
    '社内認証基盤と連携したアクセス制御設計が可能。組織ルールに沿った運用を実現します。',
  ],
  [
    '🛡️',
    'リスクの早期検知',
    'クレーム化兆候・不適切発言疑い・ハラスメント兆候を可視化し、深刻化前の介入を支援します。',
  ],
  [
    '🔐',
    '企業導入に必要な統制を標準装備',
    'ロール連動アクセス制御、監査ログ、ルール未一致データ隔離（quarantine）運用など統制要件に対応。',
  ],
  [
    '📚',
    'FUJI RAG連携で活用まで循環',
    '分析結果をFUJI RAG活用基盤へ接続し、教育・改善・意思決定に再利用できる運用を実現します。',
  ],
];

const strategicStrengths = [
  {
    icon: '🧭',
    title: '7つの業務レンズ',
    desc: '経営・営業・品質CS・人事・法務コンプラ・マーケ・DXの観点で分析。同じ対話データを部門別に読み解き、意思決定に必要な示唆を届けます。',
  },
  {
    icon: '🧩',
    title: '会話相手相性',
    desc: '感情指標と会話行動（発話量・質問率）を組み合わせ、相性と会話タイプを可視化。配置・育成・1on1設計の精度向上を支援します。',
  },
];

const compareRows = [
  ['立ち上がり速度', '◎ 即日', '△ 1〜2週間'],
  ['初期コスト', '◎ 低い（従量課金）', '△ 初期投資あり'],
  ['閉域・統制要件', '△ 外部サービス利用', '◎ 完全閉域対応'],
  ['データを外部に送らない', '✗ AI処理で外部送信あり', '◎ 社内完結'],
  ['社内認証統合', '—', '◎ 対応'],
  ['FUJI RAG連携', '✗ 非対応', '◎ 対応'],
  ['内製基盤化', '✗ クラウド依存', '◎ 完全内製化可能'],
  ['長期運用コスト', '○ 従量課金', '◎ 固定コストに移行可'],
  ['カスタマイズ性', '○ プロンプト設定', '◎ フルカスタマイズ'],
];

export default function Voitex2OnPremPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <section className="rounded-2xl bg-gradient-to-br from-[var(--brand-core)] to-[var(--product-onprem)] px-8 py-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-xs">
            {[
              '🤖 AI音声解析',
              '🏢 オンプレミス型',
              '👔 経営者・役員向け',
              '🔐 IT・情報システム担当向け',
              '⚖️ コンプライアンス担当向け',
            ].map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            声のデータで、
            <br />
            <span className="text-[var(--brand-accent-light)]">
              健康経営を前へ。
            </span>
          </h1>
          <p className="mt-4 text-slate-100">
            通話・面談・応対に潜む見えない負荷を可視化し、
            <br />
            離職予防・現場改善・組織の健全性向上を支援するオンプレミス対話分析基盤。
            <br />
            FUJI RAG連携前提で、分析結果を社内ナレッジ活用まで接続します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?source=onprem"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            >
              📞 導入相談をする（無料）
            </Link>
            <a
              href="#compare"
              className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white"
            >
              📊 クラウドと比較する
            </a>
          </div>
        </section>

        <section
          id="issues"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            解決できる課題
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            こんなお悩みはありませんか？
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((item) => (
              <article
                key={item[1]}
                className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
              >
                <p className="text-lg">{item[0]}</p>
                <p className="mt-1 font-semibold text-slate-900">{item[1]}</p>
                <p className="mt-1">{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="features"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            主な機能
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            健康経営を、実行可能な仕組みに変える主要機能
          </h2>
          <div className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
            ✅
            ボイテキクラウド！の全機能を内包しつつ、部門横断活用・統制運用・FUJI
            RAG連携を前提にしたオンプレミス設計を提供します。
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((item) => (
              <article
                key={item[1]}
                className="rounded-lg bg-[var(--product-onprem-soft-bg)] p-4 text-sm text-slate-700"
              >
                <p className="text-lg">{item[0]}</p>
                <p className="mt-1 font-semibold text-slate-900">{item[1]}</p>
                <p className="mt-1">{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            強み
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            ボイテキオンプレ！の差別化ポイント
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            とくに評価いただいている2つの強みを、独立機能としてご紹介します。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {strategicStrengths.map((item) => (
              <article
                key={item.title}
                className="rounded-lg bg-[var(--product-onprem-soft-bg)] p-5 text-sm text-slate-700"
              >
                <p className="text-xl">{item.icon}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            導入フロー
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            現場で回る、健康経営の導入フロー
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              [
                'PHASE 1',
                'データ取り込み設計',
                '日々の通話・面談データを既存運用に合わせて取り込み。GUIアップロード・NAS・S3/MinIO連携に対応します。',
              ],
              [
                'PHASE 2',
                '可視化・検知設定',
                '感情変化・リスク兆候・業務レンズを設定し、管理者が優先度の高いケースへ介入できる状態を構築します。',
              ],
              [
                'PHASE 3',
                '運用定着・改善',
                '状態把握→介入→検証のサイクルを定点運用。部門横断で同じデータを参照し、施策精度を高めます。',
              ],
              [
                'OPT',
                'FUJI RAG活用連携',
                '分析結果をFUJI RAGへ接続し、社内ナレッジ活用・教育・意思決定に循環させます。',
              ],
            ].map((step) => (
              <div
                key={step[0]}
                className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
              >
                <p className="mb-1 text-xs font-semibold text-slate-500">
                  {step[0]}
                </p>
                <p className="font-semibold text-slate-900">{step[1]}</p>
                <p className="mt-1">{step[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="compare"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            比較
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            クラウドとオンプレ、どちらを選ぶべきか
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            導入目的・要件に応じて、最適な製品を選択できます。
          </p>
          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    比較項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    ☁️ ボイテキクラウド！
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-800">
                    🏢 ボイテキオンプレ！
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row[1]}</td>
                    <td className="px-4 py-3 text-slate-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            ⬆️ まず成果を早く出したいなら<strong>クラウド</strong>
            、データ統制・閉域要件を優先するなら
            <strong>オンプレ</strong>が適しています。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/products/voitex2/cloud"
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              ボイテキクラウド！の詳細を見る →
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            連携
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            音声分析を、社内ナレッジ活用までつなぐ連携
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['📞', 'ボイテキレック！', 'ひかり電話録音'],
              ['🏢', 'ボイテキオンプレ！', '閉域AI音声解析'],
              ['📚', 'FUJI RAG', '社内ナレッジ活用'],
            ].map((x) => (
              <div
                key={x[1]}
                className="rounded-lg bg-slate-100 p-4 text-center text-sm text-slate-700"
              >
                <p className="text-xl">{x[0]}</p>
                <p className="mt-1 font-semibold text-slate-900">{x[1]}</p>
                <p className="mt-1 text-xs">{x[2]}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ ボイテキルームレック！・QuickSumとの連携にも対応
          </p>
        </section>

        <section
          id="contact"
          className="mt-8 rounded-2xl bg-[var(--brand-cta-bg)] px-8 py-10 text-center text-white"
        >
          <h2 className="text-2xl font-bold">まず、要件をお聞かせください</h2>
          <p className="mt-3 text-slate-100">
            統制要件・閉域要件・FUJI
            RAG連携など、貴社の要件を詳しくヒアリングし、最適な構成をご提案します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?source=onprem"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand-cta-fg)]"
            >
              📞 導入相談をする（無料）
            </Link>
            <Link
              href="/contact?source=onprem"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
            >
              📋 要件ヒアリングを依頼する
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
            {[
              '法人のみ',
              '完全閉域運用',
              '国内サーバー',
              '専任設計サポート',
            ].map((x) => (
              <span key={x} className="rounded-full bg-white/10 px-3 py-1">
                {x}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
