import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";

import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { useGetUsersQuery } from "../store/services/users";
import labels from "../lib/labels";
import Page from "../core/Page";
import CustomTextField from "../core/CustomTextField";
import theme from "../theme/theme";
import UsersDataGrid from "../components/users-data-grid";

function Users() {
  const [filterValue, setFilterValue] = useState<string>("");

  const { data, isFetching } = useGetUsersQuery();

  return (
    <>
      <Page icon={PeopleAltIcon} title={labels.users_list}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Box
              sx={{
                boxShadow: 1,
                paddingX: 2,
                paddingY: 3,
                borderRadius: "8px",
              }}
            >
              <Stack flexDirection="row" gap={0.5}>
                <SearchIcon
                  sx={{
                    fontSize: "1.2rem",
                    color: theme.palette.primary.light,
                  }}
                />
                <Typography sx={{ mb: 2, fontSize: "0.9rem" }}>
                  {labels.users_search}
                </Typography>
              </Stack>
              <Stack gap={1}>
                <Box>
                  <CustomTextField fullWidth placeholder={labels.name} />
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 9 }}>
            <UsersDataGrid data={data} isFetching={isFetching} />
          </Grid>
        </Grid>
      </Page>
    </>
  );
}

export default Users;
