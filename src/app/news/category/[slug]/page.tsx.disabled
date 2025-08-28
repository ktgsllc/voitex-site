// src/app/news/category/[slug]/page.tsx
import { client } from '@/libs/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type NewsItem = {
  id: string;
  title: string;
  publishedAt: string;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

// 静的生成用のパラメータ生成
export async function generateStaticParams() {
  const categories = await client.getList<Category>({
    endpoint: 'category',
  });

  return categories.contents.map((category) => ({
    slug: category.slug,
  }));
}

// SEO用のメタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const categoryRes = await client.getList<Category>({
    endpoint: 'category',
    queries: { filters: `slug[equals]${slug}` },
  });

  const category = categoryRes.contents[0];

  if (!category) {
    return {
      title: 'カテゴリが見つかりません | ボイテキ！',
    };
  }

  return {
    title: `${category.name}のお知らせ | ボイテキ！`,
    description: `ボイテキ！の${category.name}に関するお知らせ一覧です。`,
    openGraph: {
      title: `${category.name}のお知らせ | ボイテキ！`,
      description: `ボイテキ！の${category.name}に関するお知らせ一覧です。`,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || '1');
  const limit = 10;
  const offset = (page - 1) * limit;

  // カテゴリ情報を取得
  const categoryRes = await client.getList<Category>({
    endpoint: 'category',
    queries: { filters: `slug[equals]${slug}` },
  });

  const category = categoryRes.contents[0];

  if (!category) notFound();

  // ニュース一覧（カテゴリ指定 + ページネーション）
  const newsRes = await client.getList<NewsItem>({
    endpoint: 'news',
    queries: {
      filters: `category[equals]${category.id}`,
      orders: '-publishedAt',
      limit: limit,
      offset: offset,
      fields: 'id,title,publishedAt,category,slug',
    },
  });

  // 総件数を取得（ページネーション用）
  const totalRes = await client.getList<NewsItem>({
    endpoint: 'news',
    queries: {
      filters: `category[equals]${category.id}`,
      fields: 'id',
    },
  });

  const totalCount = totalRes.totalCount;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">#{category.name} のお知らせ</h1>

      <div className="mb-4">
        <Link href="/news" className="text-sm text-blue-600 hover:underline">
          ← お知らせ一覧へ戻る
        </Link>
      </div>

      {newsRes.contents.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">
            このカテゴリにはまだお知らせがありません。
          </p>
        </div>
      ) : (
        <>
          <ul className="mb-8 space-y-6">
            {newsRes.contents.map((item) => (
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
                  href={`/news/category/${slug}?page=${page - 1}`}
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
                  href={`/news/category/${slug}?page=${page + 1}`}
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
