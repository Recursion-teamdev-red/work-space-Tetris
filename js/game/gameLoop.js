import { state } from '../core/gameState.js';
import { player } from '../core/player.js';
import { arena } from '../core/arena.js';
import { DROP_INTERVAL } from '../config/constants.js';
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

  // ゲームオーバーでなく、一時停止中でもない場合、ゲームを描画し次のフレームをリクエスト
}

/**
 * プレイヤーのピースを1マス落下させる関数
 */
export function playerDrop() {}

/**
 * プレイヤーのピースをアリーナに固定する関数
 * @param {number[][]} arena - ゲームフィールドを表す2次元配列
 * @param {Object} player - プレイヤーオブジェクト
 */
function merge(arena, player) {}
