import { state } from '../core/gameState.js';
import { player } from '../core/player.js';
import { arena } from '../core/arena.js';
// import { resetHold } from '../hold.js';
import { collide } from './collision.js';
import { arenaSweep } from './scoring.js';
import { draw } from '../ui/draw.js';
import { initializePlayer, updateScore } from './initialization.js';

/**
 * ゲームの更新ループを処理する関数
 * @param {number} time - 現在のタイムスタンプ
 */
export function update(time = 0) {
  const deltaTime = time - state.lastTime;
  state.lastTime = time;
  state.dropCounter += deltaTime;

  // 一定時間が経過したらピースを落下させる
  if (state.dropCounter > state.dropInterval) {
    playerDrop();
  }
  // ゲームオーバーでなく、一時停止中でもない場合、ゲームを描画し次のフレームをリクエスト
  if (!state.gameOver && !state.paused) {
    draw(arena, player);
    state.animationFrameId = requestAnimationFrame(update);
  }
}

/**
 * プレイヤーのピースを1マス落下させる関数
 */
export function playerDrop() {
  player.pos.y++;
  // 衝突が発生した場合の処理
  if (collide(arena, player)) {
    player.pos.y--; // 衝突が発生した場合は元の位置に戻す
    merge(arena, player);
    initializePlayer();
    arenaSweep(arena, state);
    updateScore();
    // resetHold(); // ピース固定時にホールドリセット
  }
  state.dropCounter = 0;
}

/**
 * プレイヤーのピースをアリーナに固定する関数
 * @param {number[][]} arena - ゲームフィールドを表す2次元配列
 * @param {Object} player - プレイヤーオブジェクト
 */
function merge(arena, player) {
  // プレイヤーのピースの各行をループ
  player.matrix.forEach((row, y) => {
    // 各行のセルをループ
    row.forEach((value, x) => {
      if (value !== 0) {
        // アリーナの対応する位置にピースの値を固定
        // y + player.pos.y: ピースのY座標に基づくアリーナの行
        // x + player.pos.x: ピースのX座標に基づくアリーナの列
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}
