import { GridColDef } from "@mui/x-data-grid";
import { CustomDataGrid } from "../../core/CustomDataGrid";
import { useMemo, useState } from "react";
import labels from "../../lib/labels";
import { UserResource } from "../../store/services/users/type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import theme from "../../theme/theme";
import { Box, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

interface Props {
  data: UserResource[];
  isFetching: boolean;
}

const UsersDataGrid = ({ data, isFetching }: Props) => {
  // const columns: GridColDef[] = useMemo(() => {
  //   return [
  //     {
  //       flex: 0.1,
  //       field: "id",
  //       type: "number",
  //       sortable: true,
  //       filterable: false,
  //       headerName: labels.number,
  //     },
  //     {
  //       flex: 0.1,
  //       field: "name",
  //       type: "string",
  //       sortable: true,
  //       filterable: false,
  //       headerName: labels.name,
  //     },
  //     {
  //       flex: 0.1,
  //       field: "avatar",
  //       type: "string",
  //       sortable: true,
  //       filterable: false,
  //       headerName: labels.image,
  //       renderCell: (params) => (
  //         <img
  //           src={params.value as string}
  //           alt="avatar"
  //           style={{
  //             width: "30px",
  //             height: "30px",
  //             borderRadius: "50%",
  //             objectFit: "cover",
  //           }}
  //           onError={(e) => {
  //             (e.target as HTMLImageElement).src =
  //               "/public/images/fallback-avatar.png";
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       flex: 0.1,
  //       field: "createdAt",
  //       type: "string",
  //       sortable: true,
  //       filterable: false,
  //       headerName: labels.created_at,
  //     },
  //   ];
  // }, []);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        flex: 0.1,
        field: "id",
        type: "number",
        sortable: true,
        filterable: false,
        headerName: labels.number,
      },
      {
        flex: 0.1,
        field: "name",
        type: "string",
        sortable: true,
        filterable: false,
        headerName: labels.name,
      },
      {
        flex: 0.1,
        field: "avatar",
        type: "string",
        sortable: true,
        filterable: false,
        headerName: labels.image,
        renderCell: (params) => (
          <img
            src={params.value as string}
            alt="avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/public/images/fallback-avatar.png";
            }}
          />
        ),
      },
      {
        flex: 0.1,
        field: "createdAt",
        type: "string",
        sortable: true,
        filterable: false,
        headerName: labels.created_at,
      },
      {
        flex: 0.1,
        field: "isFavorite",
        type: "boolean",
        sortable: false,
        filterable: false,
        headerName: "Favorite",
        renderCell: (params) => {
          const rowId = params.id as string;
          const isFavorite = favorites[rowId] ?? false; // از persist می‌خونیم، اگه نباشه false
          const [favorite, setFavorite] = useState(isFavorite);

          const toggleFavorite = async () => {
            const newFavorite = !favorite;
            setFavorite(newFavorite);
            dispatch(setFavorite({ id: rowId, isFavorite: newFavorite }));
          };

          return (
            <Box onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              {favorite ? (
                <Tooltip title="حذف از علاقه‌مندی‌ها">
                  <Favorite sx={{ color: "#FF0000" }} />
                </Tooltip>
              ) : (
                <Tooltip title="افزودن به علاقه‌مندی‌ها">
                  <FavoriteBorder sx={{ color: "#FF0000" }} />
                </Tooltip>
              )}
            </Box>
          );
        },
      },
    ];
  }, [favorites, dispatch]); // وابستگی‌ها رو اضافه کردیم

  const rows = data || [];
  return (
    <CustomDataGrid
      loading={isFetching}
      rows={rows}
      columns={columns}
      pageSizeOptions={[5]}
      hideFooter
    />
  );
};

export default UsersDataGrid;
