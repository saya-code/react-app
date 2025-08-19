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
            <h1>こんにちは！</h1>
            <h1>お元気ですか？</h1>
            {/* return内は{}で囲むことでJSやコメントの記述が可能 */}
            { console.log("TEST")}
            {/* イベントの実行も可能(イベント名等はキャメルケース) */}
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}
