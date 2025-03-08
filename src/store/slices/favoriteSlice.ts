// src/redux/favoritesSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Favorite {
    id: string;
    isFavorite: boolean;
}

interface FavoritesState {
    favorites: Favorite[];
}

const initialState: FavoritesState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorite: (state, action: PayloadAction<Favorite>) => {
            const { id, isFavorite } = action.payload;
            const existingFavorite = state.favorites.find((fav) => fav.id === id);

            if (existingFavorite) {
                existingFavorite.isFavorite = isFavorite;
            } else {
                state.favorites.push({ id, isFavorite });
            }
        },
    },
});

export const { setFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
