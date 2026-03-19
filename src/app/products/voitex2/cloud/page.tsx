import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキクラウド！｜短期導入向け',
  'ボイテキクラウド！は短期間で導入できるSaaS提供形態です。運用負荷を抑えながら通話解析・感情分析・要約を利用できます。',
  '/products/voitex2/cloud'
);

const points = [
  '短期間で導入可能（環境準備を最小化）',
  '保守・アップデートをサービス側で実施',
  '初期費用を抑えやすく、スモールスタートに適する',
  '部門横断で展開しやすく、段階導入がしやすい',
];

const fits = [
  'まずPoCを早く開始したい企業',
  '情報システム部門の運用工数を増やしたくない企業',
  '複数拠点で同時に利用したい企業',
];

export default function Voitex2CloudPage() {
  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <section className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 p-10 text-white">
          <p className="mb-2 text-sm font-semibold">ボイテキ！製品ファミリー</p>
          <h1 className="mb-4 text-4xl font-bold">ボイテキクラウド！</h1>
          <p className="text-lg opacity-95">
            導入スピードと運用効率を重視する組織向け。
            <br />
            ボイテキクラウド！の分析機能を、短期間で利用開始できます。
          </p>
        </section>

        <section className="mt-8 rounded-xl bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            主なメリット
          </h2>
          <ul className="space-y-2 text-gray-700">
            {points.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            こんな企業におすすめ
          </h2>
          <ul className="space-y-2 text-gray-700">
            {fits.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-gray-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            利用イメージ
          </h2>
          <p className="text-gray-700">
            音声/動画ファイルのアップロードから、文字起こし、感情分析、要約、レポート出力までを一連で利用できます。
            7レンズ分析やRAG連携などの機能も要件に応じて活用可能です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products/voitex2/onprem"
              className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              ボイテキオンプレ！も見る
            </Link>
            <Link
              href="/products/compare"
              className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              比較ページへ
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
