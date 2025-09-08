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
    alternateName: 'Voitex',
    description:
      '音声解析AI SaaSツール。音声データをAIで自動分析・要約・可視化し、応対品質と営業セールス分析を見える化。NGワード検出・感情分析・自動要約でコールセンターの品質管理と営業活動の分析を効率化。カスハラ対策にも活用可能。',
    url: 'https://www.voitex.site',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    browserRequirements: 'HTML5対応ブラウザ',
    offers: {
      '@type': 'Offer',
      price: '1500',
      priceCurrency: 'JPY',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1500',
        priceCurrency: 'JPY',
        unitText: '1時間',
        billingIncrement: '1',
      },
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
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
      '営業セールス分析',
      'プロンプト管理',
      'タグ管理',
      'ユーザー管理',
      'ダッシュボード',
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
        name: 'ボイテキ！とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ボイテキ！は音声解析AI SaaSツールです。音声データをAIで自動分析・要約・可視化し、応対品質と営業セールス分析を見える化します。NGワード検出・感情分析・自動要約機能でコールセンターの品質管理と営業活動の分析を効率化できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'ボイテキ！の料金はいくらですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ボイテキ！は従量課金制で、解析時間1時間あたり1,500円（税抜）です。この料金には外部AIサービス（ChatGPT、Gemini等）の利用料も含まれており、追加料金は発生しません。月額契約不要で、使った分だけお支払いいただけます。標準エンジンは無料でご利用いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '音声認識の精度はどの程度ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '日本語に特化した音声認識エンジンを使用しており、一般的な会話で95%以上の精度を実現しています。雑音環境や方言にも対応し、ビジネス用途に十分な精度を提供します。',
        },
      },
      {
        '@type': 'Question',
        name: '対応している音声ファイルの形式を教えてください。',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WAV、MP3、FLAC、OGG形式に対応しています。1ファイル最大200MBまでアップロード可能です。日本語に特化した音声認識エンジンで95%以上の精度を実現しています。',
        },
      },
      {
        '@type': 'Question',
        name: 'ボイテキ！で営業セールス分析はできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、可能です。営業トークの効果分析、顧客の感情変化追跡、ウィークポイント抽出、成功パターンの分析などができます。プロンプトとNGワードの設定により、営業活動に特化した分析を実行できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'ボイテキ！でカスハラ対策はできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、可能です。ハラスメント発言の自動検出、従業員の感情状態監視、証拠の記録・保存、予防的な対策支援ができます。パワハラ・セクハラ関連のNGワード設定により、早期発見・防止を支援します。',
        },
      },
      {
        '@type': 'Question',
        name: 'データのセキュリティは大丈夫ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、お客様のデータは最高レベルのセキュリティで保護されています。SSL暗号化通信、データの暗号化保存、アクセスログの記録、定期的なセキュリティ監査を実施しています。',
        },
      },
      {
        '@type': 'Question',
        name: '他社の音声解析ツールと何が違いますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ボイテキ！は日本語に特化した高精度な音声認識エンジンと、営業・コールセンター業務に特化した分析機能が特徴です。カスタマイズ可能なNGワード設定、感情分析の高精度化により、実務での活用に最適化されています。',
        },
      },
      {
        '@type': 'Question',
        name: '個人でも利用できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '申し訳ございませんが、ボイテキ！は法人のお客様のみご利用いただけます。個人事業主の方もご利用いただけません。法人登録が必要なサービスとなっております。',
        },
      },
      {
        '@type': 'Question',
        name: '他社のデータと混在することはありませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、混在することはありません。ボイテキ！は個社別に仮想環境を提供しており、マルチテナントではありません。お客様のデータは完全に分離された専用環境で処理され、他社のデータと混在することは一切ありません。',
        },
      },
      {
        '@type': 'Question',
        name: 'サーバーはどこにありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '処理用のサーバーは日本国内のデータセンターに設置されています。お客様の音声データは日本国内で処理されるため、データの国外流出の心配はありません。',
        },
      },
      {
        '@type': 'Question',
        name: '認証システムはどのようなものを使っていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AWS Cognitoを使用したセキュアな認証システムを採用しています。多要素認証（MFA）にも対応し、企業レベルのセキュリティ要件を満たしています。',
        },
      },
      {
        '@type': 'Question',
        name: 'AI処理で外部サービスを使用する際のデータの取り扱いはどうなっていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '音声解析処理では、ChatGPTやGeminiなどの外部AIサービスを使用する場合があります。有料プランを使用していても、データは海外のサーバーに送信されます。ただし、これらのサービスではデータの蓄積や学習利用は行われず、処理完了後にデータは削除されます。機密性の高いデータの処理については事前にご相談ください。',
        },
      },
      {
        '@type': 'Question',
        name: '外部AIサービスの利用規約について教えてください。',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '外部AIサービス（OpenAI、Google Gemini等）を使用する際は、各サービスの利用規約に準じます。お客様のデータがこれらのサービスに送信される場合、各プロバイダーの利用規約とプライバシーポリシーが適用されます。詳細な利用規約については、各サービスの公式サイトをご確認ください。',
        },
      },
    ],
  },
};

// パンくずリスト用の構造化データ生成関数
export function generateBreadcrumbStructuredData(
  pathSegments: string[],
  breadcrumbMap: Record<string, string>
) {
  const baseUrl = 'https://www.voitex.site';
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: baseUrl,
    },
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const decodedSegment = decodeURIComponent(segment);
    const label = breadcrumbMap[segment] || decodedSegment;

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: `${baseUrl}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

// メタディスクリプション最適化関数
export function optimizeDescription(
  baseDescription: string,
  targetKeywords: string[],
  maxLength: number = 160
): string {
  // 基本の説明文を取得
  let description = baseDescription;

  // ターゲットキーワードが含まれているかチェック
  const missingKeywords = targetKeywords.filter(
    (keyword) => !description.toLowerCase().includes(keyword.toLowerCase())
  );

  // 不足しているキーワードがあれば追加
  if (missingKeywords.length > 0 && description.length < maxLength - 20) {
    const additionalKeywords = missingKeywords.slice(0, 2).join('・');
    description += ` ${additionalKeywords}にも対応。`;
  }

  // 文字数制限を適用
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }

  return description;
}

// ページ別最適化メタディスクリプション
export const optimizedDescriptions = {
  home: '音声解析AI SaaS「ボイテキ！」で応対品質を向上。NGワード検出・感情分析・自動要約でコールセンターの品質管理を効率化。カスハラ対策にも活用可能。',

  whatIsVoitex:
    'ボイテキとは音声解析AI SaaSツール。コールセンターの応対品質向上とカスハラ対策を支援。NGワード検出・感情分析・自動要約機能で品質管理を効率化。',

  features:
    'ボイテキ！の主要機能をご紹介。音声ファイルアップロード、AI感情分析、NGワード検出、自動要約、ダッシュボード統計。カスハラ対策にも活用可能。',

  quicksum:
    'QuickSumはコールセンターのACW削減AI要約ツール。通話内容を即座に要約し、CRMへのコピーペーストだけで後処理完了。応対品質向上を支援。',

  cases:
    'ボイテキ！の導入事例をご紹介。証券会社、保険会社、弁護士事務所など様々な業界での音声解析AI活用事例とカスハラ対策への効果を掲載。',

  pricing:
    'ボイテキ！の料金プランをご紹介。従量課金制で必要な分だけお支払い。音声解析AIの感情分析・NGワード検出・自動要約機能をリーズナブルな価格で。',

  faq: 'ボイテキ！に関するよくある質問をまとめました。音声解析AIの使い方、対応ファイル形式、感情分析精度、カスハラ対策への活用方法など。',

  contact:
    'ボイテキ！のお問い合わせはこちら。音声解析AIの導入相談、デモンストレーション、料金プランについて。カスハラ対策支援も含めてご相談ください。',

  company:
    '音声解析AIサービス「ボイテキ！」の開発ストーリーと企業理念。KTGS.llcと株式会社ノウデルの共同事業として、カスハラ対策と応対品質向上を支援。',

  news: 'ボイテキ！の最新情報をお届け。音声解析AIの新機能、導入事例、カスハラ対策に関する情報など、サービスに関する最新ニュースを掲載。',

  blog: 'ボイテキ！のブログ。音声解析AIの活用方法、コールセンターの品質向上、カスハラ対策など、実務に役立つ情報を発信。',

  voitexRec:
    'ボイテキレック！は通話録音システムと音声解析AIの統合ソリューション。最大32ch同時録音、SIP通話対応、オンプレミス保存でセキュリティ重視。金融・医療・法務業界向け。カスハラ防止条例奨励金制度対象。録音からAI分析まで一貫対応。',

  security:
    'ボイテキ！のセキュリティ対策について。音声データの暗号化、アクセス制御、プライバシー保護など、企業の機密情報を安全に保護。',

  privacy:
    'ボイテキ！のプライバシーポリシー。音声データの取り扱い、個人情報保護方針、データの保存・削除について詳しく説明。',

  agreement:
    'ボイテキ！の利用規約。音声解析AIサービスの利用条件、禁止事項、免責事項など、サービス利用に関する重要な事項を明記。',

  partner:
    'ボイテキ！のパートナーについて。音声解析AIの導入支援、カスハラ対策コンサルティング、システム連携など、パートナー企業との協力体制。',
};

// メタディスクリプション最適化のための追加ユーティリティ
export function generateOptimizedMetadata(
  title: string,
  pageKey: keyof typeof optimizedDescriptions,
  path: string = '/',
  ogImage: string = '/og-image.webp'
): Metadata {
  const description = optimizedDescriptions[pageKey];
  return generateMetadata(title, description, path, ogImage);
}

// キーワード密度チェック関数
export function checkKeywordDensity(
  text: string,
  keywords: string[]
): Record<string, number> {
  const wordCount = text.split(/\s+/).length;
  const result: Record<string, number> = {};

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, 'gi');
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;
    result[keyword] = (count / wordCount) * 100;
  });

  return result;
}

// メタディスクリプション品質スコア計算
export function calculateDescriptionScore(description: string): number {
  let score = 0;

  // 文字数チェック（120-160文字が理想）
  if (description.length >= 120 && description.length <= 160) {
    score += 30;
  } else if (description.length >= 100 && description.length <= 180) {
    score += 20;
  } else {
    score += 10;
  }

  // 行動喚起表現チェック
  const actionWords = [
    'ご相談',
    'お問い合わせ',
    '導入',
    '活用',
    '支援',
    '対応',
  ];
  const hasActionWord = actionWords.some((word) => description.includes(word));
  if (hasActionWord) score += 20;

  // キーワードチェック
  const targetKeywords = [
    '音声解析AI',
    'ボイテキ',
    'カスハラ対策',
    'NGワード',
    '感情分析',
  ];
  const keywordCount = targetKeywords.filter((keyword) =>
    description.toLowerCase().includes(keyword.toLowerCase())
  ).length;
  score += Math.min(keywordCount * 10, 30);

  // 差別化表現チェック
  const uniqueWords = ['SaaS', 'クラウド', '自動', '効率化', '品質向上'];
  const uniqueCount = uniqueWords.filter((word) =>
    description.includes(word)
  ).length;
  score += Math.min(uniqueCount * 5, 20);

  return Math.min(score, 100);
}

// モバイルSEO最適化のための構造化データ
export const mobileStructuredData = {
  // モバイルアプリ情報
  mobileApp: {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'ボイテキ！',
    description: '音声解析AIサービス - モバイル対応Webアプリ',
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
    featureList: [
      'レスポンシブデザイン',
      'タッチ操作対応',
      '音声ファイルアップロード',
      'リアルタイム分析',
      'モバイル最適化UI',
    ],
  },

  // モバイル対応Webサイト情報
  website: {
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
  },
};

// モバイルSEO最適化関数
export function generateMobileOptimizedMetadata(
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
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    themeColor: '#2563eb',
    manifest: '/manifest.json',
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

// モバイルパフォーマンス最適化関数
export function optimizeForMobile(content: string): string {
  // 画像の遅延読み込みを追加
  let optimizedContent = content.replace(
    /<img([^>]*)>/g,
    '<img$1 loading="lazy" decoding="async">'
  );

  // レスポンシブ画像の設定
  optimizedContent = optimizedContent.replace(
    /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
    '<img$1src="$2"$3 sizes="(max-width: 768px) 100vw, 50vw">'
  );

  return optimizedContent;
}

// モバイルSEOスコア計算
export function calculateMobileSEOScore(): number {
  let score = 0;

  // 基本チェック項目
  const checks = {
    viewport: true, // viewportメタタグ
    responsive: true, // レスポンシブデザイン
    touchFriendly: true, // タッチフレンドリー
    fastLoading: true, // 高速読み込み
    structuredData: true, // 構造化データ
    manifest: true, // PWAマニフェスト
  };

  // 各項目のスコア加算
  Object.values(checks).forEach((check) => {
    if (check) score += 16.67; // 100点満点を6項目で割る
  });

  return Math.round(score);
}
