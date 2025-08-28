'use client';
import { useState } from 'react';
import StructuredData from '@/components/StructuredData';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

// ハードコーディングされたFAQデータ
const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'ボイテキ！は誰でも使えますか？',
    answer:
      'はい、PCとインターネット環境があれば、どなたでもご利用いただけます。特別なソフトや知識は不要です。',
    category: '基本利用',
  },
  {
    id: '2',
    question: '対応している音声ファイルの形式を教えてください。',
    answer:
      'WAV / MP3 / FLAC / OGG の各形式に対応しています。1ファイル最大200MBまでアップロード可能です。',
    category: '基本利用',
  },
  {
    id: '3',
    question: '感情やNGワードの判定精度はどの程度ですか？',
    answer:
      '日本語に最適化されたLLMを活用しており、実務での活用にも耐えうる精度を実現しています。',
    category: '機能・精度',
  },
  {
    id: '4',
    question: 'カスハラ対策にどのように活用できますか？',
    answer:
      'NGワード検出機能により、ハラスメント発言を自動検出し、早期発見・対策を支援します。感情分析で従業員のストレス状態も把握できます。',
    category: '活用方法',
  },
  {
    id: '5',
    question: 'ボイテキレック！との連携は可能ですか？',
    answer:
      'はい、ボイテキレック！で録音した音声データをボイテキ！で分析・検索することができます。',
    category: '活用方法',
  },
  {
    id: '6',
    question: '料金プランについて教えてください。',
    answer:
      '従量課金制で、使用した分だけお支払いいただきます。詳細は料金プランページをご確認ください。',
    category: '料金・契約',
  },
];

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 利用可能なカテゴリを取得
  const availableCategories = Array.from(
    new Set(faqData.map((item) => item.category ?? '未分類'))
  ).sort();

  // 検索とカテゴリでフィルタリング
  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      (item.category ?? '未分類') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = filteredFaqs.reduce(
    (acc, item) => {
      const category = item.category ?? '未分類';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, FaqItem[]>
  );

  return (
    <>
      <StructuredData type="faq" />
      <main className="p-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">よくあるご質問</h1>
        <p className="mb-8 text-gray-500">
          ボイテキ！についてよくいただくご質問と回答をまとめています。
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
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ一覧 */}
        {Object.entries(groupedFaqs).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              {category}
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="mb-2 font-medium text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">
              該当する質問が見つかりませんでした。
            </p>
          </div>
        )}
      </main>
    </>
  );
}
