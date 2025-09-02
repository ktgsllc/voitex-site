import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキとは？｜音声解析AI SaaSツールの詳細解説',
  'ボイテキとは音声解析AI SaaSツール。コールセンターの応対品質向上とカスハラ対策、営業セールス分析を支援。NGワード検出・感情分析・自動要約機能で品質管理と営業活動の分析を効率化。',
  '/what-is-voitex'
);

export default function WhatIsVoitexPage() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* ヘッダー */}
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-4xl font-bold text-primary">
                ボイテキとは？
              </h1>
              <p className="text-xl text-gray-600">
                音声解析AI SaaSツール「ボイテキ！」の詳細解説
              </p>
            </div>

            {/* ボイテキの定義 */}
            <div className="mb-12 rounded-lg bg-blue-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                ボイテキとは、音声解析AI SaaSツールです
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                <strong>ボイテキ！</strong>
                は、音声データをAIで自動分析・要約・可視化する
                <strong>音声解析AI SaaSツール</strong>
                です。コールセンターの応対品質向上とカスハラ対策を支援する
                <strong>音声解析AIサービス</strong>
                として、企業のコミュニケーション品質管理を効率化します。
              </p>
              <p className="text-lg text-gray-700">
                ボイテキという名前は「Voice（音声）」と「Text（テキスト）」を組み合わせた造語で、
                <strong>音声解析AIツール</strong>としての機能を表現しています。
              </p>
            </div>

            {/* ボイテキの特徴 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                ボイテキ！の3つの特徴
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    1. 音声解析AIによる自動分析
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！は最先端の音声解析AI技術を活用し、通話内容を自動でテキスト化・分析します。
                    感情分析やNGワード検出により、人間では見逃しがちな重要な情報を確実にキャッチします。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    2. SaaS型クラウドサービス
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！はSaaS型の音声解析AIサービスとして提供されており、
                    インストール不要でブラウザからすぐに利用できます。
                    従量課金制により、必要な分だけお支払いいただけます。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    3. カスハラ対策支援機能
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIは、カスハラ対策に特化した機能を搭載しています。
                    NGワード検出によりハラスメント発言を早期発見し、
                    感情分析で従業員のストレス状態も把握できます。
                  </p>
                </div>
              </div>
            </div>

            {/* ボイテキの機能詳細 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                ボイテキ！の主要機能
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    音声テキスト化機能
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIは、WAV・MP3・FLAC・OGG形式の音声ファイルを
                    高精度でテキスト化します。最大200MBまでのファイルに対応し、
                    スピーカー分離機能により誰が何を話したかを明確に識別します。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    感情分析機能
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIは、話者の感情状態を多角的に分析します。
                    エネルギー分類（快適、精力的、気落ちなど）、心理状態（ストレス高、集中、期待感など）、
                    発話傾向（躊躇、攻撃的、自信高いなど）を自動判定します。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    NGワード検出機能
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIは、カスハラ対策に特化したNGワード検出機能を提供します。
                    ハラスメント発言や不適切な表現を自動検出し、早期発見・対策を支援します。
                    単語単位または漢字単位での検出が可能で、表現揺れや類語にも柔軟に対応します。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    自動要約機能
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIは、長い通話内容を自動で要約します。
                    重要なポイントを抽出し、短時間で内容を把握できるため、
                    コールセンターの品質管理業務を大幅に効率化します。
                  </p>
                </div>
              </div>
            </div>

            {/* 営業セールス分析での活用 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                営業セールス分析での活用
              </h2>
              <div className="mb-8 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-blue-800">
                  営業活動の品質向上を支援
                </h3>
                <p className="mb-4 text-blue-700">
                  ボイテキ！の音声解析AIは、営業セールス分析に特化した機能を提供します。
                  営業電話の録音データを分析し、営業成果の向上に直結する洞察を提供します。
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-blue-800">
                      営業トークの効果分析
                    </h4>
                    <p className="text-sm text-blue-600">
                      顧客の感情変化を追跡し、どの営業トークが効果的かを客観的に分析
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-blue-800">
                      ウィークポイント抽出
                    </h4>
                    <p className="text-sm text-blue-600">
                      営業担当者の躊躇や自信のなさを感情分析で発見し、改善点を特定
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-blue-800">
                      顧客反応の可視化
                    </h4>
                    <p className="text-sm text-blue-600">
                      顧客の関心度や購買意欲を感情分析で測定し、アプローチのタイミングを最適化
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-blue-800">
                      成功パターンの分析
                    </h4>
                    <p className="text-sm text-blue-600">
                      成功した営業トークの共通点を抽出し、チーム全体のスキル向上に活用
                    </p>
                  </div>
                </div>
              </div>

              {/* 営業セールス分析での具体的な設定例 */}
              <div className="mt-8 rounded-lg bg-green-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-green-800">
                  営業セールス分析での具体的な設定例
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-3 font-semibold text-green-800">
                      プロンプト設定例
                    </h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <p>
                        <strong>営業トーク分析用：</strong>
                      </p>
                      <p className="ml-4">
                        「この営業電話の効果を分析し、顧客の反応と営業担当者のスキルを評価してください」
                      </p>
                      <p>
                        <strong>成功要因抽出用：</strong>
                      </p>
                      <p className="ml-4">
                        「契約に至った営業トークの成功要因を特定し、再現可能なポイントを抽出してください」
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-3 font-semibold text-green-800">
                      NGワード設定例
                    </h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <p>
                        <strong>営業で避けるべき表現：</strong>
                      </p>
                      <p className="ml-4">
                        「絶対に」「必ず」「今すぐ」「急いで」「無理やり」
                      </p>
                      <p>
                        <strong>顧客の反応を損なう表現：</strong>
                      </p>
                      <p className="ml-4">
                        「分からない」「知らない」「できない」「困る」
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-green-100 p-4">
                  <h4 className="mb-2 font-semibold text-green-800">
                    活用のポイント
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>
                      • 営業チームの特性に合わせてプロンプトをカスタマイズ
                    </li>
                    <li>• 業界や商品に応じたNGワードを設定</li>
                    <li>• 成功事例と失敗事例を比較分析して改善点を特定</li>
                    <li>• 定期的にプロンプトとNGワードを見直し、精度を向上</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* カスハラ対策での活用 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                カスハラ対策での活用
              </h2>
              <div className="mb-8 rounded-lg bg-red-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-red-800">
                  職場のハラスメントを早期発見・防止
                </h3>
                <p className="mb-4 text-red-700">
                  ボイテキ！の音声解析AIは、カスハラ対策に特化した機能を提供します。
                  職場での会話を分析し、ハラスメントの兆候を早期に発見し、予防的な対策を支援します。
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-red-800">
                      ハラスメント発言の検出
                    </h4>
                    <p className="text-sm text-red-600">
                      不適切な発言やパワハラ、セクハラの兆候を自動検出し、早期発見を支援
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-red-800">
                      感情状態の監視
                    </h4>
                    <p className="text-sm text-red-600">
                      従業員のストレスや不安、恐怖などの感情変化を分析し、サポートが必要な状況を特定
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-red-800">
                      証拠の記録・保存
                    </h4>
                    <p className="text-sm text-red-600">
                      ハラスメントの証拠となる音声データを安全に記録・保存し、適切な対応を支援
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-semibold text-red-800">
                      予防的な対策
                    </h4>
                    <p className="text-sm text-red-600">
                      ハラスメントが深刻化する前の段階で対策を講じ、職場環境の改善を支援
                    </p>
                  </div>
                </div>
              </div>

              {/* カスハラ対策での具体的な設定例 */}
              <div className="mt-8 rounded-lg bg-orange-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-800">
                  カスハラ対策での具体的な設定例
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-3 font-semibold text-orange-800">
                      プロンプト設定例
                    </h4>
                    <div className="space-y-2 text-sm text-orange-700">
                      <p>
                        <strong>ハラスメント検出用：</strong>
                      </p>
                      <p className="ml-4">
                        「この会話にハラスメントの兆候がないか分析し、不適切な発言やパワハラの可能性を評価してください」
                      </p>
                      <p>
                        <strong>感情状態分析用：</strong>
                      </p>
                      <p className="ml-4">
                        「話者の感情状態を分析し、ストレスや不安、恐怖などの負の感情がないか確認してください」
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-3 font-semibold text-orange-800">
                      NGワード設定例
                    </h4>
                    <div className="space-y-2 text-sm text-orange-700">
                      <p>
                        <strong>パワハラ関連：</strong>
                      </p>
                      <p className="ml-4">
                        「バカ」「無能」「使えない」「辞めろ」「クビ」
                      </p>
                      <p>
                        <strong>セクハラ関連：</strong>
                      </p>
                      <p className="ml-4">
                        「可愛い」「美人」「スタイル」「デート」「付き合う」
                      </p>
                      <p>
                        <strong>人格否定：</strong>
                      </p>
                      <p className="ml-4">
                        「お前は」「君は」「どうせ」「所詮」「役立たず」
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-orange-100 p-4">
                  <h4 className="mb-2 font-semibold text-orange-800">
                    活用のポイント
                  </h4>
                  <ul className="space-y-1 text-sm text-orange-700">
                    <li>• 業界や職場の特性に合わせてNGワードをカスタマイズ</li>
                    <li>• 文脈を考慮したハラスメント検出のプロンプトを設定</li>
                    <li>• 定期的な分析結果のレビューと対策の見直し</li>
                    <li>• 従業員のプライバシー保護と適切な情報管理</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ボイテキの活用シーン */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                ボイテキ！の活用シーン
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    コールセンター品質管理
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIにより、応対品質の向上とカスハラ対策を実現。
                    感情分析で顧客満足度を把握し、NGワード検出でリスクを早期発見します。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    営業活動の振り返り・セールス分析
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIで営業電話を分析し、
                    成功要因や改善点を客観的に把握。営業スキルの向上に活用できます。
                    感情分析で顧客の反応を測定し、営業トークの効果を可視化。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    研修・教育
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIで研修内容を分析し、
                    効果的な教育プログラムの構築に活用。カスハラ対策研修にも効果的です。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    コンプライアンス管理
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIで法的リスクを自動検出。
                    カスハラ対策を含むコンプライアンス管理を強化します。
                  </p>
                </div>
              </div>
            </div>

            {/* その他の活用例 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                その他の活用例
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    医療・介護現場での活用
                  </h3>
                  <p className="text-gray-600">
                    患者・利用者との会話を分析し、コミュニケーション品質の向上と
                    医療事故防止に活用。感情分析で患者の不安や不満を早期発見。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    教育・研修の効果測定
                  </h3>
                  <p className="text-gray-600">
                    研修や授業の音声を分析し、教育効果を客観的に測定。
                    受講者の理解度や関心度を感情分析で把握し、教育プログラムの改善に活用。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    カスタマーサポートの品質向上
                  </h3>
                  <p className="text-gray-600">
                    顧客対応の品質を自動評価し、満足度向上に直結する
                    改善点を特定。NGワード検出で不適切な対応を防止。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    面接・人事評価の支援
                  </h3>
                  <p className="text-gray-600">
                    面接の音声を分析し、候補者の適性や企業との相性を
                    客観的に評価。面接官の質問スキル向上にも活用可能。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    会議・ミーティングの分析
                  </h3>
                  <p className="text-gray-600">
                    会議の音声を分析し、参加者の発言量や感情状態を可視化。
                    会議の効率性向上と参加者の満足度改善に活用。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    法務・弁護士事務所での活用
                  </h3>
                  <p className="text-gray-600">
                    相談内容の要約と感情分析で、クライアントの状況を
                    正確に把握。法的リスクの早期発見と適切な対応を支援。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    不動産・金融業界での活用
                  </h3>
                  <p className="text-gray-600">
                    顧客との商談を分析し、契約成功率の向上に直結する
                    要因を特定。リスク管理とコンプライアンス強化にも対応。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    テレワーク・リモートワーク支援
                  </h3>
                  <p className="text-gray-600">
                    オンライン会議や電話会議の品質を分析し、
                    リモートワーク環境でのコミュニケーション改善を支援。
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    多言語対応・グローバル展開
                  </h3>
                  <p className="text-gray-600">
                    多言語での音声解析に対応し、グローバル企業での
                    コミュニケーション品質管理と文化間の理解促進を支援。
                  </p>
                </div>
              </div>
            </div>

            {/* ボイテキの技術的特徴 */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                ボイテキ！の技術的特徴
              </h2>
              <div className="rounded-lg bg-gray-50 p-8">
                <p className="mb-6 text-lg text-gray-700">
                  ボイテキ！は、日本語に最適化された最新の音声解析AI技術を採用しています。
                  大規模言語モデル（LLM）を活用し、実務での活用にも耐えうる高精度な分析を実現。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>日本語音声認識精度：95%以上</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>感情分析精度：実務レベルでの活用に十分な精度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>NGワード検出：カスタマイズ可能な検出ルール</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>処理速度：リアルタイムに近い高速処理</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white">
              <h2 className="mb-4 text-2xl font-bold">
                ボイテキ！を導入しませんか？
              </h2>
              <p className="mb-6 text-lg opacity-90">
                音声解析AI SaaSツール「ボイテキ！」で、
                <br />
                応対品質の向上とカスハラ対策を実現しましょう。
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
                >
                  無料デモを申し込む
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
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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
