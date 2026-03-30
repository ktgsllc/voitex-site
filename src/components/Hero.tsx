import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl">
            声の中に、<span className="text-primary">答えがある。</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            ボイテキ！製品ファミリーは、音声ファイルをAIで分析し、
            会話品質と組織の健全性を向上させます。
            <br className="hidden sm:inline" />
            導入スピード重視の
            <strong>「ボイテキクラウド！」</strong>と、 統制要件に強い
            <strong>「ボイテキオンプレ！」</strong>を 提供しています。
            <br />
            役割別ダッシュボードと
            <span className="font-semibold text-primary">顧客心理5軸分析</span>
            により、
            <strong className="text-primary">
              データドリブンなマネジメント
            </strong>
            と<strong className="text-primary">組織の健全性向上</strong>
            を実現します。
          </p>
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-700">
              AIの力で、コミュニケーションの質を守る
            </p>
            <p className="mt-2 text-sm text-gray-600">
              お客様の業務に合わせたカスタマイズと専門スタッフのサポートで、効果的な活用を実現
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/features"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              クラウドを見る
            </a>
            <a
              href="/products/voitex2"
              className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              オンプレを見る
            </a>
            <a
              href="/products/compare"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            >
              比較して判断する
            </a>
          </div>
          <div className="mt-12">
            <Image
              src="/hero-image.webp" // ← 差し替え予定の画像
              alt="ボイテキクラウド！UIイメージ"
              width={800}
              height={400}
              className="mx-auto w-full max-w-4xl rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
