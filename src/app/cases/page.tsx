import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  '導入事例｜ボイテキ！音声解析AIの活用事例',
  'ボイテキ！の導入事例をご紹介。証券会社、保険会社、弁護士事務所など様々な業界での音声解析AI活用事例とカスハラ対策、営業セールス分析への効果を掲載。',
  '/cases'
);

export default function Page() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mb-6 text-3xl font-bold text-primary">導入事例</h1>

            <div className="mb-8 rounded-xl bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                現在の導入状況
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                「ボイテキ！」は現在、以下の業種の企業様にて
                <br />
                <span className="font-semibold text-primary">
                  トライアル導入
                </span>
                をいただいています。
              </p>

              <div className="mx-auto mb-6 grid max-w-4xl grid-cols-1 gap-4 text-left text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">証券会社</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">生命保険会社</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">損害保険会社</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">弁護士事務所</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">税理士事務所</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">通信販売会社</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">不動産会社</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">建築業</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </div>
                    <span className="font-medium">コールセンター事業社</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-green-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-green-800">
                  トライアルでの期待される効果
                </h3>
                <p className="mb-4 text-green-700">
                  現在実施中のトライアルでは、以下のような効果が期待されています：
                </p>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• 会話の品質が数値で見えるようになり、指導のポイントが明確になることが期待できます</li>
                  <li>• 顧客の感情が分かるようになり、クレームの予兆を早期に察知できる可能性があります</li>
                  <li>• NGワード検出により、コンプライアンス違反を未然に防ぐことが期待できます</li>
                </ul>
                <p className="mt-4 text-xs text-green-600">
                  ※ 本格導入後、実際の効果については随時更新いたします。
                </p>
              </div>

              <p className="mb-6 text-sm text-gray-500">
                ※ 実際にご導入いただいたお客様からのお声は、順次掲載予定です。
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-blue-800">
                導入事例を掲載予定
              </h3>
              <p className="mb-4 text-blue-700">
                お客様のご協力をいただき、実際の導入事例や効果について
                <br />
                詳細なレポートを準備中です。
              </p>
              <p className="text-sm text-blue-600">
                ・応対品質の向上効果
                <br />
                ・カスハラ対策への活用事例
                <br />
                ・業務効率化の実績
                <br />
                ・導入後の運用状況
              </p>
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">
                導入事例の掲載をご希望の方
              </h3>
              <p className="mb-6 text-lg opacity-90">
                ボイテキ！をご利用いただいている企業様で、
                <br />
                導入事例の掲載をご希望の方はお気軽にお問い合わせください。
              </p>
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                className="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
              >
                お問い合わせ
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
