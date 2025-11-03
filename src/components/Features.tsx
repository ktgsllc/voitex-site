'use client';

import {
  Mic,
  HeartPulse,
  MessageSquareText,
  Share2,
  Brain,
  ShieldCheck,
  BarChart3,
  RefreshCw,
} from 'lucide-react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isNew?: boolean;
};

const features: Feature[] = [
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: '音声の自動文字起こし',
    description:
      '通話・対話音声を自動でテキスト化。高精度な話者分離とタイムスタンプ付きで、検索や記録がスムーズ。',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: '感情・NGワードのリアルタイム検出',
    description:
      '声のトーンやワードから感情傾向・リスクワードを自動検出。トラブル兆候を早期にキャッチ可能。',
  },
  {
    icon: <MessageSquareText className="h-10 w-10 text-primary" />,
    title: '会話の要約とスコアリング',
    description:
      '長時間の通話も要点を自動要約。話者別の会話スコアや、対応傾向を可視化し、教育や改善に活用。営業トークの効果分析にも対応。',
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: '共起ネットワーク可視化',
    description:
      '頻出キーワード同士の関係をネットワーク図で可視化。オペレーターや顧客の関心・傾向を直感的に把握。営業トークの成功パターン分析にも活用。',
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: '感情のギャップ分析',
    description:
      'オペレーターと顧客の感情のズレを分析し、共感やトラブル発生の兆候を見える化。営業と顧客の心理的距離も測定し、対応力向上に役立ちます。',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: '役割別ダッシュボード',
    description:
      '経営者、営業マネージャー、マーケター、カスタマーサクセス、コンプライアンス担当者、心理カウンセラー向けに最適化された7つの役割別ダッシュボードを提供。',
    isNew: true,
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'セキュアなクラウド基盤とAPI連携',
    description:
      '音声データは暗号化保管。各種CRMやチャットツールとの連携APIで、既存ワークフローに自然に組み込み可能。',
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: 'キーワード分析機能',
    description:
      '会話内容から重要なキーワードを自動抽出。出現頻度や重要度を可視化し、ワードクラウド表示で直感的に分析結果を確認できます。',
    isNew: true,
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: '動画ファイル対応',
    description:
      'MP4、MOV、AVI形式の動画ファイルアップロードに対応。動画は自動的に音声ファイル（WAV）に変換され、より多様なファイル形式での解析が可能。',
    isNew: true,
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: 'データダウンロード機能拡張',
    description:
      '解析結果を複数の形式（CSV、Excel、PDF）でダウンロード可能。ローデータのダウンロード機能も追加し、より柔軟なデータ活用をサポート。',
    isNew: true,
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            ボイテキ！の主な機能
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${
                  feature.isNew
                    ? 'border-green-300 bg-gradient-to-br from-green-50 to-white'
                    : 'border-gray-100 bg-white'
                }`}
              >
                {feature.isNew && (
                  <div className="absolute -top-3 -right-3">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      NEW!
                      <span className="ml-1 text-[10px]">v1.4.0</span>
                    </span>
                  </div>
                )}
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
