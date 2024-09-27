import { checkLevelUp } from './level.js';

/**
 * アリーナ（ゲームフィールド）の行を消去し、スコアを更新します。
 * アリーナの下から上に向かって行をチェックし、
 * すべてのセルが埋まっている行を見つけて消去します。
 * 消去された行数に応じてスコアが増加します。
 *
 * @param {number[][]} arena - ゲームフィールドを表す2次元配列
 * @param {Object} state - ゲームの状態を保持するオブジェクト
 * @param {number} state.score - 現在のスコア
 */
export function arenaSweep(arena, state) {
  let rowCount = 0; // 消去された行数をカウント

  // アリーナの下から上に向かってチェック
  for (let y = arena.length - 1; y >= 0; --y) {
    // 各行の全てのセルをチェック
    let isFullRow = true; // 行が全て埋まっているかどうかのフラグ
    for (let x = 0; x < arena[y].length; ++x) {
      // 空のセルがあれば、その行は埋まっていない
      if (arena[y][x] === 0) {
        isFullRow = false;
        break; // ループを抜けて次の行をチェック
      }
    }

    // 行が全て埋まっている場合
    if (isFullRow) {
      // 行を取り除き、新しい空の行を上に追加
      arena.splice(y, 1);
      arena.unshift(new Array(arena[0].length).fill(0));

      // スコアの計算と加算
      rowCount++;
    }
  }

  // 消去した行数に応じてスコアを加算
  if (rowCount > 0) {
    state.score += rowCount * 10;
  }

  // スコアが更新された後にレベルアップのチェックを行う
  checkLevelUp(state);
}