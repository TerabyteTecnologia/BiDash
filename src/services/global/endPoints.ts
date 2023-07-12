import { LoginProps, RegisterProps } from "../../contexts/Auth/interface";
import api from "./api";

export const loginPost = (data: LoginProps) => {
  return Promise.resolve(api.post("/usuario/authenticate", data));
};

export const getReportHome = (data: any) => {
  return Promise.resolve(api.get("/relatorio/relatoriodash", {
    params: data
  }));
};

export const saveTokenLocalStorage = (token: string) => {
  localStorage.setItem('@app-hack:token-1.0.0', token);
};

export const saveColorLocalStorage = (colors: any) => {
  const colorsString = JSON.stringify(colors);
  localStorage.setItem('@app-hack:colors-1.0.0', colorsString);
};

export const getTokenLocalStorage = () => {
  return localStorage.getItem('@app-hack:token-1.0.0') !== 'undefined' ?
    localStorage.getItem('@app-hack:token-1.0.0') :
    false;
};

export const getColorLocalStorage = () => {
  const colorsString = localStorage.getItem('@app-hack:colors-1.0.0');
  if (colorsString) {
    return JSON.parse(colorsString);
  }
  return null;
};