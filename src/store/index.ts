import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/users";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import favoriteReducer from "./slices/favoriteSlice";
import { favoritesApi } from "./services/faivorites";

const middleware = [usersApi.middleware, favoritesApi.middleware];

const reducers = {
    [usersApi.reducerPath]: usersApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    favorites: favoriteReducer,
};

const combinedReducers = combineReducers(reducers);

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["favorites"],
};

const reducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);