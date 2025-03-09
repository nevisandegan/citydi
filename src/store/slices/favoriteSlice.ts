import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteType {
    id: string;
    isFavorite: boolean;
}

export interface FavoritesState {
    favorites: FavoriteType[];
}

const initialState: FavoritesState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorite: (state, action: PayloadAction<FavoriteType>) => {
            const { id, isFavorite } = action.payload;

            if (!isFavorite) {
                const existingFavorite = state.favorites.filter((fav) => fav.id !== id);
                state.favorites = existingFavorite;
            } else {
                state.favorites.push({ id, isFavorite });
            }
        },
    },
});

export const { setFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
