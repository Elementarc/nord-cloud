import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that centers its content horizontal and vertical.
 */
export const CenterDiv = styled(DivComponent)(() => {
  return {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
});
