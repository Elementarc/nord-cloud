import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that takes the full viewport height and window width.
 */
export const ViewPortDiv = styled(DivComponent)(() => {
  return {
    position: "relative",
    height: "100vh",
    width: "100%",
  };
});
