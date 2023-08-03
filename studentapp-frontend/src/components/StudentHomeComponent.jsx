import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import {
  useCourseRequestPage,
  useViewClassList,
  useViewListOfPeople,
  useViewStudent,
  useViewStudentSchedule,
} from "../Utilities";
import reportCardLogo from "../blank-svgrepo-com.svg";
import scheduleLogo from "../calendar-svgrepo-com.svg";
import myClassesLogo from "../course-diary-svgrepo-com.svg";
import coursesLogo from "../courses-svgrepo-com.svg";
import courseReqLogo from "../edit-report-svgrepo-com.svg";
import teachersStaffLogo from "../user-list-svgrepo-com.svg";
import studentProfileLogo from "../user-svgrepo-com.svg";

class StudentHomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: AuthService.isLoggedIn()
        ? Number(JSON.parse(AuthService.getUserId()))
        : "",
    };
  }

  handleClickCoursesList = (event) => {
    event.preventDefault();
    this.props.history("/school/course");
  };

  handleClickTeachersList = (event) => {
    event.preventDefault();
    this.props.viewList("teacher");
  };

  handleClickStudentProfile = (event) => {
    event.preventDefault();
    this.props.viewStudent(this.state.id);
  };

  handleClickStudentClasses = (event) => {
    event.preventDefault();
    this.props.viewClassList(this.state.id, "student");
  };

  handleClickStudentSchedule = (event) => {
    event.preventDefault();
    this.props.viewSchedule(this.state.id);
  };

  handleClickCourseRequest = (event) => {
    event.preventDefault();
    this.props.courseRequestPage(this.state.id);
  };
  handleClickReportCard = (event) => {
    event.preventDefault();
    this.props.history("/school/student/report-card/" + this.state.id);
  };

  render() {
    return (
      <div>
        <h2>Apps</h2>
        <h4>General</h4>
        <div className="homeComponentAppsContainer form-row">
          <ComponentBox
            label={"Student Profile"}
            img={studentProfileLogo}
            func={this.handleClickStudentProfile}
          />
          <ComponentBox
            label={"Courses"}
            img={coursesLogo}
            func={this.handleClickCoursesList}
          />
          <ComponentBox
            label={"Course Request"}
            img={courseReqLogo}
            func={this.handleClickCourseRequest}
          />

          <ComponentBox
            label={"Teachers and Staff"}
            img={teachersStaffLogo}
            func={this.handleClickTeachersList}
          />
        </div>

        <h4>My Class Apps</h4>
        <div className="homeComponentAppsContainer form-row">
          <ComponentBox
            label={"My Classes"}
            img={myClassesLogo}
            func={this.handleClickStudentClasses}
          />

          <ComponentBox
            label={"Class Schedule"}
            img={scheduleLogo}
            func={this.handleClickStudentSchedule}
          />

          <ComponentBox
            label={"Report Card"}
            img={reportCardLogo}
            func={this.handleClickReportCard}
          />
        </div>
      </div>
    );
  }
}

const ComponentBox = (props) => {
  return (
    <div className="homeComponentApps" onClick={props.func}>
      <img src={props.img} />
      <label>{props.label}</label>
    </div>
  );
};
export default () => (
  <StudentHomeComponent
    courseRequestPage={useCourseRequestPage()}
    viewSchedule={useViewStudentSchedule()}
    viewStudent={useViewStudent()}
    viewClassList={useViewClassList()}
    history={useNavigate()}
    param={useParams()}
    viewList={useViewListOfPeople()}
  />
);
