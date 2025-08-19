// ColoredMessage.jsで定義した関数をインポート
import { ColoredMessage } from './components/ColoredMessage';

// index.jsに定義した関数を移し、index.jsで使えるようエクスポート
// コンポーネントファイルは基本的にjsx(tsx)形式
export const App = () => {
    // alertイベント
    const onClickButton = () => {
        alert("ボタンがクリックされました");
    };

    // return以降が複数行になる場合は()で囲む
    return (
        // return以降は1つのタグ(divなど)で囲われている必要がある
        <div>
            {/* スタイルは{}で囲むだけでなく、JSのオブジェクトとして記述 { color: "red" } */}
            <h1 style={{ color: "red" }}>こんにちは！</h1>

            {/* ColoredMessage.jsからの関数を使用 */}
            {/* Propsを渡す方（App.js）で色とメッセージを指定 */}
            <ColoredMessage color="blue" message="お元気ですか？" />
            <ColoredMessage color="pink" message="元気です！" />

            {/* return内は{}で囲むことでJSやコメントの記述が可能 */}
            { console.log("TEST")}
            {/* イベントの実行も可能(イベント名等はキャメルケース) */}
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}
