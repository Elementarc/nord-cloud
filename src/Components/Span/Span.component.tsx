import React from "react";
import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material"

export type ISpanProps = Omit<MUIBoxProps, "component">

export const Span: React.FC<ISpanProps> = ({ ...args }) => {
  return <MUIBox component={"span"} {...args} />
}