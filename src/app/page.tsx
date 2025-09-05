import { Metadata } from 'next';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Cta from '@/components/Cta';
import Intro, { PromptNgWordsImportance } from '@/components/Intro';
import Features from '@/components/Features';
import Usage from '@/components/Usage';
import SisterServices from '@/components/SisterServices';
import Testimonials from '@/components/Testimonials';
import FaqSnippet from '@/components/FaqSnippet';
import Steps from '@/components/Steps';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキ！｜音声解析AI SaaSで応対品質と営業セールス分析を見える化',
  '音声解析AI SaaS「ボイテキ！」で応対品質と営業セールス分析を向上。感情解析結果の視覚化・AI改善アドバイス・NGワード検出・自動要約でコールセンターの品質管理と営業活動の分析を効率化。カスハラ対策にも活用可能。',
  '/'
);

export default function Home() {
  return (
    <>
      <StructuredData type="softwareApplication" />

      {/* 1. Hero - 印象的なグラデーション */}
      <Hero />

      {/* 2. News - 最新のお知らせ */}
      <News />

      {/* 3. 最初のCTA - 注目を集める */}
      <Cta />

      {/* 4. Intro - 価値提案（白背景で読みやすく） */}
      <Intro />

      {/* 5. プロンプトとNGワードの重要性 */}
      <PromptNgWordsImportance />

      {/* 6. Features - 機能紹介（グレー背景で区切り） */}
      <Features />

      {/* 7. Usage - 利用シーン（白背景で読みやすく） */}
      <Usage />

      {/* 8. SisterServices - 姉妹サービス（グレー背景で区切り） */}
      <SisterServices />

      {/* 9. Testimonials - お客様の声（白背景で信頼性） */}
      <Testimonials />

      {/* 10. FaqSnippet - FAQ（グレー背景で区切り） */}
      <FaqSnippet />

      {/* 11. Steps - 導入ステップ（白背景で読みやすく） */}
      <Steps />

      {/* 12. 最後のCTA - 行動喚起（グレー背景で注目） */}
      <Cta />
    </>
  );
}
