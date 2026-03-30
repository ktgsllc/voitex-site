import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-14 text-sm text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="ボイテキ！"
            width={169}
            height={34}
            className="h-8 w-auto"
          />
          <p className="mt-4 leading-7 text-slate-400">
            音声データをAIで解析し、カスタマーハラスメントから社員を守り、
            <br />
            営業品質・応対品質を向上させる音声DXの総合ブランド。
          </p>
          <p className="mt-3 text-xs text-slate-500">
            共同事業の運営体制は
            <Link
              href="/company"
              className="ml-1 text-slate-300 underline underline-offset-2 hover:text-white"
            >
              運営会社情報を見る
            </Link>
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
            製品
          </p>
          <div className="space-y-2">
            <Link
              href="/products/voitex2/cloud"
              className="block hover:text-white"
            >
              ボイテキクラウド！
            </Link>
            <Link
              href="/products/voitex2/onprem"
              className="block hover:text-white"
            >
              ボイテキオンプレ！
            </Link>
            <Link href="/voitex-rec" className="block hover:text-white">
              ボイテキレック！
            </Link>
            <Link href="/voitex-room-rec" className="block hover:text-white">
              ボイテキルームレック！
            </Link>
            <Link href="/quicksum" className="block hover:text-white">
              QuickSum
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
            ソリューション
          </p>
          <div className="space-y-2">
            <Link href="/#issues" className="block hover:text-white">
              カスハラ対策
            </Link>
            <Link href="/#issues" className="block hover:text-white">
              応対品質向上
            </Link>
            <Link href="/#issues" className="block hover:text-white">
              業務効率化
            </Link>
            <Link href="/#issues" className="block hover:text-white">
              営業分析
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
            会社情報
          </p>
          <div className="space-y-2">
            <Link href="/news" className="block hover:text-white">
              お知らせ
            </Link>
            <Link href="/faq" className="block hover:text-white">
              FAQ
            </Link>
            <Link href="/ai" className="block hover:text-white">
              AI向け情報
            </Link>
            <Link href="/privacy-policy" className="block hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/contact" className="block hover:text-white">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2025 ボイテキ！ All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white">
            プライバシーポリシー
          </Link>
          <Link href="/agreement" className="hover:text-white">
            利用規約
          </Link>
        </div>
      </div>
    </footer>
  );
}
