import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createProperty,
  deleteProperty,
  fetchProperties,
  LOADING_PROPERTIES,
  loginUser,
  SET_PROPERTIES,
  setUser,
  updateProperty,
  fetchAdminProperties,
} from "../state";

const actionCreators = {
  createProperty,
  deleteProperty,
  fetchAdminProperties,
  fetchProperties,
  loginUser,
  setUser,
  updateProperty,
  LOADING_PROPERTIES,
  SET_PROPERTIES,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};
