// src/app/news/page.tsx
import { client } from '@/libs/client';
import Link from 'next/link';

export default async function NewsListPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 10;
  const offset = (page - 1) * limit;

  const news = await client.getList({
    endpoint: 'news',
    queries: {
      fields: 'id,title,publishedAt,category,slug',
      limit: limit,
      offset: offset,
      orders: '-publishedAt',
    },
  });

  const totalCount = news.totalCount;
  const totalPages = Math.ceil(totalCount / limit);

  const categories = await client.getList({ endpoint: 'category' });

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">お知らせ一覧</h1>

      {/* カテゴリ一覧 */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.contents.map((cat) => (
          <Link
            key={cat.id}
            href={`/news/category/${cat.slug}`}
            className="px-3 py-1 bg-gray-200 hover:bg-blue-600 hover:text-white rounded text-sm"
          >
            #{cat.name}
          </Link>
        ))}
      </div>

      {/* お知らせ一覧 */}
      {!news.contents.length ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">お知らせはまだありません。</p>
        </div>
      ) : (
        <>
          <ul className="space-y-6 mb-8">
            {news.contents.map((item) => (
              <li key={item.id} className="border-b border-gray-100 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-gray-500">{item.publishedAt.slice(0, 10)}</p>
                  {item.category?.name && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      #{item.category.name}
                    </span>
                  )}
                </div>
                <Link href={`/news/${item.slug}`} className="text-lg text-blue-700 hover:underline block">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {page > 1 && (
                <Link
                  href={`/news?page=${page - 1}`}
                  className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  前へ
                </Link>
              )}
              
              <span className="text-sm text-gray-600">
                {page} / {totalPages} ページ
              </span>
              
              {page < totalPages && (
                <Link
                  href={`/news?page=${page + 1}`}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  次へ
                </Link>
              )}
            </div>
          )}

          <div className="text-sm text-gray-500 text-center mt-4">
            全 {totalCount} 件
          </div>
        </>
      )}
    </section>
  );
}
