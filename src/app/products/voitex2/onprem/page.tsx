import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキオンプレ！｜閉域・統制重視',
  'ボイテキオンプレ！は閉域運用やデータ統制を重視する企業向けです。外部認証連携や運用監査を含む実務導入に対応します。',
  '/products/voitex2/onprem'
);

const architecture = [
  'Backend: FastAPI + SQLAlchemy（非同期）',
  'Pipeline: STT -> SER（音響+テキスト）-> マージ -> 要約生成',
  'Storage: S3互換ストレージ + DBメタ管理',
  'Frontend: React/TypeScript の分析画面',
  '認証: ローカルJWT + FUJIRAG認証/SSO',
  '連携: RAGエクスポートAPI、NAS自動取り込みワーカー',
];

const operations = [
  '重複ファイル検知（ETag）で二重登録を防止',
  '失敗時の再試行/再解析フローを標準化',
  '監査ログ記録により運用トレーサビリティを確保',
  '設定変更の一部は再起動反映のため、運用手順書を整備',
];

export default function Voitex2OnPremPage() {
  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <section className="rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 p-10 text-white">
          <p className="mb-2 text-sm font-semibold">ボイテキ！製品ファミリー</p>
          <h1 className="mb-4 text-4xl font-bold">ボイテキオンプレ！</h1>
          <p className="text-lg opacity-95">
            データ統制、閉域運用、認証連携の要件に応える提供形態です。
            <br />
            実運用を見据えた監査・再解析・連携設計に対応します。
          </p>
        </section>

        <section className="mt-8 rounded-xl bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            技術構成（概要）
          </h2>
          <ul className="space-y-2 text-gray-700">
            {architecture.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            運用設計のポイント
          </h2>
          <ul className="space-y-2 text-gray-700">
            {operations.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-amber-900">
            導入時の注意点
          </h2>
          <ul className="space-y-2 text-amber-900">
            <li>・リアルタイム解析ではなく、バッチ解析を前提とします。</li>
            <li>・STT/SER精度は入力音声品質に影響を受けます。</li>
            <li>・FUJIRAG連携は外部API仕様・可用性の影響を受けます。</li>
            <li>・推定スコアを含むため、最終判断は人のレビューが必要です。</li>
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products/voitex2/cloud"
            className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            ボイテキクラウド！を見る
          </Link>
          <Link
            href="/products/compare"
            className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            比較ページへ
          </Link>
        </div>
      </div>
    </main>
  );
}
