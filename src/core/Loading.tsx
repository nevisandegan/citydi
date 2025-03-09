import { CircularProgress, Box, Typography } from "@mui/material";

const Loading = ({ text = "در حال بارگذاری..." }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
      <CircularProgress color="primary" size={60} />
      <Typography mt={2} color="textSecondary">
        {text}
      </Typography>
    </Box>
  );
};

export default Loading;
