import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import CustomInput from "./components/CustomInput";
import Page from "./components/Page";
import labels from "./lib/labels";

function App() {
  return (
    <>
      <Page icon={PeopleAltIcon} title={labels.users}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Box sx={{ boxShadow: 1, padding: 2, borderRadius: "8px" }}>
              <Typography sx={{ mb: 2, fontSize: "1rem" }}>
                {"جستجوی کاربران"}
              </Typography>
              <Box>
                <CustomInput placeholder="نام کاربر" />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 9 }}>eee</Grid>
        </Grid>
      </Page>
    </>
  );
}

export default App;
