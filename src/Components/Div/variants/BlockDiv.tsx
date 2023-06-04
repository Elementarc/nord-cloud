import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that makes its children take the full width of its row.
 */
export const BlockDiv = styled(DivComponent)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "100%",
  };
});
