// index.jsに定義した関数を移し、index.jsで使えるようエクスポート
export const App = () => {

    // return以降が複数行になる場合は()で囲む
    return (
        // return以降は1つのタグ(divなど)で囲われている必要がある
        <div>
            <h1>こんにちは！</h1>
            <h1>お元気ですか？</h1>
        </div>

    );
}
