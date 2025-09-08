import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSeoMetadata } from '@/libs/seo';
import Tag from '@/components/Tag';

// ハードコーディングされたニュースデータ
const newsData = [
  {
    id: '4',
    title:
      'セキュリティ強化のお知らせ - WAF導入とファイルアップロード検証の改善',
    date: '2025-09-08',
    category: 'セキュリティ',
    excerpt:
      'Webアプリケーションファイアウォール（WAF）の導入とファイルアップロード時のセキュリティ検証の改善を実施いたします。より安全なサービス利用環境を提供するため、9月13日より順次リリースされます。',
    slug: 'security-enhancement-waf-file-upload',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🔒 セキュリティ強化の概要</h2>
         <p class="text-gray-700 leading-relaxed mb-6">ボイテキ！では、お客様により安全で信頼性の高いサービスをご提供するため、継続的なセキュリティ強化に取り組んでおります。今回、Webアプリケーションファイアウォール（WAF）の導入とファイルアップロード時のセキュリティ検証の改善を実施いたします。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">✨ 今回の改善内容</h2>
         <div class="grid md:grid-cols-2 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-blue-800">Webアプリケーションファイアウォール（WAF）の導入</h3>
             </div>
             <p class="text-gray-700">Webアプリケーションに対する攻撃を自動検出・防御するWAFを導入し、不正アクセスや悪意のあるリクエストからサービスを保護します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-green-800">ファイルアップロード検証の改善</h3>
             </div>
             <p class="text-gray-700">アップロードされるファイルの検証プロセスを強化し、悪意のあるファイルや不正な形式のファイルのアップロードを防止します。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🛡️ セキュリティ強化の詳細</h2>
         <div class="space-y-6">
           <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
             <h3 class="text-lg font-semibold text-blue-800 mb-3">WAF（Webアプリケーションファイアウォール）について</h3>
             <ul class="space-y-2 text-gray-700">
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                 SQLインジェクション攻撃の自動検出・防御
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                 XSS（クロスサイトスクリプティング）攻撃の防止
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                 不正なリクエストパターンの検出・ブロック
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                 24時間365日の自動監視・防御
               </li>
             </ul>
           </div>
           
           <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
             <h3 class="text-lg font-semibold text-green-800 mb-3">ファイルアップロード検証の改善</h3>
             <ul class="space-y-2 text-gray-700">
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 ファイル形式の厳格な検証
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 ファイルサイズ制限の強化
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 マルウェア検出機能の向上
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 アップロード前の事前スキャン
               </li>
             </ul>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">📅 リリーススケジュール</h2>
         <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
           <div class="flex items-start">
             <div class="text-2xl mr-3">📅</div>
             <div>
               <h3 class="text-lg font-semibold text-yellow-800 mb-2">2025年9月13日（金）より順次リリース</h3>
               <p class="text-gray-700 mb-2">セキュリティ強化の実装は、2025年9月13日より順次開始されます。</p>
               <p class="text-gray-700 text-sm">※リリースの完了時期は、システムの状況により若干前後する場合がございます。</p>
             </div>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">👥 お客様への影響</h2>
         <div class="space-y-6">
           <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
             <h3 class="text-lg font-semibold text-yellow-800 mb-3">メンテナンスについて</h3>
             <ul class="space-y-2 text-gray-700">
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                 <strong>メンテナンス中はサービス停止となります</strong> - セキュリティ強化の実装のため
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                 <strong>事前にご案内いたします</strong> - メンテナンス時間は事前にお知らせします
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                 <strong>他機能のリリースも同時実施</strong> - 複数の改善をまとめて実施いたします
               </li>
             </ul>
           </div>
           
           <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
             <h3 class="text-lg font-semibold text-green-800 mb-3">メンテナンス後の改善</h3>
             <ul class="space-y-2 text-gray-700">
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 <strong>セキュリティの大幅強化</strong> - WAFとファイル検証の改善により、より安全なサービスを提供
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 <strong>パフォーマンスの向上</strong> - システムの安定性と処理速度の改善
               </li>
               <li class="flex items-center">
                 <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                 <strong>追加設定は不要</strong> - お客様側での設定変更は必要ありません
               </li>
             </ul>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🔍 セキュリティへの取り組み</h2>
         <div class="grid md:grid-cols-3 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 text-center">
             <div class="text-3xl mb-3">🛡️</div>
             <h3 class="text-lg font-semibold text-blue-800 mb-2">多層防御</h3>
             <p class="text-gray-700 text-sm">複数のセキュリティ層でお客様のデータを保護</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 text-center">
             <div class="text-3xl mb-3">🔍</div>
             <h3 class="text-lg font-semibold text-green-800 mb-2">継続監視</h3>
             <p class="text-gray-700 text-sm">24時間365日の自動監視で脅威を検出</p>
           </div>
           
           <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 text-center">
             <div class="text-3xl mb-3">⚡</div>
             <h3 class="text-lg font-semibold text-purple-800 mb-2">迅速対応</h3>
             <p class="text-gray-700 text-sm">検出された脅威への即座な対応</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">📢 今後のセキュリティ強化について</h2>
         <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
           <h3 class="text-2xl font-bold mb-4">継続的なセキュリティ向上</h3>
           <p class="text-blue-100 mb-4">今回のセキュリティ強化は、ボイテキ！の継続的なセキュリティ向上の一環です。</p>
           <p class="text-blue-100">今後も最新のセキュリティ技術を導入し、お客様のデータとプライバシーを最優先に保護してまいります。</p>
         </div>
       </div>
       
       <div class="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
         <h3 class="text-2xl font-bold mb-4">お問い合わせはこちら</h3>
         <p class="text-green-100 mb-6">セキュリティ強化についてのご質問や、ボイテキ！のセキュリティ対策に関するお問い合わせは、お気軽にお声がけください。</p>
         <div class="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
           お問い合わせフォーム
         </div>
       </div>
     `,
  },
  {
    id: '3',
    title:
      'ボイテキ！、会話評価機能を大幅刷新 - 感情解析結果の視覚化とAI改善アドバイスを実装',
    date: '2025-09-05',
    category: 'アップデート',
    excerpt:
      '音声解析プラットフォーム「ボイテキ！」の会話評価機能を大幅に刷新しました。感情解析結果をカード形式で視覚化し、AI改善アドバイスを分離表示することで、営業・カスタマーサポートの効率化を実現します。',
    slug: 'voitex-evaluation-feature-update',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🎉 大型アップデートの概要</h2>
         <p class="text-gray-700 leading-relaxed mb-6">「ボイテキ！」の会話評価機能を大幅に刷新し、より直感的で実用的な機能を実装しました。感情解析結果の視覚化とAI改善アドバイスの分離表示により、営業・カスタマーサポートの現場でより効果的にご活用いただけます。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">✨ 主な新機能</h2>
         <div class="grid md:grid-cols-2 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-blue-800">感情解析結果の視覚化</h3>
             </div>
             <p class="text-gray-700">従来のテキストベースから、カード形式の直感的な表示へ変更。感情指標を色分けして強調表示し、パッと見て分かるUIを実現しました。</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-green-800">AI評価の分離表示</h3>
             </div>
             <p class="text-gray-700">感情解析結果サマリと改善アドバイスを明確に分離。それぞれの目的に応じた情報を効率的に確認できます。</p>
           </div>
           
           <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-purple-800">Markdown風パーサー</h3>
             </div>
             <p class="text-gray-700">情報の階層化により読みやすさを大幅向上。見出し、箇条書き、番号付きリストを適切に表示します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-orange-800">再生成機能</h3>
             </div>
             <p class="text-gray-700">結果に満足できない場合、簡単に再生成できる機能を追加。より良い結果を得るまで何度でも試すことができます。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🎨 UI/UXの改善</h2>
         <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
           <ul class="space-y-3 text-gray-700">
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
               感情指標をカード形式で表示
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
               差の数値を色分けして強調
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
               見出しの階層化と色分け
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
               箇条書きと番号付きリストの適切な表示
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
               問題の概要をタグ形式で視覚化
             </li>
           </ul>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🚀 システムの安定性向上</h2>
         <div class="space-y-6">
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">データ処理の最適化</h3>
             <p class="text-gray-700">音声データの処理速度を向上させ、よりスムーズな操作を実現しました。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">分析精度の向上</h3>
             <p class="text-gray-700">感情分析のアルゴリズムを改良し、より正確で詳細な分析結果を提供できるようになりました。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">エラー処理の改善</h3>
             <p class="text-gray-700">システムの安定性を向上させ、より確実にサービスをご利用いただけるようになりました。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">💼 ビジネス価値</h2>
         <div class="grid md:grid-cols-3 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200 text-center">
             <div class="text-3xl mb-3">📈</div>
             <h3 class="text-lg font-semibold text-blue-800 mb-2">営業効率化</h3>
             <p class="text-gray-700 text-sm">感情ギャップを視覚的に把握し、営業活動の質を向上</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 text-center">
             <div class="text-3xl mb-3">🎯</div>
             <h3 class="text-lg font-semibold text-green-800 mb-2">カスタマーサポート強化</h3>
             <p class="text-gray-700 text-sm">具体的な改善アドバイスでサポート品質を向上</p>
           </div>
           
           <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 text-center">
             <div class="text-3xl mb-3">💰</div>
             <h3 class="text-lg font-semibold text-purple-800 mb-2">コスト削減</h3>
             <p class="text-gray-700 text-sm">再生成機能により無駄な処理を削減</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">📢 既存ユーザー様へのお知らせ</h2>
         <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
           <div class="flex items-start">
             <div class="text-2xl mr-3">🔄</div>
             <div>
               <h3 class="text-lg font-semibold text-yellow-800 mb-2">自動アップデートについて</h3>
               <p class="text-gray-700 mb-2">既存のユーザー様の環境には、順次アップデートが適用されます。特別な操作は不要で、次回ログイン時から新しい機能をご利用いただけます。</p>
               <p class="text-gray-700 text-sm">※アップデートの適用時期は、お客様の環境により異なる場合がございます。</p>
             </div>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">🚀 今後の展望</h2>
         <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
           <h3 class="text-2xl font-bold mb-4">継続的な改善を推進</h3>
           <p class="text-blue-100 mb-4">今回のアップデートを皮切りに、ユーザーの皆様からのフィードバックを基に、さらなる機能改善と新機能の追加を予定しています。</p>
           <p class="text-blue-100">「ボイテキ！」は、音声解析を通じて「働く環境を守る」という使命のもと、より良いコミュニケーションの実現を目指します。</p>
         </div>
       </div>
       
       <div class="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
         <h3 class="text-2xl font-bold mb-4">お問い合わせはこちら</h3>
         <p class="text-green-100 mb-6">新機能についてのご質問や、「ボイテキ！」の導入に関するお問い合わせは、お気軽にお声がけください。</p>
         <div class="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
           お問い合わせフォーム
         </div>
       </div>
     `,
  },
  {
    id: '2',
    title:
      '「ボイテキ！」正式リリース｜録音音声をAIで解析するバッチ処理型クラウド',
    date: '2025-08-01',
    category: 'リリース',
    excerpt:
      '2025年8月1日、音声解析クラウド「ボイテキ！」は正式リリースを迎えました。カスタマーハラスメント対策や、通話品質評価・離職防止を支援するため、録音データをAIで解析・可視化するバッチ処理特化型サービスです。',
    slug: 'voitex-official-release',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">現在は以下の機能を提供中です：</h2>
         <div class="grid md:grid-cols-2 gap-6">
           <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-blue-800">感情分類（20種）による心理傾向の可視化</h3>
             </div>
             <p class="text-gray-700">音声から感情を自動分析し、心理状態を可視化します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-green-800">重要発言のAI要約</h3>
             </div>
             <p class="text-gray-700">長時間の通話も要点を自動要約し、重要なポイントを抽出します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-red-800">NGワード自動検出</h3>
             </div>
             <p class="text-gray-700">ハラスメントや問題発言を自動検出し、早期対応を支援します。</p>
           </div>
           
           <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
             <div class="flex items-center mb-3">
               <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
               <h3 class="text-lg font-semibold text-purple-800">タグ・プロンプトによる業種別カスタマイズ</h3>
             </div>
             <p class="text-gray-700">業界や用途に応じてカスタマイズ可能な分析設定を提供します。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
           <h3 class="text-lg font-semibold text-green-800 mb-2">料金体系</h3>
           <p class="text-gray-700 mb-2">月額不要・従量課金型で、お気軽にトライアルもご利用いただけます。</p>
           <p class="text-gray-700">使用した分だけお支払いいただくため、コストを抑えて導入できます。</p>
         </div>
       </div>
       
       <div class="mb-8">
         <p class="text-lg text-gray-700 leading-relaxed">正式リリースを機に、より多くの職場で「声から働く環境を守る」支援をしてまいります。</p>
       </div>
       
       <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
         <h3 class="text-2xl font-bold mb-4">お問い合わせはこちら</h3>
         <p class="text-blue-100 mb-6">ボイテキ！についてのご質問や導入に関するお問い合わせは、お気軽にお声がけください。</p>
         <div class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
           お問い合わせフォーム
         </div>
       </div>
     `,
  },
  {
    id: '1',
    title:
      '【ご案内】ISO/IEC 27017（クラウド情報セキュリティ）取得に向けた対応状況について',
    date: '2025-07-06',
    category: 'セキュリティ',
    excerpt:
      '当社（ケーティージーエス合同会社）では、クラウドサービスをご利用いただく皆様に、より安心してお使いいただける環境を提供するため、国際的な情報セキュリティ規格「ISO/IEC 27017」の取得に向けた取り組みを進めております。',
    slug: 'iso-27017-acquisition-status',
    content: `
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">ISO/IEC 27017とは？</h2>
         <p class="text-gray-700 leading-relaxed mb-6">ISO/IEC 27017 は、クラウドサービスの安全性と信頼性を強化するために設けられた国際規格で、クラウド特有のリスクに対応する管理策を定めています。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">取得スケジュール</h2>
         <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
           <ul class="space-y-2 text-gray-700">
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年1月： ISMS（ISO/IEC 27001）構築・運用開始
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年8月： ISO/IEC 27017 審査申し込み予定
             </li>
             <li class="flex items-center">
               <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               2025年12月： 認証取得完了予定
             </li>
           </ul>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">なぜ取得に時間がかかるのか？</h2>
         <p class="text-gray-700 leading-relaxed mb-4">ISO/IEC 27017 の取得には、文書整備だけでなく、「一定期間の実運用実績」が求められます。</p>
         <p class="text-gray-700 leading-relaxed mb-6">また、認証取得には以下のような段階的な対応が必要となるため、半年〜1年程度の計画的な準備が必要となります。</p>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">ISO/IEC 27017 取得までの流れ（概要）</h2>
         <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
           <ol class="space-y-3 text-gray-700">
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">1</span>
               現状分析（ギャップ分析）
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">2</span>
               ISMS（ISO/IEC 27001）の構築と文書化
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">3</span>
               運用開始（3ヶ月以上の記録を保持）
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">4</span>
               内部監査・マネジメントレビュー
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">5</span>
               認証機関への審査申し込み
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">6</span>
               実地審査・是正対応
             </li>
             <li class="flex items-center">
               <span class="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mr-3">7</span>
               認証取得
             </li>
           </ol>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
         
         <div class="space-y-6">
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">ISO/IEC 27017はどのような規格ですか？</h3>
             <p class="text-gray-700">クラウドサービスに特化した情報セキュリティのガイドラインで、ISO/IEC 27001を基盤とし、クラウド特有の対策を追加した内容となっています。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">いつ頃の取得を予定していますか？</h3>
             <p class="text-gray-700">2025年8月に審査を申し込み、同年12月の取得を予定しています。</p>
           </div>
           
           <div class="bg-gray-50 p-6 rounded-lg">
             <h3 class="text-lg font-semibold text-gray-800 mb-2">取得に向けた体制は整っていますか？</h3>
             <p class="text-gray-700">2025年1月よりISMS運用を開始し、取得に必要な準備を段階的に進めています。</p>
           </div>
         </div>
       </div>
       
       <div class="mb-8">
         <h2 class="text-2xl font-bold text-gray-800 mb-4">今後について</h2>
         <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
           <p class="text-gray-700 mb-2">認証取得が完了次第、改めて当サイト上でご報告いたします。</p>
           <p class="text-gray-700">引き続き、情報セキュリティの向上とサービス品質の強化に努めてまいります。</p>
         </div>
       </div>
     `,
  },
];

// 動的メタデータ生成
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: 'お知らせが見つかりません | ボイテキ！',
      description: 'お探しのお知らせが見つかりませんでした。',
    };
  }

  return generateSeoMetadata(
    `${news.title} | ボイテキ！`,
    news.excerpt,
    `/news/${news.slug}`
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-primary">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/news" className="hover:text-primary">
                  お知らせ
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{news.title}</li>
            </ol>
          </nav>

          {/* 記事ヘッダー */}
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-4">
              <Tag variant="primary" size="sm">
                {news.category}
              </Tag>
              <time className="text-sm text-gray-500">{news.date}</time>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {news.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{news.excerpt}</p>
          </header>

          {/* 記事本文 */}
          <article className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: news.content }}
              className="leading-relaxed text-gray-700"
            />
          </article>

          {/* 戻るボタン */}
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
