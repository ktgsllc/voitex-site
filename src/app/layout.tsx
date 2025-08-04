import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'ボイテキ！｜音声解析・感情分析AIサービス公式サイト',
  description:
    '通話・対話の音声データをAIで自動分析・要約・可視化。感情検出、NGワード警告、応対スコアリングでコールセンターの品質向上をサポートするクラウドサービス「ボイテキ！」',
  metadataBase: new URL('https://www.voitex.site'), // ← 必ずドメインに変更
  keywords:
    '音声解析,AI,感情分析,コールセンター,音声認識,要約,NGワード,応対品質,ボイテキ,QuickSum',
  authors: [{ name: 'KTGS.llc' }],
  creator: 'KTGS.llc',
  publisher: 'KTGS.llc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'ボイテキ！｜音声解析・感情分析AIサービス公式サイト',
    description:
      '声の中に、答えがある。ボイテキ！は通話内容をAIで自動要約・分析し、感情やリスクも"見える化"。コールセンターの応対品質を向上させます。',
    url: '/',
    siteName: 'ボイテキ！',
    images: [
      {
        url: '/og-image.webp', // ← /public配下に配置（サイズ 1200x630）
        width: 1200,
        height: 630,
        alt: 'ボイテキ！サービスの紹介イメージ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ボイテキ！｜音声解析・感情分析AIサービス公式サイト',
    description:
      '声の中に、答えがある。AIが通話を自動分析・要約・感情検出します。',
    images: ['/og-image.webp'],
    creator: '@ktgsllc', // ← X（旧Twitter）アカウントがあれば
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-68QTZ1MSD0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-68QTZ1MSD0');
            `,
          }}
        />
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ボイテキ！',
              description:
                '音声データをAIで分析・要約・可視化し、応対品質を見える化するクラウドサービス',
              url: 'https://www.voitex.site',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'JPY',
                availability: 'https://schema.org/InStock',
              },
              provider: {
                '@type': 'Organization',
                name: 'KTGS.llc',
                url: 'https://www.voitex.site',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '50',
              },
              featureList: [
                '音声テキスト化',
                '感情分析',
                'NGワード検出',
                '自動要約',
                'スピーカー分離',
                '応対スコアリング',
                'カスハラ対策',
              ],
              screenshot: 'https://www.voitex.site/hero-image.webp',
              softwareVersion: '3.12.0',
              releaseNotes: 'SMS自動送信機能を追加',
            }),
          }}
        />
        {/* FAQ構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'ボイテキ！は誰でも使えますか？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'はい、PCとインターネット環境があれば、どなたでもご利用いただけます。特別なソフトや知識は不要です。',
                  },
                },
                {
                  '@type': 'Question',
                  name: '対応している音声ファイルの形式を教えてください。',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'WAV / MP3 / FLAC / OGG の各形式に対応しています。1ファイル最大200MBまでアップロード可能です。',
                  },
                },
                {
                  '@type': 'Question',
                  name: '感情やNGワードの判定精度はどの程度ですか？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '日本語に最適化されたLLMを活用しており、実務での活用にも耐えうる精度を実現しています。',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'カスハラ対策にどのように活用できますか？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'NGワード検出機能により、ハラスメント発言を自動検出し、早期発見・対策を支援します。感情分析で従業員のストレス状態も把握できます。',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <div className="mx-auto max-w-5xl px-4">
          <Breadcrumbs /> {/* ←全ページ共通で表示 */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
