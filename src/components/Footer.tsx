import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50 py-12 text-sm text-gray-600">
      <div className="mx-auto max-w-7xl px-4">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* サービス・製品 */}
          <div>
            <h3 className="mb-4 font-bold text-gray-800">サービス・製品</h3>
            <nav className="space-y-2">
              <Link href="/features" className="block hover:text-blue-600">
                機能一覧
              </Link>
              <Link href="/pricing" className="block hover:text-blue-600">
                料金プラン
              </Link>
              <Link href="/quicksum" className="block hover:text-blue-600">
                QuickSum
              </Link>
              <Link href="/voitex-rec" className="block hover:text-blue-600">
                ボイテキレック！
              </Link>
            </nav>
          </div>

          {/* 導入・活用 */}
          <div>
            <h3 className="mb-4 font-bold text-gray-800">導入・活用</h3>
            <nav className="space-y-2">
              <Link href="/cases" className="block hover:text-blue-600">
                導入事例
              </Link>
              <Link href="/faq" className="block hover:text-blue-600">
                よくある質問
              </Link>
              <a
                href="https://manual.voitex.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                操作マニュアル
              </a>
              <Link href="/partner" className="block hover:text-blue-600">
                パートナー募集
              </Link>
            </nav>
          </div>

          {/* サポート・お問い合わせ */}
          <div>
            <h3 className="mb-4 font-bold text-gray-800">
              サポート・お問い合わせ
            </h3>
            <nav className="space-y-2">
              <a
                href="https://forms.gle/jCp4fEqMV5fGaoWu6"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                お問い合わせフォーム
              </a>
              <Link href="/security" className="block hover:text-blue-600">
                セキュリティ情報
              </Link>
              <Link href="/agreement" className="block hover:text-blue-600">
                利用規約
              </Link>
            </nav>
          </div>

          {/* 会社・情報 */}
          <div>
            <h3 className="mb-4 font-bold text-gray-800">会社・情報</h3>
            <nav className="space-y-2">
              <Link href="/company" className="block hover:text-blue-600">
                会社概要
              </Link>
              <Link href="/news" className="block hover:text-blue-600">
                お知らせ
              </Link>
              <a
                href="https://manual.voitex.site/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                ブログ
              </a>
              <a
                href="https://twitter.com/ktgsllc"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                X（旧Twitter）
              </a>
              <a
                href="https://www.facebook.com/ktgsllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>

        {/* 会社情報・コピーライト */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <Image
                src="/logo.png"
                alt="Voitex"
                width={169}
                height={34}
                className="mb-2"
              />
              <p>© {new Date().getFullYear()} KTGS.llc</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-xs">
              <Link href="/agreement" className="hover:text-blue-600">
                利用規約
              </Link>
              <Link href="/privacy-policy" className="hover:text-blue-600">
                プライバシーポリシー
              </Link>
              <Link href="/security" className="hover:text-blue-600">
                セキュリティ方針
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
