import React from 'react';
import './style.css';
import Core from './Core';
import { CopyOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import copy from 'copy-to-clipboard';

export default function App() {
  const ref = React.createRef();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button
        type="text"
        onClick={() => {
          console.log(ref);
          console.log(ref.current);
          console.log(ref.current.innerText);
          if (ref.current.innerText) {
            copy(ref.current.innerText);
          }
        }}
      >
        <CopyOutlined />
      </Button>
      <Core ref={ref} />
    </div>
  );
}
