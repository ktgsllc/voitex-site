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
    icon: <Mic className="w-10 h-10 text-primary" />,
    title: '音声の自動文字起こし',
    description:
      '通話・対話音声を自動でテキスト化。高精度な話者分離とタイムスタンプ付きで、検索や記録がスムーズ。',
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: '感情・NGワードのリアルタイム検出',
    description:
      '声のトーンやワードから感情傾向・リスクワードを自動検出。トラブル兆候を早期にキャッチ可能。',
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary" />,
    title: '会話の要約とスコアリング',
    description:
      '長時間の通話も要点を自動要約。話者別の会話スコアや、対応傾向を可視化し、教育や改善に活用。',
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary" />,
    title: '共起ネットワーク可視化',
    description:
      '頻出キーワード同士の関係をネットワーク図で可視化。オペレーターや顧客の関心・傾向を直感的に把握できます。',
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: '感情のギャップ分析',
    description:
      'オペレーターと顧客の感情のズレを分析し、共感やトラブル発生の兆候を見える化。対応力向上に役立ちます。',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'セキュアなクラウド基盤とAPI連携',
    description:
      '音声データは暗号化保管。各種CRMやチャットツールとの連携APIで、既存ワークフローに自然に組み込み可能。',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            主な機能
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
