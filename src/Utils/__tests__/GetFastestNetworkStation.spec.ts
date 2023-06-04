import { GetFastestNetworkStation } from "..";

describe("GetFastestNetworkStation", () => {
  it("returns the fastest network station for a given device", () => {
    const DeviceCoordinate = { X: 1, Y: 1 };
    const AllAvailableNetworkStations = [
      { Reach: 1, Position: { X: 0, Y: 0 } },
      { Reach: 2, Position: { X: 2, Y: 2 } },
    ];
    const result = GetFastestNetworkStation(
      DeviceCoordinate,
      AllAvailableNetworkStations
    );
    expect(result).toEqual({
      NetworkStation: { Reach: 2, Position: { X: 2, Y: 2 } },
      Speed: 0.3431457505076197,
    });
  });
});
