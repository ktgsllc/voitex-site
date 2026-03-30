import type { Metadata } from 'next';
import Script from 'next/script';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキルームレック！｜部屋の会話録音',
  'ボイテキルームレック！はスマホアプリで会議・商談・面談の会話を録音し、ボイテキへ自動連携できる新サービスです。',
  '/voitex-room-rec'
);

export default function VoitexRoomRecPage() {
  return (
    <main className="bg-slate-50 py-16">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Script id="roomrec-webtolead-timestamp" strategy="afterInteractive">
        {`
          function roomRecTimestamp() {
            var response = document.getElementById("g-recaptcha-response");
            if (response == null || response.value.trim() === "") {
              var settingsFields = document.getElementsByName("captcha_settings");
              if (!settingsFields || settingsFields.length === 0) return;

              try {
                var elems = JSON.parse(settingsFields[0].value || "{}");
                elems["ts"] = JSON.stringify(new Date().getTime());
                settingsFields[0].value = JSON.stringify(elems);
              } catch (error) {
                console.warn("captcha_settings parse failed", error);
              }
            }
          }
          setInterval(roomRecTimestamp, 500);
        `}
      </Script>

      <div className="bg-[var(--product-roomrec-urgent)] px-6 py-3 text-center text-sm font-semibold text-white">
        先行登録受付中 —
        新サービス「ボイテキルームレック！」（2026年初夏発売予定）
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <section className="rounded-2xl bg-gradient-to-br from-[var(--brand-cta-bg)] to-[var(--brand-core)] px-8 py-12 text-white">
          <p className="inline-block rounded-full bg-[var(--product-roomrec-badge)] px-3 py-1 text-xs font-semibold text-white">
            NEW 2026年初夏発売予定
          </p>
          <p className="mt-3 text-sm tracking-[0.2em] text-[var(--product-roomrec-soft-accent)]">
            ボイテキルームレック！
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            会議も、商談も、面談も。
            <br />
            すべて残る。
          </h1>
          <p className="mt-4 max-w-3xl text-slate-100">
            スマホアプリで録音開始・終了するだけ。部屋の会話をそのまま記録し、
            ボイテキクラウド！またはオンプレ！へ自動連携します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#roomrec-form"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-cta-fg)]"
            >
              先行登録をする（無料）
            </a>
            <a
              href="/contact?source=roomrec"
              className="rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white"
            >
              詳細を問い合わせる
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            こんなシーンで活躍します
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['🤝', '営業・商談'],
              ['👥', '会議・ミーティング'],
              ['🗣️', '面談・ヒアリング'],
              ['🛡️', 'カスハラ対策'],
              ['🏥', '医療・福祉の場面'],
              ['⚖️', '法律・士業の相談'],
            ].map(([icon, item]) => (
              <div
                key={item}
                className="rounded-lg bg-slate-100 px-4 py-4 text-sm text-slate-700"
              >
                <p className="text-3xl">{icon}</p>
                <p className="mt-2">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            使い方はスマホ1台。3タップで録音開始
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['STEP 1', 'アプリを起動'],
              ['STEP 2', '録音開始・終了'],
              ['STEP 3', '自動アップロード'],
            ].map((step) => (
              <div
                key={step[0]}
                className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
              >
                <p className="mb-2 font-semibold text-slate-900">{step[0]}</p>
                <p>{step[1]}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              'iOS / Android対応予定',
              'ボイテキへの自動連携',
              '先行登録受付中',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-[var(--product-roomrec-soft-bg)] px-4 py-3 text-sm text-[var(--product-roomrec-soft-text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-[var(--brand-cta-bg)] px-8 py-10 text-center text-white">
          <h2 className="mt-1 text-2xl font-bold">
            先行登録して、最新情報を受け取る
          </h2>
          <p className="mt-3 text-slate-100">
            2026年初夏のリリース時に最優先でご案内。先行登録者限定の特典もご用意予定です。
          </p>

          <div
            id="roomrec-form"
            className="mx-auto mt-8 max-w-xl rounded-xl border border-white/20 bg-white/10 p-5 text-left"
          >
            <p className="mb-3 text-center text-sm font-semibold">
              先行登録フォーム（SFDC）
            </p>
            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgC000001jUaN"
              method="POST"
              className="grid gap-3"
            >
              <input
                type="hidden"
                name="captcha_settings"
                value='{"keyname":"voitexsite","fallback":"true","orgId":"00DgC000001jUaN","ts":""}'
              />
              <input type="hidden" name="oid" value="00DgC000001jUaN" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.voitex.site/thanks?source=roomrec"
              />
              <input type="hidden" name="lead_source" value="Web" />
              <input
                type="hidden"
                name="00NNn00000CosSv"
                value="ボイテキルームレック！"
              />

              <input
                id="company"
                name="company"
                type="text"
                placeholder="会社名 *"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
                required
              />
              <input
                id="state"
                name="state"
                type="text"
                placeholder="都道府県"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
              />
              <input
                id="city"
                name="city"
                type="text"
                placeholder="市区郡"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
              />
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="名"
                  className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
                />
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="姓 *"
                  className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
                  required
                />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="メールアドレス *"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
                required
              />
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="説明（導入検討時期・利用シーンなど）"
                className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/70"
              />

              <div
                className="g-recaptcha"
                data-sitekey="6Lccip0sAAAAAJM6_hLvZb-dPyNqGHoqczjQEHUF"
              ></div>

              <label className="block text-xs leading-6 text-slate-200/80">
                <input type="checkbox" required className="mr-2 align-middle" />
                <a
                  href="https://ktgs.llc/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  プライバシーポリシー
                </a>
                に同意のうえ送信します。
              </label>

              <div className="mt-2 text-center">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-[var(--product-roomrec-badge)] px-6 py-3 font-semibold text-white"
                >
                  先行登録をする（無料）
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact?source=roomrec"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white"
            >
              詳細を問い合わせる
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
