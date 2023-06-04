import { INetworkStation, IVector2D } from "../Constructors";

export const CalcNetworkSpeed = (
  NetworkStation: INetworkStation,
  DevicePosition: IVector2D
): number => {
  const distance = Math.sqrt(
    Math.pow(NetworkStation.Position.X - DevicePosition.X, 2) +
      Math.pow(NetworkStation.Position.Y - DevicePosition.Y, 2)
  );
  const networkSpeedToDevice = Math.pow(NetworkStation.Reach - distance, 2);

  if (distance > NetworkStation.Reach) return 0;

  return networkSpeedToDevice;
};
