import axios from "axios";
import {useAuthStore} from "./stores/auth-store.ts";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      useAuthStore().user = {
        name: '',
        email: '',
        role: null,
      };

      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);