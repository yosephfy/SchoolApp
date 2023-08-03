import axios from "axios";
import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import LoginServices from "../Services/LoginServices";

class Logintest extends Component {
  constructor(props) {
    super(props);

    this.state = { category: "ADMIN", id: "", email: "", password: "" };
    this.setAdminBool = this.setAdminBool.bind(this);
    this.setTeacherBool = this.setTeacherBool.bind(this);
    this.setStudentBool = this.setStudentBool.bind(this);
    this.setParentBool = this.setParentBool.bind(this);
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }
  setAdminBool = (event) => {
    this.setState({ category: "ADMIN" });
    event.preventDefault();
    const elemAdmin = document.getElementById("tab-admin");
    elemAdmin.setAttribute("class", "nav-link active");

    const elemParent = document.getElementById("tab-parent");
    elemParent.setAttribute("class", "nav-link");

    const elemTeacher = document.getElementById("tab-teacher");
    elemTeacher.setAttribute("class", "nav-link");

    const elemStudent = document.getElementById("tab-student");
    elemStudent.setAttribute("class", "nav-link");
    this.render();

    console.log("Admin AND " + this.state.category);
  };
  setTeacherBool = (event) => {
    this.setState({ category: "TEACHER" });
    event.preventDefault();
    const elemTeacher = document.getElementById("tab-teacher");
    elemTeacher.setAttribute("class", "nav-link active");

    const elemAdmin = document.getElementById("tab-admin");
    elemAdmin.setAttribute("class", "nav-link");

    const elemParent = document.getElementById("tab-parent");
    elemParent.setAttribute("class", "nav-link");

    const elemStudent = document.getElementById("tab-student");
    elemStudent.setAttribute("class", "nav-link");
    this.render();

    console.log("Admin AND " + this.state.category);
  };
  setStudentBool = (event) => {
    this.setState({ category: "STUDENT" });
    event.preventDefault();
    const elemAdmin = document.getElementById("tab-admin");
    elemAdmin.setAttribute("class", "nav-link");

    const elemTeacher = document.getElementById("tab-teacher");
    elemTeacher.setAttribute("class", "nav-link");

    const elemParent = document.getElementById("tab-parent");
    elemParent.setAttribute("class", "nav-link");

    const elemStudent = document.getElementById("tab-student");
    elemStudent.setAttribute("class", "nav-link active");
    this.render();
    console.log("Student AND " + this.state.category);
  };

  setParentBool = (event) => {
    this.setState({ category: "PARENT" });
    event.preventDefault();
    const elemAdmin = document.getElementById("tab-admin");
    elemAdmin.setAttribute("class", "nav-link");

    const elemTeacher = document.getElementById("tab-teacher");
    elemTeacher.setAttribute("class", "nav-link");

    const elemParent = document.getElementById("tab-parent");
    elemParent.setAttribute("class", "nav-link active");

    const elemStudent = document.getElementById("tab-student");
    elemStudent.setAttribute("class", "nav-link");
    this.render();

    console.log("Parent AND " + this.state.category);
  };

  submitHandler = (event) => {
    axios.defaults.withCredentials = false;

    event.preventDefault();
    LoginServices.getLoginByUserId(this.state.id)
      .then((res) => {
        console.table(this.state);
        if (
          res.data.email === this.state.email &&
          res.data.password === this.state.password
        ) {
          if (res.data.category === this.state.category) {
            AuthService.loginUser(this.state);

            this.props.navigate("/home");
          } else {
            alert(
              "This ID doesn't exist for " +
                this.state.category +
                ". Please Re-login"
            );
          }
        } else {
          alert("User ID, Email, or Password Incorrect");
        }
      })
      .catch(() => console.log("Couldn't log in"));
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#student"
              className="nav-link"
              id="tab-student"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="student-login"
              aria-selected="true"
              onClick={(e) => {
                this.setStudentBool(e);
              }}
            >
              Student
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#parent"
              className="nav-link"
              id="tab-parent"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="parent-login"
              aria-selected="false"
              onClick={(e) => {
                this.setParentBool(e);
              }}
            >
              Parent
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#admin"
              className="nav-link active"
              id="tab-admin"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="admin-login"
              aria-selected="false"
              onClick={(e) => {
                this.setAdminBool(e);
              }}
            >
              Admin
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#teacher"
              className="nav-link"
              id="tab-teacher"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="teacher-login"
              aria-selected="false"
              onClick={(e) => {
                this.setTeacherBool(e);
              }}
            >
              Teacher
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={this.submitHandler}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  pattern="[0-9]*"
                  id="loginid"
                  className="form-control"
                  onChange={this.changeIdHandler}
                />
                <label
                  className="form-label"
                  htmlFor="loginid"
                  id="login-title"
                >
                  ID
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="loginName"
                  className="form-control"
                  onChange={this.changeEmailHandler}
                />
                <label className="form-label" htmlFor="loginName">
                  Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  onChange={this.changePasswordHandler}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                      onChange={() => {}}
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Log in
              </button>
              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default () => <Logintest navigate={useNavigate()} param={useParams()} />;
