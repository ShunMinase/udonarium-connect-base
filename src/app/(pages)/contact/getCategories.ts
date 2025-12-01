import { client, Category } from "@/app/_modules/microcms";

/**
 * microCMSからカテゴリー一覧を取得
 * @returns カテゴリー名の配列
 */
export async function getCategories(): Promise<string[]> {
  try {
    const response = await client.get<{ contents: Category[] }>({
      endpoint: "category",
      queries: {
        fields: "name",
        limit: 100,
      },
    });

    return response.contents.map((category) => category.name);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return ["3D", "映像制作", "デザイン", "イラスト", "その他"];
  }
}
