// pages/NotFound.tsx
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", color: "#3A5A40" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3, color: "#344E41" }}>
        صفحه‌ای که دنبالش هستی پیدا نشد.
      </Typography>
      <Button
        component={RouterLink}
        to="/users"
        variant="contained"
        sx={{
          backgroundColor: "#3A5A40", // از primary.main
          "&:hover": { backgroundColor: "#A3B18A" }, // از primary.light
        }}
      >
        برو به صفحه کاربران
      </Button>
    </Box>
  );
};

export default NotFound;
