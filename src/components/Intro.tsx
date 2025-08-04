'use client';

export default function Intro() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-700">
            AIの力で、コミュニケーションの質を守る
          </p>
          <h2 className="mb-6 text-3xl font-bold text-primary">
            ボイテキ！がなぜ必要か
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            クレーム、言った・言わない、感情のすれ違い——。
            <br />
            <span className="font-medium text-[#172a88]">
              「声の中にある兆候」
            </span>
            を見える化することで、
            <br />
            社員を守り、経営を守り、信頼される組織をつくる。
            <br />
            <strong>ボイテキ！</strong>はそのための
            <strong>音声解析AI SaaSツール</strong>です。
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* ブロック1 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                業務の効率化
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIにより手作業による情報整理を自動化し、
                <br />
                オペレーションの無駄を省いて本来業務に集中できます。
              </p>
            </div>

            {/* ブロック2 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                見逃さない正確性
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIが感情やNGワードの兆候を的確に捉え、
                <br />
                ミスや聞き逃しによるリスクを削減します。
              </p>
            </div>

            {/* ブロック3 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                社員と経営を守る仕組み
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIでカスハラ・過剰要求・誤解などのリスクから、
                <br />
                証拠と可視化で現場をサポート。
                <br />
                安心して働ける環境を実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
