export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h1 className="mb-6 text-4xl font-bold text-primary">
              プライバシーポリシー
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              最終更新日: 2025年8月2日
            </p>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                運営会社
              </h2>
              <p className="mb-6 text-gray-600">
                本サービス「ボイテキ！」は、ケーティージーエス合同会社（
                <a
                  href="https://ktgs.llc"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ktgs.llc
                </a>
                ）が運営しています。
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                プライバシーポリシーについて
              </h2>
              <p className="mb-6 text-gray-600">
                本サービスにおける個人情報の取扱いについては、運営会社であるケーティージーエス合同会社のプライバシーポリシーに準拠しております。
              </p>
              <p className="mb-6 text-gray-600">
                詳細については、以下のリンクよりケーティージーエス合同会社のプライバシーポリシーをご確認ください。
              </p>
              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <a
                  href="https://ktgs.llc/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  ケーティージーエス合同会社のプライバシーポリシーを確認する
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                お問い合わせ
              </h2>
              <p className="mb-6 text-gray-600">
                プライバシーポリシーについてご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                target="_blank"
                rel="noopener noreferrer"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
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
