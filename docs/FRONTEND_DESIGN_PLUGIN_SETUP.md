# Frontend Design Plugin 導入手順

このドキュメントは、claude-codeの[frontend-design plugin](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)をプロジェクトに導入する手順をまとめたものです。

## 概要

Frontend Design Pluginは、一般的なAI生成コードにありがちな没個性的なデザインを避け、独創的で洗練されたフロントエンドインターフェースを生成するためのプラグインです。

### 主な機能

- 大胆な美的選択
- 独特なタイポグラフィとカラーパレット
- 高品質なアニメーションと視覚的ディテール
- コンテキストを考慮した実装

## 導入済みファイル構造

```
.claude/
├── settings.json                           # Claude Code設定ファイル
└── plugins/
    └── frontend-design/
        ├── plugin.json                     # プラグインマニフェスト
        ├── README.md                       # プラグイン説明
        └── skills/
            └── frontend-design/
                └── SKILL.md                # スキル定義ファイル
```

## 各ファイルの説明

### `.claude/settings.json`
Claude Codeの設定ファイルで、使用するプラグインを指定します。

### `.claude/plugins/frontend-design/plugin.json`
プラグインのメタデータを定義するマニフェストファイルです。プラグイン名、バージョン、説明、作者情報が含まれています。

### `.claude/plugins/frontend-design/README.md`
プラグインの概要と使用方法を説明するドキュメントです。

### `.claude/plugins/frontend-design/skills/frontend-design/SKILL.md`
プラグインの中核となるスキル定義ファイルです。以下の内容が含まれています：

- **Design Thinking**: デザイン前の思考プロセス
  - 目的とユーザーの理解
  - 美的方向性の選択（ミニマル、マキシマリスト、レトロフューチャー等）
  - 技術的制約の考慮
  - 差別化要素の決定

- **Frontend Aesthetics Guidelines**: フロントエンド美学ガイドライン
  - タイポグラフィ: 独特で美しいフォント選択
  - カラー&テーマ: 統一感のある配色
  - モーション: アニメーションとマイクロインタラクション
  - 空間構成: 予想外のレイアウト、非対称性
  - 背景&ビジュアル: 雰囲気と深みの演出

## 使用方法

プラグイン導入後、Claude Codeでフロントエンド開発を行う際に自動的にこのスキルが適用されます。

### 使用例

```
"音楽ストリーミングアプリのダッシュボードを作成して"
"AIセキュリティスタートアップのランディングページを構築して"
"ダークモード対応の設定パネルをデザインして"
```

Claudeは明確な美的方向性を選択し、細部にまでこだわった本番品質のコードを実装します。

## 注意事項

### 避けるべきもの

プラグインは以下のような一般的なAI生成デザインを避けるよう設計されています：

- ❌ 使い古されたフォントファミリー（Inter, Roboto, Arial等）
- ❌ 陳腐なカラースキーム（特に白背景に紫のグラデーション）
- ❌ 予測可能なレイアウトとコンポーネントパターン
- ❌ コンテキスト固有の個性を欠いたクッキーカッター的なデザイン

### 推奨される実装

- ✅ コンテキストに合わせた創造的な選択
- ✅ 各デザインをユニークに保つ
- ✅ ライト/ダークテーマの変化
- ✅ 美的ビジョンに実装の複雑さをマッチさせる

## 参考リンク

より詳細なガイダンスについては、以下のリソースを参照してください：

- [Frontend Aesthetics Cookbook](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)
- [オリジナルプラグインリポジトリ](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)

## トラブルシューティング

### プラグインが認識されない場合

1. ファイル構造が正しいか確認
2. `.claude/settings.json`でプラグインパスが正しく指定されているか確認
3. Claude Codeを再起動

### スキルが適用されない場合

フロントエンド開発のリクエストであることを明確に伝えてください。例：
- "Reactコンポーネントを作成して"
- "HTMLページをデザインして"
- "UIを構築して"

## 更新履歴

- 2025-12-02: 初回導入
  - plugin.json作成
  - SKILL.md導入
  - README.md作成
  - settings.json設定

## ライセンス

このプラグインはAnthropicによって開発されたものです。詳細はオリジナルリポジトリのLICENSE.txtを参照してください。
