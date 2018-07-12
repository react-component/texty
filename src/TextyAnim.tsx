import * as React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import classnames from 'classnames';

import animTypes from './animTypes';
import { ITextyProps } from './TextyProps';

export default class TextyAnim extends React.Component<ITextyProps, {}> {
  static defaultProps = {
    type: 'top',
    mode: 'smooth',
    prefixCls: 'texty',
    component: 'div',
    delay: 0,
    interval: 50,
    appear: true,
  };

  tweenGrooup: { keysToEnter: string[], keysToLeave: string[] };

  getChildrenToRender = (str: string): React.ReactNode[] => {
    if (!str) {
      return [];
    }
    const { split } = this.props;
    const t = split ? split(str) : str.split(''); // Array(str.length).fill(1);
    return t.map((c, i) => {
      return (
        <span
          key={`${c}-${i.toString()}`}
        >
          {c}
        </span>);
    });
  }

  getEnterOrLeave = (e, genre, length) => {
    const { mode, type, enter, appear, interval } = this.props;
    if (!appear && genre === 'enter' || length < 0) {
      return null;
    }
    let delay;
    if (typeof interval === 'function') {
      // function 下 mode 无效；
      delay = interval({ ...e, genre });
    } else {
      switch (mode) {
        case 'reverse':
          delay = (length - e.index) * interval;
          break;
        case 'sync':
          delay = 0;
          break;
        case 'random':
          delay = length * interval * Math.random();
          break;
        default:
          delay = e.index * interval;
      }
    }
    delay += this.props.delay;
    const genreType = genre === 'enter' ? 'from' : 'to';
    let custom = this.props[genre] || enter;
    if (custom && typeof custom === 'function') {
      custom = custom({ ...e, delay });
    } else if (!custom) {
      custom = animTypes[type];
    }
    if (custom.enter) {
      custom = custom[genre] || custom.etner;
    }
    if (Array.isArray(custom)) {
      return custom.map((item, i) => {
        if (!i && (!item.duration || item.type === 'set')) {
          return item;
        } else if (i === 1) {
          const preItem = custom[0];
          if (!preItem.duration || item.type === 'set') {
            return { delay, ...item };
          }
        }
        return { delay: !i ? delay : 0, ...item };
      });
    }
    return { delay, type: genreType, ...custom };
  }

  render() {
    const {
      prefixCls,
      type,
      className,
      enter,
      mode,
      delay,
      interval,
      children,
      split,
      ...props,
    } = this.props;
    const getChildrenToRender = this.getChildrenToRender(children);
    const classNames = classnames(prefixCls, {
      [type]: type && !enter,
      [className]: !!className,
    });
    return (
      <TweenOneGroup
        {...props}
        className={classNames}
        enter={(e) =>
          this.getEnterOrLeave(e, 'enter', getChildrenToRender.length - 1)
        }
        leave={(e) =>
          // 出场时 children 是没有， 需取 group 里的  keysToLeave
          this.getEnterOrLeave(e, 'leave', this.tweenGrooup.keysToLeave.length - 1)
        }
        ref={(c) => {
          this.tweenGrooup = c;
        }}
      >
        {getChildrenToRender}
      </TweenOneGroup>
    );
  }
}
