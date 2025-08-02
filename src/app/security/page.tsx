export default function SecurityPage() {
  return (
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h1 className="mb-6 text-4xl font-bold text-primary">
              セキュリティ方針
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              最終更新日: 2024年12月1日
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                セキュリティへの取り組み
              </h2>
              <p className="mb-6 text-gray-600">
                当社は、お客様の大切なデータを安全に保護することを最優先に考えています。
                音声データという機密性の高い情報を扱うサービスとして、最新のセキュリティ技術とベストプラクティスを採用し、
                継続的な改善を行っています。
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                データ保護
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    暗号化
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 転送時の暗号化（TLS 1.3）</li>
                    <li>• 保存時の暗号化（AES-256）</li>
                    <li>• データベースの暗号化</li>
                    <li>• API通信の暗号化</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    アクセス制御
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 多要素認証（MFA）</li>
                    <li>• ロールベースアクセス制御</li>
                    <li>• セッション管理</li>
                    <li>• 不正アクセス検知</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                インフラストラクチャセキュリティ
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <strong className="text-gray-800">
                      クラウドセキュリティ
                    </strong>
                    <p>
                      AWSのセキュリティ機能を活用し、VPC、セキュリティグループ、IAM等による多層防御を実現
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <strong className="text-gray-800">
                      ネットワークセキュリティ
                    </strong>
                    <p>
                      WAF、DDoS対策、侵入検知システムによるネットワークレベルの保護
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <strong className="text-gray-800">監視・ログ管理</strong>
                    <p>24時間365日の監視体制と包括的なログ管理による異常検知</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                アプリケーションセキュリティ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    開発プロセス
                  </h3>
                  <ul className="ml-6 space-y-2 text-gray-600">
                    <li>• セキュアコーディングガイドラインの遵守</li>
                    <li>• 定期的なセキュリティレビュー</li>
                    <li>• 自動化されたセキュリティテスト</li>
                    <li>• 依存関係の脆弱性スキャン</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    OWASP Top 10対策
                  </h3>
                  <ul className="ml-6 space-y-2 text-gray-600">
                    <li>• SQLインジェクション対策</li>
                    <li>• クロスサイトスクリプティング（XSS）対策</li>
                    <li>• 認証・認可の適切な実装</li>
                    <li>• 入力値検証の徹底</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                データライフサイクル管理
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    データの保存期間
                  </h3>
                  <p>
                    音声データは処理完了後、設定された期間（デフォルト30日）で自動削除されます。
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    データの削除
                  </h3>
                  <p>
                    お客様の要求に応じて、関連するすべてのデータを完全に削除いたします。
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    バックアップ
                  </h3>
                  <p>
                    重要なデータは暗号化された状態で複数の場所にバックアップを保存しています。
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                コンプライアンス・認証
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    認証・規格
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ISO 27001準拠</li>
                    <li>• SOC 2 Type II</li>
                    <li>• GDPR準拠</li>
                    <li>• 個人情報保護法準拠</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    監査・評価
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 定期的なセキュリティ監査</li>
                    <li>• ペネトレーションテスト</li>
                    <li>• 脆弱性診断</li>
                    <li>• 第三者による評価</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                セキュリティに関するお問い合わせ
              </h2>
              <p className="mb-6 text-gray-600">
                セキュリティに関するご質問や、セキュリティインシデントの報告など、お気軽にお問い合わせください。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
              >
                お問い合わせ
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
      </div>
    </main>
  );
}
