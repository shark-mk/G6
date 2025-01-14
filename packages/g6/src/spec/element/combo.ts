import type { AnimationOptions } from '../../animations/types';
import type { BaseComboStyleProps } from '../../elements/combos';
import type { CallableObject } from '../../types';
import type { ComboData } from '../data';
import type { AnimationStage } from './animation';
import type { PaletteOptions } from './palette';

/**
 * <zh/> Combo 配置项
 *
 * <en/> Combo spec
 */
export interface ComboOptions {
  /**
   * <zh/> 组合类型
   *
   * <en/> Combo type
   */
  type?: string | ((datum: ComboData) => string);
  /**
   * <zh/> 组合样式
   *
   * <en/> Combo style
   */
  style?: CallableObject<ComboStyle, ComboData>;
  /**
   * <zh/> 组合状态样式
   *
   * <en/> Combo state style
   */
  state?: Record<string, CallableObject<ComboStyle, ComboData>>;
  /**
   * <zh/> 组合动画
   *
   * <en/> Combo animation
   */
  animation?: false | Record<AnimationStage, false | string | AnimationOptions[]>;
  /**
   * <zh/> 色板
   *
   * <en/> Palette
   */
  palette?: PaletteOptions;
}

export interface StaticComboOptions {
  style?: ComboStyle;
  state?: Record<string, ComboStyle>;
  animation?: false | Record<AnimationStage, false | string | AnimationOptions[]>;
  palette?: PaletteOptions;
}

export interface ComboStyle extends Partial<BaseComboStyleProps> {
  [key: string]: any;
}
