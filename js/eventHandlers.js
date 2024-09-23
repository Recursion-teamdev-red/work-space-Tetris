import { state } from './core/gameState.js';
import { UI } from './ui/elements.js';
import { playerMove, playerRotate } from './game/movement.js';
import { arena } from './core/arena.js';
import { player } from './core/player.js';
import { update, playerDrop } from './game/gameLoop.js';
import { initializePlayer, updateScore } from './game/initialization.js';

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
    // ゲームを再開
    // ゲームループを停止
  });

  // リセットボタンのクリックイベント
  UI.resetButton.addEventListener('click', () => {
    state.gameOver = false;
    state.score = 0;
    // アリーナをクリア
    // プレイヤーを初期化
    // スコアを更新
    // ゲームオーバー表示を非表示
    // ゲームを再開
  });

  // キーボードイベントの処理
  document.addEventListener('keydown', (event) => {
    if (!state.paused) {
      // 左矢印キー：左に移動
      // 右矢印キー：右に移動
      // 下矢印キー：高速落下
      // 上矢印キー：回転
    }
  });
}
