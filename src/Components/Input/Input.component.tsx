import React from "react";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";

export type IInputProps = Omit<
  MUITextFieldProps,
  "variant" | "inputProps" | "classname"
>;

export const InputComponent: React.FC<IInputProps> = ({ ...args }) => {
  return <MUITextField variant="standard" {...args} />;
};
