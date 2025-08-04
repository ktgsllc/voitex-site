import { Metadata } from 'next';

// 基本のメタデータ設定
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.voitex.site'),
  keywords:
    '音声解析,AI,感情分析,コールセンター,音声認識,要約,NGワード,応対品質,ボイテキ,QuickSum,カスハラ対策',
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
  twitter: {
    card: 'summary_large_image',
    creator: '@ktgsllc',
  },
};

// ページ別メタデータ生成関数
export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  ogImage: string = '/og-image.webp'
): Metadata {
  const fullTitle = title.includes('ボイテキ') ? title : `${title}｜ボイテキ！`;

  return {
    ...baseMetadata,
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `https://www.voitex.site${path}`,
      siteName: 'ボイテキ！',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${fullTitle} - ボイテキ！`,
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      ...baseMetadata.twitter,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.voitex.site${path}`,
    },
  };
}

// 構造化データ生成関数
export function generateStructuredData(
  type: 'SoftwareApplication' | 'Organization' | 'FAQPage',
  data: Record<string, unknown>
) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    ...baseData,
    ...data,
  };
}

// ページ別の構造化データ
export const structuredData = {
  // ソフトウェアアプリケーション
  softwareApplication: {
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
  },

  // 組織情報
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KTGS.llc',
    url: 'https://www.voitex.site',
    logo: 'https://www.voitex.site/logo.png',
    description: '音声解析AIサービス「ボイテキ！」を提供する企業',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '東京都中野区',
      addressRegion: '東京都',
      postalCode: '164-0003',
      streetAddress: '東中野5-10-5 フォーカルビル4B',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://www.voitex.site/contact',
    },
  },

  // FAQ
  faq: {
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
  },
};
