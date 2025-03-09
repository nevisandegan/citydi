import { Box, Link } from "@mui/material";

import navItems from "../data/nav-item";

const Header = () => {
  return (
    <Box
      sx={{
        boxShadow: 4,
        paddingX: { xs: "2rem", sm: "11rem" },
        display: "flex",
        gap: 2,
        alignItems: "center",
        height: "72px",
      }}
    >
      {navItems.map((item, index) => (
        <Link
          sx={{
            textDecorationLine: "none",
            fontSize: "0.8rem",
          }}
          key={`${index}-${item.href}`}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </Box>
  );
};

export default Header;
