import axios from "axios";

const token = sessionStorage.getItem("token") || "";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_URL_BACK}/api`,
  //   baseURL:'http://vercel.com/api'
});

export const configHeaders = {
  "content-type": "application/json",
  auth: `Bearer ${token}`,
};
export default clienteAxios;
