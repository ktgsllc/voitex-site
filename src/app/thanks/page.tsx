import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = {
  ...generateMetadata(
    'お問い合わせありがとうございます',
    'お問い合わせを受け付けました。担当者より順次ご連絡いたします。',
    '/thanks'
  ),
  robots: {
    index: false,
    follow: false,
  },
};

type ThanksPageProps = {
  searchParams?: Promise<{
    source?: string;
  }>;
};

export default async function ThanksPage({ searchParams }: ThanksPageProps) {
  const params = (await searchParams) ?? {};
  const isContact = params.source === 'contact' || !params.source;
  const isRoomRec = params.source === 'roomrec';

  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <section className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <p className="mb-3 text-sm font-semibold text-primary">送信完了</p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {isRoomRec
              ? '先行登録ありがとうございます'
              : isContact
                ? 'お問い合わせありがとうございます'
                : '送信ありがとうございます'}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            {isRoomRec
              ? 'ボイテキルームレック！の先行登録を受け付けました。リリース時期（2026年初夏予定）にあわせてご案内します。'
              : '内容を確認のうえ、担当者より順次ご連絡いたします。'}
            <br />
            今しばらくお待ちください。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              トップページへ戻る
            </Link>
            <Link
              href="/products/compare"
              className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              製品比較を見る
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
