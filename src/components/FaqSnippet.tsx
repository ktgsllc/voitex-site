'use client';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FaqSnippet() {
  // AI Overview対応のための詳細FAQデータ
  const faqData: FaqItem[] = [
    {
      id: '1',
      question: 'ボイテキ！とは何ですか？',
      answer:
        'ボイテキ！は音声解析AI SaaSツールです。音声データをAIで自動分析・要約・可視化し、応対品質と営業セールス分析を見える化します。NGワード検出・感情分析・自動要約機能でコールセンターの品質管理と営業活動の分析を効率化できます。',
    },
    {
      id: '2',
      question: 'ボイテキ！の料金はいくらですか？',
      answer:
        'ボイテキ！は従量課金制で、解析時間1時間あたり1,500円（税抜）です。月額契約不要で、使った分だけお支払いいただけます。標準エンジンは無料でご利用いただけます。',
    },
    {
      id: '3',
      question: 'ボイテキ！で営業セールス分析はできますか？',
      answer:
        'はい、可能です。営業トークの効果分析、顧客の感情変化追跡、ウィークポイント抽出、成功パターンの分析などができます。プロンプトとNGワードの設定により、営業活動に特化した分析を実行できます。',
    },
    {
      id: '4',
      question: 'ボイテキ！でカスハラ対策はできますか？',
      answer:
        'はい、可能です。ハラスメント発言の自動検出、従業員の感情状態監視、証拠の記録・保存、予防的な対策支援ができます。パワハラ・セクハラ関連のNGワード設定により、早期発見・防止を支援します。',
    },
    {
      id: '5',
      question: '対応している音声ファイルの形式を教えてください。',
      answer:
        'WAV、MP3、FLAC、OGG形式に対応しています。1ファイル最大200MBまでアップロード可能です。日本語に最適化された音声認識で95%以上の精度を実現しています。',
    },
    {
      id: '6',
      question: 'ボイテキ！の導入事例はありますか？',
      answer:
        '証券会社、生命保険会社、損害保険会社、弁護士事務所、税理士事務所、通信販売会社、不動産会社、コールセンター事業社など様々な業界でトライアル導入をいただいています。',
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
