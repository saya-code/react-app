// ColoredMessage.jsで定義した関数をインポート
import { ColoredMessage } from './components/ColoredMessage';
import { TestMessage } from './components/TestMessage';
// useStateというイベントの状態を管理するデフォルトの機能(React Hooks)をインポート
import { useState } from 'react'

// index.jsに定義した関数を移し、index.jsで使えるようエクスポート
// コンポーネントファイルは基本的にjsx(tsx)形式
export const App = () => {

    // useStateを定義（第一引数: State変数、第二引数: Stateを更新する関数
    // useStateの引数に初期値設定
    const [count, setCount] = useState(0);

    // カウントイベント
    const onClickButton = () => {
        // alert("ボタンがクリックされました");
        // Stateを更新する関数を使用して、countの値を1増やす
        setCount(count + 1);
        // 厳密に記述する場合はset関数内で関数を指定(今のStateに基づいて更新される)
        setCount((count) => count + 1)
    };

    // return以降が複数行になる場合は()で囲む
    return (
        // return以降は1つのタグ(divなど)で囲われている必要がある
        <div>
            {/* スタイルは{}で囲むだけでなく、JSのオブジェクトとして記述 { color: "red" } */}
            <h1 style={{ color: "red" }}>こんにちは！</h1>

            {/* childrenという特別なPropsで渡す */}
            <ColoredMessage color="blue">お元気ですか？ </ColoredMessage>
            <ColoredMessage color="pink">元気です！ </ColoredMessage>

            {/* 任意の名称で囲った要素を渡せるため、複雑なコンポーネントを渡したい時に有効 */}
            <TestMessage color="green">
                <div>
                    <p>テストメッセージ</p>
                    <p>childrenではHTML要素をPropsとして渡せます</p>
                </div>
            </TestMessage>

            {/* ColoredMessage.jsからの関数を使用 */}
            {/* Propsを渡す方（App.js）で色とメッセージを指定 */}
            {/* <ColoredMessage color="blue" message="お元気ですか？" />
            <ColoredMessage color="pink" message="元気です！" /> */}

            {/* return内は{}で囲むことでJSやコメントの記述が可能 */}
            { console.log("TEST")}

            {/* カウント数表示 */}
            <h3>{count}</h3>
            {/* イベントの実行も可能(イベント名等はキャメルケース) */}
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}
