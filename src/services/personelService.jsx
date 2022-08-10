import axios from "axios";

export default class PersonelService {
  getPersonels() {
    return axios.get("https://localhost:7219/api/Personels/getpersoneldetail");
  }

  getPersonelsById(id) {
    return axios.get("https://localhost:7219/api/Personels/getbyid?id=" + id);
  }
}
