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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gray-500">読み込み中...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            よくあるご質問
          </h2>
          
          <div className="space-y-4 mb-8">
            {faqData.map((item) => (
              <details key={item.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <summary className="cursor-pointer font-semibold text-lg text-primary">
                  {item.question}
                </summary>
                <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
              </details>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/faq" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              すべての質問を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 