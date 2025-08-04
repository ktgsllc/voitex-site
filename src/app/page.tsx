import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Cta from '@/components/Cta';
import Intro from '@/components/Intro';
import Features from '@/components/Features';
import Usage from '@/components/Usage';
import SisterServices from '@/components/SisterServices';
import Testimonials from '@/components/Testimonials';
import FaqSnippet from '@/components/FaqSnippet';
import Steps from '@/components/Steps';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキ！｜音声解析AIで応対品質を見える化',
  '音声解析AI SaaS「ボイテキ！」で応対品質を向上。NGワード検出・感情分析・自動要約でコールセンターの品質管理を効率化。カスハラ対策にも活用可能。',
  '/'
);

export default function Home() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <StructuredData type="faq" />

      {/* 1. Hero - 印象的なグラデーション */}
      <Hero />

      {/* 2. 最初のCTA - 注目を集める */}
      <Cta />

      {/* 3. Intro - 価値提案（白背景で読みやすく） */}
      <Intro />

      {/* 4. Features - 機能紹介（グレー背景で区切り） */}
      <Features />

      {/* 5. Usage - 利用シーン（白背景で読みやすく） */}
      <Usage />

      {/* 6. SisterServices - 姉妹サービス（グレー背景で区切り） */}
      <SisterServices />

      {/* 7. Testimonials - お客様の声（白背景で信頼性） */}
      <Testimonials />

      {/* 8. FaqSnippet - FAQ（グレー背景で区切り） */}
      <FaqSnippet />

      {/* 9. Steps - 導入ステップ（白背景で読みやすく） */}
      <Steps />

      {/* 10. 最後のCTA - 行動喚起（グレー背景で注目） */}
      <Cta />
    </>
  );
}
