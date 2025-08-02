'use client';
import { useState, useEffect } from 'react';
import { client } from '@/libs/client';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: {
    name: string;
  };
};

export default function FaqSnippet() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const data = await client.getList<FaqItem>({ endpoint: 'faq' });
        // 最初の3件のみを取得
        setFaqData(data.contents.slice(0, 3));
      } catch (error) {
        console.error('FAQデータの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            <div className="text-gray-500">読み込み中...</div>
          </div>
        </div>
      </section>
    );
  }

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
