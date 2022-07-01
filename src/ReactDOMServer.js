import React from 'react';
import __ReactDOMServer from 'react-dom/server';

const Example = ({ text }) => {
  return <span>{text}</span>;
};

const ReactDOMServer = () => {
  let content = __ReactDOMServer.renderToString(
    <Example text="but I need some styling" onClick={() => console.log(234)} />
  );

  return <span>{content}</span>;
};

export default ReactDOMServer;
