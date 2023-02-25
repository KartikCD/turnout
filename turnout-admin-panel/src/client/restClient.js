import axios from "axios";

export default function restClient() {
  let token = localStorage.getItem("token");
  const headers =
    token !== null || token !== undefined ? { "x-access-token": token } : {};
  return axios.create({ baseURL: "http://localhost:5050", headers: headers });
}
