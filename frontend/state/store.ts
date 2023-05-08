import { configureStore } from "@reduxjs/toolkit";
import { propertiesSlice, authSlice, adminSlice } from "./slices";

export const store = configureStore({
  reducer: {
    properties: propertiesSlice.reducer,
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
