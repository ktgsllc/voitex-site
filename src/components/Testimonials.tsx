// components/Testimonials.tsx

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">現在の導入状況</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            「ボイテキ！」は現在、以下の業種の企業様にて<br />
            <span className="font-semibold text-primary">トライアル導入</span>をいただいています。
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-left max-w-md mx-auto mb-8">
            <li>✅ 証券会社</li>
            <li>✅ 生命保険会社</li>
            <li>✅ 損害保険会社</li>
            <li>✅ 弁護士事務所</li>
            <li>✅ 税理士事務所</li>
            <li>✅ 通信販売会社</li>
            <li>✅ 不動産会社</li>
            <li>✅ コールセンター事業社</li>
          </ul>

          <p className="text-sm text-gray-500">
            ※ 実際にご導入いただいたお客様からのお声は、順次掲載予定です。
          </p>
        </div>
      </div>
    </section>
  );
}
