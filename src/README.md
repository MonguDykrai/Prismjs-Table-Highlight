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
