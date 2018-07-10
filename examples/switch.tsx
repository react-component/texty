// use jsx to render html, do not modify simple.html

import 'rc-texty-anim/assets/index.less';
import TextyAnim, { ITextyMode, ITextyType } from '../src/';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../assets/index.less';
import './assets/index.less';
import animType from '../src/animTypes';

const text = '平台拥有丰富的各类首页模板';
class Demo extends React.Component<{}, {
  show: boolean;
  type: ITextyType;
  mode: ITextyMode;
}> {
  state = {
    show: false,
    mode: 'smooth' as ITextyMode,
    type: 'left' as ITextyType,
  };

  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  onChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  }

  onModeChange = (e) => {
    this.setState({
      mode: e.target.value,
    });
  }

  render() {
    return (
      <div>
        type:
        <select onChange={this.onChange} style={{ margin: '0 10px' }}>
          {
            Object.keys(animType).map(key => (<option key={key} value={key}>{key}</option>))
          }
        </select>
        mode:
        <select onChange={this.onModeChange} style={{ margin: '0 10px' }}>
          {
            ['smooth', 'reverse', 'random', 'sync'].map(key => (<option key={key} value={key}>{key}</option>))
          }
        </select>
        <button onClick={this.onClick} >切换</button>
        <TextyAnim
          type={this.state.type}
          mode={this.state.mode}
          onEnd={(type) => {
            console.log(type);// tslint:disable-line
          }}
        >
          {this.state.show && text}
        </TextyAnim>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
