// use jsx to render html, do not modify simple.html

import 'rc-texty-anim/assets/index.less';
import TextyAnim from '../src/';
import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import '../assets/index.less';
import './assets/index.less';

const text = '平台拥有丰富的各类首页模板';

function Demo() {
  return (
    <TextyAnim
      className="text"
      type="mask-bottom"
      component={TweenOne}
      componentProps={{
        animation: [
          {
            type: 'from',
            ease: 'easeInOutQuint', duration: text.length * 50 + 450,
            x: 0,
          },
          {
            letterSpacing: 0,
            delay: -500,
            scale: 0.9,
            ease: 'easeInOutQuint',
            duration: 1000,
          },
          { scale: 1, delay: -300, duration: 1000, ease: 'easeInOutQuint' },
        ],
      }}
    >
      {text}
    </TextyAnim>
  );
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
