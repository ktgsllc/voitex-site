export default function Page() {
  return (
    <main className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            料金・導入について
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            従量課金制で、使った分だけお支払いいただきます。<br />
            月額契約不要、トライアル利用も可能です。
          </p>
        </div>

        {/* 料金表 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              基本料金
            </h2>
            <p className="text-gray-600">
              解析時間に応じた従量課金制
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 料金詳細 */}
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">解析時間</h3>
                  <p className="text-sm text-gray-600">実際の解析時間に応じて</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">¥1,500</div>
                  <div className="text-sm text-gray-500">税抜/時間</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">標準エンジン</h3>
                  <p className="text-sm text-gray-600">基本機能</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">¥0</div>
                  <div className="text-sm text-gray-500">無料</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">カスタムエンジン</h3>
                  <p className="text-sm text-gray-600">お客様指定の場合</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-orange-600">別途見積</div>
                  <div className="text-sm text-gray-500">ご相談ください</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">月額費用</h3>
                  <p className="text-sm text-gray-600">基本料金</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">¥0</div>
                  <div className="text-sm text-gray-500">月額契約不要</div>
                </div>
              </div>
            </div>

            {/* 料金の特徴 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                料金の特徴
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">従量課金制</h4>
                    <p className="text-sm text-gray-600">実際の解析時間に応じて請求。1時間50分なら1時間分の料金</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">月額契約不要</h4>
                    <p className="text-sm text-gray-600">固定費用なし。必要な時だけ利用</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">トライアル対応</h4>
                    <p className="text-sm text-gray-600">導入前に無料でお試しいただけます</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">標準エンジン無料</h4>
                    <p className="text-sm text-gray-600">基本機能は追加費用なしでご利用いただけます</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 料金計算例 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              料金計算例
            </h2>
            <p className="text-gray-600">
              実際の解析時間に応じた料金計算の例をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                例1: 1時間50分の解析
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">実際の解析時間: <span className="font-medium">1時間50分</span></p>
                <p className="text-sm text-gray-600">請求時間: <span className="font-medium">1時間</span></p>
                <p className="text-lg font-bold text-blue-600">料金: ¥1,500（税抜）</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                例2: 2時間30分の解析
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">実際の解析時間: <span className="font-medium">2時間30分</span></p>
                <p className="text-sm text-gray-600">請求時間: <span className="font-medium">2時間</span></p>
                <p className="text-lg font-bold text-blue-600">料金: ¥3,000（税抜）</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              ※ 解析時間は分単位で切り上げではなく、実際の解析時間に応じて計算いたします
            </p>
          </div>
        </div>

        {/* 提供開始日 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              提供開始日
            </h2>
            <div className="inline-flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xl font-semibold text-blue-600">
                2025年8月1日（金）
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              お気軽にお問い合わせください
            </h2>
            <p className="text-blue-100 mb-6">
              料金の詳細やトライアルについて、専門スタッフがご説明いたします
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
