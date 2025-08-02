'use client';
import { useEffect, useState } from 'react';
import { client } from '@/libs/client';
import Link from 'next/link';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
};

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    client
      .getList<NewsItem>({ endpoint: 'news' })
      .then((res) => setNews(res.contents));
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">お知らせ</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id}>
            <p className="text-gray-600 text-sm">{item.publishedAt.slice(0, 10)}</p>
            <Link href={`/news/${item.id}`}>
              <p className="text-lg text-blue-700 hover:underline cursor-pointer">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
