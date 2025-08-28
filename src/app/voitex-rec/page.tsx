import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generateOptimizedMetadata } from '@/libs/seo';

export const metadata: Metadata = generateOptimizedMetadata(
  'ボイテキ！レコーダー｜通話録音・音声分析システム - ボイテキ！',
  'voitexRec',
  '/voitex-rec'
);

export default function VoitexRecPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* ヒーローセクション */}
          <div className="mb-20 text-center">
            <div className="mb-8">
              <Image
                src="/voitexrec-logo.svg"
                alt="VoitexRec"
                width={500}
                height={200}
                className="mx-auto h-40 w-auto drop-shadow-lg"
                priority
              />
            </div>
            <h1 className="mb-6 text-5xl font-bold text-primary md:text-6xl">
              ボイテキレック！
              <br />
              通話録音をシンプルに
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              <Link href="/" className="text-primary hover:underline">
                ボイテキ！
              </Link>
              の音声解析AIと連携する、最大32ch同時対応のSIP通話録音から、AI音声認識（テキスト化）まで。
              <br />
              通話録音の検索・再生も可能。音声ファイルはオンプレミスサーバーに保存し、セキュリティを最優先。感情解析やテキストマイニングはボイテキ！で連携対応。
            </p>

            {/* 機能タグ */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              <span className="transform rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                通話録音システム
              </span>
              <span className="transform rounded-full bg-green-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                最大32ch同時対応
              </span>
              <span className="transform rounded-full bg-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                AI音声認識
              </span>
              <span className="transform rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                ボイテキ！連携
              </span>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="transform rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                無料相談・資料請求
              </a>
              <a
                href="/contact"
                className="transform rounded-xl border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                詳細を見る
              </a>
            </div>
          </div>

          {/* リリース予定セクション */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-8 text-white shadow-2xl md:p-12">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="mr-4 rounded-full bg-white/20 p-3">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">リリース予定</span>
                </div>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  <span className="rounded-2xl bg-white px-6 py-2 text-orange-600">
                    今秋
                  </span>
                  にリリース予定！
                </h2>
                <p className="mb-6 text-xl opacity-90">
                  先行予約・早期導入特典をご希望の方は、お気軽にお問い合わせください
                </p>
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  className="inline-block transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
                >
                  先行予約はこちら
                </a>
              </div>
            </div>
          </div>

          {/* セキュリティの強みセクション */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-10 text-white shadow-2xl md:p-16">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="mr-4 rounded-full bg-white/20 p-3">
                    <svg
                      className="h-8 w-8 text-white"
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
                  <span className="text-2xl font-bold">セキュリティ最優先</span>
                </div>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  時代に逆行する
                  <br />
                  <span className="mb-2 inline-block rounded-2xl bg-white px-6 py-2 text-blue-600">
                    セキュリティ重視
                  </span>
                  <br />
                  の設計
                </h2>
                <div className="mb-6">
                  <span className="inline-block rounded-2xl bg-yellow-400 px-6 py-2 text-lg font-bold text-gray-900">
                    カスハラ防止条例対応
                  </span>
                </div>
                <p className="mb-6 text-xl opacity-90">
                  音声ファイルは個人情報・機密情報の塊。クラウド化の流れに逆行し、オンプレミスサーバーでの保存を採用。
                  <br />
                  金融・医療・法務など、厳格なセキュリティが求められる業界でも安心してご利用いただけます。
                  <br />
                  <span className="font-semibold">
                    東京都カスハラ防止条例奨励金制度の対象となり、最大40万円の支援が受けられます。
                  </span>
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl bg-white/20 p-6">
                    <div className="mb-3 text-3xl">🔒</div>
                    <div className="mb-2 text-lg font-semibold">
                      オンプレミス保存
                    </div>
                    <div className="text-sm leading-relaxed opacity-90">
                      自社サーバーで完全管理
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/20 p-6">
                    <div className="mb-3 text-3xl">🛡️</div>
                    <div className="mb-2 text-lg font-semibold">暗号化対応</div>
                    <div className="text-sm leading-relaxed opacity-90">
                      AES暗号化で安全保存
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/20 p-6">
                    <div className="mb-3 text-3xl">📋</div>
                    <div className="mb-2 text-lg font-semibold">
                      カスハラ対策
                    </div>
                    <div className="text-sm leading-relaxed opacity-90">
                      奨励金制度対象・証拠保全対応
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ターゲット市場セクション */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                こんな企業様におすすめ
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                PBX側で録音できない環境や、独自の通話管理システムを構築したい企業様、専門サービス業に最適です
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    営業・販売会社
                  </h4>
                  <p className="text-center leading-relaxed text-gray-600">
                    外出先での通話録音で営業活動の記録・分析を実現。顧客との約束事を確実に記録
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
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
                  <h4 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    専門サービス業
                  </h4>
                  <p className="text-center leading-relaxed text-gray-600">
                    弁護士・税理士・コンサルタントなど、顧客対応の品質向上とコンプライアンス対応
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    中小企業・スタートアップ
                  </h4>
                  <p className="text-center leading-relaxed text-gray-600">
                    独自の通話管理システム構築で、大手企業に負けない顧客対応品質を実現
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* カスハラ防止セクション */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-10 text-white shadow-2xl md:p-16">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="mr-4 rounded-full bg-white/20 p-3">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">カスハラ防止対策</span>
                </div>
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                  ボイテキレック！ × ボイテキ！
                  <br />
                  <span className="mb-2 inline-block rounded-2xl bg-white px-8 py-3 text-red-600">
                    カスハラ防止の最強タッグ
                  </span>
                  <br />
                  の組み合わせ
                </h2>
                <p className="mb-6 text-xl opacity-90">
                  録音・証拠保全から感情分析・NGワード検出まで、カスハラ防止に必要な機能を完全網羅。
                  <br />
                  東京都カスハラ防止条例奨励金制度の対象となり、最大40万円の支援が受けられます。
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-white/20 p-6">
                    <div className="mb-3 text-3xl">🎙️</div>
                    <div className="mb-2 text-lg font-semibold">
                      ボイテキレック！
                    </div>
                    <div className="text-sm leading-relaxed opacity-90">
                      • 通話の完全録音・証拠保全
                      <br />
                      • オンプレミス保存でセキュリティ重視
                      <br />• 奨励金制度対象
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/20 p-6">
                    <div className="mb-3 text-3xl">🤖</div>
                    <div className="mb-2 text-lg font-semibold">ボイテキ！</div>
                    <div className="text-sm leading-relaxed opacity-90">
                      • AI感情分析・NGワード検出
                      <br />
                      • 問題の早期発見・警告
                      <br />• 自動要約・可視化
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-block transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
                  >
                    ボイテキ！の詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 課題解決セクション */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                電話業務の悩みを解決
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                多くの企業が抱える課題を、VoitexRecで根本的に解決します
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    言った・言わない問題
                  </h3>
                  <p className="mb-6 text-center leading-relaxed text-gray-600">
                    カスターハラスメントや理不尽なクレームを抑制し、コンプライアンスを強化
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      全通話の自動録音で証拠保全
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      音声認識で内容の正確な記録
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-red-500"></div>
                      法的紛争の予防・解決
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    依頼内容の取りこぼし
                  </h3>
                  <p className="mb-6 text-center leading-relaxed text-gray-600">
                    全通話を自動録音し、依頼内容の取りこぼしや発注ミス削減で業務を効率化
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      音声認識による自動文字起こし
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      重要ポイントの自動抽出
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      検索可能な通話履歴
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
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
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    新人教育の効率化
                  </h3>
                  <p className="mb-6 text-center leading-relaxed text-gray-600">
                    ベテランの電話対応を確認し、知識や語彙力を学ぶことで顧客満足度を向上
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      優秀な対応例の共有
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      新人向けトレーニング素材
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      品質向上のための分析
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 導入効果セクション */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                導入効果
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                多くの企業様に実感いただいている、具体的な効果をご紹介します
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="mb-3 text-2xl font-bold text-gray-900">
                  クレーム削減
                </h4>
                <p className="mb-3 leading-relaxed text-gray-600">
                  最大80%のクレーム削減効果
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  通話録音による証拠保全と音声認識による正確な記録により、顧客との認識相違を大幅に削減。法的紛争の予防と早期解決を実現し、企業の信頼性向上に貢献します。
                </p>
              </div>

              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-3 text-2xl font-bold text-gray-900">
                  時間短縮
                </h4>
                <p className="mb-3 leading-relaxed text-gray-600">
                  電話対応時間を最大40%短縮
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  音声認識による自動文字起こしと検索可能な通話履歴により、情報の取りこぼしを防止。顧客対応の効率化で、営業活動やコア業務により多くの時間を投入できるようになります。
                </p>
              </div>

              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-green-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-12 w-12"
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
                <h4 className="mb-3 text-2xl font-bold text-gray-900">
                  品質向上
                </h4>
                <p className="mb-3 leading-relaxed text-gray-600">
                  顧客対応品質の大幅向上
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  優秀な対応例の分析と新人教育への活用により、スタッフ全員のスキル向上を促進。統一された高品質な顧客対応で、顧客満足度と企業ブランド価値の向上を実現します。
                </p>
              </div>

              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-purple-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-10 w-10"
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
                <h4 className="mb-3 text-2xl font-bold text-gray-900">
                  業務効率化
                </h4>
                <p className="mb-3 leading-relaxed text-gray-600">
                  重要業務への集中時間確保
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  自動化された通話管理と分析機能により、手作業による記録・整理作業を大幅に削減。営業活動、商品開発、戦略立案など、企業の成長に直結する重要業務に集中できる環境を構築します。
                </p>
              </div>
            </div>
          </div>

          {/* コア機能セクション */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                コア機能
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                中小企業に最適化された、使いやすく強力な機能群
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    通話録音
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      SIP通話のリアルタイム監視・録音
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      自動通話検出（開始・終了の自動検出）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      RTPストリーム抽出・変換
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      音声ファイル自動変換（.pcap → .wav）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      AES暗号化保存（AES-CBC + IV付き）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                      ステレオ/モノラル録音対応
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
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
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    音声認識・分析
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      faster-whisperによる自動音声認識
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      日本語対応（ggml-base.binモデル）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      話者分離・識別（Speaker Diarization）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      音声認識キュー管理（バッチ処理対応）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      失敗時の再試行機能
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                      音声認識結果のデータベース保存
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    検索・管理
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      通話履歴検索・フィルタリング
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      カテゴリ分類・タグ付け
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      メモ機能（通話ごとのメモ追加・編集）
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      CSV出力・Excel対応
                    </li>
                    <li className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                      操作ログ監査（完全な操作履歴記録）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTAセクション */}
          <div className="text-center">
            <div className="rounded-3xl bg-primary p-12 text-white shadow-2xl">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                導入をご検討の方へ
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl opacity-90">
                ボイテキレック！は、
                <Link
                  href="/"
                  className="text-white underline hover:no-underline"
                >
                  ボイテキ！
                </Link>
                の音声解析AIと連携する通話録音システムです。
                通話録音の検索・再生も可能。感情解析やテキストマイニングはボイテキ！で連携対応。詳しい導入方法や料金、デモンストレーションについては、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
                >
                  お問い合わせ
                </a>
                <a
                  href="/contact"
                  className="transform rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary"
                >
                  詳細資料請求
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
