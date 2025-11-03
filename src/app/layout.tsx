import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import CookieConsent from '@/components/CookieConsent';
import Script from 'next/script';

export const metadata = {
  title: 'ボイテキ！｜音声解析・感情分析AIサービス公式サイト',
  description:
    '通話・対話の音声データをAIで自動分析・要約・可視化。感情検出、NGワード警告、応対スコアリングでコールセンターの品質向上をサポートするクラウドサービス「ボイテキ！」',
  metadataBase: new URL('https://www.voitex.site'),
  keywords:
    '音声解析,AI,感情分析,コールセンター,音声認識,要約,NGワード,応対品質,ボイテキ,QuickSum,VoitexRec',
  authors: [{ name: 'KTGS.llc' }],
  creator: 'KTGS.llc',
  publisher: 'KTGS.llc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics - クッキー同意対応 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-68QTZ1MSD0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // クッキー同意の状態をチェック
            const consent = localStorage.getItem('voitex_cookie_consent');
            if (consent === 'accepted') {
              gtag('config', 'G-68QTZ1MSD0', {
                'analytics_storage': 'granted'
              });
            } else {
              gtag('config', 'G-68QTZ1MSD0', {
                'analytics_storage': 'denied'
              });
            }
          `}
        </Script>
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
              softwareVersion: '1.4.0',
              releaseNotes:
                '役割別ダッシュボードとUI/UX大幅改善、感情解析結果の視覚化、AI改善アドバイスと再生成機能を追加',
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
        {/* モバイルSEO構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ボイテキ！',
              url: 'https://www.voitex.site',
              description: 'モバイル対応の音声解析AIサービス',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.voitex.site/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://twitter.com/ktgsllc',
                'https://www.facebook.com/ktgsllc/',
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
        <CookieConsent />
      </body>
    </html>
  );
}
