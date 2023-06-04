import { IVector2D } from "./IVector2D";

/**
 * Represents a two-dimensional vector.
 */
export class Vector2D implements IVector2D {
  /**
   * Position X
   */
  public X: number;

  /**
   * Position Y
   */
  public Y: number;

  constructor(x: number, y: number) {
    this.X = x;
    this.Y = y;
  }
}
