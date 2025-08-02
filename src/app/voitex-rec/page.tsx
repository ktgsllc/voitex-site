export default function VoitexRecPage() {
  return (
    <main className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-primary mb-6">
              ボイテキレック
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ひかり電話の通話録音サービスでボイテキ！連携可能です
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                サービス概要
              </h2>
              <p className="text-gray-600 mb-6">
                ボイテキレックは、ひかり電話の通話録音サービスです。
                ボイテキ！との連携により、録音された通話を自動で分析・要約することができます。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">録音機能</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• ひかり電話の通話を自動録音</li>
                    <li>• 高品質な音声データ保存</li>
                    <li>• セキュアなクラウド保管</li>
                    <li>• 簡単な設定で録音開始</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">ボイテキ！連携</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 録音データの自動転送</li>
                    <li>• 音声の自動文字起こし</li>
                    <li>• 感情・NGワード分析</li>
                    <li>• 会話の要約・スコアリング</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                導入をご検討の方へ
              </h2>
              <p className="text-gray-600 mb-6">
                ボイテキレックとボイテキ！の組み合わせで、より効果的な通話分析を実現できます。
                詳しい導入方法や料金については、お気軽にお問い合わせください。
              </p>
              <a 
                href="https://forms.gle/jCp4fEqMV5fGaoWu6" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                お問い合わせ
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 