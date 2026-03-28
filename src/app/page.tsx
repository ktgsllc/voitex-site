import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ExecutiveValue from '@/components/ExecutiveValue';
import ProductBranch from '@/components/ProductBranch';
import ProductFitMatrix from '@/components/ProductFitMatrix';
import News from '@/components/News';
import Cta from '@/components/Cta';
import Intro from '@/components/Intro';
import Testimonials from '@/components/Testimonials';
import FaqSnippet from '@/components/FaqSnippet';
import Steps from '@/components/Steps';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキ！｜ボイテキクラウド！・ボイテキオンプレ！',
  'ボイテキ！は、クラウド運用の「ボイテキクラウド！」と、FUJI RAG連携前提の「ボイテキオンプレ！」を提供。会話品質向上・リスク管理・経営判断の高度化を支援します。',
  '/'
);

export default function Home() {
  return (
    <>
      <StructuredData type="softwareApplication" />

      {/* 1. Hero - 印象的なグラデーション */}
      <Hero />

      {/* 2. Executive value */}
      <ExecutiveValue />

      {/* 3. Cloud/On-Prem branch */}
      <ProductBranch />

      {/* 4. Product fit matrix */}
      <ProductFitMatrix />

      {/* 5. Intro - 価値提案（白背景で読みやすく） */}
      <Intro />

      {/* 6. Testimonials - 導入状況（社会的証明） */}
      <Testimonials />

      {/* 7. News - 最新のお知らせ */}
      <News />

      {/* 8. Steps - 導入ステップ */}
      <Steps />

      {/* 9. FaqSnippet - FAQ */}
      <FaqSnippet />

      {/* 10. 最後のCTA - 行動喚起 */}
      <Cta />
    </>
  );
}
