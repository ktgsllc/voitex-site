export default function Steps() {
  const steps = [
    {
      id: 1,
      title: 'お問い合わせ',
      description:
        'まずはお気軽にお問い合わせください。お客様のニーズをお聞かせいただき、最適なソリューションをご提案いたします。',
      icon: (
        <svg
          className="h-8 w-8 text-primary"
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
      ),
    },
    {
      id: 2,
      title: 'デモ・トライアル',
      description:
        '実際のシステムをお試しいただけます。機能や操作性を確認していただき、ご不明な点があればお気軽にお聞きください。',
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: '導入・設定',
      description:
        '導入が決まりましたら、専門スタッフがお客様の環境に合わせてシステムを設定いたします。',
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: '運用開始・サポート',
      description:
        'システムの運用開始後も、継続的なサポートを提供いたします。ご不明な点がございましたら、いつでもお気軽にお声がけください。',
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            導入ステップ
          </h2>

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* 背景の線（lg画面のみ表示） */}
            <div className="absolute left-0 right-0 top-5 z-0 hidden h-0.5 bg-gray-300 lg:block"></div>

            {steps.map((step, index) => (
              <div key={step.id} className="relative z-10 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {step.id}
                  </div>
                  {step.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              導入から運用まで、専門スタッフがサポートいたします。
            </p>
            <a
              href="https://forms.gle/jCp4fEqMV5fGaoWu6"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              導入について詳しく聞く
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
    </section>
  );
}
