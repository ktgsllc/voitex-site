import { Metadata } from 'next';
import Script from 'next/script';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'お問い合わせ｜ボイテキクラウド！・ボイテキオンプレ！',
  'ボイテキクラウド！とボイテキオンプレ！に関するお問い合わせページです。導入相談、デモ、料金、活用方法までお気軽にご相談ください。',
  '/contact'
);

export default function Page() {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Script id="salesforce-web-to-lead-timestamp" strategy="afterInteractive">
        {`
          function timestamp() {
            var response = document.getElementById("g-recaptcha-response");
            if (response && response.value.trim() !== "") {
              var captchaSettings = document.getElementById("captcha_settings");
              if (captchaSettings) {
                var vals = JSON.parse(captchaSettings.value);
                vals.ts = JSON.stringify(new Date().getTime());
                captchaSettings.value = JSON.stringify(vals);
              }
            }
          }
          setInterval(timestamp, 500);
        `}
      </Script>

      <main className="bg-slate-50 py-16">
        <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            お問い合わせ
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            ボイテキ！は「ボイテキクラウド！」と「ボイテキオンプレ！」の2製品です。
            <br />
            お問い合わせ内容に応じて最適な導線をご案内します（オンプレは FUJI
            RAG サイト経由のご相談が優先です）。
          </p>

          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5h000007bE4h"
            method="POST"
            className="mt-8 space-y-6"
          >
            <input type="hidden" name="oid" value="00D5h000007bE4h" />
            <input
              type="hidden"
              name="retURL"
              value="https://www.voitex.site/thanks"
            />
            <input type="hidden" name="lead_source" value="Web" />
            <input
              type="hidden"
              name="00NNn00000CosSv"
              value="ボイテキ！サイト"
            />
            <input
              type="hidden"
              id="captcha_settings"
              name="captcha_settings"
              value='{"keyname":"voicetex_web2lead","fallback":"true","orgId":"00D5h000007bE4h","ts":""}'
            />

            <div>
              <label
                htmlFor="last_name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                お名前 <span className="text-rose-600">*</span>
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                会社名
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                メールアドレス <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                電話番号
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                お問い合わせ内容 <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div
              className="g-recaptcha"
              data-sitekey="6LeYOUR_SITE_KEY_HERE"
            ></div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:w-auto"
            >
              送信する
            </button>

            <p className="text-xs leading-6 text-slate-500">
              送信後はサンクスページに遷移します。内容によってはご返信までお時間をいただく場合があります。
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
