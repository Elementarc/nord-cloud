import React from "react";
import { Button as MUIButton } from "@mui/material";
import { IButtonProps } from ".";

export const ButtonComponent: React.FC<IButtonProps> = ({ ...args }) => {
  return <MUIButton {...args} />;
};
