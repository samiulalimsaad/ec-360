import axios from "axios";

const url = "https://ec-360.herokuapp.com";

export const GET_URL = (str) => url + str;

const apiClient = axios.create({
    baseURL: url,
});

export default apiClient;
