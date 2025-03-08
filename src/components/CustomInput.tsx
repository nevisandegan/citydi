import { styled, TextField, TextFieldProps } from "@mui/material";

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  alignItems: "flex-start",
  "& input::placeholder": {
    fontSize: "0.8rem",
    wordSpacing: "-1px",
  },
  "& .MuiInputLabel-root": {
    transform: "none",
    lineHeight: 1.154,
    position: "relative",
    marginBottom: theme.spacing(1),
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: `${theme.palette.text.primary}`,
  },
  "& .MuiInputBase-root": {
    borderRadius: 8,
    backgroundColor: "transparent !important",
    border: `1px solid white,0.2)`,
    transition: theme.transitions.create(["border-color", "box-shadow"], {
      duration: theme.transitions.duration.shorter,
    }),
    "&:not(.Mui-focuser):not(.Mui-disabled):not(.Mui-error):hover": {
      borderColor: `white`,
    },
    "&:before, &:after": {
      display: "none",
    },
    "&.MuiInputBase-sizeSmall": {
      borderRadius: 6,
    },
    "&.Mui-error": {
      borderColor: theme.palette.error.main,
    },
    "&.Mui-focused": {
      boxShadow: theme.shadows[1],
      "& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":
        {
          transform: "translateX(-4px)",
        },
      "&.MuiInputBase-colorPrimary": {
        borderColor: theme.palette.primary.main,
      },
      "&.MuiInputBase-colorSecondary": {
        borderColor: theme.palette.secondary.main,
      },
      "&.MuiInputBase-colorInfo": {
        borderColor: theme.palette.info.main,
      },
      "&.MuiInputBase-colorSuccess": {
        borderColor: theme.palette.success.main,
      },
      "&.MuiInputBase-colorWarning": {
        borderColor: theme.palette.warning.main,
      },
      "&.MuiInputBase-colorError": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-disabled": {
        backgroundColor: `${theme.palette.action.selected} !important`,
      },
      "& .MuiInputAdornment-root": {
        marginTop: "0 !important",
      },
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.secondary,
      "&:not(textarea)": {
        padding: "7.5px 7px",
      },
      "&:not(textarea).MuiInputBase-inputSizeSmall": {
        padding: "4.5px 7px",
      },
      "&:not(.MuiInputBase-readOnly):not([readonly])::placeholder": {
        transition: theme.transitions.create(["opacity", "transform"], {
          duration: theme.transitions.duration.shorter,
        }),
      },
      "&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)": {
        paddingLeft: 0,
      },
      "&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)": {
        paddingRight: 0,
      },
    },
    "& .MuiFormHelperText-root": {
      lineHeight: 1.154,
      margin: theme.spacing(1, 0, 0),
      color: theme.palette.text.secondary,
      fontSize: "0.8rem",
      "&.Mui-error": {
        color: theme.palette.error.main,
      },
    },
    "& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-filled .MuiChip-root": {
      height: 22,
    },
    "& .MuiAutocomplete-input": {
      paddingLeft: "6px !important",
      paddingTop: "7.5px !important",
      paddingBottom: "7.5px !important",
      "&.MuiInputBase-inputSizeSmall": {
        paddingLeft: "6px !important",
        paddingTop: "2.5px !important",
        paddingBottom: "2.5px !important",
      },
    },
    "& .MuiAutocomplete-inputRoot": {
      paddingTop: "8px !important",
      paddingLeft: "8px !important",
      paddingBottom: "8px !important",
      "&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart": {
        paddingLeft: "13px !important",
      },
      "&.MuiInputBase-sizeSmall": {
        paddingTop: "1.9px !important",
        paddingLeft: "2px !important",
        paddingBottom: "1.9px !important",
        "& .MuiAutocomplete-tag": {
          margin: 2,
          height: 22,
        },
      },
    },
    "& .MuiInputBase-multiline": {
      padding: "15.25px 13px",
      "&.MuiInputBase-sizeSmall": {
        padding: "7.25px 13px",
      },
      "& textarea.MuiInputBase-inputSizeSmall:placeholder-shown": {
        overflowX: "hidden",
      },
    },
  },
}));

export default CustomTextField;
