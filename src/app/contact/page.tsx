import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'お問い合わせ｜ボイテキ！音声解析AIサービス',
  'ボイテキ！のお問い合わせはこちら。音声解析AIの導入相談、デモンストレーション、料金プランについて。カスハラ対策支援も含めてご相談ください。',
  '/contact'
);

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">contact ページ</h1>
      <p>このページは仮構成です。後で中身を追加予定。</p>
    </main>
  );
}
