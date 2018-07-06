import * as React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import classnames from 'classnames';

import animTypes from './animTypes';

interface IPropsType {
  children: string;
  className?: string;
  prefixCls?: string;
  type?: string;
  component?: any;
  reverse?: boolean;
  split?: (str: string) => string[];
  enter?: any;
  leave?: any;
}

export default class TextyAnim extends React.Component<IPropsType,
  {}> {
  static defaultProps = {
    type: 'mask-bottom',
    prefixCls: 'texty',
    component: 'div',
    reverse: false,
    split: '',
  };

  getChildrenToRender = (str: string): React.ReactNode => {
    const { split } = this.props;
    const t = split ? split(str) : str.split(this.props.split); // Array(str.length).fill(1);
    return t.map((c, i) => (
      <span
        key={`${c}-${i.toString()}`}
      >
        {c}
      </span>));
  }

  getEnterOrLeave = (e, genre, length) => {
    const { reverse, type } = this.props;
    const delay = reverse ? (length - e.index) * 50 : e.index * 50;
    const animType = genre === 'enter' ? 'from' : 'to';
    let custom = this.props[genre];
    if (custom && typeof custom === 'function') {
      custom = custom({ ...e, delay });
    } else if (!custom) {
      custom = animTypes[type];
    }
    if (Array.isArray(custom)) {
      return custom.map((item, i) => ({ delay: !i ? delay : 0, type: animType, ...item }));
    }
    return { delay, type: animType, ...custom };
  }

  render() {
    const {
      prefixCls,
      type,
      className,
      animConfig,
      reverse,
      ...props,
    } = this.props;
    const childrenToRender = this.getChildrenToRender(props.children);
    const classNames = classnames(prefixCls, {
      [type]: type && !animConfig,
      [className]: !!className,
    });
    return (
      <TweenOneGroup
        {...props}
        className={classNames}
        enter={(e) =>
          this.getEnterOrLeave(e, 'enter', childrenToRender.length - 1)
        }
        leave={(e) =>
          this.getEnterOrLeave(e, 'leave', childrenToRender.length - 1)
        }
      >
        {childrenToRender}
      </TweenOneGroup>
    );
  }
}
