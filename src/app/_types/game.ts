/**
 * ボードゲームの型定義
 */

export type Genre =
  | "戦略"
  | "協力"
  | "パーティー"
  | "推理"
  | "カードゲーム"
  | "ダイス"
  | "その他";

export interface Game {
  id: string;
  title: string;
  titleKana: string;
  description: string;
  imageUrl: string;
  playerCount: {
    min: number;
    max: number;
  };
  playTime: {
    min: number;
    max: number;
  };
  genres: Genre[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  releaseYear: number;
  publisher: string;
  designer: string;
  purchaseLinks: {
    name: string;
    url: string;
  }[];
  isNew?: boolean;
  isPickup?: boolean;
}
