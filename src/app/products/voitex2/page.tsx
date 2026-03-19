import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';
import {
  AlertTriangle,
  BarChart3,
  Briefcase,
  Building2,
  CircleCheckBig,
  FileText,
  HeartPulse,
  Headset,
  Megaphone,
  MessageSquareQuote,
  Scale,
  SearchCheck,
  ShieldAlert,
  Sparkles,
  Target,
  Users,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata(
  'ボイテキオンプレ！｜通話音声の要点・感情・リスクを可視化',
  'ボイテキオンプレ！は通話音声を文字起こし、感情分析、イベント抽出、要約生成まで自動実行し、7レンズで会話の改善ポイントを可視化します。',
  '/products/voitex2'
);

const challenges = [
  '通話の振り返りに時間がかかる',
  '問題のある会話を見つけられない',
  '指導や評価が属人化している',
  'クレームやリスクを事後にしか把握できない',
  '会話データが活用されていない',
];

const valueCards = [
  {
    icon: MessageSquareQuote,
    iconClassName: 'bg-blue-100 text-blue-600',
    title: '会話の見える化',
    points: ['文字起こし（話者分離）', '発話ごとの整理'],
    result: '会話をテキストとして把握',
  },
  {
    icon: HeartPulse,
    iconClassName: 'bg-rose-100 text-rose-600',
    title: '感情の可視化',
    points: [
      '怒り・緊張・喜びなどを分析',
      '時系列で変化を表示',
      '感情イベント（怒りスパイク）検知',
    ],
    result: '問題の兆候を見逃さない',
  },
  {
    icon: ShieldAlert,
    iconClassName: 'bg-amber-100 text-amber-700',
    title: 'リスクの検知',
    points: ['NGワード検出', '要注意発話の抽出', '高リスク通話の識別'],
    result: 'トラブルを未然に防ぐ',
  },
  {
    icon: FileText,
    iconClassName: 'bg-emerald-100 text-emerald-700',
    title: '要点の整理',
    points: ['自動要約', 'レンズ別要約'],
    result: '長時間通話も一瞬で理解',
  },
];

const lenses = [
  '経営レンズ',
  '営業レンズ',
  'カスタマーサポートレンズ',
  '人事レンズ',
  '法務・コンプライアンスレンズ',
  'マーケティングレンズ',
  'DXレンズ',
];

const features = [
  '音声・動画ファイルの自動解析',
  '話者分離付き文字起こし',
  '感情の時系列分析',
  'イベント検知（怒り・ストレスなど）',
  'NGワード・リスク検知',
  '要約生成（標準・レンズ別）',
  'ダッシュボード可視化',
  'HTMLレポート出力',
  'CSVエクスポート',
  'NAS連携による自動取り込み',
  '再解析・再試行機能',
];

const dashboardItems = [
  '高リスク通話の一覧化',
  '感情の推移確認',
  '応対品質の評価',
  'KPI（怒り率・ストレス指数など）の可視化',
];

const effects = [
  { icon: Sparkles, title: '振り返り時間の大幅削減' },
  { icon: BarChart3, title: '応対品質の向上' },
  { icon: AlertTriangle, title: 'リスクの早期検知' },
  { icon: Users, title: '教育・指導の効率化' },
  { icon: SearchCheck, title: 'データに基づく改善' },
];

const useCases = [
  {
    icon: Headset,
    title: 'コールセンター',
    points: ['要注意通話の抽出', '応対品質の改善'],
  },
  { icon: Briefcase, title: '営業', points: ['商談の振り返り', '成約率向上'] },
  {
    icon: Scale,
    title: 'コンプライアンス',
    points: ['不適切発言検知', 'リスク監査'],
  },
  {
    icon: Users,
    title: '人事・組織開発',
    points: ['ストレス傾向の把握', '心理的安全性の可視化'],
  },
  {
    icon: Megaphone,
    title: 'マーケティング',
    points: ['VOC分析', '顧客ニーズ抽出'],
  },
];

const strengths = [
  '音声 -> 文字 -> 感情 -> リスク -> 要約を一気通貫で実行',
  '7レンズで意思決定に直結する業務視点分析',
  '再解析・監査ログ・重複防止など実運用を意識した設計',
  'オンプレミス環境でも運用できる拡張性',
];

export default function Voitex2Page() {
  const lensIcons = [
    Building2,
    Briefcase,
    Users,
    Users,
    Scale,
    Megaphone,
    Wrench,
  ];

  return (
    <main className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <section className="rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-10 text-white shadow-lg">
          <p className="mb-2 text-sm font-semibold">
            通話を見える化し、改善につなげるAI
          </p>
          <h1 className="mb-3 text-4xl font-bold">ボイテキオンプレ！</h1>
          <p className="mb-5 text-xl font-semibold">
            会話を分析するだけで終わらない。改善まで導くAI。
          </p>
          <p className="max-w-4xl text-lg opacity-95">
            通話音声をAIで解析し、会話の要点・感情の変化・リスク兆候を可視化する通話分析プラットフォームです。
            <br />
            音声データをアップロードするだけで、文字起こし・感情分析・イベント抽出・要約生成を自動で実行します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products/voitex2/cloud"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              ボイテキクラウド！を見る
            </Link>
            <Link
              href="/products/voitex2/onprem"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              オンプレ詳細を見る
            </Link>
            <Link
              href="/products/compare"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              比較ページへ
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Target className="h-6 w-6 text-primary" />
            解決する課題
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {challenges.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg bg-gray-50 p-4 text-gray-700"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg border-l-4 border-primary bg-blue-50 p-4 font-medium text-primary">
            聞けば分かる、でも聞く時間がない。ボイテキオンプレ！はこのギャップを埋めます。
          </p>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Sparkles className="h-6 w-6 text-primary" />
            ボイテキオンプレ！の価値
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {valueCards.map((card) => (
              <article key={card.title} className="rounded-lg bg-gray-50 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.iconClassName}`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {card.title}
                  </h3>
                </div>
                <ul className="mb-3 space-y-1 text-gray-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-primary">
                  {card.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <SearchCheck className="h-6 w-6 text-primary" />
            最大の特徴: 7つの業務レンズ
          </h2>
          <p className="mb-5 text-gray-700">
            同じ会話を7つの視点から分析し、部門ごとの意思決定に直結する示唆を得られます。
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lenses.map((item, idx) => {
              const Icon = lensIcons[idx];
              return (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 p-3 text-gray-700"
                >
                  <Icon className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Wrench className="h-6 w-6 text-primary" />
            主な機能
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-gray-700"
              >
                <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <BarChart3 className="h-6 w-6 text-primary" />
              ダッシュボードでできること
            </h2>
            <ul className="space-y-2 text-gray-700">
              {dashboardItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-primary">
              どの通話に問題があるかを、現場で即座に判断できます。
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Sparkles className="h-6 w-6 text-primary" />
              導入効果
            </h2>
            <ul className="space-y-3 text-gray-700">
              {effects.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-1.5">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Briefcase className="h-6 w-6 text-primary" />
            想定ユースケース
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-lg bg-gray-50 p-5">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-primary">
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            他製品との違い
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="mb-2 font-semibold text-gray-800">
                録音・文字起こしツール
              </h3>
              <p className="text-sm text-gray-600">テキスト化中心</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="mb-2 font-semibold text-gray-800">
                一般的なAI分析
              </h3>
              <p className="text-sm text-gray-600">可視化で止まりやすい</p>
            </div>
            <div className="rounded-lg border border-primary bg-blue-50 p-4">
              <h3 className="mb-2 font-semibold text-primary">
                ボイテキオンプレ！
              </h3>
              <p className="text-sm text-primary">
                感情分析・リスク検知・要約・多視点分析で、改善アクションにつなげます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Sparkles className="h-6 w-6 text-primary" />
            強み
          </h2>
          <ul className="space-y-2 text-gray-700">
            {strengths.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-gradient-to-r from-indigo-600 to-primary p-8 text-white shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <SearchCheck className="h-6 w-6" />
            さらにできること: FUJI RAG連携
          </h2>
          <p className="max-w-4xl">
            FUJIRAG（FUJI
            RAG）と連携することで、通話内容にもとづいて関連資料を検索し、解決策の提示までつなげられます。
            分析で終わらず、改善アクションの実行まで支援します。
          </p>
          <div className="mt-5 rounded-lg bg-white/10 p-4 font-mono text-sm">
            <p>
              音声データ → ボイテキオンプレ！（文字起こし/感情/要約/リスク） →
              ダッシュボード
            </p>
            <p className="mt-2">（拡張）通話分析 → FUJI RAG → ナレッジ検索</p>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-900">
            <AlertTriangle className="h-6 w-6" />
            制約・注意点
          </h2>
          <ul className="space-y-2 text-amber-900">
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>リアルタイム解析ではなく、バッチ処理です。</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>
                音声品質やノイズ状況により精度が変動する場合があります。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>要約品質は設定や入力品質に依存します。</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>最終判断は人による確認を前提としています。</span>
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-white p-8 text-center shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-primary">まとめ</h2>
          <p className="mx-auto max-w-4xl text-lg text-gray-700">
            ボイテキオンプレ！は、通話をデータとして理解し、改善につなげるAIです。
          </p>
        </section>
      </div>
    </main>
  );
}
