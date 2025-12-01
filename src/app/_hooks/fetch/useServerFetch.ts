import { fetchFromMicroCMS } from "./useFetch";
import { MicroCMSParams, MicroCMSFetchResult } from "@/app/_modules/microcms";

/**
 * microCMS専用のサーバーサイドfetch関数
 * 共通エラーハンドリングを担う
 */
export async function useServerFetch<T = any>(
  params: MicroCMSParams
): Promise<MicroCMSFetchResult<T>> {
  try {
    const { endpoint, contentId, queries, revalidate = false } = params;

    const result = await fetchFromMicroCMS<T>(
      { endpoint, contentId, queries },
      revalidate
    );

    if (!result.success) {
      console.error("❌ useServerFetch error:", result.errorInfo);
    } else {
      console.log("✅ useServerFetch success:", { endpoint, contentId });
    }

    return result;
  } catch (error: any) {
    console.error("❌ useServerFetch unexpected error:", error);

    return {
      success: false,
      contents: null,
      errorInfo: {
        error,
        response: null,
        message: error?.message || "サーバーエラーが発生しました",
        status: "500",
        statusText: "Internal Server Error",
        requestUrl: params.endpoint,
      },
    };
  }
}
