import "bootstrap";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AuthService } from "./Services/AuthService";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import ListCourseComponent from "./components/ListCourseComponent";
import ListSectionsComponent from "./components/ListSectionsComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import ListTeacherComponent from "./components/ListTeacherComponent";
import LoginComponent from "./components/LoginComponent";
import StudentClassesComponent from "./components/ListMyClassesComponent";
import StudentScheduleComponent from "./components/StudentScheduleComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import CourseRequestComponent from "./components/CourseRequestComponent";
import ViewAssignmentComponent from "./components/ViewAssignmentsComponent";
import ReportCardComponent from "./components/ReportCardComponent";
import ViewSectionComponent from "./components/ViewSectionComponent";
import TeacherScheduleComponent from "./components/TeacherScheduleComponent";
import ListOfAssignmentsComponent from "./components/ListOfAssignmentsComponent";
import ListOfPeopleComponent from "./components/ListOfPeopleComponent";
import PeopleInSectionComponent from "./components/PeopleInSectionComponent";
import StudentGradesComponent from "./components/StudentGradesComponent";
import createAssignment from "./components/CreateAssignmentComponent";
import CreateAssignment from "./components/CreateAssignmentComponent";
import TeacherGradesComponent from "./components/TeacherGradesComponent";

function App() {
  const authGuard = (Component) => () => {
    return AuthService.isLoggedIn() ? <Component /> : <Navigate to="/login" />;
  };

  const authLogin = () => () => {
    return AuthService.isLoggedIn() ? (
      <Navigate to="/home" />
    ) : (
      <LoginComponent />
    );
  };

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container main">
          <Routes>
            <Route
              path="/user/:task/:category/:id"
              Component={authGuard(ViewUserComponent)}
            ></Route>
            <Route
              path="/test/:sectionId"
              Component={TeacherGradesComponent}
            ></Route>
            <Route path="/login" Component={authLogin()}></Route>
            <Route path="/home" Component={authGuard(HomeComponent)}></Route>
            <Route path="" element={<h2>INSIDE</h2>}></Route>
            <Route
              path="/school/list-people/:category"
              Component={authGuard(ListOfPeopleComponent)}
            ></Route>
            <Route
              path="/school/course/"
              Component={authGuard(ListCourseComponent)}
            ></Route>

            <Route
              path="/school/:catagory/class-list/:id"
              Component={authGuard(StudentClassesComponent)}
            ></Route>
            <Route
              path="/school/student/schedule"
              Component={authGuard(StudentScheduleComponent)}
            ></Route>
            <Route
              path="/school/teacher/schedule"
              Component={authGuard(TeacherScheduleComponent)}
            ></Route>
            <Route
              path="/school/student/report-card/:id"
              Component={authGuard(ReportCardComponent)}
            ></Route>

            <Route
              path="/school/course/view-course/:id"
              Component={authGuard(ListSectionsComponent)}
            ></Route>
            <Route
              path="/school/course/my-section/:category/:scheduleId"
              Component={authGuard(ViewSectionComponent)}
            ></Route>
            <Route
              path="/school/assignment/:category/:assignmentId"
              Component={authGuard(ViewAssignmentComponent)}
            ></Route>
            <Route
              path="/school/my-assignments/:category/:sectionId"
              Component={authGuard(ListOfAssignmentsComponent)}
            ></Route>
            <Route
              path="/school/my-section/:category/:sectionId/people"
              Component={authGuard(PeopleInSectionComponent)}
            ></Route>
            <Route
              path="/school/my-section/student/:sectionId/grades"
              Component={authGuard(StudentGradesComponent)}
            ></Route>
            <Route
              path="/school/my-section/teacher/:sectionId/grades"
              Component={authGuard(TeacherGradesComponent)}
            ></Route>
            <Route
              path="/school/my-section/:sectionId/create-assignment"
              Component={authGuard(CreateAssignment)}
            ></Route>
            <Route
              path="/school/course-request/:id"
              Component={authGuard(CourseRequestComponent)}
            ></Route>
            <Route path="*" element={<h1>BRUH</h1>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
