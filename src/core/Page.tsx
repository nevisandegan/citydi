import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import theme from "../theme/theme";

interface Props {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
}

const Page = ({ icon, title, children }: Props) => {
  const IconComponent = icon;

  return (
    <>
      <Stack flexDirection={"row"} alignContent="center" gap={1.5}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.light,
            border: `1px solid ${theme.palette.grey[400]}`,
            paddingX: 1.1,
            paddingY: 0.6,
            borderRadius: "100%",
          }}
        >
          <IconComponent
            sx={{ fontSize: "1.4rem", color: theme.palette.common.white }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.6rem", fontWeight: 500, alignSelf: "center" }}
        >
          {title}
        </Typography>
      </Stack>
      <Box sx={{ marginTop: 5 }}>{children}</Box>
    </>
  );
};

export default Page;
