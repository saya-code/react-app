// exportする方法はいくつかある
const TestMessage = (props) => {
// App.jsから渡されたProps(DOM要素)を引数として受け取る
// export const TestMessage = (props) => {
    console.log(props);

    // JSのオブジェクトでハイフンは使えないため、プロパティはキャメルケースで記述
    // 値はダブルクウォーテーションで囲む
    // Propsから値を指定
    const contentStyle = {
        color: props.color,
        fontSize: "10px"
    }

    return  <h1 style={contentStyle}>{props.children}</h1>;
}

// defaultでエクスポートするとファイル名が一致しなくてもインポート可能
// １つのファイルでdefault exportは１つだけ使える
// しかし意図しないファイルを読み込む可能性があるため、基本的には使わない
export default TestMessage;