import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくあるご質問（FAQ）｜ボイテキ！',
  description:
    'ボイテキ！に関するよくあるご質問と回答をまとめています。音声解析、感情分析、NGワード検出などについて詳しく解説します。',
  keywords: 'FAQ,よくある質問,ボイテキ,音声解析,感情分析,NGワード,サポート',
  openGraph: {
    title: 'よくあるご質問（FAQ）｜ボイテキ！',
    description: 'ボイテキ！に関するよくあるご質問と回答をまとめています。',
    type: 'website',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
