// src/app/news/[slug]/page.tsx
import { client } from '@/libs/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

type NewsDetail = {
  title: string;
  content: string;
  publishedAt: string;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// 静的生成用のパラメータ生成
export async function generateStaticParams() {
  const news = await client.getList<NewsDetail>({
    endpoint: 'news',
    queries: {
      fields: 'id,slug',
    },
  });

      

  return news.contents.map((item: NewsDetail) => ({
    slug: item.slug, // 元のスラッグをそのまま返す
  }));
}

// SEO用のメタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // 日本語スラッグをデコード
  const decodedSlug = decodeURIComponent(slug);

  

  try {
    // まず、slugで記事IDを取得（デコードされたスラッグを使用）
    const newsRes = await client.getList<NewsDetail>({
      endpoint: 'news',
      queries: {
        filters: `slug[equals]${decodedSlug}`,
        fields: 'id',
      },
    });

    let article = newsRes.contents[0];
    
         // デコードされたスラッグで見つからない場合、元のスラッグでも試行
     if (!article) {
       const newsResOriginal = await client.getList<NewsDetail>({
         endpoint: 'news',
         queries: {
           filters: `slug[equals]${slug}`,
           fields: 'id',
         },
       });
       article = newsResOriginal.contents[0];
     }
    
         if (!article) {
       throw new Error('Article not found');
     }

    // 記事IDを使って詳細を取得
    const data = await client.getListDetail<NewsDetail>({
      endpoint: 'news',
      contentId: article.id,
    });

    return {
      title: `${data.title} | ボイテキ！`,
      description: data.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
      openGraph: {
        title: `${data.title} | ボイテキ！`,
        description: data.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
        type: 'article',
        publishedTime: data.publishedAt,
      },
    };
  } catch (e) {
    return {
      title: '記事が見つかりません | ボイテキ！',
    };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  
  // 日本語スラッグをデコード
  const decodedSlug = decodeURIComponent(slug);

     let data: NewsDetail;
  
  // HTMLサニタイゼーション関数
  const sanitizeHTML = (html: string) => {
    // HTMLエンティティをデコード
    let sanitized = html
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'");
    
    // 見出しタグのid属性を削除し、カスタムクラスを保持・強化
    sanitized = sanitized
      .replace(/<h1([^>]*class="[^"]*")[^>]*>/g, '<h1$1 class="$1 text-4xl font-bold text-gray-900 mb-6 mt-12 pb-3 border-b-2 border-primary">')
      .replace(/<h1[^>]*>/g, '<h1 class="text-4xl font-bold text-gray-900 mb-6 mt-12 pb-3 border-b-2 border-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">')
      .replace(/<h2([^>]*class="[^"]*")[^>]*>/g, '<h2$1 class="$1 text-3xl font-bold text-gray-800 mb-5 mt-10 pb-2 border-b border-gray-300">')
      .replace(/<h2[^>]*>/g, '<h2 class="text-3xl font-bold text-gray-800 mb-5 mt-10 pb-2 border-b border-gray-300 relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-12 before:h-1 before:bg-primary">')
      .replace(/<h3([^>]*class="[^"]*")[^>]*>/g, '<h3$1 class="$1 text-2xl font-semibold text-gray-800 mb-4 mt-8 pl-4 border-l-4 border-primary bg-gray-50 py-2 rounded-r-lg">')
      .replace(/<h3[^>]*>/g, '<h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-8 pl-4 border-l-4 border-primary bg-gray-50 py-2 rounded-r-lg">')
      .replace(/<h4([^>]*class="[^"]*")[^>]*>/g, '<h4$1 class="$1 text-xl font-semibold text-gray-700 mb-3 mt-6 pl-3 border-l-2 border-primary-light">')
      .replace(/<h4[^>]*>/g, '<h4 class="text-xl font-semibold text-gray-700 mb-3 mt-6 pl-3 border-l-2 border-primary-light">')
      .replace(/<h5([^>]*class="[^"]*")[^>]*>/g, '<h5$1 class="$1 text-lg font-medium text-gray-700 mb-2 mt-4 pl-2 border-l border-gray-400">')
      .replace(/<h5[^>]*>/g, '<h5 class="text-lg font-medium text-gray-700 mb-2 mt-4 pl-2 border-l border-gray-400">')
      .replace(/<h6([^>]*class="[^"]*")[^>]*>/g, '<h6$1 class="$1 text-base font-medium text-gray-600 mb-2 mt-3 pl-2 border-l border-gray-300">')
      .replace(/<h6[^>]*>/g, '<h6 class="text-base font-medium text-gray-600 mb-2 mt-3 pl-2 border-l border-gray-300">');
    
         // 段落タグにクラスを追加（カスタムクラスを保持）
     sanitized = sanitized
       .replace(/<p([^>]*class="[^"]*")[^>]*>/g, '<p$1 class="$1 text-gray-700 mb-6 leading-7 text-lg">')
       .replace(/<p>/g, '<p class="text-gray-700 mb-6 leading-7 text-lg">')
       .replace(/<p style="text-align: right">/g, '<p class="text-gray-700 mb-6 leading-7 text-lg text-right">')
       .replace(/<p style="text-align: center">/g, '<p class="text-gray-700 mb-6 leading-7 text-lg text-center">')
       .replace(/<p style="text-align: left">/g, '<p class="text-gray-700 mb-6 leading-7 text-lg text-left">');
     
           // 段落タグ内の余分な空白を削除
      sanitized = sanitized
        .replace(/>\s+</g, '><')  // タグ間の空白を削除
        .replace(/>\s+([^<])/g, '>$1')  // 開始タグ後の空白を削除
        .replace(/([^>])\s+</g, '$1<')  // 終了タグ前の空白を削除
        .replace(/>\s{2,}([^<])/g, '> $1')  // 複数の空白を単一の空白に
        .replace(/([^>])\s{2,}</g, '$1 <')  // 複数の空白を単一の空白に
        .replace(/>\s+([^<])/g, '>$1')  // 再度、開始タグ後の空白を削除
        .replace(/([^>])\s+</g, '$1<');  // 再度、終了タグ前の空白を削除
    
    // 強調タグにクラスを追加
    sanitized = sanitized
      .replace(/<strong>/g, '<strong class="font-bold text-gray-800">')
      .replace(/<em>/g, '<em class="italic text-gray-700">')
      .replace(/<u>/g, '<u class="underline">')
      .replace(/<s>/g, '<s class="line-through text-gray-500">');
    
    // リンクタグにクラスを追加（href属性を保持）
    sanitized = sanitized
      .replace(/<a([^>]*)>/g, '<a$1 class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors">');
    
    // codeタグをspanタグに変換
    sanitized = sanitized
      .replace(/<code>/g, '<span class="bg-gray-200 px-1 rounded text-sm font-mono">')
      .replace(/<\/code>/g, '</span>');
    
    // リストタグの処理を改善
    sanitized = sanitized
      .replace(/<ul>/g, '<ul class="list-none space-y-3 mb-6 ml-6">')
      .replace(/<ol>/g, '<ol class="list-decimal list-inside space-y-3 mb-6 ml-6">')
      .replace(/<li>/g, '<li class="text-gray-700 mb-2 relative before:content-["•"] before:absolute before:-left-4 before:text-primary before:font-bold">');
    
    // 引用タグにクラスを追加
    sanitized = sanitized
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-primary pl-6 py-4 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-r-lg shadow-sm relative before:content-[""""] before:absolute before:top-2 before:left-2 before:text-4xl before:text-primary before:opacity-20">')
      .replace(/<blockquote[^>]*>/g, '<blockquote class="border-l-4 border-primary pl-6 py-4 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-r-lg shadow-sm relative before:content-[""""] before:absolute before:top-2 before:left-2 before:text-4xl before:text-primary before:opacity-20">');
    
    // 水平線にクラスを追加
    sanitized = sanitized
      .replace(/<hr>/g, '<hr class="border-gray-300 my-6">')
      .replace(/<hr[^>]*>/g, '<hr class="border-gray-300 my-6">');
    
    // テーブルにクラスを追加
    sanitized = sanitized
      .replace(/<table>/g, '<table class="w-full border-collapse border border-gray-300 mb-4">')
      .replace(/<th>/g, '<th class="border border-gray-300 px-3 py-2 bg-gray-100 font-bold">')
      .replace(/<td>/g, '<td class="border border-gray-300 px-3 py-2">');
    
         // divタグのカスタムクラスを保持
     sanitized = sanitized
       .replace(/<div([^>]*class="[^"]*")[^>]*>/g, '<div$1>');
     
     // spanタグのnews-messageクラスをdivタグに変換
     sanitized = sanitized
       .replace(/<span class="news-message">/g, '<div class="news-message">')
       .replace(/<span class="news-highlight">/g, '<div class="news-highlight">')
       .replace(/<\/span>/g, '</div>');
     
     // 段落タグ内のテキストノードの空白を削除
     sanitized = sanitized
       .replace(/>\s+([^<])/g, '>$1')  // 開始タグ後の空白を削除
       .replace(/([^>])\s+</g, '$1<');  // 終了タグ前の空白を削除
    
    return sanitized;
  };
  try {
    
    
    // スラッグで記事を検索（デコードされたスラッグを使用）
    const newsRes = await client.getList<NewsDetail>({
      endpoint: 'news',
      queries: {
        filters: `slug[equals]${decodedSlug}`,
        fields: 'id',
      },
    });

    let article = newsRes.contents[0];
    
         // デコードされたスラッグで見つからない場合、元のスラッグでも試行
     if (!article) {
       const newsResOriginal = await client.getList<NewsDetail>({
         endpoint: 'news',
         queries: {
           filters: `slug[equals]${slug}`,
           fields: 'id',
         },
       });
       article = newsResOriginal.contents[0];
     }
    
         if (!article) {
       throw new Error('Article not found');
     }

    // 記事IDを使って詳細を取得
    data = await client.getListDetail<NewsDetail>({
      endpoint: 'news',
      contentId: article.id,
    });
  } catch (e) {
    console.error('Error fetching article:', e);
    notFound();
  }

    return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <article>
        <header className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <time className="text-sm text-gray-500">
              {new Date(data.publishedAt).toLocaleDateString('ja-JP')}
            </time>
            {data.category && (
              <Link
                href={`/news/category/${data.category.slug}`}
                className="inline-block text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded"
              >
                #{data.category.name}
              </Link>
            )}
          </div>

                     <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">{data.title}</h1>

        </header>



        {/* 記事本文 */}
        <div 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: sanitizeHTML(data.content)
          }}
        />
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            href="/news"
            className="text-blue-600 hover:underline text-sm inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            お知らせ一覧に戻る
          </Link>
          
          {data.category && (
            <Link
              href={`/news/category/${data.category.slug}`}
              className="text-blue-600 hover:underline text-sm"
            >
              #{data.category.name} の記事一覧
            </Link>
          )}
        </div>
      </footer>
    </section>
  );
}
