import { LoginProps } from "../../contexts/Auth/interface";
import { HistoricCampanhaProps } from "../../pages/Campanhas/interface";
import { BodyDisparoProps, HistoricEmailProps } from "../../pages/Emails/interface";
import api from "./api";

export const loginPost = (data: LoginProps) => {
  return Promise.resolve(api.post("/usuario/authenticate", data));
};

export const getReportHome = (data: any) => {
  return Promise.resolve(api.get("/relatorio/relatoriodash", {
    params: data
  }));
};

export const getReportPayment = (data: any) => {
  return Promise.resolve(api.get("/relatorio/relatoriodashpayment", {
    params: data
  }));
};

export const getReportCasino = (data: any) => {
  return Promise.resolve(api.get("/relatorio/relatoriodashrecords", {
    params: data
  }));
};

export const getReportSportsBooks = (data: any) => {
  return Promise.resolve(api.get("/relatorio/relatoriodashsportbook", {
    params: data
  }));
};

export const getHistoricPlayer = (idPlayer: string) => {
  return Promise.resolve(api.get(`/relatorio/relatorioplayerdata?id=${idPlayer}`));
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


//Campanhas
export const getCampanhas = () => {
  return Promise.resolve(api.get(`/disparo/listarcampanhas`));
};

export const getCampanha = (id:number) => {
  return Promise.resolve(api.get(`/disparo/listacampanha/${id}`));
};

export const storeCampanha = (campanha:HistoricCampanhaProps) => {
  return Promise.resolve(api.post(`/disparo/criarcampanha`,campanha));
};

export const updateCampanha = (campanha:HistoricCampanhaProps,id:number) => {
  return Promise.resolve(api.put(`/disparo/updatecampanha/${id}`,campanha));
};


//Emails
export const getEmails = (id:number) => {
  return Promise.resolve(api.get(`/disparo/listarEmails/${id}`));
};
export const getEmail = (id:number) => {
  return Promise.resolve(api.get(`/disparo/listaemail/${id}`));
};

export const updateEmail = (email:HistoricEmailProps,id:number) => {
  return Promise.resolve(api.put(`/disparo/updateemail/${id}`,email));
};

export const storeEmail = (email:HistoricEmailProps) => {
  return Promise.resolve(api.post(`/disparo/criaremail`,email));
};
export const deleteEmail = (id:number) => {
  return Promise.resolve(api.delete(`/disparo/deleteemail/${id}`));
};

export const disparoEmail = (body:BodyDisparoProps) => {
  return Promise.resolve(api.post(`/disparo`,body));
};