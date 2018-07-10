export interface ITextyProps {
  children: string;
  className?: string;
  prefixCls?: string;
  type?: 'left' | 'right' | 'top' | 'bottom' | 'alpha' | 'scale' |
    'scaleX' | 'scaleBig' | 'scaleY' | 'mask-bottom' | 'mask-top' |
    'flash' | 'bounce' | 'swing' | 'swing-y' | 'swing-rotate';
  mode?: 'smooth' | 'reverse' | 'random' | 'sync';
  split?(str: string): string[];
  delay?: number;
  interval?: ((e: { key: string }) => number) | number;
  // TweenOneGroup API
  appear?: boolean;
  enter?: any;
  leave?: any;
  component?: any;
  componentProps?: object;
  exclusive?: boolean;
  animatingClassName?: string[];
  onEnd?(type: string): void;
}
