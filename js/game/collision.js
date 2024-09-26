/**
 * プレイヤーのピースとアリーナ（ゲームフィールド）との衝突を検出します。
 * @param {number[][]} arena - ゲームフィールドを表す2次元配列
 * @param {Object} player - プレイヤーオブジェクト
 * @param {number[][]} player.matrix - プレイヤーのピースを表す2次元配列
 * @param {Object} player.pos - プレイヤーのピースの位置
 * @param {number} player.pos.x - ピースのX座標
 * @param {number} player.pos.y - ピースのY座標
 * @returns {boolean} - 衝突が検出された場合はtrue、そうでない場合はfalse
 */
export function collide(arena, player) {
  // プレイヤーのピースとその位置を取得
  const [playerMatrix, playerPosition] = [player.matrix, player.pos];
  // プレイヤーのピースの各セルについて衝突チェックを行う
  return playerMatrix.some((row, y) =>
    row.some(
      // プレイヤーのピースの行（row）の各セル（value）と列のインデックス（x）をループする
      (value, x) =>
        value !== 0 && // セルが空でない場合（ピースの一部がある場合）
        (arena[y + playerPosition.y] && // アリーナの該当する行が存在するかを確認
          arena[y + playerPosition.y][x + playerPosition.x]) !== 0 // アリーナの該当するセルが空でない場合（衝突している場合）
    )
  );
}
