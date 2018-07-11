# rc-texty
---

React TextyAnim Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![codecov](https://codecov.io/gh/react-component/texty/branch/master/graph/badge.svg)](https://codecov.io/gh/react-component/texty)
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-texty.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-texty
[travis-image]: https://img.shields.io/travis/react-component/texty.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/texty
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-texty.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-texty

## Example

http://localhost:8010/examples/


online example: http://react-component.github.io/texty/


## install


[![rc-texty](https://nodei.co/npm/rc-texty.png)](https://npmjs.org/package/rc-texty)


## Usage

```js
var TextyAnim = require('rc-texty');
var React = require('react');
React.render(<TextyAnim>text</TextyAnim>, container);
```

## API

### props

| name      | type           | default   | description    |
|-----------|----------------|-----------|----------------|
| className | string         |  `null`   |  class name.   |
| prefixCls | string         |  `texty`  |  prefix class  |
| type      | string         |  `top`    |  animation style, 'left' \| 'right' \| 'top' \| 'bottom' \|'alpha' \| 'scale' \|  'scaleX' \| 'scaleBig' \| 'scaleY' \| 'mask-bottom' \| 'mask-top' \|  'flash' \| 'bounce' \| 'swing' \| 'swing-y' \| 'swing-rotate'. |
| mode      | string         |  `smooth` |  animate sport mode. 'smooth' \| 'reverse' \| 'random' \| 'sync' |
| delay     | number         | `0`       |  animation overall delay.      |
| interval  | number \| func | `50`      |  animation interval, is function: (e: { key: string }) => number. Key is split text plus sequence(text-1). |
| split     | func           | `null`    |  children split, return string |

### Inherit TweenOneGroup 

| name      | type           | default | description    |
|------------|----------------|---------|----------------|
| appear    |  boolean       |  true   |  whether support appear anim |
| enter     | object / array / func | `null` | enter anim twee-one data. when array is tween-one timeline, func refer to queue-anim  |
| leave     | object / array / func | `null` | leave anim twee-one data. when array is tween-one timeline, func refer to queue-anim  |
| onEnd     |  func          | -    | one animation end callback |
| animatingClassName | array | `['tween-one-entering', 'tween-one-leaving']` | className to every element of animating |
| exclusive   |  boolean   | false  | Whether to allow a new animate to execute immediately when switching. `enter => leave`: execute immediately leave |
| component | 	React.Element/String | div  |  component tag  | 
| componentProps | object  |  -  | component tag props |

## License

rc-texty is released under the MIT license.
