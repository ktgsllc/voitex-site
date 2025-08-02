import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12 py-8 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <p className="font-bold text-gray-800 mb-2">Voitex</p>
          <p>© {new Date().getFullYear()} KTGS.llc</p>
          <div className="space-x-4 mt-2">
            <a href="https://twitter.com/ktgsllc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">X</a>
            <a href="https://forms.gle/jCp4fEqMV5fGaoWu6" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">お問い合わせ</a>
          </div>
        </div>
        <nav className="space-y-1" aria-label="フッターナビゲーション">
          <Link href="/company" className="block hover:text-blue-600">会社概要</Link>
          <Link href="/partner" className="block hover:text-blue-600">パートナー募集</Link>
          <Link href="/agreement" className="block hover:text-blue-600">利用規約</Link>
          <Link href="/privacy-policy" className="block hover:text-blue-600">プライバシーポリシー</Link>
          <Link href="/security" className="block hover:text-blue-600">セキュリティ方針</Link>
        </nav>
      </div>
    </footer>
  );
}
