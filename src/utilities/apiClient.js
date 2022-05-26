import axios from "axios";

export const GET_URL = (str) => "http://localhost:5000" + str;

const apiClient = axios.create({
    baseURL: "http://localhost:5000",
});

export default apiClient;
