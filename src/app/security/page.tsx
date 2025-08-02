export default function SecurityPage() {
  return (
    <main className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-primary mb-6">
              セキュリティ方針
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              最終更新日: 2024年12月1日
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                セキュリティへの取り組み
              </h2>
              <p className="text-gray-600 mb-6">
                当社は、お客様の大切なデータを安全に保護することを最優先に考えています。
                音声データという機密性の高い情報を扱うサービスとして、最新のセキュリティ技術とベストプラクティスを採用し、
                継続的な改善を行っています。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                データ保護
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">暗号化</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 転送時の暗号化（TLS 1.3）</li>
                    <li>• 保存時の暗号化（AES-256）</li>
                    <li>• データベースの暗号化</li>
                    <li>• API通信の暗号化</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">アクセス制御</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 多要素認証（MFA）</li>
                    <li>• ロールベースアクセス制御</li>
                    <li>• セッション管理</li>
                    <li>• 不正アクセス検知</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                インフラストラクチャセキュリティ
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                  <div>
                    <strong className="text-gray-800">クラウドセキュリティ</strong>
                    <p>AWSのセキュリティ機能を活用し、VPC、セキュリティグループ、IAM等による多層防御を実現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                  <div>
                    <strong className="text-gray-800">ネットワークセキュリティ</strong>
                    <p>WAF、DDoS対策、侵入検知システムによるネットワークレベルの保護</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                  <div>
                    <strong className="text-gray-800">監視・ログ管理</strong>
                    <p>24時間365日の監視体制と包括的なログ管理による異常検知</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                アプリケーションセキュリティ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">開発プロセス</h3>
                  <ul className="text-gray-600 space-y-2 ml-6">
                    <li>• セキュアコーディングガイドラインの遵守</li>
                    <li>• 定期的なセキュリティレビュー</li>
                    <li>• 自動化されたセキュリティテスト</li>
                    <li>• 依存関係の脆弱性スキャン</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">OWASP Top 10対策</h3>
                  <ul className="text-gray-600 space-y-2 ml-6">
                    <li>• SQLインジェクション対策</li>
                    <li>• クロスサイトスクリプティング（XSS）対策</li>
                    <li>• 認証・認可の適切な実装</li>
                    <li>• 入力値検証の徹底</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                データライフサイクル管理
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">データの保存期間</h3>
                  <p>音声データは処理完了後、設定された期間（デフォルト30日）で自動削除されます。</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">データの削除</h3>
                  <p>お客様の要求に応じて、関連するすべてのデータを完全に削除いたします。</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">バックアップ</h3>
                  <p>重要なデータは暗号化された状態で複数の場所にバックアップを保存しています。</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                コンプライアンス・認証
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">認証・規格</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• ISO 27001準拠</li>
                    <li>• SOC 2 Type II</li>
                    <li>• GDPR準拠</li>
                    <li>• 個人情報保護法準拠</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">監査・評価</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 定期的なセキュリティ監査</li>
                    <li>• ペネトレーションテスト</li>
                    <li>• 脆弱性診断</li>
                    <li>• 第三者による評価</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                セキュリティに関するお問い合わせ
              </h2>
              <p className="text-gray-600 mb-6">
                セキュリティに関するご質問や、セキュリティインシデントの報告など、お気軽にお問い合わせください。
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
