export default function PrivacyPolicyPage() {
  return (
    <main className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-primary mb-6">
              プライバシーポリシー
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              最終更新日: 2025年8月2日
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                運営会社
              </h2>
              <p className="text-gray-600 mb-6">
                本サービス「ボイテキ！」は、ケーティージーエス合同会社（<a href="https://ktgs.llc" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ktgs.llc</a>）が運営しています。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                プライバシーポリシーについて
              </h2>
              <p className="text-gray-600 mb-6">
                本サービスにおける個人情報の取扱いについては、運営会社であるケーティージーエス合同会社のプライバシーポリシーに準拠しております。
              </p>
              <p className="text-gray-600 mb-6">
                詳細については、以下のリンクよりケーティージーエス合同会社のプライバシーポリシーをご確認ください。
              </p>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <a 
                  href="https://ktgs.llc/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  ケーティージーエス合同会社のプライバシーポリシーを確認する
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                お問い合わせ
              </h2>
              <p className="text-gray-600 mb-6">
                プライバシーポリシーについてご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <a 
                href="https://forms.gle/jCp4fEqMV5fGaoWu6" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                お問い合わせ
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
