/**
 * スコアに基づいてレベルアップをチェックし、レベルアップ時の処理を行います。
 * @param {Object} state - ゲームの状態を保持するオブジェクト
 */
export function checkLevelUp(state) {
  if (state.score >= state.level * 100) {
    // スコアが100ごとにレベルアップ
    state.level++;
    updateLevel(state); // レベル表示を更新
    state.dropInterval = Math.max(200, 1000 - state.level * 100); // レベルに応じて落下速度を上げる
  }
}

/**
 * レベル表示を更新する関数
 * @param {Object} state - ゲームの状態を保持するオブジェクト
 */
export function updateLevel(state) {
  document.getElementById('level').innerText = 'Level: ' + state.level;
}
