import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキクラウド！/ボイテキオンプレ！ 比較',
  'ボイテキクラウド！とボイテキオンプレ！を比較。導入スピード、セキュリティ統制、運用負荷、カスタマイズ性などを一覧で確認できます。',
  '/products/compare'
);

const rows = [
  {
    item: '導入スピード',
    cloud: '短期導入しやすい',
    onprem: '環境準備に時間を要する',
  },
  {
    item: 'データ統制',
    cloud: '標準統制',
    onprem: '高い統制要件に対応',
  },
  {
    item: '運用負荷',
    cloud: '低い（サービス側保守）',
    onprem: '高い（自社運用設計が必要）',
  },
  {
    item: 'カスタマイズ',
    cloud: '標準範囲で対応',
    onprem: '要件に応じて柔軟に対応',
  },
  {
    item: '認証連携',
    cloud: '標準認証連携',
    onprem: 'FUJIRAG認証/SSOを含む連携設計に対応',
  },
  {
    item: '向いているケース',
    cloud: '迅速に開始したい/運用工数を抑えたい',
    onprem: '閉域要件/厳格な統制/個別運用が必要',
  },
];

export default function ComparePage() {
  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">
            ボイテキクラウド！/ボイテキオンプレ！の比較
          </h1>
          <p className="text-lg text-gray-600">
            2つの提供形態の選定ポイントを整理しました。
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  比較項目
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  ボイテキクラウド！
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  ボイテキオンプレ！
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.item} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {row.item}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{row.cloud}</td>
                  <td className="px-4 py-3 text-gray-700">{row.onprem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/products/voitex2/cloud"
            className="rounded-lg bg-sky-600 px-6 py-4 text-center font-semibold text-white transition-colors hover:bg-sky-700"
          >
            ボイテキクラウド！の詳細を見る
          </Link>
          <Link
            href="/products/voitex2/onprem"
            className="rounded-lg bg-slate-700 px-6 py-4 text-center font-semibold text-white transition-colors hover:bg-slate-800"
          >
            ボイテキオンプレ！の詳細を見る
          </Link>
        </div>
      </div>
    </main>
  );
}
