import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../Services/AuthService";
import {
  useViewClassList,
  useViewListOfPeople,
  useViewTeacher,
  useViewTeacherSchedule,
} from "../Utilities";
import scheduleLogo from "../Assets/calendar-svgrepo-com.svg";
import myClassesLogo from "../Assets/course-diary-svgrepo-com.svg";
import coursesLogo from "../Assets/courses-svgrepo-com.svg";
import allStudentsLogo from "../Assets/group-of-people-svgrepo-com.svg";
import teachersStaffLogo from "../Assets/user-list-svgrepo-com.svg";
import teacProfileLogo from "../Assets/user-svgrepo-com.svg";

const TeacherHomeComponent = () => {
  const id = AuthService.getUserId();
  const history = useNavigate();
  const viewTeacher = useViewTeacher();
  const viewSchedule = useViewTeacherSchedule();
  const viewClassList = useViewClassList();
  const viewList = useViewListOfPeople();
  useEffect(() => {}, []);

  const handleClickCoursesList = (event) => {
    event.preventDefault();
    history("/school/course");
  };

  const handleClickStudentList = (event) => {
    event.preventDefault();
    viewList("student");
  };

  const handleClickTeacherList = (event) => {
    event.preventDefault();
    viewList("teacher");
  };
  const handleClickViewProfile = (event) => {
    event.preventDefault();
    viewTeacher(Number(id));
  };

  const handleClickViewSchedule = (event) => {
    event.preventDefault();
    viewSchedule(Number(id));
  };

  const handleClickViewClasses = (event) => {
    event.preventDefault();
    viewClassList(Number(id), "teacher");
  };

  return (
    <div>
      <h2>Apps</h2>
      <h4>General</h4>
      <div className="homeComponentAppsContainer form-row">
        <ComponentBox
          label={"Teacher Profile"}
          img={teacProfileLogo}
          func={handleClickViewProfile}
        />
        <ComponentBox
          label={"Courses"}
          img={coursesLogo}
          func={handleClickCoursesList}
        />
        <ComponentBox
          label={"All Students"}
          img={allStudentsLogo}
          func={handleClickStudentList}
        />

        <ComponentBox
          label={"Teachers and Staff"}
          img={teachersStaffLogo}
          func={handleClickTeacherList}
        />
      </div>

      <h4>My Class Apps</h4>
      <div className="homeComponentAppsContainer form-row">
        <ComponentBox
          label={"My Classes"}
          img={myClassesLogo}
          func={handleClickViewClasses}
        />

        <ComponentBox
          label={"Schedule"}
          img={scheduleLogo}
          func={handleClickViewSchedule}
        />
      </div>
    </div>
  );
};

const ComponentBox = (props) => {
  return (
    <div className="homeComponentApps" onClick={props.func}>
      <img src={props.img} alt="" />
      <label>{props.label}</label>
    </div>
  );
};
export default TeacherHomeComponent;
