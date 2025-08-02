export default function Page() {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-6">導入事例</h1>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">現在の導入状況</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              「ボイテキ！」は現在、以下の業種の企業様にて<br />
              <span className="font-semibold text-primary">トライアル導入</span>をいただいています。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 text-left max-w-4xl mx-auto mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">証券会社</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">生命保険会社</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">損害保険会社</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">弁護士事務所</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">税理士事務所</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">通信販売会社</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">不動産会社</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </div>
                  <span className="font-medium">コールセンター事業社</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              ※ 実際にご導入いただいたお客様からのお声は、順次掲載予定です。
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">導入事例を掲載予定</h3>
            <p className="text-blue-700 mb-4">
              お客様のご協力をいただき、実際の導入事例や効果について<br />
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
