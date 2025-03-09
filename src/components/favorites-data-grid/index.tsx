import { GridColDef } from "@mui/x-data-grid";
import { CustomDataGrid } from "../../core/CustomDataGrid";
import { useMemo } from "react";
import labels from "../../lib/labels";
import { UserResource } from "../../store/services/users/type";

interface Props {
  data: UserResource[];
  isFetching: boolean;
}

const FavoritesDataGrid = ({ data, isFetching }: Props) => {
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
    ];
  }, []);

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

export default FavoritesDataGrid;
