import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキレック！｜通話録音をシンプルに',
  'ボイテキ！の音声解析AIと連携する、最大32ch同時対応のSIP通話録音システム。オンプレミス保存でセキュリティを重視し、カスハラ防止対策にも活用できます。',
  '/voitex-rec'
);

const securityPoints = [
  ['🔒', 'オンプレミス保存', '自社サーバーで完全管理'],
  ['🛡️', '暗号化対応', 'AES暗号化で安全保存'],
  ['📋', 'カスハラ対策', '奨励金制度対象・証拠保全対応'],
] as const;

const recommendedFor = [
  [
    '営業・販売会社',
    '外出先での通話録音で営業活動の記録・分析を実現。顧客との約束事を確実に記録',
  ],
  [
    '専門サービス業',
    '弁護士・税理士・コンサルタントなど、顧客対応の品質向上とコンプライアンス対応',
  ],
  [
    '中小企業・スタートアップ',
    '独自の通話管理システム構築で、大手企業に負けない顧客対応品質を実現',
  ],
] as const;

const painSolves = [
  [
    '言った・言わない問題',
    [
      '全通話の自動録音で証拠保全',
      '音声認識で内容の正確な記録',
      '法的紛争の予防・解決',
    ],
  ],
  [
    '依頼内容の取りこぼし',
    [
      '音声認識による自動文字起こし',
      '重要ポイントの自動抽出',
      '検索可能な通話履歴',
    ],
  ],
  [
    '新人教育の効率化',
    ['優秀な対応例の共有', '新人向けトレーニング素材', '品質向上のための分析'],
  ],
] as const;

const outcomes = [
  [
    'クレーム削減',
    '最大80%のクレーム削減効果',
    '通話録音による証拠保全と音声認識による正確な記録により、顧客との認識相違を大幅に削減。',
  ],
  [
    '時間短縮',
    '電話対応時間を最大40%短縮',
    '自動文字起こしと検索可能な通話履歴により、情報の取りこぼしを防止し対応を効率化。',
  ],
  [
    '品質向上',
    '顧客対応品質の大幅向上',
    '優秀な対応例の分析と新人教育への活用により、統一された高品質な顧客対応を実現。',
  ],
  [
    '業務効率化',
    '重要業務への集中時間確保',
    '記録・整理作業の負荷を削減し、営業活動や戦略立案など成長に直結する業務へ集中可能。',
  ],
] as const;

export default function VoitexRecPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <section className="rounded-2xl bg-gradient-to-br from-[var(--brand-cta-bg)] to-[var(--brand-core)] px-8 py-12 text-white">
          <p className="text-sm tracking-[0.2em] text-[var(--brand-accent-light)]">
            ボイテキレック！
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            ボイテキレック！
            <br />
            通話録音をシンプルに
          </h1>
          <p className="mt-4 max-w-3xl text-slate-100">
            ボイテキ！の音声解析AIと連携する、最大32ch同時対応のSIP通話録音から、AI音声認識（テキスト化）まで。
            <br />
            通話録音の検索・再生も可能。音声ファイルはオンプレミスサーバーに保存し、セキュリティを最優先。
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {[
              '通話録音システム',
              '最大32ch同時対応',
              'AI音声認識',
              'ボイテキ！連携',
            ].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact?source=rec"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-cta-fg)]"
            >
              無料相談・資料請求
            </a>
            <a
              href="#security"
              className="rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white"
            >
              詳細を見る
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            リリース予定
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">
            2026年10月リリース予定
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            先行予約・早期導入特典をご希望の方は、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact?source=rec"
            className="mt-3 inline-block rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            先行予約はこちら
          </a>
        </section>

        <section
          id="security"
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            セキュリティ最優先。時代に逆行するセキュリティ重視の設計
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            音声ファイルは個人情報・機密情報の塊。クラウド化の流れに逆行し、オンプレミスサーバーでの保存を採用しています。
            金融・医療・法務など、厳格なセキュリティが求められる業界でも安心してご利用いただけます。
            東京都カスハラ防止条例奨励金制度の対象となり、最大40万円の支援が受けられます。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {securityPoints.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-xl bg-slate-100 p-5 text-center"
              >
                <p className="text-2xl">{icon}</p>
                <p className="mt-2 font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            こんな企業様におすすめ
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            PBX側で録音できない環境や、独自の通話管理システムを構築したい企業様、専門サービス業に最適です。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {recommendedFor.map(([title, text]) => (
              <div key={title} className="rounded-xl bg-slate-100 p-5">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[var(--product-rec-soft-border)] bg-[var(--product-rec-soft-bg)] p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--product-rec-soft-text)]">
            カスハラ防止対策
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            ボイテキレック！ × ボイテキ！ カスハラ防止の最強タッグ
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            録音・証拠保全から感情分析・NGワード検出まで、カスハラ防止に必要な機能を網羅。奨励金制度の活用も見据えた運用設計が可能です。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-[var(--product-rec)]">
                🎙️ ボイテキレック！
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>・通話の完全録音・証拠保全</li>
                <li>・オンプレミス保存でセキュリティ重視</li>
                <li>・奨励金制度対象</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-[var(--brand-core)]">
                🤖 ボイテキ！
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>・AI感情分析・NGワード検出</li>
                <li>・問題の早期発見・警告</li>
                <li>・自動要約・可視化</li>
              </ul>
              <Link
                href="/products/voitex2"
                className="mt-4 inline-block text-sm font-semibold text-[var(--brand-accent)] hover:underline"
              >
                ボイテキ！の詳細を見る
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            電話業務の悩みを解決
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            多くの企業が抱える課題を、ボイテキレック！で根本的に解決します。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {painSolves.map(([title, points]) => (
              <article key={title} className="rounded-xl bg-slate-100 p-5">
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {points.map((point) => (
                    <li key={point}>・{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">導入効果</h2>
          <p className="mt-2 text-sm text-slate-600">
            多くの企業様に実感いただいている、具体的な効果をご紹介します。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {outcomes.map(([label, headline, desc]) => (
              <article key={label} className="rounded-xl bg-slate-100 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {headline}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">対応環境・仕様</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">
                対応プロトコル・回線
              </p>
              <ul className="mt-2 space-y-1">
                <li>・SIP対応（環境に応じて設計）</li>
                <li>・ひかり電話（NTT東日本・西日本）</li>
                <li>・ひかり電話オフィス</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">録音能力・保存</p>
              <ul className="mt-2 space-y-1">
                <li>・最大32ch同時録音</li>
                <li>・オンプレミスサーバー保存</li>
                <li>・検索・再生・証跡管理</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">連携先</p>
              <ul className="mt-2 space-y-1">
                <li>・ボイテキクラウド！</li>
                <li>・ボイテキオンプレ！</li>
                <li>・QuickSum</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">詳細仕様</p>
              <p className="mt-2">
                対応PBX・設置構成・暗号化要件は環境に合わせてご提案します。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-[var(--brand-cta-bg)] px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">先行予約・導入相談を受付中です</h2>
          <p className="mt-3 text-slate-100">
            セキュリティ要件、録音規模、連携方法まで整理したうえで、最適な導入プランをご提案します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact?source=rec"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand-cta-fg)]"
            >
              相談する（無料）
            </a>
            <Link
              href="/products/voitex2"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
            >
              ボイテキ！製品を見る
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
