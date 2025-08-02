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
  params: {
    slug: string;
  };
  searchParams: {
    page?: string;
  };
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
  const { slug } = params;

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
  const { slug } = params;
  const page = parseInt(searchParams.page || '1');
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
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">#{category.name} のお知らせ</h1>

      <div className="mb-4">
        <Link href="/news" className="text-blue-600 hover:underline text-sm">
          ← お知らせ一覧へ戻る
        </Link>
      </div>

      {newsRes.contents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">このカテゴリにはまだお知らせがありません。</p>
        </div>
      ) : (
        <>
          <ul className="space-y-6 mb-8">
            {newsRes.contents.map((item) => (
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
                  href={`/news/category/${slug}?page=${page - 1}`}
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
                  href={`/news/category/${slug}?page=${page + 1}`}
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
