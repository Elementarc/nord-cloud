import { NetworkStation, Vector2D } from "../../Constructors";
import { CalcNetworkSpeed } from "../CalcNetworkSpeed";

describe("CalcNetworkSpeed", () => {
  it("Should return 3844", async () => {
    const speed = CalcNetworkSpeed(
      new NetworkStation(0, 2, 64),
      new Vector2D(0, 0)
    );

    expect(speed).toBe(3844);
  });

  it("Should return 0 Y because reach is not enough", async () => {
    const speed = CalcNetworkSpeed(
      new NetworkStation(0, 2, 50),
      new Vector2D(0, 53)
    );

    expect(speed).toBe(0);
  });

  it("Should return 0 X because reach is not enough", async () => {
    const speed = CalcNetworkSpeed(
      new NetworkStation(0, 0, 50),
      new Vector2D(51, 0)
    );

    expect(speed).toBe(0);
  });
});
