import { UI } from './elements.js';
import { COLORS } from '../config/constants.js';

/**
 * 指定されたマトリックスを指定されたオフセット位置に描画します。
 * @param {number[][]} matrix - 描画するマトリックス
 * @param {{x: number, y: number}} offset - マトリックスの描画位置オフセット
 * @param {CanvasRenderingContext2D} context - 描画に使用するCanvasのコンテキスト
 */
export function drawMatrix(matrix, offset, context) {}

/**
 * ゲームのアリーナとプレイヤーのピースを描画します。
 * アリーナの背景をクリアし、プレイヤーの現在のピースと次のピースを表示します。
 * @param {number[][]} arena - ゲームフィールド（アリーナ）のマトリックス
 * @param {{ matrix: number[][], pos: { x: number, y: number }, next: number[][] }} player - プレイヤーの情報
 */
export function draw(arena, player) {
  // キャンバスの背景色を設定
  UI.context.fillStyle = '#dbdbdb';
  UI.context.fillRect(0, 0, UI.canvas.width, UI.canvas.height); // 背景をクリア

  // アリーナ（ゲームフィールド）を描画

  // プレイヤーのピースを描画

  // 次のピースを表示するキャンバスをクリア

  // 次のピースを描画
}
