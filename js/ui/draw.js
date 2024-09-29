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
        context.fillStyle = COLORS[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1); // 四角形を描画
      }
    });
  });
}

/**
 * 次のピースを描画します。
 * @param {{ matrix: number[][] }} next - 次のピースの情報
 */
function drawNextPiece(next) {
  UI.nextContext.clearRect(0, 0, UI.nextCanvas.width, UI.nextCanvas.height);
  drawMatrix(next, { x: 1, y: 3 }, UI.nextContext);
}

/**
 * ホールドピースを描画します。
 * @param {{ matrix: number[][] }} hold - ホールドピースの情報
 */
function drawHoldPiece(hold) {
  UI.holdContext.clearRect(0, 0, UI.holdCanvas.width, UI.holdCanvas.height);
  if (hold && hold.length > 0) {
    console.log('Drawing hold piece:', hold); // デバッグログ
    hold.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          UI.holdContext.fillStyle = COLORS[value]; // カラーの参照を修正
          UI.holdContext.fillRect(
            x * (UI.holdCanvas.width / hold[0].length),
            y * (UI.holdCanvas.height / hold.length),
            UI.holdCanvas.width / hold[0].length,
            UI.holdCanvas.height / hold.length
          );
        }
      });
    });
  } else {
    console.log('No hold piece to draw'); // デバッグログ
  }
}

/**
 * ゲームのアリーナとプレイヤーのピースを描画します。
 * アリーナの背景をクリアし、プレイヤーの現在のピースと次のピースを表示します。
 * @param {number[][]} arena - ゲームフィールド（アリーナ）のマトリックス
 * @param {{ matrix: number[][], pos: { x: number, y: number }, next: number[][], next2: number[][], hold: number[][] }} player - プレイヤーの情報
 */
export function draw(arena, player) {
  // キャンバスの背景色を設定
  UI.context.fillStyle = '#dbdbdb';
  UI.context.fillRect(0, 0, UI.canvas.width, UI.canvas.height); // 背景をクリア

  // アリーナ（ゲームフィールド）を描画
  drawMatrix(arena, { x: 0, y: 0 }, UI.context);

  // プレイヤーのピースを描画
  drawMatrix(player.matrix, player.pos, UI.context);

  // 次のピースを描画
  drawNextPiece(player.next);

  // ホールドピースを描画
  drawHoldPiece(player.hold);
}
