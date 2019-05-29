import * as React from 'react';

// function injectSheet();





export type StyleSheetThemed = (
  theme: any
) => Record<
  string,
  React.CSSProperties | Record<string, React.CSSProperties>
>;
// ---------------------------------------------------------------------
/**
 * Base Props for style components
 */
export interface BaseComponentProps {
  /**
   * @ignore
   */
  classes?: any;
  /**
   * Nome da classe para sobrepor a classe do elemento
   */
  className?: string;
  /**
   * Objeto com o Tema
   */
  theme?: any;
  /**
   * Estilo inline do elemento
   */
  style?: React.CSSProperties;

  /**
   * id do elemento
   */
  id?: string;
}

interface Type<T> {
  new (...args: any[]): T;
}

export function px2rem(pixels: number) {
  return `${pixels / 16}rem`;
}
