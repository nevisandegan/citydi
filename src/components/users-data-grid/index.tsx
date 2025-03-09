import { GridColDef } from "@mui/x-data-grid";
import { CustomDataGrid } from "../../core/CustomDataGrid";
import { useMemo, useState } from "react";
import labels from "../../lib/labels";
import { UserResource } from "../../store/services/users/type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteType, setFavorite } from "../../store/slices/favoriteSlice";
import { RootState } from "../../store";

interface Props {
  data: UserResource[];
  isFetching: boolean;
}

const UsersDataGrid = ({ data, isFetching }: Props) => {
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
        headerName: labels.favorite,
        renderCell: (params) => {
          const rowId = params.id as string;
          const isFavoritePersist = favorites.find(
            (item: FavoriteType) => item.id === params.id
          );
          const isFavorite = isFavoritePersist ?? false;
          const [showFavorite, setShowFavorite] = useState(isFavorite);

          const toggleFavorite = () => {
            const newFavorite = !showFavorite;
            setShowFavorite(newFavorite);
            dispatch(setFavorite({ id: rowId, isFavorite: newFavorite }));
          };

          return (
            <Box onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              {showFavorite ? (
                <Tooltip title="حذف از علاقه‌مندی‌ها">
                  <Favorite />
                </Tooltip>
              ) : (
                <Tooltip title="افزودن به علاقه‌مندی‌ها">
                  <FavoriteBorder />
                </Tooltip>
              )}
            </Box>
          );
        },
      },
    ];
  }, [favorites, dispatch]);

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
