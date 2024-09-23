/**
 * 指定された幅と高さの2次元配列（マトリックス）を作成します。
 * @param {number} w - マトリックスの幅
 * @param {number} h - マトリックスの高さ
 * @returns {number[][]} - 0で初期化された2次元配列
 */
export function createMatrix(w, h) {
  return Array.from({ length: h }, () => Array(w).fill(0));
}

/**
 * マトリックスを時計回りに90度回転させます。
 * この関数は元のマトリックスを直接変更します。
 * @param {number[][]} matrix - 回転させるマトリックス
 */
export function rotate(matrix) {
  // マトリックスの転置を行う（行と列を入れ替える）
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      // 対角線を軸に要素を交換
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }

  // 各行を反転させて90度回転を完成させる
  matrix.forEach((row) => row.reverse());
}
