'use client';

import Script from 'next/script';
import { FormEvent } from 'react';

export default function ContactWebToLeadForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const grecaptcha = (
      window as unknown as {
        grecaptcha?: { getResponse: (widgetId?: number) => string };
      }
    ).grecaptcha;

    if (grecaptcha) {
      const token = grecaptcha.getResponse();
      if (!token || token.trim() === '') {
        e.preventDefault();
        alert(
          '送信前に、画面下部の「私はロボットではありません」にチェックを入れてください。'
        );
      }
    }
  };

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
              var fields = document.getElementsByName("captcha_settings");
              if (!fields || !fields[0]) return;
              try {
                var elems = JSON.parse(fields[0].value);
                elems["ts"] = JSON.stringify(new Date().getTime());
                fields[0].value = JSON.stringify(elems);
              } catch (e) {}
            }
          }
          setInterval(timestamp, 500);

          (function preselectWebSourceFromQuery() {
            var map = {
              fujirag: "FUJIRAG",
              cloud: "ボイテキクラウド！",
              onprem: "ボイテキオンプレ！",
              rec: "ボイテキレック！",
              roomrec: "ボイテキルームレック！",
              quicksum: "QuickSUM"
            };
            var key = new URLSearchParams(window.location.search).get("source");
            var value = map[key || ""] || "";
            if (!value) return;
            var sel = document.getElementById("00NNn00000CosSv");
            if (!sel || sel.tagName !== "SELECT") return;
            for (var i = 0; i < sel.options.length; i++) {
              if (sel.options[i].value === value) {
                sel.selectedIndex = i;
                break;
              }
            }
          })();
        `}
      </Script>

      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgC000001jUaN"
        method="POST"
        acceptCharset="UTF-8"
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
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
          value="https://www.voitex.site/thanks"
        />
        <input type="hidden" name="lead_source" value="Web" />

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            会社名 <span className="text-rose-600">*</span>
          </label>
          <input
            id="company"
            maxLength={40}
            name="company"
            type="text"
            required
            autoComplete="organization"
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
            maxLength={20}
            name="state"
            type="text"
            autoComplete="address-level1"
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
            maxLength={40}
            name="city"
            type="text"
            autoComplete="address-level2"
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
            maxLength={80}
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            名
          </label>
          <input
            id="first_name"
            maxLength={40}
            name="first_name"
            type="text"
            autoComplete="given-name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            メール <span className="text-rose-600">*</span>
          </label>
          <input
            id="email"
            maxLength={80}
            name="email"
            type="email"
            required
            autoComplete="email"
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

        <div>
          <label
            htmlFor="00NNn00000CosSv"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            お問い合わせ製品
          </label>
          <select
            id="00NNn00000CosSv"
            name="00NNn00000CosSv"
            title="お問い合わせ製品"
            defaultValue=""
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">--なし--</option>
            <option value="FUJIRAG">FUJIRAG</option>
            <option value="ボイテキクラウド！">ボイテキクラウド！</option>
            <option value="ボイテキオンプレ！">ボイテキオンプレ！</option>
            <option value="ボイテキレック！">ボイテキレック！</option>
            <option value="ボイテキルームレック！">
              ボイテキルームレック！
            </option>
            <option value="QuickSUM">QuickSUM</option>
          </select>
        </div>

        <div
          className="g-recaptcha"
          data-sitekey="6Lccip0sAAAAAGsS9gqyGyx8KnJJbwJKKWRHxlup"
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
    </>
  );
}
