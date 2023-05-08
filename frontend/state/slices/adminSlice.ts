import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISetPropertiesAction } from "../interfaces/actions-types";
import {
  ICreatePropertyAction,
  IDeletePropertyAction,
  IProperties,
  IUpdatePropertyAction,
} from "state";

interface InitialState {
  error: string | null;
  loading: boolean;
  properties: IProperties[];
}

const initialState: InitialState = {
  error: null,
  loading: false,
  properties: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    LOADING_ADMIN: (state) => {
      state.error = null;
      state.loading = true;
    },

    CREATE_PROPERTY: (
      state,
      { payload }: PayloadAction<ICreatePropertyAction>
    ) => {
      state.error = null;
      state.loading = false;
      state.properties = [...state.properties, payload.property];
    },

    UPDATE_PROPERTY: (
      state,
      { payload }: PayloadAction<IUpdatePropertyAction>
    ) => {
      const updatedProperties = state.properties.map((property) => {
        if (property.id === payload.property.id) {
          return payload.property;
        }
        return property;
      });
      state.properties = updatedProperties;
      state.error = null;
      state.loading = false;
    },

    DELETE_PROPERTY: (
      state,
      { payload }: PayloadAction<IDeletePropertyAction>
    ) => {
      state.error = null;
      state.loading = false;
      state.properties = state.properties.filter(
        (property) => property.id !== payload.property.id
      );
    },

    SET_ADMIN_PROPERTIES: (
      state,
      { payload }: PayloadAction<ISetPropertiesAction>
    ) => {
      state.properties = payload.properties;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  CREATE_PROPERTY,
  DELETE_PROPERTY,
  LOADING_ADMIN,
  SET_ADMIN_PROPERTIES,
  UPDATE_PROPERTY,
} = adminSlice.actions;
