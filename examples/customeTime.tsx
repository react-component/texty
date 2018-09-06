// use jsx to render html, do not modify simple.html
import TextyAnim from '../src/';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../assets/index.less';
import './assets/index.less';

const text = '平台拥有丰富的各类首页模板';

function Demo() {
  return (
    <TextyAnim
      type="mask-top"
      duration={(e) => {
        if (e.index === 2) {
          return 500;
        }
        return 1000;
      }}
      interval={(e) => {
        if (e.index === 2) {
          return 500;
        }
        return e.index * 50;
      }}
      onEnd={(type) => {
        // tslint:disable-next-line
        console.log(type);
      }}
    >
      {text}
    </TextyAnim>
  );
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
