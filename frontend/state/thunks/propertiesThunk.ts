import { Dispatch, LOADING_PROPERTIES, SET_PROPERTIES } from "state";
import { IProperties, IProperty } from "../interfaces/interfaces";
import { realEstateApi } from "../../realEstateApi";

export const fetchProperties =
  (query: string) => async (dispatch: Dispatch) => {
    dispatch(LOADING_PROPERTIES());

    try {
      const { data } = await realEstateApi.get<IProperties[]>(
        `properties?${query}`
      );

      console.log(data);

      dispatch(SET_PROPERTIES({ properties: data }));
    } catch (error: any) {
      console.log(error);
    }
  };

export const getPropertiesSlug = async () => {
  try {
    const { data } = await realEstateApi.get<IProperties[]>("properties");
    const slugs = data.map((property) => property.slug);

    return slugs;
  } catch (error) {
    console.log(error);
  }
};

export const getPropertyBySlug = async (slug: string) => {
  try {
    const { data } = await realEstateApi.get(`properties/${slug}`);
    const property: IProperty = data;

    return property;
  } catch (error) {
    console.log(error);
  }
};
