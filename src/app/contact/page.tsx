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
          setInterval(timestamp, 500);

          (function resolveWebSource() {
            var defaultSource = "ボイテキ！サイト";
            var map = {
              top: "ボイテキ！サイト",
              fujirag: "FUJIRAG",
              corp: "コーポレートページ",
              cloud: "ボイテキクラウド！",
              onprem: "ボイテキオンプレ！",
              rec: "ボイテキレック！",
              roomrec: "ボイテキルームレック！",
              quicksum: "QuickSUM"
            };
            var query = new URLSearchParams(window.location.search);
            var sourceKey = query.get("source");
            var source = map[sourceKey || ""] || "";

            var hiddenField = document.getElementById("web_source_detail");
            var selectWrap = document.getElementById("web_source_selector_wrap");
            var select = document.getElementById("web_source_selector");
            var form = document.querySelector('form[action*="servlet.WebToLead"]');

            if (!hiddenField) return;
            hiddenField.value = defaultSource;

            if (source) {
              hiddenField.value = source;
              if (selectWrap) selectWrap.classList.add("hidden");
            } else {
              if (selectWrap) selectWrap.classList.remove("hidden");
              if (select) {
                select.required = true;
                select.addEventListener("change", function (event) {
                  var value = event.target && event.target.value ? event.target.value : "";
                  hiddenField.value = value;
                });
              }
            }

            if (form) {
              form.addEventListener("submit", function () {
                var value = (hiddenField.value || "").trim();
                if (!value) hiddenField.value = defaultSource;
              });
            }
          })();
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
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgC000001jUaN"
            method="POST"
            className="mt-8 space-y-6"
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
              value="https://www.voitex.site/thanks?source=contact"
            />
            <input type="hidden" name="lead_source" value="Web" />
            <input
              type="hidden"
              id="web_source_detail"
              name="00NNn00000CosSv"
              value=""
            />

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
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                都道府県
              </label>
              <input
                id="state"
                name="state"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                市区郡
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  名
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  姓 <span className="text-rose-600">*</span>
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
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
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                説明 <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div id="web_source_selector_wrap" className="hidden">
              <label
                htmlFor="web_source_selector"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                お問い合わせ製品 <span className="text-rose-600">*</span>
              </label>
              <select
                id="web_source_selector"
                title="お問い合わせ製品"
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">選択してください</option>
                <option value="ボイテキ！サイト">ボイテキ！サイト</option>
                <option value="FUJIRAG">FUJIRAG</option>
                <option value="コーポレートページ">コーポレートページ</option>
                <option value="ボイテキクラウド！">ボイテキクラウド！</option>
                <option value="ボイテキオンプレ！">ボイテキオンプレ！</option>
                <option value="ボイテキレック！">ボイテキレック！</option>
                <option value="ボイテキルームレック！">
                  ボイテキルームレック！
                </option>
                <option value="QuickSUM">QuickSUM</option>
              </select>
              <p className="mt-2 text-xs text-slate-500">
                グローバルメニュー経由のお問い合わせでは、対象製品を選択してください。
              </p>
            </div>

            <div
              className="g-recaptcha"
              data-sitekey="6Lccip0sAAAAAGsS9gqyGyx8KnJJbwJKKWRHxlup"
            ></div>

            <label className="block text-xs leading-6 text-slate-500">
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
