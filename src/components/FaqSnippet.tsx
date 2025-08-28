'use client';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FaqSnippet() {
  // ハードコーディングされたFAQデータ（最初の3件）
  const faqData: FaqItem[] = [
    {
      id: '1',
      question: 'ボイテキ！は誰でも使えますか？',
      answer:
        'はい、PCとインターネット環境があれば、どなたでもご利用いただけます。特別なソフトや知識は不要です。',
    },
    {
      id: '2',
      question: '対応している音声ファイルの形式を教えてください。',
      answer:
        'WAV / MP3 / FLAC / OGG の各形式に対応しています。1ファイル最大200MBまでアップロード可能です。',
    },
    {
      id: '3',
      question: '感情やNGワードの判定精度はどの程度ですか？',
      answer:
        '日本語に最適化されたLLMを活用しており、実務での活用にも耐えうる精度を実現しています。',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            よくあるご質問
          </h2>

          <div className="mb-8 space-y-4">
            {faqData.map((item) => (
              <details
                key={item.id}
                className="rounded-lg border bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer text-lg font-semibold text-primary">
                  {item.question}
                </summary>
                <div
                  className="mt-3 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </details>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/faq"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              すべての質問を見る
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
