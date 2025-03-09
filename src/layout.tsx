import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./core/Header";
import { Box } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "1rem",
          margin: {
            xs: "0.2rem",
            sm: "2rem 5rem",
            md: "2rem 8rem",
            lg: "2rem 10rem",
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
