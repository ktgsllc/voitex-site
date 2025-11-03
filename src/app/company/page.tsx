import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキとは？｜開発ストーリーと理念',
  '音声解析AIサービス「ボイテキ！」の開発ストーリーと企業理念。KTGS.llcと株式会社ノウデルの共同事業として、カスハラ対策と応対品質向上を支援。',
  '/company'
);

export default function CompanyPage() {
  return (
    <>
      <StructuredData type="organization" />
      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mt-8">
              <h1 className="mb-6 text-4xl font-bold text-primary">会社概要</h1>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  共同事業について
                </h2>
                <p className="mb-6 text-gray-600">
                  ボイテキ！は、ケーティージーエス合同会社と株式会社ノウデルの共同事業として運営しているサービスです。
                  役割分離により、販売はケーティージーエス合同会社が担当し、製造は株式会社ノウデルが行っております。
                </p>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  ケーティージーエス合同会社（販売担当）
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong className="text-gray-800">会社名：</strong>
                    ケーティージーエス合同会社
                  </div>
                  <div>
                    <strong className="text-gray-800">住所：</strong>〒164-0003
                    東京都中野区東中野5-10-5 フォーカルビル4B
                  </div>
                  <div>
                    <strong className="text-gray-800">代表者：</strong>
                    片ケ瀬敏夫
                  </div>
                  <div>
                    <strong className="text-gray-800">設立：</strong>2022年5月
                  </div>
                  <div>
                    <strong className="text-gray-800">業務内容：</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        •
                        ソフトウェア及びハードウェアの販売・保守・役務提供及びコンサルティング業務
                      </li>
                      <li>• スポーツ・健康教授業務</li>
                      <li>
                        •
                        広告代理業及び各種の宣伝に関する業務（各種印刷物・広告等のデザイン・イラスト制作）
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-800">URL：</strong>
                    <a
                      href="https://ktgs.llc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://ktgs.llc/
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  株式会社ノウデル（製造担当）
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong className="text-gray-800">会社名：</strong>
                    株式会社ノウデル
                  </div>
                  <div>
                    <strong className="text-gray-800">代表者：</strong>
                    片ケ瀬敏夫
                  </div>
                  <div>
                    <strong className="text-gray-800">設立：</strong>2023年7月
                  </div>
                  <div>
                    <strong className="text-gray-800">業務内容：</strong>
                    ソフトウェア開発
                  </div>
                  <div>
                    <strong className="text-gray-800">URL：</strong>
                    <a
                      href="https://www.knowdel.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://www.knowdel.jp/
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  企業の歴史とビジョン
                </h2>
                <p className="mb-6 text-gray-600">
                  ボイテキ！は、会話の見えない化という課題を解決し、データドリブンなマネジメントと組織の健全性向上を実現することを目指しています。
                  最新のAI技術を活用し、誰でも簡単に使える音声解析ツールを提供します。
                  両社の専門性を活かした共同事業により、より高品質なサービスをお客様にお届けします。
                </p>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  実績や認定歴
                </h2>
                <p className="mb-6 text-gray-600">
                  様々な業界・業種でトライアルを実施しており、以下の業種でご利用いただいています：
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>証券会社</li>
                  <li>生命保険会社</li>
                  <li>損害保険会社</li>
                  <li>弁護士事務所</li>
                  <li>税理士事務所</li>
                  <li>通信販売会社</li>
                  <li>不動産会社</li>
                  <li>建築業</li>
                  <li>コールセンター事業社</li>
                </ul>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  技術スタック
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong className="text-gray-800">音声認識:</strong> AmiVoice（メイン）+ Amazon Transcribe（オプション）
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong className="text-gray-800">AI分析:</strong> ChatGPT（GPT-4）+ Amazon Bedrock Claude 3
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong className="text-gray-800">インフラ:</strong> AWS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong className="text-gray-800">セキュリティ:</strong> WAF + AWS Cognito + JWT認証
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  セキュリティ・法令遵守
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• 個人情報保護法に準拠</li>
                  <li>• 労働安全衛生法等に準拠</li>
                  <li>• 多層的なセキュリティ対策を実装</li>
                  <li>• データは暗号化されて保存</li>
                </ul>
              </div>

              <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  サービス
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      ボイテキ！
                    </h3>
                    <p className="text-gray-600">
                      音声ファイルを自動で文字起こし・要約するAIサービス
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      QuickSum
                    </h3>
                    <p className="text-gray-600">
                      長文ドキュメントを瞬時に要約するAI要約サービス
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      ボイテキレック！
                    </h3>
                    <p className="text-gray-600">
                      ひかり電話の通話録音サービス（ボイテキ！連携対応）
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-primary/5 p-8 text-center">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  お問い合わせ
                </h2>
                <p className="mb-6 text-gray-600">
                  サービスについてのご質問や、パートナーシップのご相談など、お気軽にお問い合わせください。
                  販売に関するお問い合わせはケーティージーエス合同会社が、技術的なお問い合わせは株式会社ノウデルが対応いたします。
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
    </>
  );
}
