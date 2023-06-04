import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that renders its content all inline.
 */
export const InlineDiv = styled(DivComponent)(() => {
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
});
