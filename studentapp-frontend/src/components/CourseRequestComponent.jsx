import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseServices from "../Services/CourseServices";
import TeacherServices from "../Services/TeacherServices";
import { addMilitaryAndMinutes } from "../Utilities";
import SearchBar from "./SearchBarComponent";

function CourseRequestComponent() {
  const [semester, setSemester] = useState([
    { label: "Fall", value: "fall" },
    { label: "Spring", value: "spring" },
    { label: "Summer", value: "summer" },
  ]);

  const { id } = useParams();
  const [currSection, setCurrSection] = useState("");
  const [currSemester, setCurrSemester] = useState("fall");
  const [chosenSection, setChosenSection] = useState([]);

  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  const [coursesName, setCoursesName] = useState([]);
  const [sectionsId, setSectionsId] = useState([]);

  useEffect(() => {
    CourseServices.getCourses().then((res) => {
      let arr = [];
      res.data.forEach((element) => {
        arr.push({
          value: element.id,
          label: element.name + " - " + element.title,
        });
      });

      setCoursesName(arr);
    });
  }, []);

  function onSelectCourse(a) {
    if (!a) {
      setSectionsId([]);
      setCurrSection("");
      return;
    }
    CourseServices.getSectionsByCourseId(a.value).then((res) => {
      let secs = [];

      res.data.forEach((element) => {
        secs.push({ value: element.id, label: element.sectionNum });
      });

      setSectionsId(secs);
    });
  }

  function onSelectSection(e) {
    if (!e) {
      return;
    }

    setCurrSection(e.value);
  }

  const OnClickAddCourse = (e) => {
    const fetchTeachers = async (teachId) => {
      const teacherData = await TeacherServices.getTeacherById(teachId);
      setTeachers((prev) => [...prev, teacherData.data]);
    };
    const fetchCourses = async (coursId) => {
      const courseData = await CourseServices.getCourseById(coursId);
      setCourses((prev) => [...prev, courseData.data]);
    };

    setChosenSection((prev) => {
      return prev.concat(
        chosenSection.includes(currSection) ? null : currSection
      );
    });

    if (!chosenSection.includes(currSection))
      CourseServices.getSectionById(currSection)
        .then((res) => {
          fetchCourses(res.data.courseId);
          fetchTeachers(res.data.teacherId);
          setClasses([...classes, res.data]);
        })
        .catch(() => alert("Please Fill in the requered Options"));
  };

  const OnClickRemoveCourse = (e) => {
    setChosenSection(chosenSection.filter((a) => a !== e.id));
    setClasses(classes.filter((a) => a.id !== e.id));
  };

  const OnClickSubmit = (e) => {
    const insertCourseRequest = async (courseRequest) => {
      const data = await CourseServices.createRequestedCourse(courseRequest);
      console.log(data.data);
      return data.status;
    };

    classes.forEach((elem) => {
      insertCourseRequest({
        id: "",
        sectionId: elem.id,
        studentId: id,
        semester: currSemester,
      });
    });

    setChosenSection([]);
    setClasses([]);
    setCurrSection("");
    setSectionsId([]);
    setTeachers([]);
  };

  const OnSelectSemester = (e) => {
    setCurrSemester(e.value);
  };
  const OnClickBrowseAllCourses = (e) => {
    console.log("Didnt Implement this method");
  };
  const OnClickBrowseSpringCourses = (e) => {
    console.log("Didnt Implement this method");
  };
  const OnClickBrowseFallCourses = (e) => {
    console.log("Didnt Implement this method");
  };
  const OnClickBrowseSummerCourses = (e) => {
    console.log("Didnt Implement this method");
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Course Request Page</h4>
      <br />
      <div className="RequestCourse_topBtns">
        <button onClick={OnClickBrowseAllCourses}>Browse All Courses</button>
        <button onClick={OnClickBrowseSpringCourses}>Spring Courses</button>
        <button onClick={OnClickBrowseFallCourses}>Fall Courses</button>
        <button onClick={OnClickBrowseSummerCourses}>Summer Courses</button>
      </div>
      <br />
      <div className="RequestCourse_SearchBars ">
        <div className=" " style={{ flex: "0.1 3 auto", width: "80px" }}>
          <label className="RequestCourse_SearchBarsLabel" htmlFor="">
            Semester
          </label>
          <SearchBar
            label="Semester"
            data={semester}
            disabled={semester.length === 0}
            func={OnSelectSemester}
            clearable={false}
            searchable={false}
            rtl={false}
            loading={false}
          />
        </div>
        <div className=" " style={{ flex: "2 0 auto", width: "100px" }}>
          <label className="RequestCourse_SearchBarsLabel" htmlFor="">
            Course
          </label>
          <SearchBar
            label="Courses"
            data={coursesName}
            disabled={coursesName.length === 0}
            func={onSelectCourse}
            clearable={true}
            searchable={true}
            rtl={false}
            loading={false}
          />
        </div>
        <div className="" style={{ flex: "0.5 1 auto", width: "100px" }}>
          <label className="RequestCourse_SearchBarsLabel" htmlFor="">
            Section
          </label>
          <SearchBar
            label="Sections"
            data={sectionsId}
            disabled={sectionsId.length === 0}
            func={onSelectSection}
            clearable={true}
            searchable={true}
            rtl={false}
            loading={false}
          />
        </div>
        <div
          style={{ width: "100%", flex: "0.3 1 0" }}
          className="RequestCourse_AddBtn"
        >
          <button onClick={OnClickAddCourse}>ADD</button>
        </div>
      </div>
      <div className="RequestCourse_chosenClasses">
        <ChosenCourses
          data={classes}
          teachers={teachers}
          courses={courses}
          removeCourse={OnClickRemoveCourse}
        />
      </div>
      <br />
      <div className="RequestCourse_SubmitBtn">
        <button disabled={classes.length < 1} onClick={OnClickSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

const ChosenCourses = (props) => {
  return (
    <div className="RequestCourse_chosenClasses_div">
      <label htmlFor="">Chosen Courses: </label>
      <div className="">
        <div className="RequestCourse_chosenClasses_data">
          {props.data
            .filter((e) => e != null)
            .map((elem) => {
              let teach = props.teachers.find(
                (e) => Number(e.id) === Number(elem.teacherId)
              );
              let cours = props.courses.find(
                (e) => Number(e.id) === Number(elem.courseId)
              );
              if (cours && teach)
                return (
                  <div
                    className="RequestCourse_chosenClasses_rows"
                    key={elem.sectionId}
                  >
                    <div>{cours.name}</div>
                    <div>{elem.sectionNum}</div>
                    <div>
                      {teach.title}
                      {". "}
                      {teach.firstName} {teach.lastName}
                    </div>
                    <div className="">
                      {elem.date} {elem.startTime}
                      {" - "}
                      {addMilitaryAndMinutes(elem.startTime, elem.duration)}
                    </div>
                    <button onClick={() => props.removeCourse(elem)}>
                      Remove
                    </button>
                  </div>
                );
              return <div>No Data</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default CourseRequestComponent;
