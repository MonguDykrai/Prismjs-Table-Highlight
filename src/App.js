import React from 'react';
import './style.css';
import Core from './Core';
import StringCode from './StringCode';
import ReactDOMServer from './ReactDOMServer';

export default function App() {
  return (
    <div>
      <ReactDOMServer />
      <StringCode />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Core />
    </div>
  );
}
