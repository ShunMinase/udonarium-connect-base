// 後方互換性のための型定義（非推奨）
// 新しいコードでは @/app/_modules/microcms の型を使用してください

/** @deprecated Use MicroCMSErrorInfo from @/app/_modules/microcms instead */
export type FetchErrorInfo =
  import("@/app/_modules/microcms").MicroCMSErrorInfo;

/** @deprecated Use MicroCMSFetchResult from @/app/_modules/microcms instead */
export interface resType {
  success: boolean;
  contents: any;
  fetchErrorInfo: FetchErrorInfo | null;
}

export type Res<T> = {
  data: Data<T>;
};
export type Data<T> = {
  contents: Contents<T>;
  success: boolean;
};
export type Contents<T> = T;
