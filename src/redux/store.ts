import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "./itemsContact";
// import { filterContacts } from "./filterContacts";
import { authApi } from "./auth/authStore";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // [filterContacts.name]: filterContacts.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});
