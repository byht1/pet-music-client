import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import { authSlice } from "./auth/auth-slice";
import { activeTrackReducers } from "redux/activeTrack";
import { newTrackReducers } from "./newTrack";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const newTrackPersistConfig = {
  key: "newTrack",
  storage,
};

const reducer = {
  activeTrack: activeTrackReducers,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
  newTrack: persistReducer(newTrackPersistConfig, newTrackReducers),
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
