import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'ボイテキ！｜音声解析・感情分析AIサービス公式サイト',
  description:
    '通話・対話の音声データをAIで自動分析・要約・可視化。感情検出、NGワード警告、応対スコアリングでコールセンターの品質向上をサポートするクラウドサービス「ボイテキ！」',
  metadataBase: new URL('https://www.voitex.site'), // ← 必ずドメインに変更
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
