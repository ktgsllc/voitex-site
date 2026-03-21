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
    item: '費用モデル',
    cloud: '従量課金を中心に短期導入しやすい',
    onprem: '個別見積（要件/構成/運用範囲に応じて設計）',
  },
  {
    item: '向いているケース',
    cloud: '迅速に開始したい/運用工数を抑えたい',
    onprem: '閉域要件/厳格な統制/個別運用が必要',
  },
];

const cloudFit = [
  '短期間で利用開始したい',
  '運用負荷をできるだけ抑えたい',
  'まずは小さく始めて段階拡張したい',
];

const onPremFit = [
  '閉域ネットワークや厳格なデータ統制が必要',
  '社内規程に合わせた運用設計を行いたい',
  '認証連携や監査要件を個別に詰めたい',
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

        <section className="mb-8 rounded-xl bg-gradient-to-r from-sky-50 to-slate-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            まず押さえる比較軸
          </h2>
          <p className="text-gray-700">
            導入スピード、データ統制、運用負荷、カスタマイズ、費用モデルを基準に選定すると、社内合意が進みやすくなります。
          </p>
        </section>

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

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-sky-100 bg-sky-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-sky-800">
              ボイテキクラウド！が向いている企業
            </h2>
            <ul className="space-y-2 text-sky-900">
              {cloudFit.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-800">
              ボイテキオンプレ！が向いている企業
            </h2>
            <ul className="space-y-2 text-slate-900">
              {onPremFit.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-sky-800">
              クラウド導入を検討する
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              まずは短期導入とトライアルを優先したい場合におすすめです。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/voitex2/cloud"
                className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
              >
                クラウド詳細を見る
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-sky-600 px-4 py-2 font-semibold text-sky-700 transition-colors hover:bg-sky-50"
              >
                料金を確認する
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-300 bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-slate-800">
              オンプレ導入を検討する
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              閉域要件・統制要件を前提に、構成を個別設計したい場合におすすめです。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/voitex2/onprem"
                className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                オンプレ詳細を見る
              </Link>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                要件ヒアリングを依頼
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
