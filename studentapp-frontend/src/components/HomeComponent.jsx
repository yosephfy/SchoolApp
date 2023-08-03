import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import StudentServices from "../Services/StudentServices";
import TeacherServices from "../Services/TeacherServices";
import StudentHomeComponent from "./StudentHomeComponent";
import TeacherHomeComponent from "./TeacherHomeComponent";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      id: AuthService.isLoggedIn()
        ? Number(JSON.parse(AuthService.getUserId()))
        : "",
      firstName: "",
      lastName: "",
      email: "",
    };

    this.setName = this.setName.bind(this);
  }

  setName(cat) {
    if (cat === "STUDENT" || cat === "PARENT") {
      StudentServices.getStudentById(this.state.id)
        .then((res) => {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
          });
        })
        .catch("this the error bud");
    } else if (cat === "TEACHER") {
      TeacherServices.getTeacherById(this.state.id)
        .then((res) => {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
          });
        })
        .catch("this the error bud");
    } else if (cat === "ADMIN") {
      StudentServices.getStudentById(this.state.id)
        .then((res) => {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
          });
        })
        .catch("this the error bud");
    }
  }

  componentDidMount() {
    this.setState({
      id: AuthService.getUserId(),
      category: AuthService.getUserCatagory(),
    });
  }

  handleClickStudentsList = (event) => {
    event.preventDefault();
    this.props.history("/school/student");
  };
  handleClickTeachersList = (event) => {
    event.preventDefault();
    this.props.history("/school/teacher");
  };
  handleClickCoursesList = (event) => {
    event.preventDefault();
    this.props.history("/school/course");
  };

  render() {
    if (this.state.category === "ADMIN") {
      return <StudentHomeComponent />;
    } else if (
      this.state.category === "STUDENT" ||
      this.state.category === "PARENT"
    ) {
      return <StudentHomeComponent />;
    } else if (this.state.category === "TEACHER") {
      return <TeacherHomeComponent />;
    }
    return (
      <div className="">
        <button
          className="btn btn-primary btn-lg"
          onClick={this.handleClickStudentsList}
        >
          List of Students
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.handleClickTeachersList}
        >
          List of Staff
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.handleClickCoursesList}
        >
          List of Courses/sections
        </button>
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      </div>
    );
  }
}

export default () => (
  <HomeComponent history={useNavigate()} param={useParams()} />
);
