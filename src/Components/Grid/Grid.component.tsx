import React from "react";
import { Grid as MUIGrid } from "@mui/material";
import { IGridProps } from ".";

export const GridComponent: React.FC<IGridProps> = ({ ...args }) => {
  return <MUIGrid {...args} />;
};
