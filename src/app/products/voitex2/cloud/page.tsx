import type { Metadata } from 'next';
import CtaLink from '@/components/CtaLink';
import DaysUntil from '@/components/DaysUntil';
import { generateMetadata } from '@/libs/seo';

const PAGE_PATH = '/products/voitex2/cloud';
const PAGE_URL = `https://www.voitex.site${PAGE_PATH}`;

const CONTACT_HREF = '/contact?source=cloud';
const TRIAL_HREF = '/contact?source=cloud-trial';
// 活用ガイドPDFは制作中のため、義務化対応の個別相談窓口に導線を仮差し替え中。
// PDF公開後に `/contact?source=cloud-kasuhara-guide` へ戻すこと。
const KASUHARA_CONTACT_HREF = '/contact?source=cloud-kasuhara';

const KASUHARA_ENFORCEMENT_DATE = '2026-10-01';

export const metadata: Metadata = {
  ...generateMetadata(
    'ボイテキクラウド！｜2026年10月カスハラ義務化対応｜通話を"経営資産"に変える音声解析SaaS',
    '2026年10月カスハラ対策義務化対応。月額5,000円〜、初期費用・違約金ゼロ。セブンレンズ（7視点分析）・会話相性・文字起こし・感情分析・NGワード検出を備えたBtoB向け音声解析クラウド。無料トライアルあり。',
    PAGE_PATH
  ),
  keywords:
    'カスハラ対策,カスハラ義務化,カスタマーハラスメント対応,改正労働施策総合推進法,音声解析,AI,感情分析,コールセンター,NGワード,セブンレンズ,会話相性,ボイテキクラウド！',
};

const sevenLenses = [
  { name: '経営', color: '#17324d' },
  { name: '営業', color: '#16a34a' },
  { name: 'カスタマーサポート', color: '#2563eb' },
  { name: '人事', color: '#9333ea' },
  { name: 'リスク・コンプライアンス', color: '#dc2626' },
  { name: 'マーケティング', color: '#ea580c' },
  { name: 'DX', color: '#64748b' },
] as const;

const kasuharaObligations = [
  {
    icon: '📋',
    title: '方針・マニュアルの策定と周知',
    body: '自社のカスハラ対応方針を明文化し、社内外へ周知する運用整備が求められます。',
  },
  {
    icon: '☎️',
    title: '相談窓口の設置・周知',
    body: '従業員が相談しやすい窓口と運用手順を整備し、周知することが求められます。',
  },
  {
    icon: '🎓',
    title: '研修・教育の実施',
    body: '全従業員を対象としたカスハラ対応研修を、定期的に実施する必要があります。',
  },
  {
    icon: '🫶',
    title: '被害者ケア',
    body: '被害を受けた従業員への相談対応・配置配慮・医療/心理的ケアを講じる必要があります。',
  },
];

const kasuharaMapping = [
  {
    law: '実態把握（現場アンケートなど）',
    value:
      '感情分析＋ハラスメント自動検出で、全通話の実態を自動可視化。申告を待たずに兆候を発見します。',
  },
  {
    law: '客観的記録',
    value:
      '全通話の文字起こしと録音の自動整理。被害立証・弁護士相談・警察提出など、第三者に示せる根拠として保管します。',
  },
  {
    law: '早期発見',
    value:
      'NGワードチェック＋感情分析で、エスカレーション前の段階で検知します。',
  },
  {
    law: '研修素材の準備',
    value:
      '実ケース（匿名化可能）を教材として活用。「カスハラとは何か」を自社事例ベースで学べます。',
  },
  {
    law: '被害者ケア',
    value: '人事レンズで、従業員のストレス兆候を継続的にモニタリングします。',
  },
  {
    law: '管理責任の可視化',
    value:
      '経営レンズ／リスク・コンプライアンスレンズで、役員向けレポートを自動生成します。',
  },
];

const pains = [
  {
    icon: '🎙️',
    title: '録音はあるが、活用できていない',
    body: '通話データは溜まる一方で、振り返りやナレッジ化が進まない。保管だけで終わってしまう状況を打開します。',
  },
  {
    icon: '🛡️',
    title: '通話品質・コンプライアンスチェックが属人的',
    body: '担当者の主観に依存したチェックでは抜け漏れが避けられません。AIで評価軸を統一し、属人化を解消します。',
  },
  {
    icon: '📊',
    title: '経営/現場/コンプラで見たい指標がバラバラ',
    body: '役割ごとに必要な指標は異なります。同じ対話データを、見る人に合わせた切り口で可視化します。',
  },
  {
    icon: '🗂️',
    title: 'ファイル名や録音日時を台帳に手入力する運用が限界',
    body: '録音基盤から吐き出されるファイル名に、誰と・いつ・何の通話かの情報は含まれているのに、台帳化だけで時間が溶けていく状態から抜け出します。',
  },
] as const;

const values = [
  {
    icon: '🔭',
    title: 'セブンレンズ',
    headline: '1つの会話を、7つの視点で読み解く',
    body: '経営 / 営業 / カスタマーサポート / 人事 / リスク・コンプライアンス / マーケティング / DXの7観点で、同じ会話から役割別のインサイトを自動抽出します。',
    flagship: true,
  },
  {
    icon: '🤝',
    title: '会話相性',
    headline: '"相手が変わると結果が変わる"を数値化',
    body: '過去の会話データから、話者×相手の相性を共演回数・感情・発話バランスから自動スコアリング。担当替え・ペアリング最適化に活用できます。',
    flagship: false,
  },
  {
    icon: '📝',
    title: '高精度な文字起こし・感情分析',
    headline: 'AmiVoice × ChatGPT × 5軸分析',
    body: '高精度な文字起こしに加え、価格敏感度 / 品質重視度 / 購入意欲 / 不安・懸念 / 満足度の5軸で顧客心理を数値化します。',
    flagship: false,
  },
  {
    icon: '📁',
    title: 'マルチフォーマット対応',
    headline: '録ったファイルを、そのままアップロード',
    body: '音声 WAV / MP3 / M4A / OGG、動画 MP4 / MOV / AVI（音声を自動抽出）に対応。1ファイル最大2GBまで投入できます。',
    flagship: false,
  },
  {
    icon: '🗂️',
    title: '自動メタデータ抽出',
    headline: 'ファイル名を見れば、誰と・いつ・何の通話かが分かる',
    body: '日々の録音ファイル名から、録音日時 / 発信者 / 着信者 / オペレーターコード / 外部IDを自動抽出。正規表現または区切り文字で複数パターンを登録でき、既存の録音基盤を変えずに整理・検索ができます。1ファイルずつ手入力する運用は、もう終わりにできます。',
    flagship: false,
  },
] as const;

const features = [
  {
    icon: '🔭',
    title: 'セブンレンズ分析',
    body: '1つの会話を7つの役割視点（経営 / 営業 / CS / 人事 / リスク・コンプラ / マーケ / DX）で自動要約。読む人ごとに必要な示唆を即座に届けます。',
  },
  {
    icon: '🤝',
    title: '会話相性ランキング',
    body: '話者×相手の組み合わせごとに相性スコアを算出し、ランキング形式で可視化。結果はCSVエクスポートにも対応します。',
  },
  {
    icon: '🗂️',
    title: 'ファイル名命名規約（自動メタデータ抽出）',
    body: '正規表現 / 区切り文字の2方式、優先順位付きの複数パターン管理に対応。録音日時・発信者・着信者・オペレーターコード・外部IDを自動抽出し、管理画面ではサンプル入力によるテストも可能です。',
  },
  {
    icon: '🎬',
    title: 'マルチフォーマット音声/動画対応',
    body: '音声 WAV / MP3 / M4A / OGG と動画 MP4 / MOV / AVI（音声を自動抽出）に対応。1ファイル最大2GBまでアップロード可能です。',
  },
  {
    icon: '📊',
    title: '役割別ダッシュボード',
    body: 'セブンレンズと連動し、経営者・現場マネージャー・コンプラ担当など役割ごとに最適化された画面で指標を確認できます。',
  },
  {
    icon: '🚨',
    title: 'NGワードチェック',
    body: 'カスハラ・暴言・コンプラ違反をカスタマイズ可能な辞書で自動検知します。',
  },
  {
    icon: '⭐',
    title: '会話評価',
    body: '応対品質をスコア化。担当者別・日別・案件別に多角的な評価が可能です。',
  },
  {
    icon: '🔍',
    title: 'キーワード分析・共起ネットワーク',
    body: '頻出語・共起関係を可視化し、会話の傾向や論点を俯瞰できます。',
  },
  {
    icon: '🧠',
    title: 'プロンプト管理',
    body: '業界・業務に合わせた分析プロンプトを登録・切替。用途別に最適化した分析を繰り返せます。',
  },
  {
    icon: '🏷️',
    title: 'タグ・会話相手管理',
    body: '通話にタグと相手情報を紐付け、顧客軸・案件軸での振り返りを容易にします。',
  },
  {
    icon: '📤',
    title: 'CSV / Excel / JSONエクスポート',
    body: '分析結果を任意の形式で書き出し、BI・CRMなど既存環境へシームレスに接続できます。',
  },
];

const security = [
  'AWS Cognitoによる認証（多要素認証対応）',
  'UFWによる国内アクセス制限',
  '監査ログ / AppArmor / ClamAVによる多層防御',
  'ログ365日保持、日次で自動ローテート',
  'データは顧客専用環境（シングルテナント設計）で完全分離',
];

const steps = [
  {
    no: '01',
    title: 'お問い合わせ',
    body: '用途・規模・期待効果をお聞かせください。最適な検証プランをご提案します。',
  },
  {
    no: '02',
    title: 'ヒアリング・デモ',
    body: 'オンラインで実機デモをご覧いただきながら、運用フローを一緒に設計します。',
  },
  {
    no: '03',
    title: '無料トライアル',
    body: '実データでの解析をお試しいただけます。専任担当がセットアップを支援します。',
  },
  {
    no: '04',
    title: '本導入',
    body: '月額基本料＋従量課金で運用開始。効果検証とチューニングを継続的に支援します。',
  },
];

const faqs = [
  {
    q: '2026年のカスハラ対策義務化には対応できますか？',
    a: 'はい。カスタマーハラスメント／パワーハラスメントの自動検出、全通話の客観的記録、人事レンズによる従業員ストレスのモニタリング、リスク・コンプライアンスレンズによる役員向けレポートなど、義務化が求める「実態把握・記録・早期発見・研修素材・被害者ケア支援」の各局面に直接貢献します。導入ガイドもご用意しています。なお、本サービスは義務化項目すべてを代替するものではなく、対応業務を支援する位置づけです。',
  },
  {
    q: '「セブンレンズ」とは何ですか？',
    a: '1つの会話を7つの役割視点（経営 / 営業 / カスタマーサポート / 人事 / リスク・コンプライアンス / マーケティング / DX）で多角的に分析する機能です。同じ録音から、経営層と現場マネージャーでは別の示唆が得られるよう、役割に応じた要約と指標を自動抽出します。',
  },
  {
    q: '会話相性はどうやって計算していますか？',
    a: '過去の共演会話を横断し、共演回数・感情の推移・発話バランスなどを組み合わせてスコアを算出します。結果はランキングとして可視化でき、CSVエクスポートにも対応しているため、担当替えやペアリング最適化の判断材料としてご利用いただけます。',
  },
  {
    q: '対応している音声 / 動画フォーマットは？',
    a: '音声はWAV / MP3 / M4A / OGG、動画はMP4 / MOV / AVI（音声を自動抽出）に対応しています。1ファイル最大2GBまでアップロード可能です。',
  },
  {
    q: '録音ファイルの命名規則があるのですが、ボイテキクラウド！で活かせますか？',
    a: 'はい。正規表現または区切り文字で命名パターンを登録いただけば、録音日時・発信者・着信者・オペレーターコード・外部IDを自動で抽出します。既存の録音基盤を変更いただく必要はありません。コールセンター録音機（例: 20260417-093320_顧客A_担当B.wav のような形式）にそのまま対応可能です。',
  },
  {
    q: '対応するファイル形式は？',
    a: '音声ファイル（WAV/MP3/M4A/OGG）と動画ファイル（MP4/MOV/AVI）に対応しています。1ファイル最大2GBまでアップロード可能です。',
  },
  {
    q: '音声データはどこに保存されますか？',
    a: '処理サーバーは日本国内のデータセンターに設置し、お客様ごとに分離した専用環境（シングルテナント）で保管します。アップロードした音声ファイルは1週間、解析結果は最大1年間保存します。',
  },
  {
    q: '最低利用期間はありますか？',
    a: '最低利用期間の定めはありません。月単位でご利用いただけ、必要な期間だけ運用することが可能です。',
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも解約可能で、解約違約金は発生しません。解約月の月額基本料と、その月に利用いただいた分の従量料金のみ精算いたします。',
  },
  {
    q: '無料トライアルの期間・条件は？',
    a: '法人のお客様を対象に、実データでの解析を無料でお試しいただけます。期間や解析時間上限はヒアリング結果に応じて個別にご案内します。',
  },
  {
    q: 'カスタムエンジンとは？',
    a: '標準エンジンで対応しきれない業界固有の語彙や要件に合わせて、音声認識・分析ロジックを調整する個別開発プランです。内容に応じて別途お見積りします。',
  },
];

const productStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ボイテキクラウド！',
  description:
    'セブンレンズ（経営 / 営業 / CS / 人事 / リスク・コンプラ / マーケ / DXの7視点分析）と会話相性、自動メタデータ抽出、文字起こし・感情分析・NGワード検出・役割別ダッシュボードで通話を"経営資産"に変えるBtoB向け音声解析SaaS。',
  brand: {
    '@type': 'Brand',
    name: 'ボイテキクラウド！',
  },
  url: PAGE_URL,
  category: 'BusinessApplication',
  offers: [
    {
      '@type': 'Offer',
      name: '月額基本料',
      price: '5000',
      priceCurrency: 'JPY',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5000',
        priceCurrency: 'JPY',
        unitText: 'MONTH',
        valueAddedTaxIncluded: false,
      },
      availability: 'https://schema.org/InStock',
      url: PAGE_URL + '#pricing',
    },
    {
      '@type': 'Offer',
      name: '解析時間（従量）',
      price: '1500',
      priceCurrency: 'JPY',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1500',
        priceCurrency: 'JPY',
        unitText: 'HUR',
        valueAddedTaxIncluded: false,
      },
      availability: 'https://schema.org/InStock',
      url: PAGE_URL + '#pricing',
    },
  ],
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: 'https://www.voitex.site',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '製品一覧',
      item: 'https://www.voitex.site/products',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'ボイテキクラウド！',
      item: PAGE_URL,
    },
  ],
};

export default function VoitexCloudPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <main className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* ヒーロー */}
          <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-core)] to-[var(--product-cloud)] px-6 py-10 text-white shadow-lg md:px-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-[0.2em]">
                  VOITEX CLOUD
                </p>
                <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                  通話を、1日で
                  <br />
                  <span className="text-[var(--brand-accent-light)]">
                    &quot;見える経営資産&quot;
                  </span>
                  に。
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-100 md:text-base">
                  ファイル名を読むだけで録音が整理され、セブンレンズと会話相性が、
                  役割別の意思決定を後押しします。文字起こし・感情分析・NGワード検出まで、
                  音声を投入するだけ。月額5,000円からの従量課金、初期費用・違約金はゼロ（税抜）。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaLink
                    href={CONTACT_HREF}
                    location="hero"
                    intent="materials"
                    label="資料請求・お問い合わせ"
                    className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-cta-fg)] transition-colors hover:bg-slate-100"
                  >
                    資料請求・お問い合わせ
                  </CtaLink>
                  <CtaLink
                    href={TRIAL_HREF}
                    location="hero"
                    intent="trial"
                    label="無料トライアルを試す"
                    className="rounded-lg border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    無料トライアルを試す
                  </CtaLink>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-100">
                  {[
                    '法人のみ',
                    '初期費用ゼロ',
                    '違約金ゼロ',
                    '国内データセンター',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#kasuhara-compliance"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-300/70 bg-red-500/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-500/30 md:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-300"
                  />
                  2026年10月 カスハラ対策義務化対応｜詳細を見る ↓
                </a>
              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-100">
                  役割別ダッシュボード（イメージ）
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    ['顧客満足度スコア', '82%', '82', 'bg-sky-300'],
                    ['感情安定度', '74%', '74', 'bg-sky-300'],
                    ['NGワード検知', '15%', '2件', 'bg-red-300'],
                    ['応対品質スコア', '88%', '88', 'bg-emerald-300'],
                  ].map((row) => (
                    <div
                      key={row[0]}
                      className="grid grid-cols-[110px_1fr_40px] items-center gap-3"
                    >
                      <span className="text-xs text-slate-100">{row[0]}</span>
                      <div className="h-2 rounded-full bg-white/25">
                        <div
                          className={`h-2 rounded-full ${row[3]}`}
                          style={{ width: row[1] }}
                        />
                      </div>
                      <span className="text-right text-xs font-semibold">
                        {row[2]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 課題 */}
          <section
            id="pains"
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              PAIN
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              こんな課題はありませんか
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pains.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-2xl">{item.icon}</p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* カスハラ義務化対応 */}
          <section
            id="kasuhara-compliance"
            className="mt-10 rounded-2xl border-2 border-red-300 bg-red-50/60 p-6 shadow-sm md:p-10"
          >
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="text-3xl">
                ⚠️
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-red-700">
                  COMPLIANCE / 2026年10月
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                  2026年10月1日、カスハラ対策が全企業で義務化されます。
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  改正労働施策総合推進法により、カスタマーハラスメントへの対応が
                  すべての企業で義務化されます。方針の明文化・相談窓口の設置・
                  研修実施・被害者ケア、そして違反企業名の公表リスク。
                  残された時間はわずかです。
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-lg font-bold text-slate-900 md:text-xl">
              義務化で求められる4項目
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {kasuharaObligations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-red-200 bg-white p-5"
                >
                  <p className="text-2xl">{item.icon}</p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900 md:text-xl">
              ボイテキクラウド！が、義務化対応の「証拠と実態把握」を担います
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              法令が求める対応と、ボイテキクラウド！の提供価値の対応関係を整理しました。
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-slate-100 text-left text-slate-700">
                  <tr>
                    <th className="w-1/3 px-4 py-3 font-semibold">
                      法令が求める対応
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      ボイテキクラウド！の提供価値
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {kasuharaMapping.map((row) => (
                    <tr key={row.law}>
                      <td className="px-4 py-3 align-top font-semibold">
                        {row.law}
                      </td>
                      <td className="px-4 py-3 align-top leading-6 text-slate-700">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              ※
              本サービスは義務化項目のすべてを代替するものではなく、実態把握・記録・
              早期発見・教育材料の提供を通じて対応業務を支援する位置づけです。
              録音にあたっては、従業員・顧客双方への適切な告知と同意取得が必要です。
              施行日・具体要件は、必ず公的ソース（厚生労働省など）の最新情報をご確認ください。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink
                href={KASUHARA_CONTACT_HREF}
                location="kasuhara-compliance"
                intent="contact"
                label="義務化対応について個別相談する"
                className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                義務化対応について個別相談する
              </CtaLink>
              <CtaLink
                href={TRIAL_HREF}
                location="kasuhara-compliance"
                intent="trial"
                label="無料トライアルで自社の実態を可視化する"
                className="rounded-lg border border-red-300 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
              >
                無料トライアルで自社の実態を可視化する
              </CtaLink>
            </div>
          </section>

          {/* 5つの価値 */}
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              VALUE
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              ボイテキクラウド！でできること
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              録音から活用まで、5つの価値で通話を経営に効く情報に変えます。
              セブンレンズ・会話相性・自動メタデータ抽出を中核に据えています。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {values.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-xl p-5 ${
                    item.flagship
                      ? 'border-2 border-[var(--brand-accent)] bg-white shadow-sm lg:col-span-2'
                      : 'bg-[var(--product-cloud-soft-bg)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    {item.flagship && (
                      <span className="rounded-full bg-[var(--brand-accent)] px-2 py-0.5 text-[10px] font-semibold tracking-[0.15em] text-white">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-semibold text-[var(--product-cloud-strong-text)]">
                    {item.title}
                  </p>
                  {item.headline && (
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {item.headline}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.body}
                  </p>
                  {item.title === 'セブンレンズ' && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {sevenLenses.map((lens) => (
                        <li
                          key={lens.name}
                          className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                        >
                          <span
                            aria-hidden="true"
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: lens.color }}
                          />
                          {lens.name}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.title === '自動メタデータ抽出' && (
                    <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 font-mono text-[11px] leading-5 text-slate-700">
                      <p className="text-slate-400">入力ファイル名</p>
                      <p className="truncate">
                        20260417-093320_オペレータA_顧客B.wav
                      </p>
                      <p className="mt-2 text-slate-400">抽出結果</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <span className="rounded bg-sky-100 px-1.5 py-0.5 text-sky-800">
                          日時
                        </span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-800">
                          発信者
                        </span>
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-800">
                          着信者
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* 主要機能 */}
          <section
            id="features"
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              FEATURES
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              主要機能
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              通話を、解析から活用まで一気通貫で扱うための機能を標準搭載しています。
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 導入事例（Coming Soon） */}
          <section
            id="cases"
            className="mt-10 rounded-2xl border border-slate-200 bg-slate-100 p-6 shadow-sm md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              CASE STUDIES
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              導入事例
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="md:col-span-3">
                <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
                  <p className="text-lg font-semibold text-slate-900">
                    導入事例は準備中です
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    現在、先行導入いただいているお客様の事例を公開準備中です。
                    公開までは、デモや個別のユースケースのご相談にて
                    導入イメージをお伝えします。
                  </p>
                  <div className="mt-5 flex justify-center">
                    <CtaLink
                      href={CONTACT_HREF}
                      location="cases"
                      intent="demo"
                      label="デモ・個別相談のご依頼"
                      className="rounded-lg bg-[var(--brand-cta-bg)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
                    >
                      デモ・個別相談のご依頼
                    </CtaLink>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* セキュリティ */}
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              SECURITY
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              セキュリティ・信頼性
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              企業の機密情報を扱う現場で求められる水準の統制を標準装備しています。
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {security.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 料金プラン */}
          <section
            id="pricing"
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              PRICING
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              料金プラン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              本ページはボイテキクラウド！の料金です。月額基本料＋解析時間に応じた
              従量課金のシンプルな料金体系です。初期費用・解約違約金はゼロ、
              トライアル利用も可能です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 表示価格はすべて税抜です。
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">項目</th>
                    <th className="hidden px-4 py-3 text-left font-semibold md:table-cell">
                      内容
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">金額</th>
                    <th className="px-4 py-3 text-right font-semibold">単位</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                  {[
                    [
                      '月額基本料',
                      'ご利用開始月から毎月',
                      '¥5,000',
                      '税抜 / 月',
                    ],
                    [
                      '解析時間',
                      '音声解析時間 1時間あたり',
                      '¥1,500',
                      '税抜 / 時間',
                    ],
                    ['初期費用', '導入時に一切かかりません', '¥0', '不要'],
                    ['解約違約金', 'いつでも解約可能', '¥0', '違約金なし'],
                    ['標準エンジン', '基本機能', '¥0', '無料'],
                    [
                      'カスタムエンジン',
                      'お客様指定の場合',
                      '別途見積',
                      'ご相談ください',
                    ],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="px-4 py-3 font-semibold">{row[0]}</td>
                      <td className="hidden px-4 py-3 text-slate-600 md:table-cell">
                        {row[1]}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {row[2]}
                      </td>
                      <td className="px-4 py-3 text-right text-xs text-slate-500">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink
                href={TRIAL_HREF}
                location="pricing"
                intent="trial"
                label="無料トライアルを試す"
                className="rounded-lg bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-accent-hover)]"
              >
                無料トライアルを試す
              </CtaLink>
              <CtaLink
                href={CONTACT_HREF}
                location="pricing"
                intent="materials"
                label="資料請求・お問い合わせ"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                資料請求・お問い合わせ
              </CtaLink>
            </div>
          </section>

          {/* ご利用の流れ */}
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              FLOW
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              ご利用の流れ
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.no}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-[var(--product-cloud-soft-text)]">
                    STEP {step.no}
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              よくあるご質問
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 md:text-base">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* カスハラ義務化 カウンター */}
          <aside className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 border-red-300 bg-red-50/70 p-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red-700">
                COUNTDOWN
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900 md:text-xl">
                義務化開始（2026年10月1日施行予定）まで あと{' '}
                <span className="text-2xl text-red-700 md:text-3xl">
                  <DaysUntil target={KASUHARA_ENFORCEMENT_DATE} />
                </span>{' '}
                日
              </p>
              <p className="mt-1 text-xs text-slate-500">
                ※ 施行日は公的ソースの最新情報をご確認ください。
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <CtaLink
                href={KASUHARA_CONTACT_HREF}
                location="kasuhara-countdown"
                intent="contact"
                label="個別相談する"
                className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                個別相談する
              </CtaLink>
              <CtaLink
                href={TRIAL_HREF}
                location="kasuhara-countdown"
                intent="trial"
                label="無料トライアル"
                className="rounded-lg border border-red-300 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
              >
                無料トライアル
              </CtaLink>
            </div>
          </aside>

          {/* 最終CTA */}
          <section className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-core)] to-[var(--product-cloud)] px-6 py-12 text-center text-white shadow-lg md:px-10 md:py-16">
            <h2 className="text-2xl font-bold md:text-3xl">
              通話を、&quot;経営資産&quot;に変えてみませんか
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-100 md:text-base">
              実データでの解析を無料でお試しいただけます。
              <br className="hidden md:block" />
              用途に応じたご相談・資料のご送付にも、同じ窓口からご対応いたします。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaLink
                href={TRIAL_HREF}
                location="footer"
                intent="trial"
                label="無料トライアルを試す"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand-cta-fg)] transition-colors hover:bg-slate-100"
              >
                無料トライアルを試す
              </CtaLink>
              <CtaLink
                href={CONTACT_HREF}
                location="footer"
                intent="materials"
                label="資料請求・お問い合わせ"
                className="rounded-lg border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
              >
                資料請求・お問い合わせ
              </CtaLink>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
