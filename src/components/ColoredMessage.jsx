// App.jsxからcontentStyleの定義とreturnで使う箇所を移し、app.jsで使えるようエクスポート
export const ColoredMessage = () => {
    // JSのオブジェクトでハイフンは使えないため、プロパティはキャメルケースで記述
    // 値はダブルクウォーテーションで囲む
    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return  <h1 style={contentStyle}>お元気ですか？</h1>;
}
