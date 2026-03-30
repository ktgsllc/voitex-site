import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'QuickSum — 通話後の記録、もう迷わない。ACW削減特化 | ボイテキ！',
  'テキスト化された会話をプロンプト指定で即座に要約。コールセンターのACW（アフターコールワーク）時間を大幅削減します。',
  '/quicksum'
);

export default function QuickSumPage() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <section className="rounded-2xl bg-gradient-to-br from-[var(--brand-core)] to-[var(--product-quicksum)] px-8 py-12 text-white">
            <div className="mb-4 flex flex-wrap gap-2 text-xs">
              {[
                '📝 テキスト要約AI',
                '⏱️ ACW削減特化',
                '📞 コールセンター管理者向け',
                '👤 オペレーター向け',
              ].map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">
              通話後の記録、
              <br />
              もう
              <span className="text-[var(--product-quicksum-soft-accent)]">
                迷わない。
              </span>
            </h1>
            <p className="mt-4 text-slate-100">
              テキスト化された会話をプロンプト指定で即座に要約。
              <br />
              ACW（アフターコールワーク）時間を大幅削減し、
              <br />
              オペレーターの負担を軽減します。ボイテキ！未導入でも、他システムでテキスト化した内容のコピペ要約が可能です。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-cta-fg)]"
              >
                🚀 無料トライアルを始める
              </a>
              <a
                href="#how"
                className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white"
              >
                ▶️ 使い方を見る
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-100">
                  📝 テキスト入力（会話ログ）
                </p>
                <p>
                  顧客：「先月申し込んだプランについて確認したいのですが」
                  <br />
                  担当：「はい、ご契約番号をお聞かせいただけますか」
                  <br />
                  顧客：「A-12345です。料金が思ったより高くて...」
                  <br />
                  担当：「確認いたします。現在のプランは...」
                  <br />
                  <span className="text-slate-200/80">（会話ログ続く...）</span>
                </p>
              </div>
              <div className="self-center text-center text-2xl text-[var(--product-quicksum-soft-accent)]">
                ⚡
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-100">
                  ✅ 要約出力（プロンプト指定）
                </p>
                <p>
                  <strong>【問い合わせ内容】</strong>
                  <br />
                  料金プランについての確認・変更相談
                  <br />
                  <br />
                  <strong>【対応内容】</strong>
                  <br />
                  現行プランの説明・変更提案実施
                  <br />
                  <br />
                  <strong>【次回対応】</strong>
                  <br />
                  見積書を3営業日以内に送付
                </p>
              </div>
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
              コールセンターの「記録業務」の課題
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                [
                  '⏰',
                  '1件あたりのACWが長い',
                  '通話後の記録・入力に3〜10分かかっている。その間、次の顧客を待たせてしまう。生産性と品質の両立が課題です。',
                ],
                [
                  '📝',
                  '記録品質のムラ',
                  'オペレーターによって記録の粒度・表現が異なる。引き継ぎや分析の精度が下がり、組織全体の効率が落ちます。',
                ],
                [
                  '😓',
                  'オペレーターの心理的負担',
                  'クレーム対応後に記録まで完璧にこなす精神的負担。QuickSumで記録業務を軽くし、コア業務に集中できます。',
                ],
              ].map((item) => (
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
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ['〜80%', 'ACW時間の削減目標', '（プロンプト最適化後）'],
                ['3秒', '要約生成にかかる時間', '（目安）'],
                ['∞', 'プロンプトのカスタマイズ', 'パターン数'],
              ].map((n) => (
                <div
                  key={n[0]}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <p className="text-3xl font-bold text-slate-900">{n[0]}</p>
                  <p className="mt-1 text-xs text-slate-600">{n[1]}</p>
                  <p className="text-xs text-slate-500">{n[2]}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="how"
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              使い方
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              3ステップで、記録業務が劇的に変わる
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              複雑な操作は一切不要。テキストを貼り付けるだけで、即座に要約が完成します。
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                [
                  '📋',
                  'テキストを貼り付ける',
                  'ボイテキクラウド！またはボイテキオンプレ！の文字起こし結果に加えて、他システムでテキスト化した会話ログも貼り付けて利用できます。',
                ],
                [
                  '🎯',
                  'プロンプトを指定する',
                  '業務に合わせたプロンプトテンプレートを選択。「問い合わせ内容・対応内容・次回対応」など、構造化した出力形式を指定できます。',
                ],
                [
                  '⚡',
                  '即座に要約が完成',
                  '数秒で要約完成。CRMやシステムへのコピペで記録完了。担当者に依存しない、均質な品質の記録が実現します。',
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

          <section
            id="features"
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              主な機能
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              QuickSumの機能
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                [
                  '🎯',
                  'プロンプトテンプレート',
                  '業務用途に合わせたプロンプトを事前設定。コールセンター・営業・医療・法律など業界特化テンプレートを提供します。',
                ],
                [
                  '📊',
                  '構造化出力',
                  '「問い合わせ内容」「対応内容」「感情状態」「次回対応」など、フィールドを指定した構造化された要約を出力します。',
                ],
                [
                  '🔗',
                  '単体利用 / ボイテキ連携',
                  'ボイテキクラウド！・ボイテキオンプレ！連携に加え、他システムでテキスト化した会話ログのコピペ要約にも対応します。',
                ],
              ].map((item) => (
                <article
                  key={item[1]}
                  className="rounded-lg bg-[var(--product-quicksum-soft-bg)] p-4 text-sm text-slate-700"
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
              連携
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              ボイテキ！との連携フロー（任意）
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              QuickSumは単体利用も可能です。ボイテキ！と連携する場合は、録音→解析→要約までワンストップで完結します。
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                ['🎙️', 'ボイテキレック！', '録音'],
                ['☁️', 'ボイテキクラウド！', 'AI音声解析・文字起こし'],
                ['⚡', 'QuickSum', '要約・ACW削減'],
                ['📁', 'CRM・システム', '記録・保存'],
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
          </section>

          <section
            id="contact"
            className="mt-8 rounded-2xl bg-[var(--brand-cta-bg)] px-8 py-10 text-center text-white"
          >
            <h2 className="text-2xl font-bold">
              ACW削減を、今すぐ始めましょう
            </h2>
            <p className="mt-3 text-slate-100">
              まずは無料でお試しください。プロンプト職人スタッフが業務に最適なテンプレートをご提案します。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/contact?source=quicksum"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--brand-cta-fg)]"
              >
                🚀 無料トライアルを始める
              </a>
              <a
                href="/contact?source=quicksum"
                className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
              >
                📞 デモを見る・相談する
              </a>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
              {['法人のみ', 'プロンプト設定サポート', 'ボイテキ連携対応'].map(
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
    </>
  );
}
