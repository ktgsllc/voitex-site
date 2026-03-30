export default function SecurityPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
          <p className="text-sm tracking-[0.2em] text-blue-200">SECURITY</p>
          <h1 className="mt-3 text-4xl font-bold">セキュリティ方針</h1>
          <p className="mt-4 text-sm text-slate-300">
            最終更新日: 2024年12月1日
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">基本方針</h2>
          <p className="mt-4 leading-8 text-slate-600">
            音声データを扱うサービスとして、機密性・完全性・可用性を重視したセキュリティ運用を継続します。
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">データ保護</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>・転送時暗号化（TLS）</li>
              <li>・保存時暗号化（AES-256）</li>
              <li>・アクセス権限の最小化</li>
              <li>・監査ログの取得</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">アクセス制御</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>・認証基盤によるユーザー管理</li>
              <li>・ロールベースの権限分離</li>
              <li>・不正アクセスの検知</li>
              <li>・セッション管理の強化</li>
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">運用と継続改善</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
            <li>・定期的な脆弱性評価とセキュリティレビューを実施</li>
            <li>・ログ監視を通じた異常検知とインシデント対応体制を維持</li>
            <li>・法令および契約要件に応じて運用ルールを更新</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">
            セキュリティに関するお問い合わせ
          </h2>
          <p className="mt-3 text-blue-100">
            セキュリティ質問や報告事項は、こちらからご連絡ください。
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
