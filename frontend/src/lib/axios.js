import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://kyau-chatbox-git-main-md-mamun-hossains-projects-df3cc2b3.vercel.app/",
    withCredentials: true,
});