import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';
import ContactWebToLeadForm from '@/components/ContactWebToLeadForm';

export const metadata: Metadata = generateMetadata(
  'お問い合わせ｜ボイテキシリーズ！',
  'ボイテキシリーズ！に関するお問い合わせページです。導入相談、デモ、料金、活用方法までお気軽にご相談ください。',
  '/contact'
);

export default function Page() {
  return (
    <main className="bg-slate-50 py-16">
      <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          お問い合わせ
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          ボイテキ！は「ボイテキクラウド！」と「ボイテキオンプレ！」の2製品です。
          <br />
          お問い合わせ内容に応じて最適な導線をご案内します（オンプレは FUJI RAG
          サイト経由のご相談が優先です）。
        </p>

        <ContactWebToLeadForm />
      </section>
    </main>
  );
}
