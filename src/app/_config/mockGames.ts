import { Game } from "@/app/_types/game";

/**
 * モックゲームデータ
 * ユドナリウムコネクト対応のボードゲーム一覧（架空のデータ）
 */

export const MOCK_GAMES: Game[] = [
  {
    id: "starlight-tactics",
    title: "スターライト・タクティクス",
    titleKana: "すたーらいと・たくてぃくす",
    description:
      "宇宙を舞台にした戦略シミュレーションゲーム。資源管理と艦隊配置が勝利の鍵を握る本格派の戦略ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Starlight+Tactics",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 60, max: 120 },
    genres: ["戦略"],
    difficulty: 4,
    releaseYear: 2023,
    publisher: "コスモゲームズ",
    designer: "山田太郎",
    purchaseLinks: [
      { name: "Amazon", url: "https://amazon.co.jp" },
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
    ],
    isPickup: true,
    isNew: false,
  },
  {
    id: "mystery-mansion",
    title: "ミステリー・マンション",
    titleKana: "みすてりー・まんしょん",
    description:
      "館に隠された謎を解き明かせ！プレイヤー全員で協力して真相に迫る推理協力ゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Mystery+Mansion",
    playerCount: { min: 3, max: 6 },
    playTime: { min: 45, max: 90 },
    genres: ["推理", "協力"],
    difficulty: 3,
    releaseYear: 2024,
    publisher: "ミステリー出版",
    designer: "佐藤花子",
    purchaseLinks: [
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
    ],
    isPickup: true,
    isNew: true,
  },
  {
    id: "dice-kingdom",
    title: "ダイス・キングダム",
    titleKana: "だいす・きんぐだむ",
    description:
      "ダイスを振って王国を発展させよう。シンプルながら奥深い、ダイスドラフトの傑作。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Dice+Kingdom",
    playerCount: { min: 2, max: 5 },
    playTime: { min: 30, max: 60 },
    genres: ["ダイス", "戦略"],
    difficulty: 2,
    releaseYear: 2023,
    publisher: "キューブゲームズ",
    designer: "田中一郎",
    purchaseLinks: [{ name: "Amazon", url: "https://amazon.co.jp" }],
    isPickup: false,
    isNew: false,
  },
  {
    id: "party-animals",
    title: "パーティー・アニマルズ",
    titleKana: "ぱーてぃー・あにまるず",
    description:
      "動物たちの大騒ぎ！簡単ルールで盛り上がる、家族や友達と楽しめるパーティーゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Party+Animals",
    playerCount: { min: 4, max: 8 },
    playTime: { min: 20, max: 40 },
    genres: ["パーティー"],
    difficulty: 1,
    releaseYear: 2024,
    publisher: "ファンゲームズ",
    designer: "鈴木美咲",
    purchaseLinks: [
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "forgotten-ruins",
    title: "忘れられた遺跡",
    titleKana: "わすれられたいせき",
    description:
      "古代遺跡を探検し、財宝を持ち帰ろう。協力と裏切りが交錯する冒険ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Forgotten+Ruins",
    playerCount: { min: 3, max: 5 },
    playTime: { min: 60, max: 90 },
    genres: ["協力", "戦略"],
    difficulty: 3,
    releaseYear: 2023,
    publisher: "アドベンチャーゲームズ",
    designer: "高橋健太",
    purchaseLinks: [
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
    ],
    isPickup: true,
    isNew: false,
  },
  {
    id: "card-collection",
    title: "カードコレクション",
    titleKana: "かーどこれくしょん",
    description:
      "珍しいカードを集めてコレクションを完成させよう。シンプルながら戦略性の高いカードゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Card+Collection",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 30, max: 45 },
    genres: ["カードゲーム"],
    difficulty: 2,
    releaseYear: 2024,
    publisher: "カードマスター",
    designer: "伊藤さくら",
    purchaseLinks: [
      { name: "Amazon", url: "https://amazon.co.jp" },
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "space-explorers",
    title: "スペース・エクスプローラーズ",
    titleKana: "すぺーす・えくすぷろーらーず",
    description:
      "未知の惑星を探検し、新しい資源を発見せよ。協力して宇宙の謎を解き明かす冒険ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Space+Explorers",
    playerCount: { min: 2, max: 5 },
    playTime: { min: 45, max: 75 },
    genres: ["協力", "戦略"],
    difficulty: 3,
    releaseYear: 2023,
    publisher: "ギャラクシーゲームズ",
    designer: "渡辺拓也",
    purchaseLinks: [{ name: "駿河屋", url: "https://www.suruga-ya.jp/" }],
    isPickup: false,
    isNew: false,
  },
  {
    id: "night-market",
    title: "ナイト・マーケット",
    titleKana: "ないと・まーけっと",
    description:
      "夜の市場で商売繁盛！他のプレイヤーと交渉して最高の利益を目指そう。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Night+Market",
    playerCount: { min: 3, max: 6 },
    playTime: { min: 40, max: 60 },
    genres: ["戦略", "カードゲーム"],
    difficulty: 2,
    releaseYear: 2024,
    publisher: "マーケットゲームズ",
    designer: "中村雅人",
    purchaseLinks: [
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
      { name: "Amazon", url: "https://amazon.co.jp" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "detective-club",
    title: "探偵クラブ",
    titleKana: "たんていくらぶ",
    description:
      "仲間と協力して事件を解決！推理力と観察力が試される本格推理ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Detective+Club",
    playerCount: { min: 4, max: 8 },
    playTime: { min: 30, max: 45 },
    genres: ["推理", "パーティー"],
    difficulty: 2,
    releaseYear: 2023,
    publisher: "デティクティブ出版",
    designer: "小林美紀",
    purchaseLinks: [{ name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" }],
    isPickup: true,
    isNew: false,
  },
  {
    id: "dragon-quest",
    title: "ドラゴンクエスト",
    titleKana: "どらごんくえすと",
    description:
      "ドラゴンを倒して王国を救え！プレイヤー全員で協力する壮大なファンタジーRPG。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Dragon+Quest",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 90, max: 150 },
    genres: ["協力", "戦略"],
    difficulty: 4,
    releaseYear: 2023,
    publisher: "ファンタジーゲームズ",
    designer: "加藤竜也",
    purchaseLinks: [
      { name: "Amazon", url: "https://amazon.co.jp" },
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
    ],
    isPickup: false,
    isNew: false,
  },
  {
    id: "word-puzzle",
    title: "ワードパズル",
    titleKana: "わーどぱずる",
    description:
      "文字を組み合わせて言葉を作ろう。語彙力が試される楽しい言葉遊びゲーム。",
    imageUrl: "https://placehold.jp/ff9966/ffffff/400x300.png?text=Word+Puzzle",
    playerCount: { min: 2, max: 6 },
    playTime: { min: 20, max: 30 },
    genres: ["パーティー", "その他"],
    difficulty: 1,
    releaseYear: 2024,
    publisher: "ワードゲームズ",
    designer: "森本和也",
    purchaseLinks: [
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "forest-spirits",
    title: "フォレスト・スピリッツ",
    titleKana: "ふぉれすと・すぴりっつ",
    description:
      "森の精霊たちと協力して自然を守ろう。美しいアートワークと心温まるストーリーが魅力。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Forest+Spirits",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 45, max: 75 },
    genres: ["協力"],
    difficulty: 2,
    releaseYear: 2024,
    publisher: "ネイチャーゲームズ",
    designer: "藤田あゆみ",
    purchaseLinks: [{ name: "Amazon", url: "https://amazon.co.jp" }],
    isPickup: true,
    isNew: true,
  },
  {
    id: "city-builder",
    title: "シティビルダー",
    titleKana: "してぃびるだー",
    description:
      "理想の都市を建設しよう。資源管理と都市計画が鍵となる本格的な戦略ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=City+Builder",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 60, max: 90 },
    genres: ["戦略"],
    difficulty: 3,
    releaseYear: 2023,
    publisher: "アーバンゲームズ",
    designer: "橋本誠",
    purchaseLinks: [
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
    ],
    isPickup: false,
    isNew: false,
  },
  {
    id: "pirate-treasure",
    title: "パイレーツ・トレジャー",
    titleKana: "ぱいれーつ・とれじゃー",
    description:
      "海賊となって宝を探せ！他のプレイヤーと競い合う海洋冒険ゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Pirate+Treasure",
    playerCount: { min: 3, max: 6 },
    playTime: { min: 40, max: 70 },
    genres: ["戦略", "ダイス"],
    difficulty: 2,
    releaseYear: 2024,
    publisher: "シーゲームズ",
    designer: "木村悠太",
    purchaseLinks: [
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "time-traveler",
    title: "タイムトラベラー",
    titleKana: "たいむとらべらー",
    description:
      "時空を超えて歴史を変えろ！時間移動を駆使した革新的な戦略ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Time+Traveler",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 60, max: 100 },
    genres: ["戦略"],
    difficulty: 4,
    releaseYear: 2023,
    publisher: "タイムゲームズ",
    designer: "松本真一",
    purchaseLinks: [
      { name: "Amazon", url: "https://amazon.co.jp" },
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
    ],
    isPickup: false,
    isNew: false,
  },
  {
    id: "magic-academy",
    title: "マジック・アカデミー",
    titleKana: "まじっく・あかでみー",
    description:
      "魔法学校で最高の魔法使いを目指せ！カード収集とデッキ構築が楽しいカードゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Magic+Academy",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 45, max: 60 },
    genres: ["カードゲーム", "戦略"],
    difficulty: 3,
    releaseYear: 2024,
    publisher: "マジックゲームズ",
    designer: "岡田麻衣",
    purchaseLinks: [
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
    ],
    isPickup: true,
    isNew: true,
  },
  {
    id: "ninja-mission",
    title: "ニンジャ・ミッション",
    titleKana: "にんじゃ・みっしょん",
    description:
      "忍者となって極秘任務を遂行せよ！ステルスアクションが楽しい協力ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Ninja+Mission",
    playerCount: { min: 2, max: 5 },
    playTime: { min: 30, max: 60 },
    genres: ["協力", "戦略"],
    difficulty: 2,
    releaseYear: 2023,
    publisher: "サムライゲームズ",
    designer: "井上剛",
    purchaseLinks: [{ name: "Amazon", url: "https://amazon.co.jp" }],
    isPickup: false,
    isNew: false,
  },
  {
    id: "dessert-party",
    title: "デザート・パーティー",
    titleKana: "でざーと・ぱーてぃー",
    description:
      "お菓子を集めて最高のパーティーを開こう！可愛いイラストが魅力のライトゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Dessert+Party",
    playerCount: { min: 3, max: 6 },
    playTime: { min: 20, max: 35 },
    genres: ["パーティー", "カードゲーム"],
    difficulty: 1,
    releaseYear: 2024,
    publisher: "スイーツゲームズ",
    designer: "斉藤真奈美",
    purchaseLinks: [
      { name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" },
      { name: "駿河屋", url: "https://www.suruga-ya.jp/" },
    ],
    isPickup: false,
    isNew: true,
  },
  {
    id: "galaxy-empire",
    title: "ギャラクシー・エンパイア",
    titleKana: "ぎゃらくしー・えんぱいあ",
    description: "銀河帝国を築き上げろ！壮大なスケールの宇宙戦略ゲーム。",
    imageUrl:
      "https://placehold.jp/ff9966/ffffff/400x300.png?text=Galaxy+Empire",
    playerCount: { min: 3, max: 5 },
    playTime: { min: 90, max: 180 },
    genres: ["戦略"],
    difficulty: 5,
    releaseYear: 2023,
    publisher: "スペースゲームズ",
    designer: "石川大輔",
    purchaseLinks: [
      { name: "イエローサブマリン", url: "https://www.yellowsubmarine.co.jp/" },
      { name: "Amazon", url: "https://amazon.co.jp" },
    ],
    isPickup: false,
    isNew: false,
  },
  {
    id: "animal-rescue",
    title: "アニマル・レスキュー",
    titleKana: "あにまる・れすきゅー",
    description:
      "動物たちを救出しよう！心温まるストーリーとシンプルなルールが魅力の協力ゲーム。",
    imageUrl:
      "https://placehold.jp/e9527e/ffffff/400x300.png?text=Animal+Rescue",
    playerCount: { min: 2, max: 4 },
    playTime: { min: 30, max: 50 },
    genres: ["協力"],
    difficulty: 2,
    releaseYear: 2024,
    publisher: "アニマルゲームズ",
    designer: "大野佳奈",
    purchaseLinks: [{ name: "ボドゲーマ", url: "https://bodoge.hoobby.net/" }],
    isPickup: false,
    isNew: true,
  },
];

// ピックアップゲームを取得
export const getPickupGames = (): Game[] => {
  return MOCK_GAMES.filter((game) => game.isPickup);
};

// 新作ゲームを取得
export const getNewGames = (): Game[] => {
  return MOCK_GAMES.filter((game) => game.isNew);
};

// IDでゲームを取得
export const getGameById = (id: string): Game | undefined => {
  return MOCK_GAMES.find((game) => game.id === id);
};

// ジャンルでゲームを絞り込み
export const getGamesByGenre = (genre: string): Game[] => {
  return MOCK_GAMES.filter((game) => game.genres.includes(genre as any));
};

// プレイ人数でゲームを絞り込み
export const getGamesByPlayerCount = (playerCount: number): Game[] => {
  return MOCK_GAMES.filter(
    (game) =>
      game.playerCount.min <= playerCount && game.playerCount.max >= playerCount
  );
};

// プレイ時間でゲームを絞り込み
export const getGamesByPlayTime = (playTime: number): Game[] => {
  return MOCK_GAMES.filter(
    (game) => game.playTime.min <= playTime && game.playTime.max >= playTime
  );
};
