import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react';
import { generateMetadata } from '@/libs/seo';

const FUJIRAG_URL = 'https://fujirag.voitex.biz/';

export const metadata: Metadata = generateMetadata(
  'ボイテキオンプレ！｜健康経営を前へ進める対話分析基盤',
  'ボイテキオンプレ！はFUJI RAG連携前提のオンプレミス対話分析基盤です。通話・面談・応対データからストレス兆候やリスクを可視化し、離職予防・現場改善・組織の健全性向上を支援します。',
  '/products/voitex2'
);

const pains = [
  '現場の疲弊やストレスを把握できず、対策が後手になる',
  'クレームやハラスメントの兆候を見逃し、問題が顕在化してから対応している',
  '応対品質改善を進めたいが、定性的な振り返りにとどまっている',
  '個人情報・機密情報の観点で、音声データのクラウド活用に不安がある',
];

const features = [
  {
    title: '感情解析で見えない負荷を可視化',
    body: '通話・面談を発話単位で分析し、怒り・緊張・不安などの変化を時系列で表示。要注意発話を自動抽出し、確認すべき箇所を即座に把握できます。',
    image: '/features/main_features_1.png',
  },
  {
    title: '7つの業務レンズで部門別に最適化',
    body: '経営・営業・品質CS・人事・法務コンプラ・マーケ・DXの観点で分析。同じ対話データを部門別に読み解き、意思決定に必要な示唆を届けます。',
    image: '/features/main_features_2.png',
  },
  {
    title: 'リスクの早期検知',
    body: 'クレーム化兆候、不適切発言疑い、ハラスメント兆候を可視化。問題の深刻化前に介入し、事故コストを抑制します。',
    image: '/features/main_features_3.png',
  },
  {
    title: '安心のオンプレミス運用',
    body: '社内環境でデータを保持し、ロール連動アクセス制御と監査ログで統制を強化。機密性の高い音声データも、安全に運用できます。',
  },
  {
    title: '柔軟な入力導線',
    body: 'GUIアップロード・NAS・S3/MinIO連携に対応。既存運用に合わせて段階的に導入できます。',
    image: '/features/main_features_5.png',
  },
  {
    title: '会話相手相性（配置・育成支援）',
    body: '感情指標と会話行動（発話量・質問率）を組み合わせ、相手ごとの相性と会話タイプを可視化。配置・育成判断の精度向上を支援します。',
    image: '/features/main_features_6.png',
  },
];

const effects = [
  '離職予防: 高ストレス兆候の早期把握により、ケアと配置改善が迅速に',
  '応対品質向上: 要注意発話の具体的な振り返りで改善スピードを向上',
  'リスク低減: クレーム・コンプライアンス事故の未然防止を強化',
  '意思決定の高度化: 部門横断で同じデータを参照し、施策の精度を改善',
  '健康経営の実装: 状態把握 -> 介入 -> 検証のサイクルを継続可能に',
];

const pdca = [
  '日々の通話・面談データを自動取り込み',
  'ストレス・感情変化・リスク兆候を可視化',
  '管理者が優先度の高いケースへ早期介入',
  '改善施策を継続し、組織コンディションを定点観測',
];

const governance = [
  'ロールベースの閲覧制御',
  'パス規約連動のアクセススコープ付与',
  'ルール未一致データの隔離（quarantine）運用',
  '監査ログによる操作履歴の可視化',
];

const compatibilityPoints = [
  {
    title: '相性ランキングを自動算出',
    body: '会話ごとの感情推移・イベント・会話バランスを統合し、相手ごとの相性をスコア化。',
  },
  {
    title: '16会話タイプで特徴を直感化',
    body: '安定/駆動、協調/先導など4軸で会話傾向を分類し、コミュニケーション特性を把握。',
  },
  {
    title: '根拠付きで納得できる判断へ',
    body: 'スコアだけでなく算出根拠と信頼度を表示。アサイン・育成・1on1設計に活用可能。',
  },
];

const compatibilityEffects = [
  'ミスマッチな組み合わせの早期回避',
  'OJT/面談の組み合わせ最適化',
  'チーム内コミュニケーション負荷の低減',
];

export default function Voitex2Page() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-primary p-8 text-white shadow-lg md:p-10">
          <p className="mb-2 text-sm font-semibold">ボイテキオンプレ！</p>
          <h1 className="mb-3 text-3xl font-bold leading-tight md:text-5xl">
            声のデータで、健康経営を前へ。
          </h1>
          <p className="max-w-4xl text-base opacity-95 md:text-lg">
            通話・面談・応対に潜む見えない負荷を可視化し、離職予防・現場改善・組織の健全性向上を支援する、
            FUJI RAG連携前提のオンプレミス対話分析基盤。
          </p>
          <p className="mt-3 text-sm text-blue-100">
            FUJI
            RAG連携を前提に、分析結果を社内ナレッジ活用へ循環させる構成を標準としています。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              FUJI RAGで活用相談をする
            </a>
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              FUJI RAGで導入デモを申し込む
            </a>
          </div>
          <div className="mt-8">
            <Image
              src="/features/hero.png"
              alt="ボイテキオンプレ！ヒーローイメージ"
              width={1024}
              height={731}
              className="w-full rounded-xl border border-white/20 object-cover"
            />
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            こんなお悩みはありませんか？
          </h2>
          <ul className="space-y-3 text-gray-700">
            {pains.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg border-l-4 border-primary bg-blue-50 p-4 font-semibold text-primary">
            ボイテキオンプレ！は、こうした課題を感覚ではなく対話データで解決します。
          </p>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <HeartPulse className="h-6 w-6 text-primary" />
            健康経営を、実行可能な仕組みに変える
          </h2>
          <p className="text-gray-700">
            ボイテキオンプレ！は、音声を文字起こし・感情解析し、対話の中にあるストレス兆候や感情変化を可視化。
            現場の心理的負荷と応対品質を同時に捉え、経営層・管理職・現場が同じデータで改善アクションを取れる状態をつくります。
          </p>
          <div className="mt-6">
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              FUJI RAG経由で可視化を体験する
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">主要機能</h2>
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <article
                key={feature.title}
                className="rounded-lg bg-gray-50 p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {idx + 1}. {feature.title}
                </h3>
                <p className="text-gray-700">{feature.body}</p>
                {feature.image && (
                  <div className="mt-4">
                    <Image
                      src={feature.image}
                      alt={`${feature.title}の画面イメージ`}
                      width={1600}
                      height={900}
                      className="w-full rounded-lg border border-gray-200 object-cover"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            期待できる変化
          </h2>
          <ul className="space-y-3 text-gray-700">
            {effects.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            会話相手相性で、配置・育成の精度を高める
          </h2>
          <p className="text-gray-700">
            過去の対話データから誰と組むと成果が出やすいかを可視化。感情傾向だけでなく、
            発話量・質問率などの会話行動も組み合わせて、実務に使える相性指標を提示します。
          </p>
          <div className="mt-4">
            <Image
              src="/features/main_features_6.png"
              alt="会話相手相性機能の画面イメージ"
              width={1600}
              height={900}
              className="w-full rounded-lg border border-gray-200 object-cover"
            />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {compatibilityPoints.map((point) => (
              <article key={point.title} className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-primary">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-700">{point.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-gray-50 p-5">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              期待効果
            </h3>
            <ul className="space-y-2 text-gray-700">
              {compatibilityEffects.map((effect) => (
                <li key={effect} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              FUJI RAG経由で会話相手相性を検証する
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            現場で回る、健康経営のPDCA
          </h2>
          <ul className="space-y-3 text-gray-700">
            {pdca.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <ShieldCheck className="h-6 w-6 text-slate-700" />
            企業導入に必要な統制を標準装備
          </h2>
          <ul className="space-y-3 text-gray-700">
            {governance.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <LockKeyhole className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <SearchCheck className="h-6 w-6 text-primary" />
            音声分析を、社内ナレッジ活用までつなぐ
          </h2>
          <p className="text-gray-700">
            ボイテキオンプレ！の分析結果は、FUJIRAG連携により社内のナレッジ検索・活用フローへ接続できます。
            現場の対話から得られた気づきを、組織全体で再利用可能にします。
          </p>
          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Image
              src="/features/fujiragu_and_voitex-4.svg"
              alt="FUJIRAGとボイテキオンプレ！の連携イメージ"
              width={1200}
              height={360}
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />
          </div>
          <div className="mt-5 rounded-lg bg-blue-50 p-5">
            <h3 className="mb-3 font-semibold text-primary">訴求ポイント</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>音声分析結果をFUJIRAG側の活用基盤へ連携</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  部門・役割に応じたアクセス制御を維持したまま運用可能
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>分析して終わりではなく、教育・改善・意思決定に循環</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              <a
                href={FUJIRAG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                FUJI RAGで連携デモを相談する
              </a>
              <a
                href={FUJIRAG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                FUJI RAGの製品情報を見る
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-gradient-to-r from-primary to-blue-700 p-8 text-white shadow-sm">
          <h2 className="mb-3 text-2xl font-bold">
            健康経営を、現場で機能する仕組みに。
          </h2>
          <p className="max-w-4xl text-blue-100">
            ボイテキオンプレ！は、対話データを起点に人と組織のコンディションを改善し、企業の持続的な成長を支える基盤です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              FUJI RAGで活用相談をする
            </a>
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              FUJI RAGで導入デモを申し込む
            </a>
            <a
              href={FUJIRAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              まずはFUJI RAGで検証する
            </a>
          </div>
          <div className="mt-6">
            <Link
              href="/products/compare"
              className="text-sm text-blue-100 underline underline-offset-4 hover:text-white"
            >
              ボイテキクラウド！との比較を見る
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
