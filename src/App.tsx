import { useState, useEffect, useCallback, useMemo } from "react";
import { Typography } from "@mui/material";
import {
  BlockDiv,
  Button,
  CenterDiv,
  CenterHorizontalDiv,
  Coordinate,
  Grid,
  InlineDiv,
  Input,
  ResponsiveDiv,
} from "./Components";
import {
  INetworkStation,
  IVector2D,
  NetworkStation,
  Vector2D,
} from "./Constructors";
import { GetFastestNetworkStation, INetworkStationWithSpeed } from "./Utils";

// All available Network stations.
const AvailableNetworkStations: INetworkStation[] = [
  new NetworkStation(0, 0, 9),
  new NetworkStation(20, 20, 6),
  new NetworkStation(10, 0, 12),
  new NetworkStation(5, 5, 13),
  new NetworkStation(99, 25, 2),
];

// Initial devices to calculate the speed for.
const InitialDeviceCoordinates: IVector2D[] = [
  new Vector2D(0, 0),
  new Vector2D(100, 100),
  new Vector2D(15, 10),
  new Vector2D(18, 18),
  new Vector2D(13, 13),
  new Vector2D(25, 99),
];

/**
 * Main Application
 */
function App() {
  const [DeviceCoordinates, SetDeviceCoordinates] = useState<IVector2D[]>(
    InitialDeviceCoordinates
  );
  const [InputValue, SetInputValue] = useState<string>("");

  const OnInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    SetInputValue(e.target.value);
  };

  /**
   * Validates the current input value.
   * @returns boolean
   */
  const ValidateInputValue = useCallback((): boolean => {
    const InputRegex = new RegExp(/^\d+\s\d+$/);

    if (InputRegex.test(InputValue)) return true;
    return false;
  }, [InputValue]);

  /**
   * Adds a coordinate.
   * @returns void
   */
  const AddDeviceCoordinate = useCallback((): void => {
    const ValidInput = ValidateInputValue();
    if (!ValidInput) return;

    const CoordinatesArr = InputValue.split(" ");
    if (!CoordinatesArr.length) return;

    // Extracting x and y from input string
    const X = parseInt(CoordinatesArr[0]);
    const Y = parseInt(CoordinatesArr[1]);

    // Checking if coordinate does already exists.
    const ExistingDeviceCoordinate = DeviceCoordinates.find(
      (item) => item.X === X && item.Y === Y
    );

    if (ExistingDeviceCoordinate) return;

    SetInputValue("");
    SetDeviceCoordinates([...DeviceCoordinates, new Vector2D(X, Y)]);
  }, [DeviceCoordinates, InputValue, ValidateInputValue]);

  /**
   * Removes a coordinate.
   * @returns void
   */
  const RemoveDeviceCoordinate = (Coordinate: IVector2D): void => {
    // Finding index of given coordinate
    const ExistingDeviceCoordinateIndex = DeviceCoordinates.findIndex(
      (ExistingCoordinate) =>
        ExistingCoordinate.X === Coordinate.X &&
        ExistingCoordinate.Y === Coordinate.Y
    );
    if (ExistingDeviceCoordinateIndex === -1) return;

    const NewDeviceCoordinatesArr = [...DeviceCoordinates];
    NewDeviceCoordinatesArr.splice(ExistingDeviceCoordinateIndex, 1);
    SetDeviceCoordinates(NewDeviceCoordinatesArr);
  };

  /**
   * Renders the currently active device coordinates.
   * @returns void
   */
  const RenderActiveCoordinates = (): JSX.Element[] => {
    return DeviceCoordinates.map((coordinate, i) => {
      return (
        <Coordinate
          key={i}
          x={coordinate.X}
          y={coordinate.Y}
          onClick={() => RemoveDeviceCoordinate(coordinate)}
        />
      );
    });
  };

  /**
   * enabling pressing enter on keyboard to add device coordinate
   */
  useEffect(() => {
    const PressEnter = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;

      AddDeviceCoordinate();
    };

    window.addEventListener("keyup", PressEnter);
    return () => {
      window.removeEventListener("keyup", PressEnter);
    };
  }, [AddDeviceCoordinate]);

  const CalcResponse = useMemo(() => {
    if (!DeviceCoordinates.length) return null;

    const SolutionMap = new Map<string, INetworkStationWithSpeed>();

    // Finding best Network station for all given devices
    for (const DeviceCoordinate of DeviceCoordinates) {
      const DeviceKey = `X${DeviceCoordinate.X} Y${DeviceCoordinate.Y}`;
      const result = GetFastestNetworkStation(
        DeviceCoordinate,
        AvailableNetworkStations
      );

      SolutionMap.set(DeviceKey, result);
    }

    const responseJSX = [];
    for (const [Key, Value] of SolutionMap) {
      if (Value.Speed > 0 && Value.NetworkStation) {
        responseJSX.push(
          <Grid item xs={1} key={Key}>
            <Typography variant="body1">{`Best Network station for point: ${Key} is: `}</Typography>
            <Typography variant="body2">{`Position: X ${Value.NetworkStation.Position.X}`}</Typography>
            <Typography variant="body2">{`Position: Y ${Value.NetworkStation.Position.Y}`}</Typography>
            <Typography variant="body2">{`Speed: ${Value.Speed}`}</Typography>
          </Grid>
        );
      } else {
        responseJSX.push(
          <Grid item xs={1} key={Key}>
            <Typography variant="body1">{`Best Network station for point: ${Key} is: `}</Typography>
            <Typography color={"red"} variant="body2">
              We currently don't have any network station that can reach that
              device!
            </Typography>
          </Grid>
        );
      }
    }

    return (
      <Grid
        paddingTop={4}
        container
        columns={{ xs: 1, sm: 1, md: 1 }}
        rowGap={2}
        columnGap={2}
      >
        {responseJSX}
      </Grid>
    );
  }, [DeviceCoordinates]);

  return (
    <BlockDiv>
      <CenterDiv>
        <ResponsiveDiv>
          <BlockDiv>
            <Grid container columns={{ xs: 1, sm: 1, md: 1 }} rowGap={4}>
              <Grid item xs={1}>
                <CenterHorizontalDiv>
                  <Typography style={{ textAlign: "center" }} variant="h2">
                    Calculate Network Speed
                  </Typography>
                </CenterHorizontalDiv>
              </Grid>
              <Grid item xs={1}>
                <Input
                  value={InputValue}
                  onChange={OnInputChange}
                  label="Device Position"
                  placeholder="X Y"
                  autoComplete="off"
                />
                <InlineDiv paddingTop={1} columnGap={1}>
                  {RenderActiveCoordinates()}
                </InlineDiv>
                <CenterHorizontalDiv style={{ marginTop: 32 }}>
                  <Button size="large" onClick={AddDeviceCoordinate}>
                    Add Device Coordinate
                  </Button>
                </CenterHorizontalDiv>
              </Grid>
            </Grid>
            {CalcResponse}
          </BlockDiv>
        </ResponsiveDiv>
      </CenterDiv>
    </BlockDiv>
  );
}

export default App;
