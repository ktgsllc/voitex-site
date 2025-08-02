export default function PartnerPage() {
  return (
    <main className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-primary mb-6">
              パートナー募集
            </h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                パートナーシップについて
              </h2>
              <p className="text-gray-600 mb-6">
                ボイテキ！は、様々な企業様とのパートナーシップを通じて、より多くのお客様に価値あるサービスを提供したいと考えています。
                私たちのAI技術と、パートナー様の専門性を組み合わせることで、新しい価値を創造できます。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                パートナーシップの種類
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">販売代理店</h3>
                  <p className="text-gray-600 mb-4">
                    ボイテキ！の販売代理店として、お客様への導入支援やサポートを行っていただきます。
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 営業支援</li>
                    <li>• 導入コンサルティング</li>
                    <li>• 技術サポート</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">技術連携</h3>
                  <p className="text-gray-600 mb-4">
                    既存のシステムやサービスにボイテキ！の機能を組み込む技術連携パートナーシップです。
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• API連携</li>
                    <li>• システム統合</li>
                    <li>• 共同開発</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                パートナー様へのメリット
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                  <div>
                    <strong className="text-gray-800">新しい収益源の創出</strong>
                    <p>ボイテキ！の販売による新しい収益チャネルの構築</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                  <div>
                    <strong className="text-gray-800">技術力の向上</strong>
                    <p>最新のAI技術を活用したソリューションの提供</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                  <div>
                    <strong className="text-gray-800">顧客満足度の向上</strong>
                    <p>高品質な音声解析サービスによる顧客価値の向上</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                パートナーシップのご相談
              </h2>
              <p className="text-gray-600 mb-6">
                パートナーシップについて詳しくお聞かせください。
                お客様のニーズに合わせた最適な提案をさせていただきます。
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
