import Cookies from "js-cookie";

export class AuthService {
  static isLoggedIn() {
    return Cookies.get("user") !== undefined;
    return localStorage.getItem("user") != null;
  }

  static loginUser(data) {
    Cookies.set("user", JSON.stringify(data));
    console.log(JSON.parse(Cookies.get("user")).id);
    //localStorage.setItem("user", JSON.stringify(data));
  }

  static getUser() {
    return JSON.parse(Cookies.get("user"));
    return JSON.parse(localStorage.getItem("user"));
  }

  static getUserId() {
    return JSON.parse(Cookies.get("user")).id;
    return JSON.parse(localStorage.getItem("user")).id;
  }

  static getUserCatagory() {
    return JSON.parse(Cookies.get("user")).category;
  }

  static clearUser(user) {
    return Cookies.remove("user");
    return localStorage.removeItem(user);
  }
}
