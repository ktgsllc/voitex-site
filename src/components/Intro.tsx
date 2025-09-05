'use client';

export default function Intro() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-700">
            AIの力で、コミュニケーションの質を守る
          </p>
          <h2 className="mb-6 text-3xl font-bold text-primary">
            ボイテキ！がなぜ必要か
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            クレーム、言った・言わない、感情のすれ違い——。
            <br />
            営業トークの効果、顧客の反応、成功要因の分析——。
            <br />
            <span className="font-medium text-[#172a88]">
              「声の中にある兆候」
            </span>
            を見える化することで、
            <br />
            社員を守り、経営を守り、営業成果を向上させ、
            <br />
            信頼される組織をつくる。
            <br />
            <strong>ボイテキ！</strong>はそのための
            <strong>音声解析AI SaaSツール</strong>です。
          </p>

          {/* 新機能のアピール */}
          <div className="mb-12 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-8">
            <div className="mb-4 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                🎉 2025年9月 大型アップデート
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">
              会話評価機能を大幅刷新！
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-green-700">
                  📊 感情解析結果の視覚化
                </h4>
                <p className="text-gray-600">
                  感情解析結果をカード形式で直感的に表示。差の数値を色分けして強調し、パッと見て分かるUIで営業・カスタマーサポートの効率化を実現。
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-blue-700">
                  🔄 AI改善アドバイスと再生成機能
                </h4>
                <p className="text-gray-600">
                  感情解析結果と改善アドバイスを分離表示。必要に応じて再生成機能で結果を調整でき、より実用的な分析結果を提供します。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* ブロック1 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                業務の効率化
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIにより手作業による情報整理を自動化し、
                <br />
                コールセンター業務から営業活動分析まで、
                <br />
                オペレーションの無駄を省いて本来業務に集中できます。
              </p>
            </div>

            {/* ブロック2 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-6 w-6 text-white"
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
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                見逃さない正確性
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIが感情やNGワードの兆候を的確に捉え、
                <br />
                営業トークの効果や顧客の反応も正確に分析し、
                <br />
                ミスや聞き逃しによるリスクを削減します。
              </p>
            </div>

            {/* ブロック3 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-6 w-6 text-white"
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
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                社員と経営を守る仕組み
              </h3>
              <p className="text-gray-600">
                ボイテキ！の音声解析AIでカスハラ・過剰要求・誤解などのリスクから、
                <br />
                営業活動の品質向上まで、証拠と可視化で現場をサポート。
                <br />
                お客様の業務に合わせたカスタマイズと専門スタッフのサポートで、
                <br />
                安心して働ける環境と成果を上げるチームを実現します。
              </p>
            </div>
          </div>

          {/* カスタマイズとサポートの価値 */}
          <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-primary">
              お客様に合わせたカスタマイズと専門サポート
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-primary">
                  🎯 業務に特化したカスタマイズ
                </h4>
                <p className="text-gray-600">
                  業界や業務内容に合わせて、プロンプトやNGワードをカスタマイズ。
                  営業、カスタマーサポート、研修など、お客様の目的に最適化された設定をご提供します。
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-primary">
                  🛠️ 専門スタッフによるサポート
                </h4>
                <p className="text-gray-600">
                  プロンプト職人を含む専門スタッフが、導入から運用まで一貫してサポート。
                  効果的な設定方法や活用のコツを、お客様の環境に合わせてご指導いたします。
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ※
                初回設定サポート、定期的な見直し、効果測定のご相談なども承っております
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 新しいコンポーネント：プロンプトとNGワードの重要性
export function PromptNgWordsImportance() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary">
            ボイテキ！の効果を最大化する2つのポイント
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            ボイテキ！の音声解析AIを最大限活用するために、
            <br />
            <span className="font-semibold text-primary">
              プロンプトとNGワードの設定が肝
            </span>
            です。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                プロンプトが肝！
              </h3>
              <p className="mb-4 text-gray-600">
                適切なプロンプト設定により、AIがお客様の業務に最適化された分析を実行。
                営業分析、カスハラ対策、研修効果測定など、目的に応じた精度の高い結果を得られます。
              </p>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-800">
                  <strong>例：</strong>
                  「この営業電話の効果を分析し、顧客の反応と営業担当者のスキルを評価してください」
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 text-4xl">🚫</div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                NGワードが肝！
              </h3>
              <p className="mb-4 text-gray-600">
                業界や業務に特化したNGワード設定で、リスクを確実にキャッチ。
                営業で避けるべき表現、ハラスメント発言、不適切な対応などを自動検出します。
              </p>
              <div className="rounded-lg bg-red-50 p-4">
                <p className="text-sm text-red-800">
                  <strong>例：</strong>
                  「絶対に」「必ず」「バカ」「無能」など、業務に応じたNGワードを設定
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
            <h3 className="mb-3 text-xl font-bold">
              プロンプト職人による専門サポート
            </h3>
            <p className="mb-4 text-blue-100">
              お客様の業務に最適なプロンプトとNGワードの設定を、
              <br />
              プロンプト職人を含む専門スタッフがサポートいたします。
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2 font-semibold text-primary transition-colors hover:bg-gray-100"
              >
                設定サポートを相談する
              </a>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                詳細を聞く
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
