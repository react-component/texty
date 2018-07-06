
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
  bounce: [
    { opacity: 0 },
    { y: -30, type: 'to', delay: -450 },
    { y: 0, type: 'to' },
  ],
  bounceBack: [
    { opacity: 0 },
    { y: -30, type: 'to', delay: -450, duration: 300 },
    { y: 10, type: 'to', duration: 300 },
    { y: 0, type: 'to', duration: 150 },
  ],
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
};
