export default function Page() {
  return (
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
              <span className="font-semibold text-primary">トライアル導入</span>
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
                  <span className="font-medium">コールセンター事業社</span>
                </div>
              </div>
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
              ご興味をお持ちいただけましたら、まずはデモをお試しください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
