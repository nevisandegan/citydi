import { styled, TextField, TextFieldProps } from "@mui/material";

const FONT_SIZE = "0.8rem";
const BORDER_RADIUS = 4;
const PADDING = "10px 7px";

const CustomTextField = styled(TextField, {
  name: "CustomTextField",
  slot: "Root",
})<TextFieldProps>(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",

  "& .MuiInputBase-root": {
    fontSize: FONT_SIZE,
    borderRadius: BORDER_RADIUS,
    backgroundColor: "transparent !important",
    border: `1px solid ${theme.palette.grey[200]}`,
    transition: theme.transitions.create(["border-color", "box-shadow"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
    "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover": {
      borderColor: theme.palette.common.white,
    },
    "&:before, &:after": {
      display: "none",
    },
    "&.Mui-focused": {
      boxShadow: theme.shadows[1],
      borderColor: theme.palette.primary.main,
    },
  },

  "& input::placeholder": {
    fontSize: FONT_SIZE,
    wordSpacing: "-1px",
    color: theme.palette.text.disabled,
    opacity: 1,
  },

  "& .MuiInputBase-input": {
    color: theme.palette.text.secondary,
    padding: PADDING,
    "&:focus::placeholder": {
      transform: "translateX(-4px)",
      transition: theme.transitions.create(["transform"], {
        duration: theme.transitions.duration.shorter,
      }),
    },
  },
}));

export default CustomTextField;
