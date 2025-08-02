export default function Cta() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            まずはお気軽にお問い合わせください
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            導入相談、デモ依頼、資料請求など歓迎です。
          </p>
          <a
            href="https://forms.gle/jCp4fEqMV5fGaoWu6"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            お問い合わせフォームへ
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
