import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata } from '@/libs/seo';

export const metadata: Metadata = generateMetadata(
  'ボイテキとは？｜ボイテキクラウド！・ボイテキオンプレ！のご紹介',
  'ボイテキ！は「ボイテキクラウド！」と「ボイテキオンプレ！」の2製品で構成される音声分析製品ファミリーです。本ページでは主にボイテキクラウド！の機能と活用方法を紹介します。',
  '/what-is-voitex'
);

export default function WhatIsVoitexPage() {
  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm tracking-[0.2em] text-blue-200">
              ボイテキ！について
            </p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              ボイテキとは？
            </h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              ボイテキ！は、クラウド型とオンプレ型を備えた音声分析製品ファミリーです。
            </p>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              製品コンセプト
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              VoiceとTextをつなぎ、会話データを業務改善・リスク管理・人材育成に活かす。
              これがボイテキ！の基本設計です。
            </p>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">音声解析AI</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                文字起こし、感情分析、NGワード検知、要約を一連で処理します。
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                導入形態の選択
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                短期導入のクラウドと、統制要件対応のオンプレから選べます。
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">現場定着重視</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                使って終わりではなく、運用改善まで見据えた伴走支援を提供します。
              </p>
            </article>
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              主な活用シーン
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                'コールセンターの応対品質管理',
                '営業会話の分析と再現性向上',
                'カスハラ対策と証跡管理',
                '研修・教育の効果測定',
                'コンプライアンスリスクの可視化',
                '会議や面談の要点整理',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">導入相談・デモのご依頼</h2>
            <p className="mt-3 text-blue-100">
              課題に合わせて、クラウド/オンプレの適切な導入案をご提案します。
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900"
            >
              お問い合わせ
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
