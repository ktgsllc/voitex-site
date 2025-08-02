export default function CompanyPage() {
  return (
    <main className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-primary mb-6">
              会社概要
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                共同事業について
              </h2>
              <p className="text-gray-600 mb-6">
                ボイテキ！は、ケーティージーエス合同会社と株式会社ノウデルの共同事業として運営しているサービスです。
                役割分離により、販売はケーティージーエス合同会社が担当し、製造は株式会社ノウデルが行っております。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ケーティージーエス合同会社（販売担当）
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="text-gray-800">会社名：</strong>ケーティージーエス合同会社
                </div>
                <div>
                  <strong className="text-gray-800">住所：</strong>〒164-0003 東京都中野区東中野5-10-5 フォーカルビル4B
                </div>
                <div>
                  <strong className="text-gray-800">代表者：</strong>片ケ瀬敏夫
                </div>
                <div>
                  <strong className="text-gray-800">設立：</strong>2022年5月
                </div>
                <div>
                  <strong className="text-gray-800">業務内容：</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• ソフトウェア及びハードウェアの販売・保守・役務提供及びコンサルティング業務</li>
                    <li>• スポーツ・健康教授業務</li>
                    <li>• 広告代理業及び各種の宣伝に関する業務（各種印刷物・広告等のデザイン・イラスト制作）</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">URL：</strong>
                  <a href="https://ktgs.llc/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ktgs.llc/</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                株式会社ノウデル（製造担当）
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="text-gray-800">会社名：</strong>株式会社ノウデル
                </div>
                <div>
                  <strong className="text-gray-800">代表者：</strong>片ケ瀬敏夫
                </div>
                <div>
                  <strong className="text-gray-800">設立：</strong>2023年7月
                </div>
                <div>
                  <strong className="text-gray-800">業務内容：</strong>ソフトウェア開発
                </div>
                <div>
                  <strong className="text-gray-800">URL：</strong>
                  <a href="https://www.knowdel.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.knowdel.jp/</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ミッション
              </h2>
              <p className="text-gray-600 mb-6">
                音声データから価値ある情報を抽出し、ビジネスの効率化と意思決定の質向上に貢献することを目指しています。
                最新のAI技術を活用し、誰でも簡単に使える音声解析ツールを提供します。
                両社の専門性を活かした共同事業により、より高品質なサービスをお客様にお届けします。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                サービス
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">ボイテキ！</h3>
                  <p className="text-gray-600">音声ファイルを自動で文字起こし・要約するAIサービス</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">QuickSum</h3>
                  <p className="text-gray-600">長文ドキュメントを瞬時に要約するAI要約サービス</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">ボイテキレック</h3>
                  <p className="text-gray-600">ひかり電話の通話録音サービス（ボイテキ！連携対応）</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                お問い合わせ
              </h2>
              <p className="text-gray-600 mb-6">
                サービスについてのご質問や、パートナーシップのご相談など、お気軽にお問い合わせください。
                販売に関するお問い合わせはケーティージーエス合同会社が、技術的なお問い合わせは株式会社ノウデルが対応いたします。
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
