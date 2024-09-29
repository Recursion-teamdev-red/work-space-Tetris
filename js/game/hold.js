import { player } from '../core/player.js';
import { initializePlayer } from './initialization.js';
import { arena } from '../core/arena.js'; // arenaのインポートを確認
import { draw } from '../ui/draw.js';

export function holdPiece() {
  console.log('Hold Piece function called');
  console.log('Current player.hold:', player.hold);
  console.log('Current player.matrix:', player.matrix);

  if (player.hold === null) {
    // 初めてホールドする場合
    player.hold = player.matrix.map((row) => [...row]); // コピーを作成
    console.log('First hold, setting player.hold to:', player.hold);
    initializePlayer();
  } else {
    // ホールドピースと現在のピースを交換
    const temp = player.matrix;
    player.matrix = player.hold;
    player.hold = temp.map((row) => [...row]); // コピーを作成
    console.log('Swapping hold piece, new player.hold:', player.hold);
    player.pos.y = 0; // ピースを上部にリセット
    player.pos.x = Math.floor(arena[0].length / 2 - player.matrix[0].length / 2); // 中央に配置
  }
}
