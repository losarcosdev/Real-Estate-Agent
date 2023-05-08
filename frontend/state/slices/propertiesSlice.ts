import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProperties, ISetPropertiesAction } from "../interfaces";
import { Dispatch } from "../store";

interface InitialState {
  properties: IProperties[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  properties: [],
  error: null,
  loading: false,
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    LOADING_PROPERTIES: (state) => {
      state.loading = true;
      state.error = null;
    },

    SET_PROPERTIES: (
      state,
      { payload }: PayloadAction<ISetPropertiesAction>
    ) => {
      state.properties = payload.properties;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { LOADING_PROPERTIES, SET_PROPERTIES } = propertiesSlice.actions;
