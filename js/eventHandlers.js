import { state } from './core/gameState.js';
import { UI } from './ui/elements.js';
import { playerMove, playerRotate } from './game/movement.js';
import { arena } from './core/arena.js';
import { player } from './core/player.js';
import { update, playerDrop } from './game/gameLoop.js';
import { initializePlayer, updateScore } from './game/initialization.js';
import { updateGameOverScore } from './game/gameOver.js';
import { drawMatrix } from './ui/draw.js';
import { updateLevel } from './game/level.js';
import { INITIAL_DROP_INTERVAL } from './config/constants.js';
import { holdPiece } from './game/hold.js';

/**
 * イベントリスナーを設定します。
 * ゲームの開始、リセット、キーボード操作に対するイベントを管理します。
 */
export function setupEventListeners() {
  // スタートボタンのクリックイベント
  UI.startButton.addEventListener('click', () => {
    // ゲームオーバー状態の場合、リセットボタンをクリック
    if (state.gameOver) UI.resetButton.click();

    // ポーズ状態の切り替え
    if (state.paused) {
      state.paused = false;
      update(); // ゲームを再開
    } else {
      state.paused = true;
      cancelAnimationFrame(state.animationFrameId); // ゲームループを停止
    }
  });

  // リセットボタンのクリックイベント
  UI.resetButton.addEventListener('click', () => {
    state.gameOver = false;
    state.score = 0;
    state.level = 1;
    // アリーナをクリア
    drawMatrix(arena, { x: 0, y: 0 }, UI.context);
    // プレイヤーを初期化
    initializePlayer();
    // スコアを更新
    updateScore();
    updateGameOverScore();
    // レベルをリセット
    updateLevel(state);
    // 落下速度を初期値にリセット
    state.dropInterval = INITIAL_DROP_INTERVAL;
    // ゲームオーバー表示を非表示
    UI.gameOverElement.style.display = 'none';
    // ゲームを再開
    update();
  });

  // キーボードイベントの処理
  document.addEventListener('keydown', (event) => {
    if (!state.paused) {
      // 左矢印キー：左に移動
      if (event.key === 'ArrowLeft') {
        playerMove(arena, player, -1);
      }
      // 右矢印キー：右に移動
      else if (event.key === 'ArrowRight') {
        playerMove(arena, player, 1);
      }
      // 下矢印キー：高速落下
      else if (event.key === 'ArrowDown') {
        playerDrop();
      }
      // 上矢印キー：回転
      else if (event.key === 'ArrowUp') {
        playerRotate(arena, player);
      }
      // スペースキー：ホールド
      else if (event.key === ' ') {
        // ホールド機能を使用
        holdPiece();
        event.preventDefault();
      }
    }
  });
}
