import axios from "axios";
import { KEY } from "../config";

export const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
