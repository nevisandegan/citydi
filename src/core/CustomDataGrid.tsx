import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { hexToRGBA } from "../utils/hex-to-rgba";

export const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  webkitFontSmoothing: "auto",
  "& .MuiDataGrid-menuIcon": {
    display: "none !important",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
    border: "none",
  },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "inherit !important",
  },
  letterSpacing: "normal",
  "& .MuiDataGrid-main": {
    borderRadius: 10,
    boxShadow: "2px 2px 12px 0px rgba(76, 78, 100, 0.22)",
  },
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: "0.7rem",
    fontWeight: 700,
    textAlign: "center",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeaderTitleContainer, .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight) .MuiDataGrid-cell":
    {
      justifyContent: "center",
    },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: theme.palette.common.white,
    textAlign: "center",
    fontWeight: 700,
  },
  "& .MuiDataGrid-iconButtonContainer button, & .MuiDataGrid-menuIcon button": {
    color: "#fff !important",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#F0F0F0" : "#303030"
    }`,
    textAlign: "center",
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,0.85)"
        : "rgba(255,255,255,0.65)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-checkboxInput": {
    color: theme.palette.common.white,
    width: "35px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiDataGrid-columnHeaderTitleContainer, .MuiDataGrid-checkboxInput": {
    color: theme.palette.common.white,
  },
  "& .MuiDataGrid-row": {
    "&:nth-of-type(odd)": {
      backgroundColor: `${hexToRGBA(theme.palette.primary.dark, 0.1)}`,
    },
    "&:hover": {
      backgroundColor: `${hexToRGBA(
        theme.palette.warning.main,
        0.2
      )} !important`,
    },
  },
  "& .Mui-selected": {
    backgroundColor: `${hexToRGBA(
      theme.palette.primary.main,
      0.65
    )} !important`,
  },
  "& .MuiDataGrid-cell *:not(svg)": {
    color: `${theme.palette.common.black} !important`,
  },
}));
