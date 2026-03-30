import StructuredData from '@/components/StructuredData';

export default function Features() {
  const features = [
    {
      id: 'file-upload',
      title: 'ファイルアップロード＋解析ジョブ登録',
      description:
        'WAV・MP3・FLAC・OGG形式の音声ファイルをアップロードし、自動で解析ジョブを生成。ステータスや進捗をリアルタイムで可視化します。',
      image: '/features/upload.webp',
      points: [
        '最大200MB対応（それ以上も相談可）',
        'MIME型式による安全な形式チェック',
        '「解析中」「完了」「エラー」のステータス表示',
        '1分単位で進捗更新',
      ],
    },
    {
      id: 'emotion-analysis',
      title: 'AIによる感情分析と高度なタグ付け',
      description:
        'エネルギーやストレス、期待感などの心理指標を多角的に解析。文脈に応じた豊富なタグを自動付与します。',
      image: '/features/emotion.webp',
      points: [
        'エネルギー分類：快適、精力的、気落ちなど',
        '心理状態：ストレス高、集中、期待感など',
        '発話傾向：躊躇、攻撃的、自信高いなど',
      ],
    },
    {
      id: 'evaluation',
      title: '自動化された対話評価',
      description:
        '顧客対応の品質を自動スコア化。改善点の提示も含め、継続的な品質向上を支援します。営業トークの効果分析にも対応。',
      image: '/features/evaluation.webp',
      points: [
        '自動評価による品質スコア',
        '改善提案の提示',
        '営業トークの効果測定',
      ],
    },
    {
      id: 'dashboard',
      title: '役割別ダッシュボード',
      description:
        '組織の各役割に応じた専用ダッシュボードを提供し、必要な情報を効率的に確認できます。営業マネージャー、経営者、マーケター、カスタマーサクセス、コンプライアンス担当者、心理カウンセラー向けに最適化された表示を提供。',
      image: '/features/dashboard.webp',
      points: [
        '7つの役割別ダッシュボード',
        '営業パフォーマンス可視化',
        '組織健康度スコア表示',
        'コンプライアンス違反率の推移',
        'VIP顧客・離脱リスク顧客の自動特定',
      ],
    },
    {
      id: 'conversation-analysis',
      title: '会話分析機能',
      description:
        'AIによる客観的な会話品質評価と顧客心理分析により、契約率向上と組織の健全性向上を支援します。',
      image: '/features/evaluation.webp',
      points: [
        '会話効果性スコアによる品質評価',
        '顧客満足度率の数値化',
        '契約率・リピート率向上の支援',
        'フォローアップアラート機能',
        '顧客優先度マトリクス表示',
        '組織の健全性スコア可視化',
      ],
    },
    {
      id: 'visualization',
      title: '分析・可視化機能',
      description:
        '感情の変化を時系列で可視化し、キーワード分析や共起ネットワーク図により、顧客心理パターンを発見します。',
      image: '/features/dashboard.webp',
      points: [
        '感情タイムライン表示',
        'キーワード頻度分析',
        '共起ネットワーク図',
        'データエクスポート（CSV/Excel/JSON）',
      ],
    },
    {
      id: 'compliance',
      title: 'コンプライアンス機能',
      description:
        'NGワード自動検出とハラスメント検出により、コンプライアンス違反の事前防止を支援します。',
      image: '/features/ng-words.webp',
      points: [
        'NGワード自動検出（カテゴリ分け・重要度設定）',
        'ハラスメント検出（パワハラ・セクハラ等）',
        'コンプライアンススコア算出',
        '部署別・個人別の比較分析',
      ],
    },
    {
      id: 'filter',
      title: '多機能フィルタ',
      description:
        '解析結果をステータス、日付、NGワードやタグの有無などでフィルタリングし、必要な情報にすぐアクセスできます。',
      image: '/features/filter.webp',
      points: ['日付・NGワード・タグで絞り込み', '詳細検索も対応'],
    },
    {
      id: 'prompt',
      title: 'プロンプト管理',
      description:
        'AI要約や感情分類に使う命令文（プロンプト）をGUIで編集・試行可能です。営業セールス分析に特化したプロンプトも設定可能。',
      image: '/features/prompt.webp',
      points: [
        'プロンプト編集・保存',
        '要約テストで即時結果確認',
        '営業分析用プロンプトテンプレート',
      ],
    },
    {
      id: 'tags',
      title: 'タグ管理',
      description:
        '自由に分類タグを作成・編集可能。AIの分析結果に応じて自動タグも付与されます。',
      image: '/features/tags.webp',
      points: ['タグの作成・履歴管理', '感情分析連動の自動付与'],
    },
    {
      id: 'ng-words',
      title: 'NGワード管理',
      description:
        'テキスト化された内容に対してNGワードをハイライト表示。検出粒度も柔軟に調整可能です。営業で避けるべき表現も設定可能。',
      image: '/features/ng-words.webp',
      points: [
        '単語単位 or 漢字単位のNG設定',
        '表現揺れや類語対策に柔軟対応',
        '営業向けNGワードテンプレート',
      ],
    },
    {
      id: 'users',
      title: 'ユーザー管理',
      description:
        'Cognito認証に基づいたユーザー・ロール管理をGUI上で実施できます。',
      image: '/features/users.webp',
      points: [
        'ユーザー作成・編集・削除',
        '一般・スタッフ・管理者ロールに対応',
      ],
    },
  ];

  return (
    <>
      <StructuredData type="softwareApplication" />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <p className="text-sm tracking-[0.2em] text-blue-200">FEATURES</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">機能一覧</h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              音声の収集から解析、評価、可視化、運用改善までを一気通貫でカバーします。
            </p>
          </div>

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            {features.map((feature, idx) => (
              <article
                key={feature.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {idx + 1}
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-1 text-sm text-slate-700">
                  {feature.points.map((point, i) => (
                    <li key={i}>・{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-8 rounded-2xl bg-blue-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">導入前の機能相談も可能です</h2>
            <p className="mt-3 text-blue-100">
              業種・目的に合わせて、必要な機能セットを提案します。
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              お問い合わせ
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
