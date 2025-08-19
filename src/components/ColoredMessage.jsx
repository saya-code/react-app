// App.jsxからcontentStyleの定義とreturnで使う箇所を移し、app.jsで使えるようエクスポート
// App.jsから渡されたProps(color, message)を引数として受け取る
// 引数の段階で分割代入することもある
export const ColoredMessage = ({ color, children }) => {
// export const ColoredMessage = (props) => {

    // Propsを分割代入（destructure）
    // プロジェクトによって分割代入しない場合もある
    // const { color, children } = props;

    // console.log(props);

    // JSのオブジェクトでハイフンは使えないため、プロパティはキャメルケースで記述
    // 値はダブルクウォーテーションで囲む
    // Propsから値を指定
    const contentStyle = {
        // 分割代入を使えば毎回Props.~と記述する必要がなくなる
        color: color,
        // color: props.color,
        fontSize: "20px"
    }

    // 分割代入を使えば毎回Props.~と記述する必要がなくなる
    return  <h1 style={contentStyle}>{children}</h1>;
}
