import axios from "axios";

export const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const api = axios.create({
  baseURL: BASE_URL,
});
