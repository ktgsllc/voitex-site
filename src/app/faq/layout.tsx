import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'よくあるご質問（FAQ）｜ボイテキ！音声解析AIサービス',
  'ボイテキ！に関するよくあるご質問と回答をまとめています。音声解析、NGワード検出、感情分析、カスハラ対策など、サービス利用に関する疑問にお答えします。',
  '/faq'
);

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
