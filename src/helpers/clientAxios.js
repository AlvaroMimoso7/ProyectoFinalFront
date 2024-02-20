import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("token")) || "";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_URL_BACK}/api`,
  //   baseURL:'http://vercel.com/api'
});

export const configHeaders = () => ({
  
  headers: {
    "content-type": "application/json",
    "Authorization": `Bearer ${token}`,
  },

}
);

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default clienteAxios;
