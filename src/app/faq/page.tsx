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

export default function FaqPage() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const data = await client.getList<FaqItem>({ endpoint: 'faq' });
        setFaqData(data.contents);
      } catch (error) {
        console.error('FAQデータの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  // 利用可能なカテゴリを取得
  const availableCategories = Array.from(
    new Set(faqData.map((item) => item.category?.name ?? '未分類'))
  ).sort();

  // 検索とカテゴリでフィルタリング
  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      (item.category?.name ?? '未分類') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = filteredFaqs.reduce(
    (acc, item) => {
      const category = item.category?.name ?? '未分類';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, FaqItem[]>
  );

  if (loading) {
    return (
      <main className="p-8">
        <div className="flex h-64 items-center justify-center">
          <div className="text-gray-500">読み込み中...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">よくあるご質問</h1>
      <p className="mb-8 text-gray-500">
        Voitexについてよくいただくご質問と回答をまとめています。
      </p>

      {/* 検索フィールド */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="キーワードで検索"
          className="w-full rounded-md border p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* カテゴリフィルター - ボタン形式 */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          カテゴリで絞り込み
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            すべて
          </button>
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* カテゴリフィルター - セレクトボックス形式（モバイル用） */}
      <div className="mb-6 md:hidden">
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          カテゴリで絞り込み
        </h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-md border bg-white p-2"
        >
          <option value="all">すべてのカテゴリ</option>
          {availableCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* FAQ一覧 */}
      <div className="space-y-4">
        {Object.entries(groupedFaqs).map(([category, faqs]) => (
          <section key={category} className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-primary">{category}</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.id}
                  className="rounded-md border bg-white p-4 shadow-sm"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-primary">
                    {item.question}
                  </summary>
                  <div
                    className="mt-2 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filteredFaqs.length === 0 && (search || selectedCategory !== 'all') && (
        <div className="py-8 text-center text-gray-500">
          検索結果が見つかりませんでした。
        </div>
      )}
    </main>
  );
}
