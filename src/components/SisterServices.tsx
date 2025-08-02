export default function SisterServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            姉妹サービス紹介
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">QuickSum</h3>
              <p className="text-gray-600 mb-4">
                長文のドキュメントを瞬時に要約し、重要なポイントを抽出するAI要約サービス。
              </p>
              <a href="/quicksum" className="text-primary hover:text-primary-dark font-medium">
                詳細を見る →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ボイテキレック</h3>
              <p className="text-gray-600 mb-4">
                ひかり電話の通話録音サービスでボイテキ！連携可能です。
              </p>
              <a href="/voitex-rec" className="text-primary hover:text-primary-dark font-medium">
                詳細を見る →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              各サービスは独立して利用可能ですが、組み合わせることでより大きな効果を発揮します。
            </p>
            <a 
                              href="https://forms.gle/jCp4fEqMV5fGaoWu6" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              サービスについて詳しく聞く
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 