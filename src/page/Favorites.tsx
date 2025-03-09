import { useGetFavoritesQuery } from "../store/services/faivorites";
import Page from "../core/Page";
import labels from "../lib/labels";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loading from "../core/Loading";
import FavoritesDataGrid from "../components/favorites-data-grid";

const Favorites = () => {
  const { data, isFetching } = useGetFavoritesQuery();

  if (!data) return <Loading />;

  return (
    <Page icon={FavoriteIcon} title={labels.favorite_list}>
      <FavoritesDataGrid data={data} isFetching={isFetching} />
    </Page>
  );
};

export default Favorites;
