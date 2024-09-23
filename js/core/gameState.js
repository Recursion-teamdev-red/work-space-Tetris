/**
 * ゲームの状態を表すオブジェクト
 * @typedef {Object} GameState
 * @property {number} score - プレイヤーの現在のスコア
 * @property {number} dropCounter - ピースの自動落下のためのカウンター
 * @property {number} lastTime - 前回のゲームループ更新時刻
 * @property {boolean} gameOver - ゲームオーバーフラグ
 * @property {boolean} paused - ゲーム一時停止フラグ
 * @property {number|null} animationFrameId - アニメーションフレームのID
 */

/**
 * ゲームの状態を管理するオブジェクト
 * ゲームの進行状況、スコア、タイミングなどの重要な情報を保持します。
 * @type {GameState}
 */
export const state = {
  score: 0, // プレイヤーの初期スコア
  dropCounter: 0, // ピース落下タイミング制御用カウンター
  lastTime: 0, // 前回のゲームループ更新時刻
  gameOver: false, // ゲームオーバー状態（初期状態はfalse）
  paused: true, // ゲーム一時停止状態（初期状態はtrue）
  animationFrameId: null, // アニメーションフレームID（初期状態はnull）
};
