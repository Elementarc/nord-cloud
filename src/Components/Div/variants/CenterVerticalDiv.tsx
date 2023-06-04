import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that centers its content vertical.
 */
export const CenterVerticalDiv = styled(DivComponent)(() => {
  return {
    display: "flex",
    width: "100%",
    alignItems: "center",
  };
});
