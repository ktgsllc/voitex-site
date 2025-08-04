import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキの主な機能一覧｜NGワード検出・要約・感情分析',
  'ボイテキ！の主要機能をご紹介。音声ファイルアップロード、AI感情分析、NGワード検出、自動要約、ダッシュボード統計など、カスハラ対策にも活用できる機能を詳しく解説。',
  '/features'
);

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
