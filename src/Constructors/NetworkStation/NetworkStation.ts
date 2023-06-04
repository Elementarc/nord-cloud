import { Vector2D } from "../Vector2D";
import { IVector2D } from "../Vector2D/IVector2D";
import { INetworkStation } from "./INetworkStation";

/**
 * Represents one network station
 */
export class NetworkStation implements INetworkStation {
  /**
   * The network station position.
   */
  public Position: IVector2D;
  /**
   * The reach amount of the network station.
   */
  public Reach: number;

  constructor(x: number, y: number, reach: number) {
    this.Position = new Vector2D(x, y);
    this.Reach = reach;
  }
}
