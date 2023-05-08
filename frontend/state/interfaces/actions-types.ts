import { IProperties, IAuthResponse } from "./interfaces";

export interface ISetPropertiesAction {
  properties: IProperties[];
}

export interface ILoginUserAction {
  user: IAuthResponse;
}

export interface ISetErrorAction {
  error: string;
}

export interface ICreatePropertyAction {
  property: IProperties;
}

export interface IUpdatePropertyAction {
  property: IProperties;
}

export interface IDeletePropertyAction {
  property: IProperties;
}
