export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl">
            声の中に、<span className="text-primary">答えがある。</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            音声データをAIで分析・要約・可視化し、
            <br className="hidden sm:inline" />
            応対品質を見える化するクラウドサービス{' '}
            <strong>「ボイテキ！」</strong>。<br />
            感情やNGワードの
            <span className="font-semibold text-primary">自動検出</span>
            にも対応しています。
          </p>
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-700">
              AIの力で、コミュニケーションの質を守る
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/jCp4fEqMV5fGaoWu6"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              デモを申し込む
            </a>
            <a
              href="/features"
              className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              機能を見る
            </a>
          </div>
          <div className="mt-12">
            <img
              src="/hero-image.webp" // ← 差し替え予定の画像
              alt="ボイテキ！UIイメージ"
              className="mx-auto w-full max-w-4xl rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
