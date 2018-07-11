// do not add tests to this file, add tests to other .spec.js
import * as React from 'react';
import { mount } from 'enzyme';
import TextyAnim from '../src';

describe('rc-texty', () => {
  let instance;

  it('single rc-texty', () => {
    instance = mount(<TextyAnim>Text</TextyAnim>);
    expect(instance.find('TweenOneGroup').children().length).toBe(1);
    expect(instance.find('div').instance().children.length).toBe(4);
  });

  it('rc-texty appear is false', () => {
    instance = mount(<TextyAnim type="alpha" appear={false}>Text</TextyAnim>);
    expect(instance.find('TweenOneGroup').instance().props.enter()).toBeNull();
  });

  it('rc-texty spilt', () => {
    instance = mount(
      <TextyAnim
        split={(e) => {
          return [e];
        }}
        type="bounce"
        mode="sync"
      >Text</TextyAnim>);
    expect(instance.find('TweenOneGroup').children().length).toBe(1);
    expect(instance.find('TweenOneGroup').instance().state.children.length).toBe(1);
  });

  it('rc-texty switch children', () => {
    instance = mount(
      <TextyAnim
        type="flash"
        mode="reverse"
      >Text</TextyAnim>);
    const dom = instance.find('div').instance();
    const spanOne = dom.children[0];
    console.log(instance.find('TweenOneGroup').instance().props.children.length);
    console.log(spanOne.style.opacity);
    expect(parseFloat(spanOne.style.opacity)).toBe(0);
    expect(instance.find('TweenOneGroup').instance().props.children.length).toBe(4);
    instance.setProps({ children: null });
    expect(instance.find('TweenOneGroup').instance().props.children.length).toBe(0);
    console.log(instance.find('TweenOneGroup').instance().props.children.length);
  });

  it('rc-texty enter is function', () => {
    instance = mount(
      <TextyAnim
        enter={() => ({ x: 100 })}
        leave={() => ({ opacity: 0 })}
        mode="random"
      >Text</TextyAnim>);
    console.log(instance.find('TweenOneGroup').instance().props.enter().x);
    expect(instance.find('TweenOneGroup').instance().props.enter().x).toBe(100);
    instance.setProps({ children: null });
    console.log(instance.find('TweenOneGroup').instance().props.leave());
  });
  it('rc-texty interval is function', () => {
    instance = mount(
      <TextyAnim
        interval={() => {
          return 0;
        }}
      >Text Motion</TextyAnim>);
    console.log(instance.find('TweenOneGroup').instance().props.enter().delay);
    expect(instance.find('TweenOneGroup').instance().props.enter().delay).toBe(0);
  });
});