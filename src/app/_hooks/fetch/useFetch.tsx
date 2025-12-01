
import {
  client,
  MicroCMSEndpointInfo,
  MicroCMSFetchResult,
  MicroCMSError,
  MicroCMSErrorInfo
} from '@/app/_modules/microcms';

/**
 * microCMS専用のデータ取得関数
 * サーバーサイド・クライアントサイド共通で使用
 */
export async function fetchFromMicroCMS<T = any>(
  endpointInfo: MicroCMSEndpointInfo,
  revalidate: boolean = false
): Promise<MicroCMSFetchResult<T>> {
  try {
    const { endpoint, contentId, queries } = endpointInfo;

    // キャッシュ設定
    const options = {
      customRequestInit: {
        cache: revalidate ? 'no-store' as RequestCache : 'force-cache' as RequestCache
      }
    };

    let response: any;

    // contentIdがある場合は単一コンテンツ取得、ない場合はリスト取得
    if (contentId) {
      response = await client.get({
        endpoint,
        contentId,
        queries,
        ...options
      });
    } else {
      response = await client.getList({
        endpoint,
        queries,
        ...options
      });
    }

    console.log(`✅ Fetched from microCMS: ${endpoint}${contentId ? `/${contentId}` : ''}`, { queries, revalidate });
    console.log(response);

    if (!response) {
      throw new MicroCMSError("データの取得に失敗しました", null);
    }

    return {
      success: true,
      contents: response,
      errorInfo: null
    };

  } catch (error: any) {
    console.error(`❌ microCMS fetch error:`, error);

    const errorInfo = createErrorInfo(error, endpointInfo);
    return {
      success: false,
      contents: null,
      errorInfo
    };
  }
}

/**
 * エラー情報を作成する共通関数
 */
function createErrorInfo(error: any, endpointInfo: MicroCMSEndpointInfo): MicroCMSErrorInfo {
  const requestUrl = `${endpointInfo.endpoint}${endpointInfo.contentId ? `/${endpointInfo.contentId}` : ''}`;

  // エラーメッセージから404を検出
  let status = "500";
  let statusText = "Internal Server Error";

  if (error.response?.status) {
    status = String(error.response.status);
    statusText = error.response.statusText || "Error";
  } else if (error.status) {
    status = String(error.status);
    statusText = error.statusText || "Error";
  } else if (error.message?.includes("404")) {
    // エラーメッセージに "404" が含まれている場合
    status = "404";
    statusText = "Not Found";
  }

  return {
    error: error,
    response: error.response || null,
    message: error.message || "不明なエラーが発生しました",
    status,
    statusText,
    requestUrl: requestUrl,
  };
}

// 後方互換性のため、古いインターフェースもエクスポート（非推奨）
/** @deprecated Use MicroCMSErrorInfo from @/app/_modules/microcms instead */
export type FetchErrorInfo = MicroCMSErrorInfo;