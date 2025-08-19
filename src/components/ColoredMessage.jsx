// App.jsxからcontentStyleの定義とreturnで使う箇所を移し、app.jsで使えるようエクスポート
// App.jsから渡されたProps(color, message)を引数として受け取る
export const ColoredMessage = (props) => {
    console.log(props);

    // JSのオブジェクトでハイフンは使えないため、プロパティはキャメルケースで記述
    // 値はダブルクウォーテーションで囲む
    // Propsから値を指定
    const contentStyle = {
        color: props.color,
        // color: "blue",
        fontSize: "20px"
    }

    return  <h1 style={contentStyle}>{props.message}</h1>;
    // return  <h1 style={contentStyle}>お元気ですか？</h1>;
}
