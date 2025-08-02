'use client';

import {
  Upload,
  FileText,
  BarChart3,
  BrainCog,
} from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-primary" />,
    title: '録音データをアップロード',
    description: 'ボイテキ！にログイン後、録音ファイル（WAV/MP3など）をアップロードします。',
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: '文字起こしと感情検出を自動実行',
    description: 'アップロード後、音声が自動で文字起こしされ、感情やNGワードも同時に抽出されます。',
  },
  {
    icon: <BrainCog className="w-10 h-10 text-primary" />,
    title: '会話要約・スコアリング分析',
    description: 'AIが通話内容を要約し、会話スコア・話者ごとの傾向分析も行われます。',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'ダッシュボードで結果を確認',
    description: 'すべての結果は管理画面にグラフで可視化され、改善や報告にも活用できます。',
  },
];

export default function Usage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            ご利用の流れ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
