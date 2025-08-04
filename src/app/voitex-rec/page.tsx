import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキ！レコーダー｜音声録音専用アプリ',
  'ボイテキ！レコーダーは音声録音専用アプリ。高品質録音で音声解析AIの精度向上。カスハラ対策にも活用できる録音機能を提供。',
  '/voitex-rec'
);

export default function VoitexRecPage() {
  return (
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h1 className="mb-6 text-4xl font-bold text-primary">
              ボイテキレック
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              ひかり電話の通話録音サービスでボイテキ！連携可能です
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                サービス概要
              </h2>
              <p className="mb-6 text-gray-600">
                ボイテキレックは、ひかり電話の通話録音サービスです。
                ボイテキ！との連携により、録音された通話を自動で分析・要約することができます。
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    録音機能
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ひかり電話の通話を自動録音</li>
                    <li>• 高品質な音声データ保存</li>
                    <li>• セキュアなクラウド保管</li>
                    <li>• 簡単な設定で録音開始</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    ボイテキ！連携
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 録音データの自動転送</li>
                    <li>• 音声の自動文字起こし</li>
                    <li>• 感情・NGワード分析</li>
                    <li>• 会話の要約・スコアリング</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                導入をご検討の方へ
              </h2>
              <p className="mb-6 text-gray-600">
                ボイテキレックとボイテキ！の組み合わせで、より効果的な通話分析を実現できます。
                詳しい導入方法や料金については、お気軽にお問い合わせください。
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
