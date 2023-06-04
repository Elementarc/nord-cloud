import { styled } from "@mui/material";
import { InputComponent } from "../Input.component";
import { CSSClassSelector, MUIClassSelector } from "../../../Enums";

export const Input = styled(InputComponent)(({ theme }) => {
  const fontSizeMedium = "18px";
  const fontSizeSmall = "16px";

  return {
    color: theme.palette.text.primary,
    width: "100%",

    // Label
    ".MuiFormLabel-root": {
      color: theme.palette.grey[400],
      fontFamily: "Alatsi",
      "&:not(.MuiInputLabel-sizeSmall)": {
        paddingTop: "0.3rem",
      },
      fontSize: fontSizeMedium,
      "&.MuiInputLabel-sizeSmall": {
        paddingTop: "0.4rem",
        fontSize: fontSizeSmall,
      },
      "&.MuiInputLabel-shrink": {
        [MUIClassSelector.focused]: {
          color: theme.palette.primary.main,
        },
        marginTop: "5px",
        padding: "unset",
      },

      [MUIClassSelector.error]: {
        color: theme.palette.error.main,

        [MUIClassSelector.focused]: {
          color: theme.palette.error.main,
        },
      },
    },

    // Input
    ".MuiInputBase-root": {
      ".MuiInputBase-input": {
        fontFamily: "Alatsi",
        "&::placerholder": {
          color: "white",
        },

        height: "1.7rem",
        fontSize: fontSizeMedium,
        paddingBottom: "4px",
        "&.MuiInputBase-inputSizeSmall": {
          height: "1.5rem",
          fontSize: fontSizeSmall,
          paddingBottom: "4px",
        },
      },

      "&.MuiInputBase-sizeSmall": {
        fontSize: "16px",
      },

      [CSSClassSelector.before]: {
        borderColor: theme.palette.text.primary,
      },

      [MUIClassSelector.error]: {
        [CSSClassSelector.before]: {
          borderColor: theme.palette.error.main,
        },
      },
    },

    // Helper text
    ".MuiFormHelperText-root": {
      color: theme.palette.grey[200],
      fontSize: "14px",

      [MUIClassSelector.error]: {
        color: theme.palette.error.main,
      },
    },
  };
});
