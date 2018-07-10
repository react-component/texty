
export default {
  left: {
    x: 30,
    opacity: 0,
  },
  right: {
    x: -30,
    opacity: 0,
  },
  top: {
    y: -30,
    opacity: 0,
  },
  bottom: {
    y: 30,
    opacity: 0,
  },
  alpha: {
    opacity: 0,
  },
  scale: {
    scale: 0,
    opacity: 0,
  },
  scaleBig: {
    scale: 2,
    opacity: 0,
  },
  scaleX: {
    opacity: 0,
    scaleX: 0,
  },
  scaleY: {
    opacity: 0,
    scaleY: 0,
  },
  'mask-bottom': {
    opacity: 0,
    scale: 0.8,
    y: '100%',
  },
  'mask-top': {
    opacity: 0,
    scale: 0.8,
    y: '-100%',
  },
  flash: {
    enter: [
      { opacity: 0, type: 'from', duration: 150 },
      { opacity: 0, duration: 150 },
      { opacity: 1, duration: 150 },
    ],
    leave: [
      { opacity: 0, duration: 150 },
      { opacity: 1, duration: 150 },
      { opacity: 0, duration: 150 },
    ],
  },
  bounce: {
    enter: [
      { opacity: 0, type: 'set' },
      { y: -30, opacity: 1, duration: 300 },
      { y: 15, duration: 200 },
      { y: -10, duration: 200 },
      { y: 5, duration: 200 },
      { y: 0, duration: 200 },
    ],
    leave: [
      { y: 5, duration: 200 },
      { y: -10, duration: 200 },
      { y: 15, duration: 200 },
      { y: -30, opacity: 0, duration: 300 },
    ]
  },
  swing: {
    enter: [
      { opacity: 0, type: 'set' },
      { x: 10, opacity: 1, duration: 150 },
      { x: -10, duration: 150 },
      { x: 8, duration: 100 },
      { x: -8, duration: 100 },
      { x: 5, duration: 100 },
      { x: -5, duration: 100 },
      { x: 0, duration: 100 },
    ],
    leave: [
      { x: -5, duration: 100 },
      { x: 5, duration: 100 },
      { x: -8, duration: 100 },
      { x: 8, duration: 100 },
      { x: -10, duration: 150 },
      { x: 10, opacity: 0, duration: 150 },
    ]
  },
  'swing-rotate': {
    enter: [
      { opacity: 0, transformOrigin: '50% 0', type: 'set' },
      { rotate: 30, opacity: 1, duration: 300 },
      { rotate: -30, duration: 300 },
      { rotate: 15, duration: 200 },
      { rotate: -15, duration: 200 },
      { rotate: 5, duration: 100 },
      { rotate: -5, duration: 100 },
      { rotate: 0, duration: 50 },
    ],
    leave: [
      { rotate: -5, duration: 100 },
      { rotate: 5, duration: 100 },
      { rotate: -15, duration: 200 },
      { rotate: 15, duration: 200 },
      { rotate: -30, duration: 300 },
      { rotate: 30, opacity: 0, duration: 300 },
    ]
  },
  'swing-y': {
    enter: [
      { opacity: 0, type: 'set' },
      { y: 10, opacity: 1, duration: 150 },
      { y: -10, duration: 150 },
      { y: 8, duration: 100 },
      { y: -8, duration: 100 },
      { y: 5, duration: 100 },
      { y: -5, duration: 100 },
      { y: 0, duration: 100 },
    ],
    leave: [
      { y: -5, duration: 100 },
      { y: 5, duration: 100 },
      { y: -8, duration: 100 },
      { y: 8, duration: 100 },
      { y: -10, duration: 150 },
      { y: 10, opacity: 0, duration: 150 },
    ]
  },
};
