'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { needsConsentUpdate, setCookieConsent } from '@/libs/cookieConsent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // クッキー同意の更新が必要かチェック
    if (needsConsentUpdate()) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent('declined');
    setIsVisible(false);
  };

  // SSR対応のため、マウント後にレンダリング
  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <>
      {/* スクリーンリーダー用の説明 */}
      <div className="sr-only">
        クッキー同意バナー。このサイトではユーザー体験向上のためクッキーを使用しています。
      </div>

      {/* メインのバナー */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* テキスト部分 */}
            <div className="max-w-3xl flex-1">
              <h2
                id="cookie-consent-title"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                クッキーの使用について
              </h2>
              <p
                id="cookie-consent-description"
                className="text-sm leading-relaxed text-gray-600"
              >
                当サイトでは、ユーザー体験の向上とサイトの改善のためにクッキーを使用しています。
                これには、サイトの利用状況を分析するためのGoogle
                Analyticsが含まれます。 詳細については、
                <Link
                  href="/privacy-policy"
                  className="rounded text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </div>

            {/* ボタン部分 */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                onClick={handleDecline}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="クッキーの使用を拒否する"
              >
                拒否する
              </button>
              <button
                onClick={handleAccept}
                className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="クッキーの使用に同意する"
              >
                同意する
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* オーバーレイ（モバイルでのタップ防止） */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-25 sm:hidden" />
    </>
  );
}
