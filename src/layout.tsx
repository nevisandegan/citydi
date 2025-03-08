// components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./core/Header";
import { Box } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box style={{ padding: "1rem", margin: "2rem 10rem" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
