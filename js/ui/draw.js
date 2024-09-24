import { UI } from './elements.js';
import { COLORS } from '../config/constants.js';

/**
 * 指定されたマトリックスを指定されたオフセット位置に描画します。
 * @param {number[][]} matrix - 描画するマトリックス
 * @param {{x: number, y: number}} offset - マトリックスの描画位置オフセット
 * @param {CanvasRenderingContext2D} context - 描画に使用するCanvasのコンテキスト
 */
export function drawMatrix(matrix, offset, context) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        // 0以外の値がある場合、対応する色で四角形を描画
        context.fillStyle = COLORS[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1); // 四角形を描画
      }
    });
  });
}

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
  drawMatrix(arena, { x: 0, y: 0 }, UI.context);

  // プレイヤーのピースを描画
  drawMatrix(player.matrix, player.pos, UI.context);

  // 次のピースを表示するキャンバスをクリア
  UI.nextContext.clearRect(0, 0, UI.nextCanvas.width, UI.nextCanvas.height);

  // 次のピースを描画
  drawMatrix(player.next, { x: 0, y: 0 }, UI.nextContext);
}
