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
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">お知らせ一覧</h1>

      {/* カテゴリ一覧 */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.contents.map((cat) => (
          <Link
            key={cat.id}
            href={`/news/category/${cat.slug}`}
            className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-blue-600 hover:text-white"
          >
            #{cat.name}
          </Link>
        ))}
      </div>

      {/* お知らせ一覧 */}
      {!news.contents.length ? (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">お知らせはまだありません。</p>
        </div>
      ) : (
        <>
          <ul className="mb-8 space-y-6">
            {news.contents.map((item) => (
              <li key={item.id} className="border-b border-gray-100 pb-4">
                <div className="mb-2 flex items-start justify-between">
                  <p className="text-sm text-gray-500">
                    {item.publishedAt.slice(0, 10)}
                  </p>
                  {item.category?.name && (
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
                      #{item.category.name}
                    </span>
                  )}
                </div>
                <Link
                  href={`/news/${item.slug}`}
                  className="block text-lg text-blue-700 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              {page > 1 && (
                <Link
                  href={`/news?page=${page - 1}`}
                  className="rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300"
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
                  className="rounded bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                >
                  次へ
                </Link>
              )}
            </div>
          )}

          <div className="mt-4 text-center text-sm text-gray-500">
            全 {totalCount} 件
          </div>
        </>
      )}
    </section>
  );
}
