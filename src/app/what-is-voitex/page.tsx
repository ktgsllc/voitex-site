import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキとは？｜音声解析AI SaaSツールの詳細解説',
  'ボイテキとは音声解析AI SaaSツール。コールセンターの応対品質向上とカスハラ対策を支援。NGワード検出・感情分析・自動要約機能で品質管理を効率化。',
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
                    営業活動の振り返り
                  </h3>
                  <p className="text-gray-600">
                    ボイテキ！の音声解析AIで営業電話を分析し、
                    成功要因や改善点を客観的に把握。営業スキルの向上に活用できます。
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
                  href="/contact"
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
