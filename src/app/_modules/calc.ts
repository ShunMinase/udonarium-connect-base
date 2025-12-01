/**
* ランダムな正の整数を生成
* @param {number} min - 最小値
* @param {number} max - 最大値
* @param {number} offset - 結果を若干上振れor下振れさせたい場合に使用
* @return {number} ランダムな整数
* @note offsetに小数を渡した場合は小数が返却される
* @note 0が返却される可能性もあり
*/
export function getRandomInteger(min: number, max: number, offset: number = 0) {
  const num = (Math.floor(Math.random() * (max + 1 - min)) + min) + offset;
  return num <= 0 ? 0 : num;
}

// 低い値に偏るランダムな整数を生成
export function getLowBiasedRandomInteger(min: number, max: number, offset: number = 0) {
  const num = (Math.floor(Math.random() * Math.random() * (max + 1 - min)) + min) + offset;
  return num <= 0 ? 0 : num;
}

/**
* 小数点の桁数をを指定し、四捨五入して返す
* @param {number} number - 対象となる数値 
* @param {number} digit - 小数点の桁数
* @return {number} 四捨五入した値
* @note Math.pow() は累乗を算出する関数で、 Math(x, y) はxのy乗を表す
*/
export function round(number: number, digit: number) {
  const magnification = Math.pow(10, digit);
  return Math.round(number * magnification) / magnification;
};

// タンジェントの値を求める
export function tan(angle: number) {
  return Math.tan((angle * Math.PI) / 180);
}




// ランダムな座標を15個配列で作成
// それぞれの座標が近くなりすぎないようにする
// 新しく生成した座標が既存の座標の配列と近すぎる場合は再生成
// 生成数が上限に達するまで繰り返す
export function createRandomCoordinatesArray() {
  const counterMax = 15;

  const coordinatesArray: { x: number, y: number }[] = [];
  const coordinatesXArray: number[] = [];
  const coordinatesYArray: number[] = [];

  const randomRangeMinX = 10  // 描画を許可する座標の横の範囲(vw)
  const randomRangeMaxX = 90  // 描画を許可する座標の横の範囲(vw)
  // randomNumHistoryX: [],  // 生成した乱数の履歴
  const randomRangeMinY = 0  // 描画を許可する座標の縦の範囲(vh)
  const randomRangeMaxY = 60  // 描画を許可する座標の縦の範囲(vh)

  // 座標Xの生成
  for (let i = 0; i < counterMax; i++) {

    const randomX = getRandomInteger(randomRangeMinX, randomRangeMaxX);
    // 生成した座標が既存の座標と近すぎる場合は再生成
    if (coordinatesXArray.some(coordinate => Math.abs(coordinate - (randomX)) <= 2)) {
      i--;
      continue;
    }
    coordinatesXArray.push(randomX);
  }


  // 座標Yの生成
  for (let i = 0; i < counterMax; i++) {
    const randomY = getRandomInteger(randomRangeMinY, randomRangeMaxY);  // ループ回数分下振れさせる
    if (coordinatesYArray.some(coordinate => Math.abs(coordinate - randomY) <= 2)) {
      i--;
      continue;
    }
    coordinatesYArray.push(randomY - i);
  }


  for (let i = 0; i < counterMax; i++) {
    coordinatesArray.push({
      x: coordinatesXArray[i],
      y: coordinatesYArray[i],
    });
  }
  
  return coordinatesArray;
}
