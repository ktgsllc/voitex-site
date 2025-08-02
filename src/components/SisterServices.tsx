export default function SisterServices() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            姉妹サービス紹介
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                QuickSum
              </h3>
              <p className="mb-4 text-gray-600">
                長文のドキュメントを瞬時に要約し、重要なポイントを抽出するAI要約サービス。
              </p>
              <a
                href="/quicksum"
                className="font-medium text-primary hover:text-primary-dark"
              >
                詳細を見る →
              </a>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                ボイテキレック
              </h3>
              <p className="mb-4 text-gray-600">
                ひかり電話の通話録音サービスでボイテキ！連携可能です。
              </p>
              <a
                href="/voitex-rec"
                className="font-medium text-primary hover:text-primary-dark"
              >
                詳細を見る →
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              各サービスは独立して利用可能ですが、組み合わせることでより大きな効果を発揮します。
            </p>
            <a
              href="https://forms.gle/jCp4fEqMV5fGaoWu6"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              サービスについて詳しく聞く
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
    </section>
  );
}
