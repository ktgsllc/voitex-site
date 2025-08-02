'use client';

export default function Intro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-4">
            AIの力で、コミュニケーションの質を守る
          </p>
          <h2 className="text-3xl font-bold text-primary mb-6">
            ボイテキ！がなぜ必要か
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            クレーム、言った・言わない、感情のすれ違い——。<br />
            <span className="font-medium text-[#172a88]">「声の中にある兆候」</span>を見える化することで、<br />
            社員を守り、経営を守り、信頼される組織をつくる。<br />
            ボイテキ！はそのためのAIです。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* ブロック1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">業務の効率化</h3>
              <p className="text-gray-600">
                手作業による情報整理を自動化し、<br />
                オペレーションの無駄を省いて本来業務に集中できます。
              </p>
            </div>

            {/* ブロック2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">見逃さない正確性</h3>
              <p className="text-gray-600">
                感情やNGワードの兆候を的確に捉え、<br />
                ミスや聞き逃しによるリスクを削減します。
              </p>
            </div>

            {/* ブロック3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">社員と経営を守る仕組み</h3>
              <p className="text-gray-600">
                カスハラ・過剰要求・誤解などのリスクから、<br />
                証拠と可視化で現場をサポート。<br />
                安心して働ける環境を実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 