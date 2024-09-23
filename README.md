# Recursion チーム開発課題: Tetris

## 概要

「Tetris」は、Recursionのチーム開発課題として制作されたWebアプリケーションです。このアプリは、クラシックなテトリスゲームを実装しており、プレイヤーは落下するブロックを回転させたり移動させたりしながら、行を揃えて消すことを目指します。ブロックが画面の上部まで積み上がるとゲームオーバーになります。

## デモ
[demo](https://github.com/user-attachments/assets/8cad4f8d-f74e-4ba1-8320-521007525918)

## 機能

- プレイヤーは落下するブロックを操作して行を消す
- ブロックを回転させる機能
- ゲームオーバー時にスコアを表示
- リセットボタンでゲームを再開始可能

## 使用技術一覧

### 言語とフレームワーク

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### その他

- **VSCode**  
  開発環境として使用。

- **Google Chrome**  
  動作確認やデバッグに使用するウェブブラウザ。

## インストール手順

1. リポジトリをクローンします。

    ```bash
    git clone https://github.com/your-username/tetris.git
    ```

2. 必要な依存関係はありませんので、`index.html`をブラウザで開くだけで動作します。

## 使用方法

1. ブラウザで`index.html`を開きます。
2. 左右の矢印キーでブロックを移動し、上矢印キーで回転します。
3. 下矢印キーでブロックを素早く落下させます。
4. 行が揃うと、その行が消えます。
5. ゲームオーバーになると、スコアが表示され、リセットボタンでゲームを最初からやり直すことができます。

## ファイル構成

- `index.html`: アプリケーションのメインHTMLファイル
- `style.css`: アプリケーションのスタイルシート
- `js/`
  - `eventHandlers.js`: イベントリスナーの設定と処理
  - `main.js`: アプリケーションのメインロジック
  - `config/`
    - `constants.js`: 定数の定義
  - `core/`
    - `arena.js`: アリーナの状態管理
    - `gameState.js`: ゲームの状態管理
    - `player.js`: プレイヤーの状態管理
  - `game/`
    - `collision.js`: 衝突判定ロジック
    - `gameLoop.js`: ゲームループ処理
    - `gameOver.js`: ゲームオーバー処理
    - `initialization.js`: ゲームの初期化処理
    - `movement.js`: プレイヤーの移動処理
    - `scoring.js`: スコア計算ロジック
  - `ui/`
    - `draw.js`: 描画処理
    - `elements.js`: UI要素の管理
  - `utils/`
    - `matrix.js`: マトリックス操作に関するユーティリティ
    - `piece.js`: テトリスのピースに関するユーティリティ

## コントリビューション

1. リポジトリをフォークし、新しいブランチを作成します。
2. 修正を加え、コミットします。
3. プルリクエストを送信してください。

## 連絡先

- [uiuxadeadev](https://github.com/uiuxadeadev)
- [mkanehara](https://github.com/mkanehara)
