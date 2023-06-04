import React from "react";
import { Box as MUIBox } from "@mui/material";
import { IDivProps } from "./Div.types";

export const DivComponent: React.FC<IDivProps> = ({ component, ...args }) => {
  return <MUIBox component={component ? component : "div"} {...args} />;
};
