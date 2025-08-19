import ReactDOM from "react-dom/client";

// アロー関数で定義
const App = () => {
    return <h1>こんにちは！</h1>;
}

// JSX記法
// react18ではrender関数が廃止され、createRootが推奨されている
// createRoot関数の引数に「index.htmlのrender箇所」を指定し、変数に格納
// render関数の引数に「render対象」を指定
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
