import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキ！— 声を、守る。声を、活かす。音声DXの総合ブランド',
  '音声データをAIで解析し、カスタマーハラスメントから社員を守り、営業品質・応対品質を向上させる音声DXの総合ブランド「ボイテキ！」',
  '/'
);

const issues = [
  {
    icon: '😡',
    title: 'カスタマーハラスメント対策',
    desc: 'カスハラの証拠が残らない。社員が疲弊しているのに、対応の記録がない。音声解析で「言った・言わない」を解決します。',
  },
  {
    icon: '📋',
    title: '応対品質のムラ',
    desc: '担当者によって品質がバラバラ。振り返りが属人的で非効率。品質スコアリングで全体の底上げを実現します。',
  },
  {
    icon: '⏱️',
    title: 'アフターコールワーク（ACW）',
    desc: '通話後の記録・入力に時間がかかりすぎる。QuickSumで要約を自動化し、ACW時間を大幅に削減します。',
  },
  {
    icon: '📉',
    title: '営業トークの属人化',
    desc: 'トップ営業マンのノウハウが共有されない。成功パターンを可視化し、組織全体の営業力を底上げします。',
  },
  {
    icon: '🔒',
    title: 'データ統制・閉域要件',
    desc: '音声データを外部サービスに送れない。閉域・オンプレ運用で、厳格なセキュリティ要件に対応します。',
  },
  {
    icon: '👁️',
    title: '現場の見える化不足',
    desc: '何が起きているかわからない。役割別ダッシュボードとデータドリブンなマネジメントで、現場を見える化します。',
  },
];

const reasonStats = [
  { num: '5製品', label: '録音・解析・要約を\n用途別に選べる' },
  { num: '2形態', label: 'クラウド / オンプレ\n要件に合わせて選択' },
  { num: '単体/連携', label: '必要機能だけ導入\n後から拡張も可能' },
  { num: '専任', label: '導入〜運用まで\n一貫伴走サポート' },
];

const reasonCards = [
  {
    icon: '🎯',
    title: 'フローで選べる製品設計',
    desc: '「録音→解析→活用」の業務フローで製品を選べるため、現場の課題に対して過不足のない構成で導入できます。',
  },
  {
    icon: '🛠️',
    title: '要件に応じた提供形態',
    desc: 'まずはクラウドで早く始める、統制要件が強ければオンプレを選ぶなど、企業ごとのセキュリティ要件に柔軟に対応します。',
  },
  {
    icon: '🔒',
    title: '段階導入しやすい拡張性',
    desc: '既存の録音・文字起こし資産を活かした単体利用から、ボイテキ！製品連携まで段階的に拡張できる構成です。',
  },
];

const industries = [
  '🏦 証券会社',
  '🏥 生命保険会社',
  '🛡️ 損害保険会社',
  '⚖️ 弁護士事務所',
  '📊 税理士事務所',
  '🛒 通信販売会社',
  '🏠 不動産会社',
  '📞 コールセンター',
];

const topNewsItems = [
  {
    date: '2026-04-20',
    title: '【お知らせ】ボイテキクラウド！料金改定のご案内（2026年5月1日より）',
    href: '/news/voitex-cloud-pricing-revision-2026-05',
    category: 'お知らせ',
  },
  {
    date: '2026-03-19',
    title: '2026年4月「ボイテキオンプレ！」リリース予定のお知らせ',
    href: '/news/voitex-onprem-release-scheduled-2026-04',
    category: 'リリース',
  },
  {
    date: '2025-12-06',
    title: 'React Server Componentsの脆弱性（CVE-2025-55182）への対応について',
    href: '/news/react-server-components-cve-2025-55182-security-update',
    category: 'セキュリティ',
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-[var(--brand-core)] via-[var(--brand-core-soft)] to-[var(--product-cloud)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs">
            {[
              '🛡️ カスハラ対策',
              '🤖 音声AI解析',
              '📊 業務効率化',
              '📝 ACW削減',
            ].map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            声を、守る。声を、
            <span className="text-[var(--brand-accent-light)]">活かす。</span>
          </h1>
          <p className="mt-6 text-base text-slate-100 md:text-lg">
            音声データをAIで解析し、カスタマーハラスメントから社員を守り、
            <br />
            営業品質・応対品質を向上させる——音声DXの総合ブランド
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#products"
              className="rounded-md bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--brand-accent-hover)]"
            >
              製品ラインナップを見る
            </a>
            <Link
              href="/contact?source=top"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              まずは相談する（無料）
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="/company"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
            >
              🏢 共同事業の運営会社情報を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-core)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="text-xs tracking-[0.2em] text-slate-400">
            導入企業例
          </span>
          {[
            '🏦 証券会社',
            '🏥 生命保険会社',
            '🛡️ 損害保険会社',
            '⚖️ 弁護士事務所',
            '📊 税理士事務所',
            '📞 コールセンター',
            '🏠 不動産会社',
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>

      <section id="issues" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            よくある課題
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            こんな課題、抱えていませんか？
          </h2>
          <p className="mt-3 text-slate-600">
            経営者・管理職・現場担当者が直面する「声に関わる課題」を、AIで解決します。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-core)] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            「言った・言わない」をなくす。
            <br />
            「声」で、組織を守る。
          </h2>
          <p className="mt-6 leading-8 text-slate-100">
            クレーム、カスハラ、感情のすれ違い——。
            <br />
            営業トークの効果、顧客の反応、成功要因——。
            <br />
            声の中にある「兆候」と「価値」を可視化することで、
            <br />
            社員を守り、経営を強くする。
            <br />
            それが、
            <span className="font-bold text-[var(--brand-accent-light)]">
              ボイテキ！
            </span>
            です。
          </p>
        </div>
      </section>

      <section id="products" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            製品ファミリー
          </p>
          <h2 className="mt-2 text-3xl font-bold">ボイテキ！製品ファミリー</h2>
          <p className="mt-3 text-slate-600">
            「録音する」→「AIで解析する」→「活用する」——
            <br />
            ワークフローに沿って製品を選べます。
          </p>
          <p className="mt-2 text-sm font-semibold text-[var(--brand-accent)]">
            ※ 各カードをクリックすると製品詳細ページへ移動します
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="space-y-3">
              <p className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500">
                STEP 1
              </p>
              <p className="text-center font-bold">🎙️ 録音・入力</p>
              <Link
                href="/voitex-rec"
                className="group block cursor-pointer rounded-xl border-2 border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-md"
                aria-label="ボイテキレック！の製品詳細を見る"
              >
                <p className="text-xl">📞</p>
                <p className="mt-1 font-bold text-slate-800">
                  ボイテキレック！
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  ひかり電話の通話を自動録音。録音ファイルをボイテキに自動連携します。
                </p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-[var(--brand-cta-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                  クリックして詳細を見る
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
              <Link
                href="/voitex-room-rec"
                className="group relative block cursor-pointer rounded-xl border-2 border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-md"
                aria-label="ボイテキルームレック！の製品詳細を見る"
              >
                <span className="absolute -top-2 right-3 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  NEW
                </span>
                <p className="text-xl">📱</p>
                <p className="mt-1 font-bold text-slate-800">
                  ボイテキルームレック！
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  スマホで部屋の会話を録音開始・終了。会議・商談・面談に対応。
                </p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-[var(--brand-cta-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                  クリックして詳細を見る
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
            </div>

            <div className="hidden self-center text-3xl text-slate-400 lg:block">
              →
            </div>

            <div className="space-y-3">
              <p className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500">
                STEP 2
              </p>
              <p className="text-center font-bold">🤖 AI音声解析</p>
              <Link
                href="/products/voitex2/cloud"
                className="group block cursor-pointer rounded-xl border-2 border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-md"
                aria-label="ボイテキクラウド！の製品詳細を見る"
              >
                <p className="text-xl">☁️</p>
                <p className="mt-1 font-bold text-slate-800">
                  ボイテキクラウド！
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  クラウド型・基本料金＋従量課金。初期費用ゼロで即日から使える音声AI解析サービス。
                </p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-[var(--brand-cta-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                  クリックして詳細を見る
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
              <Link
                href="/products/voitex2/onprem"
                className="group block cursor-pointer rounded-xl border-2 border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-md"
                aria-label="ボイテキオンプレ！の製品詳細を見る"
              >
                <p className="text-xl">🏢</p>
                <p className="mt-1 font-bold text-slate-800">
                  ボイテキオンプレ！
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  オンプレ型・閉域対応。厳格な統制要件・FUJI
                  RAG連携に対応した企業向け。
                </p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-[var(--brand-cta-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                  クリックして詳細を見る
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
            </div>

            <div className="hidden self-center text-3xl text-slate-400 lg:block">
              →
            </div>

            <div className="space-y-3">
              <p className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500">
                OPTION
              </p>
              <p className="text-center font-bold">📝 要約・活用</p>
              <Link
                href="/quicksum"
                className="group block cursor-pointer rounded-xl border-2 border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-md"
                aria-label="QuickSumの製品詳細を見る"
              >
                <p className="text-xl">⚡</p>
                <p className="mt-1 font-bold text-slate-800">QuickSum</p>
                <p className="mt-1 text-xs text-slate-600">
                  テキスト化された会話をプロンプト指定で即座に要約。ACW時間を大幅削減。
                </p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-[var(--brand-cta-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                  クリックして詳細を見る
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-600">
              どの製品が自社に合っているかわからない方へ
            </p>
            <p className="mt-2 text-xs text-slate-500">
              要件が未整理でも問題ありません。現状の課題をヒアリングし、最適な構成をご提案します。
            </p>
            <Link
              href="/contact?source=top"
              className="mt-3 inline-block rounded-md border border-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-[var(--brand-accent)] hover:bg-[var(--brand-cta-subtle)]"
            >
              🧭 製品選定を相談する（無料）
            </Link>
            <div className="mt-3">
              <Link
                href="/company"
                className="text-xs font-semibold text-slate-600 underline underline-offset-2 hover:text-slate-900"
              >
                🏢 共同事業の運営会社情報を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            選ばれる理由
          </p>
          <h2 className="mt-2 text-3xl font-bold">ボイテキ！が選ばれる理由</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasonStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center"
              >
                <p className="text-3xl font-bold text-[var(--brand-core)]">
                  {item.num}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasonCards.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-2xl">{item.icon}</p>
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            導入実績
          </p>
          <h2 className="mt-2 text-3xl font-bold">現在の導入実績</h2>
          <p className="mt-3 text-slate-600">
            以下の業種の企業様にてトライアル導入をいただいています。
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-center text-sm font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-3xl">💬</p>
            <p className="mt-2 font-semibold">お客様の声は順次掲載予定です</p>
            <p className="mt-1 text-sm text-slate-600">
              導入企業様からのお声を準備中です。もうしばらくお待ちください。
            </p>
          </div>
        </div>
      </section>

      {topNewsItems.length > 0 ? (
        <section className="px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  お知らせ
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  お知らせ
                </h2>
              </div>
              <Link
                href="/news"
                className="text-sm font-semibold text-[var(--brand-accent)]"
              >
                一覧を見る →
              </Link>
            </div>
            <div className="grid gap-3">
              {topNewsItems.map((item) => (
                <article
                  key={item.href}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                      {item.category}
                    </span>
                    <time>{item.date}</time>
                  </div>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-slate-900 hover:text-[var(--brand-accent)]"
                  >
                    {item.title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        id="contact"
        className="bg-[var(--brand-cta-bg)] px-6 py-16 text-white"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            まず、「声」の可能性を
            <br />
            体験してください
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-100">
            無料トライアルは即日開始。専任スタッフが丁寧にご案内します。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?source=top"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-cta-fg)] hover:bg-[var(--brand-cta-subtle)]"
            >
              🚀 無料トライアルを始める
            </Link>
            <Link
              href="/contact?source=top"
              className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              📞 導入相談をする（無料）
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            {['法人のみ', '初期費用ゼロ', '国内サーバー', '専任サポート'].map(
              (x) => (
                <span key={x} className="rounded-full bg-white/10 px-3 py-1">
                  {x}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
