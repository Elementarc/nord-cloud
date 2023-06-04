import React from "react";
import { Typography } from "@mui/material";
import { Button } from "..";
import { ICoordinatesProps } from "./Coordinate.types";

export const CoordinateComponent: React.FC<ICoordinatesProps> = ({
  x,
  y,
  ...args
}) => {
  return (
    <Button {...args}>
      <Typography>{`X${x} Y${y}`}</Typography>
    </Button>
  );
};
