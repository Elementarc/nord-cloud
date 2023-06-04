import { CSSClassSelector, MUIClassSelector } from "../../../Enums";
import { ButtonComponent } from "../Button.component";
import { styled } from "@mui/material";

export const Button = styled(ButtonComponent)(({ theme }) => {
  return {
    color: "white",
    padding: "10px 24px",
    minWidth: "140px",
    lineHeight: "unset",
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",

    [CSSClassSelector.hover]: {
      backgroundColor: theme.palette.primary.light,
    },
    [CSSClassSelector.active]: {
      backgroundColor: theme.palette.primary.dark,
    },
    [MUIClassSelector.focusVisible]: {
      backgroundColor: theme.palette.primary.dark,
    },

    [MUIClassSelector.disabled]: {
      opacity: 0.3,
      color: theme.palette.text.primary,
    },
  };
});
