import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ボイテキコンバーター！ - 音声変換ツール | ボイテキ！',
  description:
    '動画や音声ファイルをWAV形式に変換するWindowsネイティブアプリ。ffmpegベースで高品質な音声変換を実現。音声認識API対応フォーマット（16kHz/モノラル/16bit）に自動変換。',
  keywords: '音声変換, WAV変換, 動画変換, 音声認識, ffmpeg, Windowsアプリ',
};

export default function VoitexConverterPage() {
  return (
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h1 className="mb-6 text-4xl font-bold text-primary">
              ボイテキコンバーター！
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              シンプルかつ高性能な音声変換ツール
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                サービス概要
              </h2>
              <p className="mb-6 text-gray-600">
                ボイテキコンバーター！は、MP4などの動画ファイルやMP3などの音声ファイルから、音声を抽出・WAV形式へ変換する
                Windows アプリです。 AmiVoice
                や音声認識APIで扱いやすいフォーマット（16kHz / モノラル /
                16bit）に自動変換されます。
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    主な特徴
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 直感的なインターフェース</li>
                    <li>• 複数ファイルの一括処理</li>
                    <li>• 高品質なWAV出力（16kHz/mono/16bit）</li>
                    <li>• 日本語ファイル名・フォルダ名対応</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    対応フォーマット
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 入力：MP4, MP3, FLAC, OGG等</li>
                    <li>• 出力：WAV（16kHz/モノラル/16bit）</li>
                    <li>• ffmpegベースの高品質変換</li>
                    <li>• 音声認識API最適化</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ダウンロードセクション */}
            <div className="mb-8 rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                ダウンロード方法
              </h2>
              <p className="mb-6 text-gray-600">
                以下のリンクから ZIP ファイルをダウンロードしてください。
              </p>
              <div className="mb-6">
                <a
                  href="https://manual.voitex.site/wordpress/wp-content/uploads/2025/06/VoitexConvertSetup.zip"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  ボイテキコンバーター！Setup.zip（インストーラー付き）
                </a>
              </div>
              <p className="text-sm text-gray-600">
                ZIP を展開し、
                <code className="rounded bg-gray-200 px-2 py-1">
                  ボイテキコンバーター！Setup.exe
                </code>{' '}
                を実行するとインストールが開始されます。
              </p>
            </div>

            {/* 注意事項 */}
            <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                ダウンロード時の警告について
              </h2>
              <p className="mb-4 text-gray-600">
                本ソフトは初回リリースのため、Chrome によって
                「一般的にダウンロードされていないファイル」
                として警告が表示されることがあります。
              </p>
              <p className="text-gray-600">
                これはウイルスや危険を含むという意味ではなく、「まだ利用実績が少ない」ことが理由です。「不審なファイルをダウンロード」をクリックしてお進みください。
              </p>
            </div>

            {/* ランタイム要件 */}
            <div className="mb-8 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                実行に必要なランタイム
              </h2>
              <p className="mb-6 text-gray-600">
                本アプリは <strong>.NET Desktop Runtime 8.0</strong>{' '}
                が必要です。インストールされていない場合は、以下より事前に導入をお願いします。
              </p>
              <a
                href="https://dotnet.microsoft.com/download/dotnet/8.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-gray-800 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-900"
              >
                <svg
                  className="mr-2 h-5 w-5"
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
                .NET Desktop Runtime 8.0 のダウンロード
              </a>
            </div>

            {/* 制限事項 */}
            <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                変換できない動画について
              </h2>
              <p className="text-gray-600">
                動画ファイルに「音声ストリーム」が存在しない場合（＝無音動画など）、変換エラーとなり、WAVファイルは生成されません。ご利用の際は、音声が含まれているファイルをご用意ください。
              </p>
            </div>

            {/* まとめ */}
            <div className="rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                まとめ
              </h2>
              <p className="mb-6 text-gray-600">
                ボイテキコンバーター！ は、「録音をすばやく WAV
                に変換したい」「API連携用に前処理したい」といった現場ニーズに応える軽量ツールです。ぜひダウンロードしてお試しください。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://manual.voitex.site/voitexconvert-download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  詳細マニュアル
                </a>
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gray-600 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
