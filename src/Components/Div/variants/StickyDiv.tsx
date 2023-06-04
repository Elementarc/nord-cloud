import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Sticky Div that is responsive.
 */
export const StickyDiv = styled(DivComponent)(() => {
  return {
    position: "sticky",
    top: 0,
  };
});
