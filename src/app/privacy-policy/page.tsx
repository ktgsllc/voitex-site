export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
          <p className="text-sm tracking-[0.2em] text-blue-200">
            PRIVACY POLICY
          </p>
          <h1 className="mt-3 text-4xl font-bold">プライバシーポリシー</h1>
          <p className="mt-4 text-sm text-slate-300">
            最終更新日: 2025年8月2日
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">運営会社</h2>
          <p className="mt-4 leading-8 text-slate-600">
            本サービス「ボイテキ！」は、ケーティージーエス合同会社が運営しています。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            個人情報の取り扱い
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            本サービスにおける個人情報の取り扱いは、運営会社のプライバシーポリシーに準拠します。
            詳細は以下の公式ポリシーをご確認ください。
          </p>
          <a
            href="https://ktgs.llc/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            公式プライバシーポリシーを確認する
          </a>
        </section>

        <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-3 text-blue-100">
            個人情報の取り扱いに関するお問い合わせは、こちらからご連絡ください。
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900"
          >
            お問い合わせ
          </a>
        </section>
      </div>
    </main>
  );
}
