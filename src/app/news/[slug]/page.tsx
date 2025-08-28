import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSeoMetadata } from '@/libs/seo';
import Tag from '@/components/Tag';

// ハードコーディングされたニュースデータ
const newsData = [
  {
    id: '1',
    title:
      '【ご案内】ISO/IEC 27017（クラウド情報セキュリティ）取得に向けた対応状況について',
    date: '2025-07-06',
    category: 'セキュリティ',
    excerpt:
      '当社（ケーティージーエス合同会社）では、クラウドサービスをご利用いただく皆様に、より安心してお使いいただける環境を提供するため、国際的な情報セキュリティ規格「ISO/IEC 27017」の取得に向けた取り組みを進めております。',
    slug: 'iso-27017-acquisition-status',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">ISO/IEC 27017とは？</h2>
         <p class="text-gray-700 leading-relaxed mb-6">ISO/IEC 27017 は、クラウドサービスの安全性と信頼性を強化するために設けられた国際規格で、クラウド特有のリスクに対応する管理策を定めています。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">取得スケジュール</h2>
         <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
           <ul class="space-y-2 text-gray-700">
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年1月： ISMS（ISO/IEC 27001）構築・運用開始
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年8月： ISO/IEC 27017 審査申し込み予定
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年12月： 認証取得完了予定
             </li>
           </ul>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">なぜ取得に時間がかかるのか？</h2>
         <p class="text-gray-700 leading-relaxed mb-4">ISO/IEC 27017 の取得には、文書整備だけでなく、「一定期間の実運用実績」が求められます。</p>
         <p class="text-gray-700 leading-relaxed mb-6">また、認証取得には以下のような段階的な対応が必要となるため、半年〜1年程度の計画的な準備が必要となります。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">ISO/IEC 27017 取得までの流れ（概要）</h2>
         <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
           <ol class="space-y-3 text-gray-700">
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">1</span>
               現状分析（ギャップ分析）
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">2</span>
               ISMS（ISO/IEC 27001）の構築と文書化
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">3</span>
               運用開始（3ヶ月以上の記録を保持）
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">4</span>
               内部監査・マネジメントレビュー
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">5</span>
               認証機関への審査申し込み
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">6</span>
               実地審査・是正対応
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">7</span>
               認証取得
             </li>
           </ol>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
         
         <div class="space-y-6">
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">ISO/IEC 27017はどのような規格ですか？</h3>
             <p class="text-gray-700">クラウドサービスに特化した情報セキュリティのガイドラインで、ISO/IEC 27001を基盤とし、クラウド特有の対策を追加した内容となっています。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">いつ頃の取得を予定していますか？</h3>
             <p class="text-gray-700">2025年8月に審査を申し込み、同年12月の取得を予定しています。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">取得に向けた体制は整っていますか？</h3>
             <p class="text-gray-700">2025年1月よりISMS運用を開始し、取得に必要な準備を段階的に進めています。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">今後について</h2>
         <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
           <p class="text-gray-700 mb-2">認証取得が完了次第、改めて当サイト上でご報告いたします。</p>
           <p class="text-gray-700">引き続き、情報セキュリティの向上とサービス品質の強化に努めてまいります。</p>
         </div>
       </div>
     `,
  },
  {
    id: '2',
    title:
      '「ボイテキ！」正式リリース｜録音音声をAIで解析するバッチ処理型クラウド',
    date: '2025-08-01',
    category: 'リリース',
    excerpt:
      '2025年8月1日、音声解析クラウド「ボイテキ！」は正式リリースを迎えました。カスタマーハラスメント対策や、通話品質評価・離職防止を支援するため、録音データをAIで解析・可視化するバッチ処理特化型サービスです。',
    slug: 'voitex-official-release',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">現在は以下の機能を提供中です：</h2>
         <div class="grid md:grid-cols-2 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-blue-800">感情分類（20種）による心理傾向の可視化</h3>
             </div>
             <p class="text-gray-700">音声から感情を自動分析し、心理状態を可視化します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-green-800">重要発言のAI要約</h3>
             </div>
             <p class="text-gray-700">長時間の通話も要点を自動要約し、重要なポイントを抽出します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-red-800">NGワード自動検出</h3>
             </div>
             <p class="text-gray-700">ハラスメントや問題発言を自動検出し、早期対応を支援します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-purple-800">タグ・プロンプトによる業種別カスタマイズ</h3>
             </div>
             <p class="text-gray-700">業界や用途に応じてカスタマイズ可能な分析設定を提供します。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
           <h3 class="text-lg font-semibold text-green-800 mb-2">料金体系</h3>
           <p class="text-gray-700 mb-2">月額不要・従量課金型で、お気軽にトライアルもご利用いただけます。</p>
           <p class="text-gray-700">使用した分だけお支払いいただくため、コストを抑えて導入できます。</p>
         </div>
       </div>
       
       <div class="mb-8">
         <p class="text-lg text-gray-700 leading-relaxed">正式リリースを機に、より多くの職場で「声から働く環境を守る」支援をしてまいります。</p>
       </div>
       
       <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
         <h3 class="text-2xl font-bold mb-4">お問い合わせはこちら</h3>
         <p class="text-blue-100 mb-6">ボイテキ！についてのご質問や導入に関するお問い合わせは、お気軽にお声がけください。</p>
         <div class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
           お問い合わせフォーム
         </div>
       </div>
     `,
  },
];

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: 'お知らせが見つかりません | ボイテキ！',
      description: 'お探しのお知らせが見つかりませんでした。',
    };
  }

  return generateSeoMetadata(
    `${news.title} | ボイテキ！`,
    news.excerpt,
    `/news/${news.slug}`
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/news" className="hover:text-primary">
                  お知らせ
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{news.title}</li>
            </ol>
          </nav>

          {/* 記事ヘッダー */}
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-4">
              <Tag variant="primary" size="sm">
                {news.category}
              </Tag>
              <time className="text-sm text-gray-500">{news.date}</time>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {news.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{news.excerpt}</p>
          </header>

          {/* 記事本文 */}
          <article className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: news.content }}
              className="leading-relaxed text-gray-700"
            />
          </article>

          {/* 戻るボタン */}
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
