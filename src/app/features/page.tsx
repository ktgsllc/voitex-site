'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const features = [
    {
      id: 'file-upload',
      title: 'ファイルアップロード＋解析ジョブ登録',
      description:
        'WAV・MP3・FLAC・OGG形式の音声ファイルをアップロードし、自動で解析ジョブを生成。ステータスや進捗をリアルタイムで可視化します。',
      image: '/features/upload.webp',
      points: [
        '最大200MB対応（それ以上も相談可）',
        'MIME型式による安全な形式チェック',
        '「解析中」「完了」「エラー」のステータス表示',
        '1分単位で進捗更新',
      ],
    },
    {
      id: 'emotion-analysis',
      title: 'AIによる感情分析と高度なタグ付け',
      description:
        'エネルギーやストレス、期待感などの心理指標を多角的に解析。文脈に応じた豊富なタグを自動付与します。',
      image: '/features/emotion.webp',
      points: [
        'エネルギー分類：快適、精力的、気落ちなど',
        '心理状態：ストレス高、集中、期待感など',
        '発話傾向：躊躇、攻撃的、自信高いなど',
      ],
    },
    {
      id: 'evaluation',
      title: '自動化された対話評価',
      description:
        '顧客対応の品質を自動スコア化。改善点の提示も含め、継続的な品質向上を支援します。',
      image: '/features/evaluation.webp',
      points: ['自動評価による品質スコア', '改善提案の提示'],
    },
    {
      id: 'dashboard',
      title: 'ダッシュボード統計',
      description:
        'ジョブ数、NGワード件数、料金情報などをリアルタイムで確認。日次・週次・月次の集計に対応します。',
      image: '/features/dashboard.webp',
      points: ['統計指標の可視化', '利用状況の時系列分析'],
    },
    {
      id: 'filter',
      title: '多機能フィルタ',
      description:
        '解析結果をステータス、日付、NGワードやタグの有無などでフィルタリングし、必要な情報にすぐアクセスできます。',
      image: '/features/filter.webp',
      points: ['日付・NGワード・タグで絞り込み', '詳細検索も対応'],
    },
    {
      id: 'prompt',
      title: 'プロンプト管理',
      description:
        'AI要約や感情分類に使う命令文（プロンプト）をGUIで編集・試行可能です。',
      image: '/features/prompt.webp',
      points: ['プロンプト編集・保存', '要約テストで即時結果確認'],
    },
    {
      id: 'tags',
      title: 'タグ管理',
      description:
        '自由に分類タグを作成・編集可能。AIの分析結果に応じて自動タグも付与されます。',
      image: '/features/tags.webp',
      points: ['タグの作成・履歴管理', '感情分析連動の自動付与'],
    },
    {
      id: 'ng-words',
      title: 'NGワード管理',
      description:
        'テキスト化された内容に対してNGワードをハイライト表示。検出粒度も柔軟に調整可能です。',
      image: '/features/ng-words.webp',
      points: ['単語単位 or 漢字単位のNG設定', '表現揺れや類語対策に柔軟対応'],
    },
    {
      id: 'users',
      title: 'ユーザー管理',
      description:
        'Cognito認証に基づいたユーザー・ロール管理をGUI上で実施できます。',
      image: '/features/users.webp',
      points: [
        'ユーザー作成・編集・削除',
        '一般・スタッフ・管理者ロールに対応',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <StructuredData type="softwareApplication" />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-primary">
                ボイテキ！の機能一覧
              </h2>
              <p className="text-lg text-gray-600">
                音声の可視化・分析・改善提案までを1つのサービスで完結。柔軟で強力なツール群をご紹介します。
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  className="rounded-xl bg-gray-50 p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-md"
                  variants={itemVariants}
                >
                  <div className="mb-4 flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {feature.title}
                    </h3>
                  </div>

                  {feature.image && (
                    <div className="mb-4">
                      <Image
                        src={feature.image}
                        alt={`${feature.title}の画面イメージ`}
                        width={400}
                        height={192}
                        className="h-48 w-full cursor-pointer rounded-lg object-cover shadow-sm transition-opacity hover:opacity-80"
                        onClick={() => setSelectedImage(feature.image)}
                      />
                    </div>
                  )}

                  <p className="mb-4 ml-11 text-gray-700">
                    {feature.description}
                  </p>
                  <ul className="ml-11 list-inside list-disc space-y-1 text-sm text-gray-600">
                    {feature.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-bold">
                ボイテキ！を導入しませんか？
              </h3>
              <p className="mb-6 text-lg opacity-90">
                音声分析の可能性を体験してください。
                <br />
                専門スタッフが丁寧にサポートいたします。
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
                >
                  デモを申し込む
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  お問い合わせ
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 画像拡大モーダル */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-h-full max-w-7xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="拡大表示"
                  width={800}
                  height={600}
                  className="h-auto max-h-[98vh] w-full rounded-lg object-contain shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-90 text-gray-800 shadow-lg transition-all duration-200 hover:bg-opacity-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
