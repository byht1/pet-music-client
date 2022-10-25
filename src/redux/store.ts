import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "./itemsContact";
// import { filterContacts } from "./filterContacts";

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // [filterContacts.name]: filterContacts.reducer,
  },
  //   middleware: (getDefaultMiddleware) => [
  //     ...getDefaultMiddleware(),
  //     contactsApi.middleware,
  //   ],
  devTools: process.env.NODE_ENV !== "production",
});
