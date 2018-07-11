/* tslint:disable */
export type ITextyType = 'left' | 'right' | 'top' | 'bottom' | 'alpha' | 'scale' |
  'scaleX' | 'scaleBig' | 'scaleY' | 'mask-bottom' | 'mask-top' |
  'flash' | 'bounce' | 'swing' | 'swing-y' | 'swing-rotate';

export type ITextyMode = 'smooth' | 'reverse' | 'random' | 'sync';

export interface ITextyProps {
  children?: string;
  className?: string;
  prefixCls?: string;
  type?: ITextyType;
  mode?: ITextyMode;
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
  onEnd?(e: { key: string, type: string }): void;
}
