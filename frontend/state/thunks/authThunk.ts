import {
  IAuthResponse,
  Dispatch,
  LOADING_AUTH,
  LOGIN_USER,
  SET_USER,
} from "state";
import Cookies from "js-cookie";
import realEstateApi from "axios";

export const loginUser =
  (email: string, password: string) =>
  async (dispatch: Dispatch): Promise<Boolean> => {
    dispatch(LOADING_AUTH());
    const user = { email, password };

    try {
      const { data } = await realEstateApi.post<IAuthResponse>(
        "auth/login",
        user
      );

      if (!data) {
        throw new Error("Email o contraseña inválidos");
      }

      Cookies.set("token", data.token);
      Cookies.set("role", data.roles[0]);
      localStorage.setItem("user", JSON.stringify(data));
      const localUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(`${localUser}`);
      dispatch(LOGIN_USER({ user: parsedUser }));

      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  };

export const setUser = () => async (dispatch: Dispatch) => {
  const localUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(`${localUser}`);

  dispatch(SET_USER({ user: parsedUser }));
};
