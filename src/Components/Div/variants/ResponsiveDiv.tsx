import { styled } from "@mui/material";
import { DivComponent } from "../Div.component";

/**
 * Div that is responsive.
 */
export const ResponsiveDiv = styled(DivComponent)(({ theme }) => {
  return {
    position: "relative",
    width: "100%",
    height: "auto",

    [theme.breakpoints.up("xl")]: {
      width: "40%",
    },

    [theme.breakpoints.down("xl")]: {
      width: "60%",
    },

    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },

    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  };
});
