import React from 'react';
import { Table } from 'antd';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const code = `
  import React, { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  import App from './App';

  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
`;

// const code = `
//   <>
//     <div><button onClick={() => { message.info("提交了") }}>提交</button></div>
//     <Table columns={[]} data={[{ name: 'jack' }]} />
//   </>
// `;

// const code = `
//   console.log()
// `;

const jsx = Prism.highlight(code, Prism.languages.javascript, 'javascript');

console.log(jsx);

const Core = () => {
  return <pre dangerouslySetInnerHTML={{ __html: jsx }}></pre>;
  // return <code dangerouslySetInnerHTML={{ __html: jsx }}></code>;
  // return <span>Core</span>;
};

export default Core;
