import { CSSClassSelector, MUIClassSelector } from "../../../Enums";
import { CoordinateComponent } from "../Coordinate.component";
import { styled } from "@mui/material";

export const Coordinate = styled(CoordinateComponent)(({ theme }) => {
  return {
    color: "white",
    padding: "4px 10px",
    minWidth: "unset",
    lineHeight: "unset",
    backgroundColor: "#6baecf",
    textTransform: "none",

    [CSSClassSelector.hover]: {
      backgroundColor: theme.palette.error.light,
    },
    [CSSClassSelector.active]: {
      backgroundColor: theme.palette.error.dark,
    },
    [MUIClassSelector.focusVisible]: {
      backgroundColor: theme.palette.error.dark,
    },

    [MUIClassSelector.disabled]: {
      opacity: 0.3,
      color: theme.palette.text.primary,
    },
  };
});
