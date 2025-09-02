'use client';

import {
  Mic,
  HeartPulse,
  MessageSquareText,
  Share2,
  Brain,
  ShieldCheck,
} from 'lucide-react';

const features = [
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
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'セキュアなクラウド基盤とAPI連携',
    description:
      '音声データは暗号化保管。各種CRMやチャットツールとの連携APIで、既存ワークフローに自然に組み込み可能。',
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
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
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
