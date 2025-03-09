import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useGetUsersQuery } from "../store/services/users";
import labels from "../lib/labels";
import Page from "../core/Page";
import CustomTextField from "../core/CustomTextField";
import theme from "../theme/theme";
import UsersDataGrid from "../components/users-data-grid";
import Loading from "../core/Loading";
import debounce from "../utils/debounce";
import { UserResource } from "../store/services/users/type";

function Users() {
  const { data, isFetching } = useGetUsersQuery();
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<UserResource[]>([]);

  const filterUsers = (
    users: UserResource[],
    query: string
  ): UserResource[] => {
    if (!query || query.length <= 1) {
      return users;
    }
    return users.filter((user: UserResource) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchUser = (value: string) => {
    if (data) {
      const filtered = filterUsers(data, value);
      setFilteredData(filtered);
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearchUser, 500), [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  if (!data) return <Loading />;

  const displayData =
    filteredData.length > 0 || searchValue.length > 1 ? filteredData : data;

  return (
    <Page icon={PeopleAltIcon} title={labels.users_list}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 3 }}>
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
                <CustomTextField
                  onChange={handleChange}
                  value={searchValue}
                  fullWidth
                  placeholder={labels.name}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <UsersDataGrid data={displayData} isFetching={isFetching} />
        </Grid>
      </Grid>
    </Page>
  );
}

export default Users;
