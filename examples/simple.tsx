// use jsx to render html, do not modify simple.html

import 'rc-texty-anim/assets/index.less';
import TextyAnim from '../src/';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/index.less';

const text = '平台拥有丰富的各类首页模板';

class Demo extends React.Component {
  render() {
    return (
      <TextyAnim
        reverse
        type="bounceBack"
      >
        {text}
      </TextyAnim>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
