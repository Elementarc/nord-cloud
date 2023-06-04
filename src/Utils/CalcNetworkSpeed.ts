import { INetworkStation, IVector2D } from "../Constructors";

export const CalcNetworkSpeed = (
  networkStation: INetworkStation,
  device: IVector2D
): number => {
  const distance = Math.sqrt(
    Math.pow(networkStation.Position.X - device.X, 2) +
      Math.pow(networkStation.Position.Y - device.Y, 2)
  );
  const networkSpeedToDevice = Math.pow(networkStation.Reach - distance, 2);

  if (distance > networkStation.Reach) return 0;

  return networkSpeedToDevice;
};
