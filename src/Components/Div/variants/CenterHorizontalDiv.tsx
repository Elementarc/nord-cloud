import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that centers its content horizontal.
 */
export const CenterHorizontalDiv = styled(DivComponent)(() => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  };
});
