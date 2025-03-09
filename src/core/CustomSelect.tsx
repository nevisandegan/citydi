import { styled, Select, SelectProps } from "@mui/material";

const FONT_SIZE = "0.8rem";
const BORDER_RADIUS = 8;
const PADDING = "7.5px 7px";

const CustomSelect = styled(Select, {
  name: "CustomSelect",
  slot: "Root",
})<SelectProps<string>>(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",

  "& .MuiInputBase-root": {
    fontSize: FONT_SIZE,
    borderRadius: BORDER_RADIUS,
    backgroundColor: "transparent !important",
    border: `1px solid ${theme.palette.grey[200]}`,
    height: "32px",
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

  "& .MuiSelect-select": {
    color: theme.palette.text.secondary,
    padding: PADDING,
    fontSize: FONT_SIZE,
    height: "100%",
    display: "flex",
    alignItems: "center",
    "&:focus": {
      backgroundColor: "transparent",
    },
  },

  "& .MuiMenuItem-root": {
    fontSize: FONT_SIZE,
    color: theme.palette.text.secondary,
    height: "auto",
  },
}));

export default CustomSelect;
