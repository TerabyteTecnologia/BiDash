import { LoginProps, RegisterProps } from "../../contexts/Auth/interface";
import api from "./api";

export const loginPost = (data: LoginProps) => {
  return Promise.resolve(api.post("/authenticate", data));
};

export const registerEndPoint = (data: RegisterProps) => {
  return Promise.resolve(api.post("/register", data));
};


export const getIncomeAndExpenses = (data: RegisterProps) => {
  return Promise.resolve(api.post("/register", data));
};

export const getCategories = () => {
  return Promise.resolve(api.get("/Category/GetCategories"));
};

export const postAddIncomeOrExpenses = (data: any) => {
  return Promise.resolve(api.post("/IncomeAndExpenses/AddIncomeAndExpenses", data));
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