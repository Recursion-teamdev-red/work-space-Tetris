/**
 * プレイヤーの状態を表すオブジェクト
 * @typedef {Object} Player
 * @property {Object} pos - プレイヤーのピースの現在位置
 * @property {number} pos.x - X座標
 * @property {number} pos.y - Y座標
 * @property {number[][]} matrix - プレイヤーの現在のピースを表す2次元配列
 * @property {number[][]} next - プレイヤーの次のピースを表す2次元配列
 */

/**
 * プレイヤーオブジェクト
 * ゲーム中のプレイヤーの状態（位置、現在のピース、次のピース）を管理します。
 * @type {Player}
 */
export const player = {
  pos: { x: 0, y: 0 }, // ピースの初期位置
  matrix: null, // 現在のピース（初期状態ではnull）
  next: null, // 次のピース（初期状態ではnull）
};
