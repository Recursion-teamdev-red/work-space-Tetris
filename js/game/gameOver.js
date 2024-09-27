import { state } from '../core/gameState.js';
import { arena } from '../core/arena.js';
import { UI } from '../ui/elements.js';

/**
 * ゲームオーバー時の処理を行います。
 * ゲーム状態をリセットし、UI要素を更新します。
 * ゲームフィールドをクリアし、ゲームオーバー画面を表示し、
 * 最終スコアを表示します。
 */
export function gameOverHandler() {
  // ゲームオーバーフラグを設定
  state.gameOver = true;

  // アリーナ（ゲームフィールド）をクリア
  arena.forEach( row => row.fill(0) );

  // ゲームオーバー画面を表示
  UI.gameOverElement.style.display = "block";

  // 最終スコアを表示
  updateGameOverScore();
  
  // 現在のアニメーションフレームをキャンセルしてゲームループを停止
  cancelAnimationFrame(state.animationFrameId);
}

export function updateGameOverScore() {
  UI.gameOverScoreElement.innerText = "Score: " + state.score;
}