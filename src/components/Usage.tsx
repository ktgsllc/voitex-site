'use client';

import { Upload, FileText, BarChart3, BrainCog } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: '録音データをアップロード',
    description:
      'ボイテキ！にログイン後、録音ファイル（WAV/MP3など）をアップロードします。',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: '文字起こしと感情検出を自動実行',
    description:
      'アップロード後、音声が自動で文字起こしされ、感情やNGワードも同時に抽出されます。',
  },
  {
    icon: <BrainCog className="h-10 w-10 text-primary" />,
    title: '会話要約・スコアリング分析',
    description:
      'AIが通話内容を要約し、会話スコア・話者ごとの傾向分析も行われます。営業トークの効果分析も自動実行。',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: 'ダッシュボードで結果を確認',
    description:
      'すべての結果は管理画面にグラフで可視化され、改善や報告にも活用できます。営業活動の成果分析も一目で確認可能。',
  },
];

export default function Usage() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            ご利用の流れ
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-100 bg-gray-50 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
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
