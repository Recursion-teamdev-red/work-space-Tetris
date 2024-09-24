import { player } from '../core/player.js';
import { arena } from '../core/arena.js';
import { state } from '../core/gameState.js';
import { UI } from '../ui/elements.js';
import { SCALE } from '../config/constants.js';
import { createPiece } from '../utils/piece.js';
import { collide } from './collision.js';
import { gameOverHandler } from './gameOver.js';

/**
 * ゲームを初期化します。
 * キャンバスのスケールを設定し、プレイヤーを初期化し、
 * スコアを更新します。
 */
export function initializeGame() {
  // キャンバスのスケールを設定
  UI.context.scale(SCALE, SCALE);
  UI.nextContext.scale(SCALE, SCALE);
  // プレイヤーを初期化
  initializePlayer();
  // ゲーム開始時のスコアを更新
  updateScore();
}

/**
 * プレイヤーを初期化します。
 * 利用可能なピースをランダムに選び、現在のピースと次のピースを設定します。
 * プレイヤーの位置を中央に配置し、衝突判定を行います。
 * @throws {Error} - 衝突が検出された場合、ゲームオーバー処理を実行します。
 */
export function initializePlayer() {
  const pieces = 'ILJOTSZ'; // 利用可能なピースの種類を定義

  // 現在のピースを設定（次のピースがあればそれを使用、なければ新しく生成）
  player.matrix = player.next || createPiece(pieces[(Math.random() * pieces.length) | 0]);
  // 次のピースを生成
  player.next = createPiece(pieces[(Math.random() * pieces.length) | 0]);
  // プレイヤーの位置を初期化（アリーナの中央に配置）
  player.pos.y = 0;
  player.pos.x = ((arena[0].length) / 2 | 0) - ((player.matrix[0].length / 2) | 0);
  // 衝突判定を行い、衝突する場合はゲームオーバー処理を実行
  if(collide(arena, player)) {
    gameOverHandler();
  }
}

/**
 * 現在のスコアをUIに表示します。
 * スコアエレメントに現在のスコアを設定します。
 */
export function updateScore() {
  UI.scoreElement.innerText = 'Score: ' + state.score; // スコアを表示
}
