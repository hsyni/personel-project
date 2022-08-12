import axios from "axios";

export default class UserService {
  login(values) {
    return axios.post("https://localhost:7219/api/Auth/login", values);
  }

  register(values) {
    return axios.post("https://localhost:7219/api/Auth/register", values);
  }
}
