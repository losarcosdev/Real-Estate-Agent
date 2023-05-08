import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginUserAction, ISetErrorAction } from "../interfaces/actions-types";
import { IAuthResponse } from "../interfaces/interfaces";
import Cookies from "js-cookie";

interface InitialState {
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user?: IAuthResponse;
}

const initialState: InitialState = {
  error: null,
  isAuthenticated: false,
  loading: false,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOADING_AUTH: (state) => {
      state.error = null;
      state.isAuthenticated = false;
      state.loading = true;
      state.user = undefined;
    },

    LOGIN_USER: (state, { payload }: PayloadAction<ILoginUserAction>) => {
      state.error = null;
      state.loading = false;
      state.user = payload.user;
      const token = Cookies.get("token");
      const role = Cookies.get("role");
      if (token && role === "admin") {
        state.isAuthenticated = true;
      } else state.isAuthenticated = false;
    },

    HANDLE_ERROR: (state, { payload }: PayloadAction<ISetErrorAction>) => {
      state.error = payload.error;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = undefined;
    },

    SET_USER: (state, { payload }: PayloadAction<ILoginUserAction>) => {
      state.error = null;
      state.loading = false;
      state.user = payload.user;
      const token = Cookies.get("token");
      const role = Cookies.get("role");
      if (token && role === "admin") {
        state.isAuthenticated = true;
      } else state.isAuthenticated = false;
    },
  },
});

export const { HANDLE_ERROR, LOADING_AUTH, LOGIN_USER, SET_USER } =
  authSlice.actions;
