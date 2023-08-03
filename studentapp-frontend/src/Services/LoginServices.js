import axios from "axios";

const LOGIN_API_BASE_URL = "http://192.168.1.177:8080/school/login";
class LoginService {
  getLogins() {
    return axios.get(LOGIN_API_BASE_URL);
  }

  createLogin(login) {
    return axios.post(LOGIN_API_BASE_URL, login);
  }

  getLoginByUserId(id) {
    return axios.get(LOGIN_API_BASE_URL + "/user/" + id);
  }
  getLoginById(id) {
    return axios.get(LOGIN_API_BASE_URL + "/" + id);
  }

  updateLogin(id, login) {
    return axios.put(LOGIN_API_BASE_URL + "/" + id, login);
  }

  deleteLogin(id) {
    return axios.delete(LOGIN_API_BASE_URL + "/" + id);
  }
}

export default new LoginService();
