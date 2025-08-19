import ReactDOM from "react-dom/client";
import Fragment from 'react'

// アロー関数で定義
const App = () => {

    // return以降が複数行になる場合は()で囲む
    return (
        // return以降は1つのタグ(divなど)で囲われている必要がある
        <div>
            <h1>こんにちは！</h1>
            <h1>お元気ですか？</h1>
        </div>

        // またはFragmentおよび空タグで囲むことも可能
        // 不要なDOMを生成したくない時に有効
        // <>
        //     <h1>こんにちは！</h1>
        //     <h1>お元気ですか？</h1>
        // </>

        // <Fragment>
        //     <h1>こんにちは！</h1>
        //     <h1>お元気ですか？</h1>
        // </Fragment>
    );
}

// JSX記法
// react18ではrender関数が廃止され、createRootが推奨されている
// createRoot関数の引数に「index.htmlのrender箇所」を指定し、変数に格納
// render関数の引数に「render対象」を指定
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
