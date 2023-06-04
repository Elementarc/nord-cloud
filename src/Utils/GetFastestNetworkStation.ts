import { CalcNetworkSpeed } from ".";
import { INetworkStation, IVector2D } from "../Constructors";

export interface INetworkStationWithSpeed {
  Speed: number;
  NetworkStation: INetworkStation | null;
}

/**
 * Returns the fastest Network Station for given device.
 * @param DeviceCoordinate
 * @param AllAvailableNetworkStations
 * @returns
 */
export const GetFastestNetworkStation = (
  DeviceCoordinate: IVector2D,
  AllAvailableNetworkStations: INetworkStation[]
): INetworkStationWithSpeed => {
  let BestNetworkStation: null | INetworkStation = null;
  let BestSpeed = 0;

  // Finding the best network station for given device by looping through all available network stations.
  for (const NetworkStation of AllAvailableNetworkStations) {
    const NetworkSpeed = CalcNetworkSpeed(NetworkStation, DeviceCoordinate);
    if (NetworkSpeed > BestSpeed) {
      BestSpeed = NetworkSpeed;
      BestNetworkStation = NetworkStation;
    }
  }

  return {
    NetworkStation: BestNetworkStation,
    Speed: BestSpeed,
  };
};
