import {
  CREATE_PROPERTY,
  DELETE_PROPERTY,
  Dispatch,
  LOADING_ADMIN,
  SET_ADMIN_PROPERTIES,
  UPDATE_PROPERTY,
} from "state";
import Cookies from "js-cookie";
import realEstateApi from "axios";

export const createProperty = (property: any) => async (dispatch: Dispatch) => {
  dispatch(LOADING_ADMIN());

  const token = Cookies.get("token");

  try {
    const { data } = await realEstateApi.post("properties", property, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(CREATE_PROPERTY({ property: data }));
  } catch (error) {
    console.log(error);
  }
};

export const updateProperty =
  (property: any, id: string) => async (dispatch: Dispatch) => {
    dispatch(LOADING_ADMIN());
    const token = Cookies.get("token");

    try {
      const { data } = await realEstateApi.patch(`properties/${id}`, property, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(UPDATE_PROPERTY({ property: data }));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteProperty =
  (property: any, id: string) => async (dispatch: Dispatch) => {
    dispatch(LOADING_ADMIN());
    const token = Cookies.get("token");

    try {
      await realEstateApi.delete(`properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(DELETE_PROPERTY({ property }));
    } catch (error) {
      console.log(error);
    }
  };

export const fetchAdminProperties = () => async (dispatch: Dispatch) => {
  dispatch(LOADING_ADMIN());

  try {
    const { data } = await realEstateApi.get("properties");
    dispatch(SET_ADMIN_PROPERTIES({ properties: data }));
  } catch (error: any) {
    console.log(error);
  }
};
