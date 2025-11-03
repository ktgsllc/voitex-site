'use client';
import { useState } from 'react';
import StructuredData from '@/components/StructuredData';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

// ハードコーディングされたFAQデータ
const faqData: FaqItem[] = [
  // 基本利用・導入
  {
    id: '38',
    question: 'どのような企業がトライアルを実施していますか？',
    answer:
      '営業部門、カスタマーサポート、コールセンター、マーケティング部門など、音声での顧客対応を行う企業様にトライアルをお受けいただいています。特に営業品質向上やコンプライアンス強化を重視する企業様から高い評価をいただいています。',
    category: '基本利用',
  },
  {
    id: '39',
    question: '導入までの期間はどのくらいですか？',
    answer:
      '標準的な導入で約2〜4週間です。カスタマイズ内容によって変動します。まずはデモ環境での体験をお勧めします。',
    category: '基本利用',
  },
  {
    id: '40',
    question: '導入が複雑ではありませんか？',
    answer:
      'Webブラウザからアクセスするだけのクラウドサービスです。インストール不要で、専任サポートによるスムーズな導入支援を提供します。',
    category: '基本利用',
  },
  {
    id: '1',
    question: 'ボイテキ！は誰でも使えますか？',
    answer:
      'はい、PCとインターネット環境があれば、どなたでもご利用いただけます。特別なソフトや知識は不要です。',
    category: '基本利用',
  },
  {
    id: '41',
    question: 'どのようなファイル形式に対応していますか？',
    answer:
      'WAV、MP3、M4A、OGG形式の音声ファイル、および MP4、MOV、AVI形式の動画ファイルに対応しています。最大ファイルサイズは2GBです。',
    category: '基本利用',
  },
  {
    id: '2',
    question: '対応している音声ファイルの形式を教えてください。',
    answer:
      'WAV / MP3 / FLAC / OGG の各形式に対応しています。1ファイル最大200MBまでアップロード可能です。',
    category: '基本利用',
  },
  {
    id: '42',
    question: 'ユーザー数に制限はありますか？',
    answer:
      'ユーザー数に制限はありません。企業内の必要なメンバー全員にアカウントを発行できます。',
    category: '基本利用',
  },
  {
    id: '43',
    question: 'データのエクスポートは可能ですか？',
    answer:
      'CSV、Excel、JSON形式でエクスポート可能です。ローデータの一括ダウンロードにも対応しています。',
    category: '基本利用',
  },
  {
    id: '44',
    question: '既存システムとの連携はできますか？',
    answer:
      'RESTful APIを提供しており、外部システムとの連携が可能です。API連携の詳細はお問い合わせください。',
    category: '基本利用',
  },
  {
    id: '3',
    question: '無料トライアルはありますか？',
    answer:
      'はい、無料トライアルをご用意しています。標準エンジンは無料でご利用いただけ、有料エンジンも一定時間まで無料でお試しいただけます。',
    category: '基本利用',
  },
  {
    id: '4',
    question: 'ボイテキ！とボイテキレック！の違いは何ですか？',
    answer:
      'ボイテキ！は音声解析・分析ツール、ボイテキレック！は音声録音・管理ツールです。ボイテキレック！で録音した音声をボイテキ！で分析することで、録音から分析まで一貫したワークフローを構築できます。',
    category: '基本利用',
  },
  {
    id: '5',
    question: 'API連携は可能ですか？',
    answer:
      '現在はAPI連携機能を提供しておりませんが、お客様のご要望に応じて開発いたします。連携時は、音声ファイルを弊社指定のS3バケットまたはお客様指定のS3バケットにアップロードいただき、ボイテキ！から取得して分析いたします。既存システムとの連携が必要な場合は、お気軽にお問い合わせください。',
    category: '基本利用',
  },

  // 機能・精度
  {
    id: '47',
    question: '感情分析の精度はどのくらいですか？',
    answer:
      'ChatGPT（GPT-4）とAmazon Bedrock Claude 3モデルを活用し、高い精度での分析を目指しています。5軸（価格敏感度、品質重視度、購入意欲、不安・懸念、満足度）による深層分析を提供しています。',
    category: '機能・精度',
  },
  {
    id: '6',
    question: '感情やNGワードの判定精度はどの程度ですか？',
    answer:
      '日本語に最適化されたLLMを活用しており、実務での活用にも耐えうる精度を実現しています。感情分析は90%以上、NGワード検出は95%以上の精度を実現しています。',
    category: '機能・精度',
  },
  {
    id: '7',
    question: '音声認識の精度はどの程度ですか？',
    answer:
      '日本語に特化した音声認識エンジンを使用しており、一般的な会話で95%以上の精度を実現しています。雑音環境や方言にも対応し、ビジネス用途に十分な精度を提供します。',
    category: '機能・精度',
  },
  {
    id: '8',
    question: 'リアルタイム分析は可能ですか？',
    answer:
      '現在はリアルタイム分析機能を提供しておりません。音声ファイルのアップロード後、バッチ処理による分析となります。リアルタイム分析をご希望の場合は、お客様のご要望に応じて開発いたします。',
    category: '機能・精度',
  },
  {
    id: '9',
    question: '多言語対応はしていますか？',
    answer:
      '現在は日本語に最適化されていますが、英語・中国語・韓国語にも対応予定です。お客様のご要望に応じて優先的に開発を進めます。',
    category: '機能・精度',
  },

  // 活用方法
  {
    id: '10',
    question: 'カスハラ対策にどのように活用できますか？',
    answer:
      'NGワード検出機能により、ハラスメント発言を自動検出し、早期発見・対策を支援します。感情分析で従業員のストレス状態も把握できます。',
    category: '活用方法',
  },
  {
    id: '11',
    question: 'ボイテキレック！との連携は可能ですか？',
    answer:
      'はい、ボイテキレック！で録音した音声データをボイテキ！で分析・検索することができます。',
    category: '活用方法',
  },
  {
    id: '12',
    question: '営業セールス分析はどのように行いますか？',
    answer:
      '営業トークの効果分析、顧客の感情変化追跡、ウィークポイント抽出、成功パターンの分析などができます。プロンプトとNGワードの設定により、営業活動に特化した分析を実行できます。',
    category: '活用方法',
  },
  {
    id: '13',
    question: 'コールセンターの品質管理に活用できますか？',
    answer:
      'はい、応対品質の自動評価、NGワード検出、感情分析により、コールセンターの品質管理を効率化できます。定量的な評価指標でオペレーターの育成をサポートします。',
    category: '活用方法',
  },
  {
    id: '14',
    question: '教育・研修での活用方法を教えてください。',
    answer:
      '研修音声の分析により、受講者の理解度や関心度を可視化できます。講師の話し方や内容の効果を定量的に評価し、研修の質向上に活用できます。',
    category: '活用方法',
  },

  // 料金・契約
  {
    id: '45',
    question: '料金はどのように計算されますか？',
    answer:
      '音声解析時間 1時間あたり 1,500円の従量課金制です。解析を実施した音声の時間のみが課金対象となります。録音時間や通話時間ではなく、実際に解析処理を行った時間に対して課金されます。ダッシュボードでリアルタイムに利用状況を確認できます。月額固定プランもご相談に応じます。',
    category: '料金・契約',
  },
  {
    id: '46',
    question: 'コストパフォーマンスは良いですか？',
    answer:
      '契約率10%向上で月間100万円の売上増があれば、投資額の約8倍の効果が期待されます。ROIは通常3ヶ月以内に達成される可能性があります。',
    category: '料金・契約',
  },
  {
    id: '15',
    question: '料金プランについて教えてください。',
    answer:
      '従量課金制で、解析時間1時間あたり1,500円（税込）です。この料金には外部AIサービス（ChatGPT、Gemini等）の利用料も含まれており、追加料金は発生しません。月額契約不要で、使った分だけお支払いいただけます。標準エンジンは無料でご利用いただけます。',
    category: '料金・契約',
  },
  {
    id: '16',
    question: '解約時の料金はどうなりますか？',
    answer:
      '従量課金制のため、解約時の違約金はありません。使用した分のみの料金をお支払いいただくだけで、いつでも解約可能です。',
    category: '料金・契約',
  },
  {
    id: '36',
    question: '外部AIサービスの利用料は別途必要ですか？',
    answer:
      'いいえ、必要ありません。ボイテキ！の料金（解析時間1時間あたり1,500円）には、外部AIサービス（ChatGPT、Gemini等）の利用料もすべて含まれています。追加料金は一切発生しません。',
    category: '料金・契約',
  },
  {
    id: '37',
    question: 'API連携時の音声ファイルの受け渡し方法を教えてください。',
    answer:
      'API連携時は、音声ファイルをS3バケット経由で受け渡しします。弊社指定のS3バケットまたはお客様指定のS3バケットに音声ファイルをアップロードいただき、ボイテキ！から取得して分析いたします。セキュリティ面でも安全な方法でデータをやり取りできます。',
    category: '基本利用',
  },

  // セキュリティ・サポート
  {
    id: '18',
    question: 'データのセキュリティは大丈夫ですか？',
    answer:
      'はい、お客様のデータは最高レベルのセキュリティで保護されています。SSL暗号化通信、データの暗号化保存、アクセスログの記録、定期的なセキュリティ監査を実施しています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '48',
    question: 'サポート体制はどうなっていますか？',
    answer:
      '導入支援、研修・トレーニング、継続サポートを提供しています。お問い合わせフォームからのサポートも対応しています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '19',
    question: 'サポート体制はどうなっていますか？',
    answer:
      'メールサポート、電話サポート、オンラインヘルプを提供しています。導入時は専任のサポート担当がお客様の環境に合わせた設定をサポートします。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '49',
    question: 'セキュリティ対策はどうなっていますか？',
    answer:
      'Webアプリケーションファイアウォール（WAF）、AWS Cognito認証、JWT認証、入力値サニタイゼーションなど、多層的なセキュリティ対策を実装しています。データは暗号化されて保存されます。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '20',
    question: 'データの保存期間はどのくらいですか？',
    answer:
      'お客様のデータは最大1年間保存されます。期間を過ぎたデータは自動的に削除されます。必要に応じて、データのエクスポートも可能です。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '21',
    question: '導入事例はありますか？',
    answer:
      '証券会社、生命保険会社、損害保険会社、弁護士事務所、税理士事務所、通信販売会社、不動産会社、コールセンター事業社など様々な業界でトライアル導入をいただいています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '22',
    question: '個人でも利用できますか？',
    answer:
      '申し訳ございませんが、ボイテキ！は法人のお客様のみご利用いただけます。個人事業主の方もご利用いただけません。法人登録が必要なサービスとなっております。',
    category: '基本利用',
  },
  {
    id: '23',
    question: '法人登録の条件はありますか？',
    answer:
      '株式会社、有限会社、合同会社、一般社団法人、NPO法人など、法人格をお持ちの組織であればご利用いただけます。',
    category: '基本利用',
  },
  {
    id: '24',
    question: '他社のデータと混在することはありませんか？',
    answer:
      'いいえ、混在することはありません。ボイテキ！は個社別に仮想環境を提供しており、マルチテナントではありません。お客様のデータは完全に分離された専用環境で処理され、他社のデータと混在することは一切ありません。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '25',
    question: 'データの分離はどのように行われていますか？',
    answer:
      'お客様ごとに専用の仮想環境を構築し、物理的・論理的に完全に分離しています。データベース、ストレージ、処理リソースすべてが個別に管理され、他社のデータにアクセスすることは技術的に不可能な設計となっています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '26',
    question: 'サーバーはどこにありますか？',
    answer:
      '処理用のサーバーは日本国内のデータセンターに設置されています。お客様の音声データは日本国内で処理されるため、データの国外流出の心配はありません。GDPRや各国のデータ保護法規制への対応も考慮した設計となっています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '27',
    question: '認証システムはどのようなものを使っていますか？',
    answer:
      'AWS Cognitoを使用したセキュアな認証システムを採用しています。多要素認証（MFA）にも対応し、企業レベルのセキュリティ要件を満たしています。アクセスログの記録と監査機能も充実しています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '28',
    question: 'データの保存はどのように行われていますか？',
    answer:
      'API連携時の音声ファイルとバックアップデータは、AWS S3に個社別のバケットを分けて保存しています。各お客様のデータは完全に分離された専用バケットで管理され、他社のデータにアクセスすることはできません。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '29',
    question: 'データの保存期間はどのくらいですか？',
    answer:
      'アップロードされた音声ファイルは1週間のみ保存されます。解析結果は最大1年間保存され、期間を過ぎたデータは自動的に削除されます。必要に応じて、データのエクスポートも可能です。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '30',
    question:
      'AI処理で外部サービスを使用する際のデータの取り扱いはどうなっていますか？',
    answer:
      '音声解析処理では、ChatGPTやGeminiなどの外部AIサービスを使用する場合があります。有料プランを使用していても、データは海外のサーバーに送信されます。ただし、これらのサービスではデータの蓄積や学習利用は行われず、処理完了後にデータは削除されます。機密性の高いデータの処理については事前にご相談ください。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '31',
    question: 'データの国外流出を完全に避けることはできますか？',
    answer:
      'はい、可能です。国内専用の処理オプションをご用意しており、すべての処理を日本国内のサーバーで完結させることができます。この場合、外部AIサービスを使用せず、国内のAIエンジンのみで処理を行います。処理精度や機能に一部制限が生じる場合がありますので、詳細はお問い合わせください。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '32',
    question: '外部AIサービス使用時のデータ保護措置はありますか？',
    answer:
      '外部AIサービス使用時は、データの最小化原則に基づき、必要最小限のデータのみを送信します。また、送信前にデータの匿名化やマスキング処理を行い、個人情報の保護を図っています。各AIサービスプロバイダーとのデータ処理契約も締結し、適切なデータ保護措置を講じています。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '33',
    question: '有料プランでもデータが海外に送信されるのはなぜですか？',
    answer:
      'ChatGPTやGeminiの有料プランでも、データは海外のサーバーに送信されます。これは、これらのAIサービスがグローバルなインフラストラクチャを使用しているためです。ただし、有料プランではデータの蓄積や学習利用は行われず、処理完了後にデータは削除されます。データの永続的な保存や学習への利用はありません。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '34',
    question: '外部AIサービスの利用規約について教えてください。',
    answer:
      '外部AIサービス（OpenAI、Google Gemini等）を使用する際は、各サービスの利用規約に準じます。お客様のデータがこれらのサービスに送信される場合、各プロバイダーの利用規約とプライバシーポリシーが適用されます。詳細な利用規約については、各サービスの公式サイトをご確認ください。',
    category: 'セキュリティ・サポート',
  },
  {
    id: '35',
    question: '利用規約の変更があった場合はどうなりますか？',
    answer:
      '外部AIサービスの利用規約が変更された場合は、当社のサービス提供方法も影響を受ける可能性があります。重要な変更があった場合は、お客様に事前にご連絡いたします。また、利用規約の変更によりサービス提供が困難になった場合は、代替手段をご提案いたします。',
    category: 'セキュリティ・サポート',
  },
];

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 利用可能なカテゴリを取得
  const availableCategories = Array.from(
    new Set(faqData.map((item) => item.category ?? '未分類'))
  ).sort();

  // 検索とカテゴリでフィルタリング
  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      (item.category ?? '未分類') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = filteredFaqs.reduce(
    (acc, item) => {
      const category = item.category ?? '未分類';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, FaqItem[]>
  );

  return (
    <>
      <StructuredData type="faq" />
      <main className="p-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">よくあるご質問</h1>
        <p className="mb-8 text-gray-500">
          ボイテキ！についてよくいただくご質問と回答をまとめています。
        </p>

        {/* 検索フィールド */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="キーワードで検索"
            className="w-full rounded-md border p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* カテゴリフィルター - ボタン形式 */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-gray-700">
            カテゴリで絞り込み
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              すべて
            </button>
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ一覧 */}
        {Object.entries(groupedFaqs).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              {category}
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="mb-2 font-medium text-gray-900">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">
              該当する質問が見つかりませんでした。
            </p>
          </div>
        )}
      </main>
    </>
  );
}
