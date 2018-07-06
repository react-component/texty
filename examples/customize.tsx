// use jsx to render html, do not modify simple.html

import 'rc-texty-anim/assets/index.less';
import TextyAnim from '../src/';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/index.less';
import './assets/index.less';

const text = '平台拥有丰富的各类首页模板';

class Demo extends React.Component {
  getEnter = (e) => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          scale: 0,
          opacity: 0,
        };
      case 11:
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 12:
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  }
  render() {
    return (
      <TextyAnim
        enter={this.getEnter}
        leave={this.getEnter}
      >
        {text}
      </TextyAnim>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
