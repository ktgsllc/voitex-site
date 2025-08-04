import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'よくあるご質問（FAQ）｜ボイテキ！音声解析AIサービス',
  'ボイテキ！に関するよくある質問をまとめました。音声解析AIの使い方、対応ファイル形式、感情分析精度、カスハラ対策への活用方法など。',
  '/faq'
);

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
