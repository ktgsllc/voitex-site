export default function Cta() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">まずはお気軽にお問い合わせください</h2>
          <p className="text-lg text-gray-600 mb-8">導入相談、デモ依頼、資料請求など歓迎です。</p>
          <a
                            href="https://forms.gle/jCp4fEqMV5fGaoWu6"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            お問い合わせフォームへ
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
