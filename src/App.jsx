// ColoredMessage.jsで定義した関数をインポート
import { ColoredMessage } from './components/ColoredMessage';
// コンポーネントのファイル名が一致しなくてもインポート可能({}も不要)
import Test from './components/TestMessage';
// asを使えば、defaultでなくても任意の名称でインポート可能
// import { TestMessage as Test} from './components/TestMessage';
// import { TestMessage } from './components/TestMessage';

// useStateというイベントの状態を管理するデフォルトの機能(React Hooks)をインポート
import { useState } from 'react'
// useEffectというコンポーネントの副作用を制御するデフォルトの機能(React Hooks)をインポート
import { useEffect } from 'react'

// index.jsに定義した関数を移し、index.jsで使えるようエクスポート
// コンポーネントファイルは基本的にjsx(tsx)形式
export const App = () => {
    // カウント等のイベントでStateが変更される度、コンポーネントが初めから再処理される（再レンダリング）
    console.log("レンダリング");

    // useStateを定義（第一引数: State変数、第二引数: Stateを更新する関数）
    // useStateの引数に初期値設定
    // 再レンダリングによる初期値への影響はない
    const [count, setCount] = useState(0);

    // カウントイベント
    const onClickButton = () => {
        // alert("ボタンがクリックされました");
        // Stateを更新する関数を使用して、countの値を1増やす
        // setCount(count + 1);
        // 厳密に記述する場合はset関数内で関数を指定(今のStateに基づいて更新される)
        setCount((count) => count + 1)
    };

    // useEffectを定義（第一引数: 実行する関数＝アロー関数、第二引数: 特定の値＝配列）
    // 特定の値が変更された時に処理を実行する
    // 例：countのStateが変更されたらログを出す
    // 再レンダリングが不要な初期だけ実行したい処理に対して有効
    useEffect(() => {
        console.log("Countが更新されました: " + count);
    }, [count]);



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
            <Test color="green">
                <div>
                    <p>テストメッセージ</p>
                    <p>childrenではHTML要素をPropsとして渡せます</p>
                </div>
            </Test>

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
