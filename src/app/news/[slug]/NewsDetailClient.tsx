'use client';
import React, { useState } from 'react';

interface NewsDetailClientProps {
  news: {
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    slug: string;
    content: string;
  };
}

export default function NewsDetailClient({ news }: NewsDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  // 画像クリック機能を追加するためのスクリプト
  React.useEffect(() => {
    const handleImageClick = (event: Event) => {
      event.preventDefault();
      const img = event.target as HTMLImageElement;
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt');
      console.log('画像がクリックされました:', { src, alt });
      if (src && alt) {
        setSelectedImage({ src, caption: alt });
      }
    };

    const addImageClickHandlers = () => {
      // voitex-clientフォルダの画像を対象にする
      const images = document.querySelectorAll('img[src*="/voitex-client/"]');
      console.log('見つかった画像の数:', images.length);
      images.forEach((img, index) => {
        const imgElement = img as HTMLImageElement;
        console.log(`画像 ${index + 1}:`, imgElement.src, imgElement.alt);
        // 既存のイベントリスナーを削除
        img.removeEventListener('click', handleImageClick);
        // 新しいイベントリスナーを追加
        img.addEventListener('click', handleImageClick);
        // クリック可能なスタイルを追加
        imgElement.style.cursor = 'pointer';
        imgElement.style.transition = 'opacity 0.2s';
        img.addEventListener('mouseenter', () => {
          imgElement.style.opacity = '0.8';
        });
        img.addEventListener('mouseleave', () => {
          imgElement.style.opacity = '1';
        });
      });
    };

    // MutationObserverを使用してDOMの変更を監視
    const observer = new MutationObserver(() => {
      addImageClickHandlers();
    });

    // 初期実行
    const timer = setTimeout(addImageClickHandlers, 100);

    // 監視開始
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      // クリーンアップ
      const images = document.querySelectorAll('img[src*="/voitex-client/"]');
      images.forEach((img) => {
        img.removeEventListener('click', handleImageClick);
      });
    };
  }, [news.content]);

  return (
    <>
      {/* 記事本文 */}
      <article className="prose prose-lg max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: news.content
              .replace(/onClick="[^"]*"/g, '') // onClick属性を削除
              .replace(/onclick="[^"]*"/g, '') // onclick属性も削除
              .replace(/onClick='[^']*'/g, '') // シングルクォートのonClick属性も削除
              .replace(/onclick='[^']*'/g, '') // シングルクォートのonclick属性も削除
              .replace(/onClick=\{[^}]*\}/g, '') // JSX形式のonClick属性を削除
              .replace(/onclick=\{[^}]*\}/g, '') // JSX形式のonclick属性を削除
              .replace(/\s*onClick=\{[^}]*\}\s*/g, ' ') // 空白を含むonClick属性を削除
              .replace(/\s*onclick=\{[^}]*\}\s*/g, ' ') // 空白を含むonclick属性を削除
              .replace(/setSelectedImage\([^)]*\)/g, '') // setSelectedImage関数呼び出しを削除
              .replace(/\(\s*\)\s*=>\s*{[^}]*}/g, '') // アロー関数を削除
              .replace(/\(\s*\)\s*=>\s*[^>]*>/g, '') // アロー関数の残りを削除
              .replace(
                /<img([^>]*?)class="([^"]*?)"([^>]*?)>/g,
                '<img$1class="$2 cursor-pointer hover:opacity-80 transition-opacity"$3>'
              ), // 画像にクリック可能なスタイルを追加
          }}
          className="leading-relaxed text-gray-700"
        />
      </article>

      {/* 画像拡大表示モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="h-auto max-h-[98vh] w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-lg text-white">
              {selectedImage.caption}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-90 text-gray-800 shadow-lg transition-all duration-200 hover:bg-opacity-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
