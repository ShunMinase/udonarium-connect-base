import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import {
  MICROCMS_API_KEY,
  MICROCMS_SERVICE_DOMAIN,
} from "../_config/Constants";

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

// ==================== 型定義 ====================

// microCMSの基本コンテンツ型（全コンテンツが持つ共通フィールド）
export interface MicroCMSContent {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// microCMSリストレスポンス型
export interface MicroCMSListResponse<T extends MicroCMSContent> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 単一コンテンツレスポンス型
export type MicroCMSObjectResponse<T extends MicroCMSContent> = T;

// 汎用的なmicroCMSレスポンス型
export type MicroCMSResponse<T extends MicroCMSContent> =
  | MicroCMSListResponse<T>
  | MicroCMSObjectResponse<T>;

// ==================== パラメータ型 ====================

// microCMS用のエンドポイント情報
export interface MicroCMSEndpointInfo {
  endpoint: string;
  contentId?: string;
  queries?: MicroCMSQueries;
}

// microCMS用のパラメータ型（フック用）
export interface MicroCMSParams {
  endpoint: string;
  contentId?: string;
  queries?: MicroCMSQueries;
  revalidate?: boolean;
}

// ==================== エラー関連 ====================

// microCMS用のエラークラス
export class MicroCMSError extends Error {
  response: any;
  constructor(message: string, res: any) {
    super(message);
    this.response = res;
  }
}

// エラー情報の型
export interface MicroCMSErrorInfo {
  error: any;
  response: any;
  message: string;
  status: string;
  statusText: string;
  requestUrl: string;
}

// ==================== レスポンス型 ====================

// 基本的なレスポンス型
export interface MicroCMSFetchResult<T = any> {
  success: boolean;
  contents: T | null;
  errorInfo: MicroCMSErrorInfo | null;
}

// ==================== 具体的なコンテンツ型 ====================

// Worksエンドポイント用のコンテンツ型（新スキーマに対応）
export interface WorkContent extends MicroCMSContent {
  title: string; // タイトル
  thumbnailImage?: {
    url: string;
  };
  thumbnailMovieUrl?: string;
  clientName?: string; // クライアント名
  publishDate: string; // 公開年
  content?: string; // 本文（richEditorV2）
  // subject?: string; // 担当範囲
  category: Category[]; // カテゴリー（必須）
  // excerpt?: string;
  credit?: string; // クレジット
}

// カテゴリー用の型
export interface Category extends MicroCMSContent {
  name: string;
  slug: string;
}

// プロフィール用の型(新スキーマに対応)
export interface ProfileContent extends MicroCMSContent {
  fvYouTubeUrl: string; // ファーストビュー用YouTube URL
  policyHeadForTop: string; // トップ用ポリシーヘッド
  policyContentForTop: string; // トップ用ポリシーコンテンツ
  policyHead: string; // ポリシーヘッド
  policyContent: string; // ポリシーコンテンツ
  name: string; // 名前
  position: string; // 役職
  profileHistory: string; // プロフィール履歴
  profileHead: string; // プロフィールヘッド
  profileContent: string; // プロフィールコンテンツ
  communityHead: string; // コミュニティヘッド
  communityContent: string; // コミュニティコンテンツ
}

// ==================== 型の再エクスポート ====================
export type { MicroCMSQueries };
