import Breadcrumbs from '@/components/Breadcrumbs';

export default function QuickSumPage() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              今すぐ QuickSum で、ACW から解放されよう。
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              要約は AI、成果は現場に。<br />
              通話内容を即座に要約し、CRM へのコピーペーストだけで後処理完了。面倒な入力作業をなくして、応対に集中できる環境を。
            </p>
            <a 
              href="https://forms.gle/jCp4fEqMV5fGaoWu6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg"
            >
              無料トライアル開始
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* QuickSumとは？ */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">QuickSumとは？</h2>
            <p className="text-lg text-gray-600 mb-6">
              QuickSumは、コールセンターのACW（アフターコールワーク）を削減し、オペレーターの業務効率と要約品質を向上させるAI要約ツールです。
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">QuickSum 開発の背景</h3>
            <p className="text-gray-600 mb-4">
              コールセンターのオペレーターにとって、アフターコールワーク（ACW）は大きな負担です。QuickSum はそのACW時間を大幅に削減するために開発されました。
            </p>
            <p className="text-gray-600">
              既にAmiVoiceなどでテキスト化された通話内容をもとに、SVが事前に作成したプロンプトで要約することで、オペレーターごとのばらつきを抑え、一定品質の要約が実現できると考えています。
            </p>
          </div>

          {/* 導入効果まとめ */}
          <div className="mt-8 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">導入効果まとめ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">平均1分 → 約10秒</div>
                <p className="text-gray-600">ACW時間を大幅短縮</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">品質統一</div>
                <p className="text-gray-600">要約品質のばらつき防止</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">工数削減</div>
                <p className="text-gray-600">CRM入力工数の削減</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">負担軽減</div>
                <p className="text-gray-600">オペレーターの心理的負担を軽減</p>
              </div>
            </div>
          </div>

          {/* こんな人に使ってほしい */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">こんな人に使ってほしい</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">コールセンター管理者</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">オペレーター・スーパーバイザー</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">小規模コンタクトセンター</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700">BPO事業者</span>
                </div>
              </div>
            </div>
          </div>

          {/* 利用シーン例 */}
          <div className="mt-8 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">利用シーン例</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-800 mb-2">電話応対記録の要約</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-800 mb-2">営業活動の振り返り要点抽出</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-800 mb-2">カスタマーサポートログ整備</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-800 mb-2">研修会話の要約教材化</h3>
              </div>
            </div>
          </div>

          {/* キーベネフィット */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">キーベネフィット</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">【時間短縮】</h3>
                <p className="text-gray-600">平均ACWは1件あたり1分。QuickSumではこれを10秒前後に短縮します。</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">【コスト削減】</h3>
                <p className="text-gray-600">小さな時間の積み重ねが会社のコストに直結。ACW削減により人員配置の柔軟性も向上します。</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">【応対に集中】</h3>
                <p className="text-gray-600">CRMへの手動入力が不要となり、要約結果をペーストするだけで履歴が完成します。</p>
              </div>
            </div>
          </div>

          {/* 導入前後のイメージ */}
          <div className="mt-8 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">導入前後のイメージ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">従来：</h3>
                <p className="text-gray-600 mb-4">通話終了後、メモを確認しながら手入力。</p>
                <p className="text-lg font-semibold text-primary">平均1〜2分。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">QuickSum導入後：</h3>
                <p className="text-gray-600 mb-4">自動要約をコピー＆ペーストするだけ。</p>
                <p className="text-lg font-semibold text-primary">約10秒で完了。</p>
              </div>
            </div>
          </div>

          {/* 使い方フロー */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">使い方フロー</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">通話終了</h3>
                <p className="text-sm text-gray-600">オペレーターによる通話が終了します。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">テキスト化済みの内容を入力</h3>
                <p className="text-sm text-gray-600">通話音声をAmiVoiceなどでテキスト化し、QuickSumに貼り付けます。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">AIによる自動要約</h3>
                <p className="text-sm text-gray-600">事前設定済みプロンプトをもとに、QuickSumが要点を瞬時に抽出します。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">CRMにコピーペースト</h3>
                <p className="text-sm text-gray-600">生成された要約をそのままCRMの対応履歴欄に貼り付ければ後処理完了です。</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">FAQ – よくある質問</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">何人まで同時に使えますか？</h3>
                <p className="text-gray-600">QuickSumは最大100人までの同時接続に対応しています。80件までの同時要約処理が可能で、81件目以降はキュー待ち（約30秒～1分）となります。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">負荷が高くなるとどうなりますか？</h3>
                <p className="text-gray-600">軽負荷（10〜30人）や中負荷（30〜80人）では即時処理が可能です。高負荷（80〜100人）では一部が待機、100人を超えると1〜2分程度の遅延が発生する場合があります。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Gemini APIの制限による影響はありますか？</h3>
                <p className="text-gray-600">同時に大量リクエストが発生すると、Gemini APIの制限（60件/分）を超え、「429エラー」が発生する可能性があります。現在、Google Cloud Consoleでクォータ緩和申請を準備中です。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">どのくらいの長文を要約できますか？</h3>
                <p className="text-gray-600">文字数の制限はなく、最大37万文字以上の要約実績があります。短文は10〜30秒、長文は数分程度の処理時間が目安です。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">多数の長文を同時に処理できますか？</h3>
                <p className="text-gray-600">最大80件までの並列処理が可能です。100件以上になると順次キュー処理となり、待機時間が数分になることがあります。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">高負荷時のシステム挙動は？</h3>
                <p className="text-gray-600">高負荷時でもCPU使用率は20〜30%、メモリ使用量は最大8〜10GBに収まります。レスポンスは通常0.5〜2秒ですが、最大3分ほどに延びる場合があります。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">要約できる件数の目安は？</h3>
                <p className="text-gray-600">1日あたりの処理件数は約10,000〜20,000件です。安定運用に対応できる処理能力があります。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">プロンプトの数や文字数に制限はありますか？</h3>
                <p className="text-gray-600">ユーザーあたり最大50件まで作成可能です。タイトルは最大255文字、本文は5万文字まで対応しています。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">要約対象の入力テキストに制限はありますか？</h3>
                <p className="text-gray-600">入力文字数のアプリ上限はありませんが、DB制限として最大4GBまで対応しています。API側の実質制限は約30,000トークンで、37万文字の成功例もあります。</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              QuickSumで業務効率を向上させませんか？
            </h2>
            <p className="text-gray-600 mb-6">
              ACW時間の大幅削減で、オペレーターが応対に集中できる環境を実現します。
            </p>
            <a 
              href="https://forms.gle/jCp4fEqMV5fGaoWu6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              無料トライアルを始める
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
