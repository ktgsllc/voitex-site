import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'QuickSum｜ACW削減AI要約ツール｜ボイテキ！姉妹サービス',
  'QuickSumはコールセンターのACW削減AI要約ツール。通話内容を即座に要約し、CRMへのコピーペーストだけで後処理完了。応対品質向上を支援。',
  '/quicksum'
);

export default function QuickSumPage() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Hero Section */}
            <div className="mt-8 text-center">
              <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                今すぐ QuickSum で、ACW から解放されよう。
              </h1>
              <p className="mx-auto mb-8 max-w-4xl text-xl text-gray-600">
                要約は AI、成果は現場に。
                <br />
                通話内容を即座に要約し、CRM
                へのコピーペーストだけで後処理完了。面倒な入力作業をなくして、応対に集中できる環境を。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                無料トライアル開始
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* QuickSumとは？ */}
            <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                QuickSumとは？
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                QuickSumは、コールセンターのACW（アフターコールワーク）を削減し、オペレーターの業務効率と要約品質を向上させるAI要約ツールです。
              </p>

              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                QuickSum 開発の背景
              </h3>
              <p className="mb-4 text-gray-600">
                コールセンターのオペレーターにとって、アフターコールワーク（ACW）は大きな負担です。QuickSum
                はそのACW時間を大幅に削減するために開発されました。
              </p>
              <p className="text-gray-600">
                既に音声認識エンジンなどでテキスト化された通話内容をもとに、SVが事前に作成したプロンプトで要約することで、オペレーターごとのばらつきを抑え、一定品質の要約が実現できると考えています。
              </p>
            </div>

            {/* 導入効果まとめ */}
            <div className="mt-16 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                導入効果まとめ
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-3xl">⏱️</span>
                    </div>
                  </div>
                  <div className="mb-2 text-center text-2xl font-bold text-primary">
                    平均1分 → 約10秒
                  </div>
                  <p className="text-center text-gray-600">ACW時間を大幅短縮</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <span className="text-3xl">✨</span>
                    </div>
                  </div>
                  <div className="mb-2 text-center text-2xl font-bold text-primary">
                    品質統一
                  </div>
                  <p className="text-center text-gray-600">
                    要約品質のばらつき防止
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-3xl">📉</span>
                    </div>
                  </div>
                  <div className="mb-2 text-center text-2xl font-bold text-primary">
                    工数削減
                  </div>
                  <p className="text-center text-gray-600">CRM入力工数の削減</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-3xl">😊</span>
                    </div>
                  </div>
                  <div className="mb-2 text-center text-2xl font-bold text-primary">
                    負担軽減
                  </div>
                  <p className="text-center text-gray-600">
                    オペレーターの心理的負担を軽減
                  </p>
                </div>
              </div>
            </div>

            {/* こんな人に使ってほしい */}
            <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                こんな人に使ってほしい
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-gray-700">コールセンター管理者</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-gray-700">
                      オペレーター・スーパーバイザー
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-gray-700">
                      小規模コンタクトセンター
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-gray-700">BPO事業者</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 利用シーン例 */}
            <div className="mt-8 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                利用シーン例
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-semibold text-gray-800">
                    電話応対記録の要約
                  </h3>
                </div>
                <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-semibold text-gray-800">
                    営業活動の振り返り要点抽出
                  </h3>
                </div>
                <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-semibold text-gray-800">
                    カスタマーサポートログ整備
                  </h3>
                </div>
                <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-semibold text-gray-800">
                    研修会話の要約教材化
                  </h3>
                </div>
              </div>
            </div>

            {/* キーベネフィット */}
            <div className="mt-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                キーベネフィット
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    【時間短縮】
                  </h3>
                  <p className="text-gray-600">
                    平均ACWは1件あたり1分。QuickSumではこれを10秒前後に短縮します。
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    【コスト削減】
                  </h3>
                  <p className="text-gray-600">
                    小さな時間の積み重ねが会社のコストに直結。ACW削減により人員配置の柔軟性も向上します。
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    【応対に集中】
                  </h3>
                  <p className="text-gray-600">
                    CRMへの手動入力が不要となり、要約結果をペーストするだけで履歴が完成します。
                  </p>
                </div>
              </div>
            </div>

            {/* 導入前後のイメージ */}
            <div className="mt-8 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                導入前後のイメージ
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    従来：
                  </h3>
                  <p className="mb-4 text-gray-600">
                    通話終了後、メモを確認しながら手入力。
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    平均1〜2分。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    QuickSum導入後：
                  </h3>
                  <p className="mb-4 text-gray-600">
                    自動要約をコピー＆ペーストするだけ。
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    約10秒で完了。
                  </p>
                </div>
              </div>
            </div>

            {/* 管理・カスタマイズ機能 */}
            <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                柔軟な管理機能で組織に最適化
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      プロンプト管理
                    </h3>
                  </div>
                  <p className="mb-3 text-gray-600">
                    プロンプトを最大50件まで作成・管理可能。タイトルは255文字、本文は5万文字まで対応し、組織の要約ルールを細かくカスタマイズできます。
                  </p>
                  <p className="text-sm text-gray-500">
                    スーパーバイザーが事前にプロンプトを設定することで、オペレーターごとのばらつきを防止し、統一された要約品質を維持します。
                  </p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      要約履歴管理
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    ダッシュボードで日次・累計の要約実行数をリアルタイムで確認できます。
                  </p>
                </div>
              </div>
            </div>

            {/* 技術的優位性 */}
            <div className="mt-16 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-sm">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                最先端のAI技術を採用
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        className="h-8 w-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    Gemini 2.0 Flash モデル
                  </h3>
                  <p className="text-center text-gray-600">
                    Googleの最新AIモデル「Gemini 2.0
                    Flash」を採用。高精度な要約生成と高速処理を両立します。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    リアルタイム統計
                  </h3>
                  <p className="text-center text-gray-600">
                    トークン使用量をリアルタイムで追跡。3ヶ月、6ヶ月、1年の期間で使用量の推移をグラフで可視化し、コスト管理をサポートします。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    処理実績
                  </h3>
                  <p className="text-center text-gray-600">
                    1日あたり約10,000〜20,000件の処理に対応。最大37万文字の長文要約にも実績があります。
                  </p>
                </div>
              </div>
            </div>

            {/* セキュリティとアクセス管理 */}
            <div className="mt-16 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-sm">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                セキュリティとアクセス管理
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    IPアドレス制限機能
                  </h3>
                  <p className="text-center text-gray-600">
                    管理者が許可するIPアドレスのみアクセス可能。オフィスや在宅勤務環境に応じて柔軟に設定できます。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    AWS Cognito認証
                  </h3>
                  <p className="text-center text-gray-600">
                    エンタープライズレベルの認証システムを採用。安全なユーザー管理とセッション管理を実現します。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        className="h-8 w-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    WAF保護
                  </h3>
                  <p className="text-center text-gray-600">
                    ModSecurityによるWebアプリケーションファイアウォール保護で、不正アクセスからシステムを守ります。
                  </p>
                </div>
              </div>
            </div>

            {/* 使い方フロー */}
            <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                使い方フロー
              </h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">通話終了</h3>
                  <p className="text-sm text-gray-600">
                    オペレーターによる通話が終了します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    テキスト化済みの内容を入力
                  </h3>
                  <p className="text-sm text-gray-600">
                    通話音声を音声認識エンジンなどでテキスト化し、QuickSumに貼り付けます。
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    AIによる自動要約
                  </h3>
                  <p className="text-sm text-gray-600">
                    事前設定済みプロンプトをもとに、QuickSumが要点を瞬時に抽出します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    CRMにコピーペースト
                  </h3>
                  <p className="text-sm text-gray-600">
                    生成された要約をそのままCRMの対応履歴欄に貼り付ければ後処理完了です。
                  </p>
                </div>
              </div>
            </div>

            {/* 数値・実績の強調 */}
            <div className="mt-16 rounded-xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-12 text-white shadow-2xl">
              <h2 className="mb-10 text-center text-3xl font-bold">
                圧倒的な処理能力と実績
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-3 text-4xl font-extrabold text-yellow-300">
                    37万文字
                  </div>
                  <p className="text-sm font-medium text-blue-100">
                    最大要約実績
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-3 text-4xl font-extrabold text-yellow-300">
                    10K〜20K件
                  </div>
                  <p className="text-sm font-medium text-blue-100">
                    1日あたりの処理能力
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-3 text-2xl font-extrabold text-yellow-300">
                    0.5〜2秒
                  </div>
                  <p className="mb-1 text-xs text-blue-100">平均レスポンス</p>
                  <p className="text-xs text-blue-200">（最大3分）</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-3 text-4xl font-extrabold text-yellow-300">
                    90件
                  </div>
                  <p className="text-sm font-medium text-blue-100">
                    並列処理対応
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20">
                  <div className="mb-3 text-4xl font-extrabold text-yellow-300">
                    100人
                  </div>
                  <p className="text-sm font-medium text-blue-100">
                    同時接続対応
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-blue-100">
                  これらの実績データは、QuickSumの信頼性と処理能力を示しています
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                FAQ – よくある質問
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    何人まで同時に使えますか？
                  </h3>
                  <p className="text-gray-600">
                    QuickSumは最大100人までの同時接続に対応しています。80件までの同時要約処理が可能で、81件目以降はキュー待ち（約30秒～1分）となります。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    負荷が高くなるとどうなりますか？
                  </h3>
                  <p className="text-gray-600">
                    軽負荷（10〜30人）や中負荷（30〜80人）では即時処理が可能です。高負荷（80〜100人）では一部が待機、100人を超えると1〜2分程度の遅延が発生する場合があります。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Gemini APIの制限による影響はありますか？
                  </h3>
                  <p className="text-gray-600">
                    同時に大量リクエストが発生すると、Gemini
                    APIの制限（60件/分）を超え、「429エラー」が発生する可能性があります。現在、Google
                    Cloud Consoleでクォータ緩和申請を準備中です。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    どのくらいの長文を要約できますか？
                  </h3>
                  <p className="text-gray-600">
                    文字数の制限はなく、最大37万文字以上の要約実績があります。短文は10〜30秒、長文は数分程度の処理時間が目安です。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    多数の長文を同時に処理できますか？
                  </h3>
                  <p className="text-gray-600">
                    最大80件までの並列処理が可能です。100件以上になると順次キュー処理となり、待機時間が数分になることがあります。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    高負荷時のシステム挙動は？
                  </h3>
                  <p className="text-gray-600">
                    高負荷時でもCPU使用率は20〜30%、メモリ使用量は最大8〜10GBに収まります。レスポンスは通常0.5〜2秒ですが、最大3分ほどに延びる場合があります。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    要約できる件数の目安は？
                  </h3>
                  <p className="text-gray-600">
                    1日あたりの処理件数は約10,000〜20,000件です。安定運用に対応できる処理能力があります。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    プロンプトの数や文字数に制限はありますか？
                  </h3>
                  <p className="text-gray-600">
                    ユーザーあたり最大50件まで作成可能です。タイトルは最大255文字、本文は5万文字まで対応しています。
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    要約対象の入力テキストに制限はありますか？
                  </h3>
                  <p className="text-gray-600">
                    入力文字数のアプリ上限はありませんが、DB制限として最大4GBまで対応しています。API側の実質制限は約30,000トークンで、37万文字の成功例もあります。
                  </p>
                </div>
              </div>
            </div>

            {/* 最終CTA */}
            <div className="mt-16 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-12 text-center text-white shadow-lg">
              <h2 className="mb-4 text-3xl font-bold">
                QuickSumで業務効率を向上させませんか？
              </h2>
              <p className="mb-8 text-lg opacity-90">
                ACW時間の大幅削減で、オペレーターが応対に集中できる環境を実現します。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-colors hover:bg-gray-100"
              >
                無料トライアルを始める
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
