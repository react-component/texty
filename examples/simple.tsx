// use jsx to render html, do not modify simple.html

import 'rc-texty-anim/assets/index.less';
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
      onEnd={(type) => {
        console.log(type);
      }}
    >
      {text}
    </TextyAnim>
  );
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
