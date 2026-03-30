import Link from 'next/link';
import type { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキクラウド！— まず使ってみる。すぐ、効果が出る。| ボイテキ！',
  '音声ファイルをアップロードするだけ。感情分析・NGワード検知・品質スコアリングを即日開始。月額契約不要、従量課金1,500円/時間で投資リスクゼロ。',
  '/products/voitex2/cloud'
);

const issues = [
  [
    '😡',
    'カスハラの証拠が残らない',
    'クレーム・ハラスメントの「言った・言わない」を記録・可視化。証拠として活用できます。',
  ],
  [
    '📊',
    '応対品質のムラが把握できない',
    '担当者ごとの品質差を数値化。組織全体の底上げを継続的に実現します。',
  ],
  [
    '⏱️',
    '振り返りが属人的・非効率',
    'AIが自動で会話を分析・評価。属人的な振り返りから脱却し、再現性のある改善を実現します。',
  ],
  [
    '📉',
    '営業トークの再現性がない',
    '成功トークのパターンを可視化・分析。トップ営業のノウハウを組織で共有します。',
  ],
  [
    '🔍',
    '現場が「見えない」',
    '役割別ダッシュボードで、経営者・管理職・現場がそれぞれ必要な情報を即座に確認。',
  ],
  [
    '💰',
    '導入コストが読めない',
    '月額固定費ゼロ。1,500円/時間の従量課金で、使った分だけ。投資対効果を管理しやすい。',
  ],
] as const;

const features = [
  [
    '💬',
    '感情分析・顧客心理5軸',
    '会話の感情変化をリアルタイムで可視化。怒り・不満・満足・期待などの5軸で顧客心理を把握します。',
  ],
  [
    '🚨',
    'NGワード・要注意発話検知',
    'カスハラ・暴言・コンプライアンス違反を自動検知。カスタマイズ可能なNGワード設定で業務に最適化。',
  ],
  [
    '⭐',
    '品質スコアリング',
    '応対品質を数値化・スコアリング。担当者別・日別・案件別で多角的に評価できます。',
  ],
  [
    '📋',
    '自動文字起こし・要約',
    '95%以上の精度で自動文字起こし。会話内容を構造化して要約し、記録業務を大幅削減。',
  ],
  [
    '📊',
    '役割別ダッシュボード',
    '経営者・管理職・オペレーターがそれぞれ必要な情報を確認できる役割別の画面設計。',
  ],
  [
    '🎯',
    'カスタムプロンプト設定',
    '業界・業務に合わせたプロンプトを設定可能。営業分析・クレーム対応・研修評価など用途に最適化。',
  ],
] as const;

const personaTags = [
  '🤖 AI音声解析',
  '☁️ クラウド型',
  '👥 コールセンター責任者向け',
  '📊 営業マネージャー向け',
  '🛡️ カスハラ対策担当向け',
];

export default function Voitex2CloudPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <section className="rounded-2xl bg-gradient-to-br from-[var(--brand-core)] to-[var(--product-cloud)] px-8 py-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-xs">
            {personaTags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            まず使ってみる。
            <br />
            すぐ、
            <span className="text-[var(--brand-accent-light)]">
              効果が出る。
            </span>
          </h1>
          <p className="mt-4 text-slate-100">
            音声ファイルをアップロードするだけ。
            <br />
            感情分析・NGワード検知・品質スコアリングを即日開始。
            <br />
            月額契約不要、従量課金で投資リスクゼロ。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?source=cloud"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-cta-fg)]"
            >
              🚀 無料トライアルを始める
            </Link>
            <a
              href="#features"
              className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white"
            >
              📋 機能一覧を見る
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-5">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-100">
              📊 品質スコアリング ダッシュボード（イメージ）
            </p>
            <div className="space-y-3 text-sm">
              {[
                ['顧客満足度スコア', '82%', '82点', 'bg-sky-300'],
                ['感情安定度', '74%', '74点', 'bg-sky-300'],
                ['NGワード検知数', '15%', '2件', 'bg-red-300'],
                ['応対品質スコア', '88%', '88点', 'bg-green-300'],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[120px_1fr_40px] items-center gap-3"
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
        </section>

        <section className="mt-4 rounded-xl bg-gradient-to-r from-slate-950 to-[var(--brand-core)] p-4 text-sm text-slate-200">
          <div className="flex flex-wrap gap-3">
            <span className="text-xs tracking-[0.2em] text-slate-400">
              導入企業例
            </span>
            {[
              '🏦 証券会社',
              '🏥 保険会社',
              '⚖️ 弁護士事務所',
              '📞 コールセンター',
              '🏠 不動産会社',
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
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
            こんな課題、解決します
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((item) => (
              <article
                key={item[1]}
                className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
              >
                <p className="text-2xl">{item[0]}</p>
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
          <h2 className="mt-2 text-2xl font-bold text-slate-900">主な機能</h2>
          <p className="mt-2 text-sm text-slate-600">
            音声ファイルをアップロードするだけで、これだけの分析が自動で実行されます。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <article
                key={item[1]}
                className="rounded-lg bg-[var(--product-cloud-soft-bg)] p-4 text-sm text-slate-700"
              >
                <p className="text-2xl">{item[0]}</p>
                <p className="mt-1 font-semibold text-slate-900">{item[1]}</p>
                <p className="mt-1">{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            導入ステップ
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            使い方はとてもシンプル
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            3ステップで、すぐに音声AI解析を開始できます。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                '🎙️',
                '音声ファイルをアップロード',
                'WAV・MP3・FLAC・OGG形式対応。1ファイル最大200MBまで。ボイテキレック！やボイテキルームレック！からの自動連携も可能。',
              ],
              [
                '🤖',
                'AIが自動解析',
                '文字起こし→感情分析→NGワード検知→品質スコアリング→要約まで、AIが自動で実行します。',
              ],
              [
                '📊',
                'ダッシュボードで確認',
                '役割別ダッシュボードで分析結果を即座に確認。CSVエクスポートや継続的なモニタリングも対応。',
              ],
            ].map((step) => (
              <div
                key={step[1]}
                className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
              >
                <p className="text-xl">{step[0]}</p>
                <p className="mt-1 font-semibold text-slate-900">{step[1]}</p>
                <p className="mt-1">{step[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            料金
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">料金プラン</h2>
          <p className="mt-2 text-sm text-slate-600">
            本ページはボイテキクラウド！の料金です。
            <br />
            従量課金制で、使った分だけお支払いいただきます。
            <br />
            月額契約不要、トライアル利用も可能です。
          </p>

          <h3 className="mt-8 text-lg font-bold text-slate-900">基本料金</h3>
          <p className="mt-2 text-sm text-slate-600">
            解析時間に応じた従量課金制
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">解析時間</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                音声解析時間 1時間あたり
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">¥1,500</p>
              <p className="mt-1 text-xs text-slate-600">税込/時間</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">
                標準エンジン
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                基本機能
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">¥0</p>
              <p className="mt-1 text-xs text-slate-600">無料</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">
                カスタムエンジン
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                お客様指定の場合
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">別途見積</p>
              <p className="mt-1 text-xs text-slate-600">ご相談ください</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">月額費用</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                基本料金
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">¥0</p>
              <p className="mt-1 text-xs text-slate-600">月額契約不要</p>
            </article>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">料金の特徴</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              [
                '従量課金制',
                '実際の解析時間に応じて請求。1時間50分なら1時間分の料金',
              ],
              ['月額契約不要', '固定費用なし。必要な時だけ利用'],
              ['トライアル対応', '導入前に無料でお試しいただけます'],
              [
                '標準エンジン無料',
                '基本機能は追加費用なしでご利用いただけます',
              ],
            ].map((feature) => (
              <article
                key={feature[0]}
                className="rounded-lg bg-[var(--product-cloud-soft-bg)] p-4"
              >
                <p className="font-semibold text-slate-900">{feature[0]}</p>
                <p className="mt-1 text-sm text-slate-700">{feature[1]}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">料金計算例</h3>
          <p className="mt-2 text-sm text-slate-600">
            実際の解析時間に応じた料金計算の例をご紹介します
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                小規模（月間100時間）
              </p>
              <p className="mt-2 text-xs text-slate-600">
                対象: 中小規模の営業チーム、小規模コールセンター
                <br />
                営業部門が10名程度、またはコールセンターが20名程度の企業
              </p>
              <p className="mt-3 text-xl font-bold text-slate-900">
                月額: ¥150,000（税込）
              </p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                中規模（月間500時間）
              </p>
              <p className="mt-2 text-xs text-slate-600">
                対象: 中規模の営業組織、中規模コールセンター
                <br />
                営業部門が30-50名程度、またはコールセンターが50-100名程度の企業
              </p>
              <p className="mt-3 text-xl font-bold text-slate-900">
                月額: ¥750,000（税込）
              </p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                大規模（月間1,000時間）
              </p>
              <p className="mt-2 text-xs text-slate-600">
                対象: 大規模の営業組織、大規模コールセンター
                <br />
                営業部門が100名以上、またはコールセンターが100名以上の企業
              </p>
              <p className="mt-3 text-xl font-bold text-slate-900">
                月額: ¥1,500,000（税込）
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            <p>
              ※ 計算対象:
              解析を実施した音声の時間のみが課金対象です。録音時間や通話時間ではなく、実際に解析処理を行った時間に対して課金されます。処理失敗分は課金対象外です。
            </p>
            <p className="mt-2">
              ※ 月額固定プラン:
              ご利用時間が安定しているお客様には、月額固定プランもご用意しています。詳細はお問い合わせください。
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            連携
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            ボイテキ！製品ファミリーとの連携
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            録音から解析・活用まで、シームレスなワークフローを構築できます。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['📞', 'ボイテキレック！', 'ひかり電話録音'],
              ['☁️', 'ボイテキクラウド！', 'AI音声解析'],
              ['⚡', 'QuickSum', 'テキスト要約・ACW削減'],
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
            ※ ボイテキルームレック！からの自動連携にも対応
          </p>
        </section>

        <section
          id="contact"
          className="mt-8 rounded-2xl bg-[var(--brand-cta-bg)] px-8 py-10 text-center text-white"
        >
          <h2 className="text-2xl font-bold">まず、試してみてください</h2>
          <p className="mt-3 text-slate-100">
            無料トライアルは即日開始。専任スタッフが丁寧にご案内します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?source=cloud"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand-cta-fg)]"
            >
              🚀 無料トライアルを始める
            </Link>
            <Link
              href="/contact?source=cloud"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
            >
              📞 導入相談をする（無料）
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
            {['法人のみ', '月額契約不要', '国内サーバー', '専任サポート'].map(
              (x) => (
                <span key={x} className="rounded-full bg-white/10 px-3 py-1">
                  {x}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
