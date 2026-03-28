export default function Cta() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            導入方針のご相談はこちら
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            ボイテキクラウド！とボイテキオンプレ！の選定、比較、導入ステップまでご案内します。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              クラウドの相談をする
            </a>
            <a
              href="https://fujirag.voitex.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            >
              オンプレを相談する（FUJI RAG）
            </a>
            <a
              href="/products/compare"
              className="inline-flex items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              比較表を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
