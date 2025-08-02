export default function PartnerPage() {
  return (
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h1 className="mb-6 text-4xl font-bold text-primary">
              パートナー募集
            </h1>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                パートナーシップについて
              </h2>
              <p className="mb-6 text-gray-600">
                ボイテキ！は、様々な企業様とのパートナーシップを通じて、より多くのお客様に価値あるサービスを提供したいと考えています。
                私たちのAI技術と、パートナー様の専門性を組み合わせることで、新しい価値を創造できます。
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                パートナーシップの種類
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    販売代理店
                  </h3>
                  <p className="mb-4 text-gray-600">
                    ボイテキ！の販売代理店として、お客様への導入支援やサポートを行っていただきます。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 営業支援</li>
                    <li>• 導入コンサルティング</li>
                    <li>• 技術サポート</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    技術連携
                  </h3>
                  <p className="mb-4 text-gray-600">
                    既存のシステムやサービスにボイテキ！の機能を組み込む技術連携パートナーシップです。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• API連携</li>
                    <li>• システム統合</li>
                    <li>• 共同開発</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                パートナー様へのメリット
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <strong className="text-gray-800">
                      新しい収益源の創出
                    </strong>
                    <p>ボイテキ！の販売による新しい収益チャネルの構築</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <strong className="text-gray-800">技術力の向上</strong>
                    <p>最新のAI技術を活用したソリューションの提供</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <strong className="text-gray-800">顧客満足度の向上</strong>
                    <p>高品質な音声解析サービスによる顧客価値の向上</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                パートナーシップのご相談
              </h2>
              <p className="mb-6 text-gray-600">
                パートナーシップについて詳しくお聞かせください。
                お客様のニーズに合わせた最適な提案をさせていただきます。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
              >
                お問い合わせ
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
