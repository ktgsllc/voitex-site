// components/Testimonials.tsx

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            現在の導入状況
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            「ボイテキ！」は現在、以下の業種の企業様にて
            <br />
            <span className="font-semibold text-primary">トライアル導入</span>
            をいただいています。
          </p>

          <ul className="mx-auto mb-8 grid max-w-md grid-cols-1 gap-4 text-left text-gray-800 sm:grid-cols-2">
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
