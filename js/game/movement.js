import { collide } from './collision.js';
import { rotate } from '../utils/matrix.js';

/**
 * プレイヤーのピースを指定された方向に移動させます。
 * @param {Array} arena - ゲームエリアの状態を表す2次元配列
 * @param {Object} player - 移動させるプレイヤーオブジェクト
 * @param {number} dir - 移動する方向（-1は左、1は右）
 */
export function playerMove(arena, player, dir) {
  // プレイヤーの位置を指定された方向に移動
  player.pos.x += dir;

  // 移動後に衝突が発生した場合、元の位置に戻す
  if(collide(arena, player)){
    player.pos.x -= dir;
  }
}

/**
 * プレイヤーのピースを回転させます。
 * 回転後に衝突が発生した場合、左右に移動して衝突を回避しようとします。
 * @param {Array} arena - ゲームエリアの状態を表す2次元配列
 * @param {Object} player - 回転させるプレイヤーオブジェクト
 */
export function playerRotate(arena, player) {
  const pos = player.pos.x; // 元の位置を保存
  let offset = 1; // 左右への移動量を初期化

  //ピースを回転させる
  rotate(player.matrix);

  while (collide(arena, player)) {
    // 回転後に衝突が発生する間、左右に移動を試みる
    player.pos.x += offset;

    // 次の試行では反対方向に、より大きな幅で移動
    offset = -(offset + (offset > 0 ? 1 : -1));

    // 移動幅がピースの幅を超えた場合、回転をキャンセル
    if(Math.abs(offset) > player.matrix[0].length) {
      // 回転をもとに戻す
      rotate(player.matrix);
      player.matrix.x = pos;
      return;
    }
  }
}
