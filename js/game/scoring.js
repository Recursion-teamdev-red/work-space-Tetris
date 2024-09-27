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
  let rowCount = 1; // 連続で消去された行数をカウント

  return arenaSweepHelper(arena.length - 1, state, rowCount, arena);
}

function arenaSweepHelper(y, state, rowCount, arena) {
  
  // arenaの先頭まで走査したら終了
  if(y <= 0) return;

  // 各行の全てのセルをチェック
  for (let x = 0; x < arena[y].length; ++x) {
    // 空のセルがあれば、その行はスキップ
    if (arena[y][x] === 0) {
      y--;
      return arenaSweepHelper(y, state, rowCount, arena);
    }
  }
  
  // 行が全て埋まっている場合の処理
  // その行を取り除き、新しい空の行を上に追加
  arena.splice(y, 1); // 行を削除
  arena.unshift(new Array(arena[0].length).fill(0)); // 新しい空の行を追加

  // スコアの計算と加算
  // 消去した行数に応じてスコアが増加
  state.score += rowCount * 10;

  // 次の行を消去した場合のスコア倍率を2倍に
  rowCount *= 2;

  // spliceによりyインデックスがずれているので、再度同じインデックス番号で実行
  return arenaSweepHelper(y, state, rowCount, arena);
}