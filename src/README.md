https://prismjs.com/#basic-usage

```js
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);

// The code snippet you want to highlight, as a string
const code = `= ['hi', 'there', 'reader!'].join " "`;

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.haml, 'haml');
```

https://www.npmjs.com/package/copy-to-clipboard

```js
import copy from 'copy-to-clipboard';

copy('Text');

// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
});
```

https://reactjs.org/docs/react-dom-server.html

解析 jsx 为 html

```js
export default function App() {
  let content = ReactDOMServer.renderToString(
    <Example text="but I need some styling" />
  );

  content += " This is extra string";

  return <Info content={JSON.stringify(content)} />;
}
```

其它参考

[Convert template literal to string](https://stackoverflow.com/questions/64848019/convert-template-literal-to-string)
