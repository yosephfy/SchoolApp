import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseServices from "../Services/CourseServices";
import StudentClassService from "../Services/StudentClassService";
import TeacherClassService from "../Services/TeacherClassService";
import TeacherServices from "../Services/TeacherServices";
import { useViewMySection } from "../Utilities";

const StudentClassesComponent = () => {
  const { id, catagory } = useParams();
  const viewMySection = useViewMySection();
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [colors, setColors] = useState([
    "rgb(33, 150, 243)",
    "rgb(139, 195, 74)",
    "rgb(156, 39, 176)",
    "rgb(244, 67, 54)",
    "rgb(255, 193, 7)",
    "rgb(255, 87, 34)",
  ]);

  useEffect(() => {
    const fetchStudentClasses = async () => {
      const classesData = await StudentClassService.getClassScheduleByStudentId(
        Number(id)
      );
      classesData.data.forEach((element) => {
        fetchSections(element.sectionId);
      });
      setClasses(classesData.data);
    };
    const fetchTeacherClasses = async () => {
      const classesData = await TeacherClassService.getClassScheduleByTeacherId(
        Number(id)
      );
      classesData.data.forEach((element) => {
        fetchSections(element.sectionId);
      });
      setClasses(classesData.data);
    };

    const fetchSections = async (sectionId) => {
      const sectionData = await CourseServices.getSectionById(
        Number(sectionId)
      );
      await fetchCourse(sectionData.data.courseId);
      await fetchTeacher(sectionData.data.teacherId);
      setSections((prev) => [...prev, sectionData.data]);
    };

    const fetchCourse = async (courseId) => {
      const courseData = await CourseServices.getCourseById(Number(courseId));
      setCourses((prev) => [...prev, courseData.data]);
    };

    const fetchTeacher = async (teacherId) => {
      const teacherData = await TeacherServices.getTeacherById(
        Number(teacherId)
      );
      setTeachers((prev) => [...prev, teacherData.data]);
    };
    if (catagory === "student") {
      fetchStudentClasses();
    } else if (catagory === "teacher") {
      fetchTeacherClasses();
    }
  }, []);

  return (
    <div className="">
      <h2 className="buttons1 text-center">Courses List</h2>

      <br></br>
      <div className="StudentClassList">
        {classes.length > 0 &&
          courses.length > 0 &&
          teachers.length > 0 &&
          sections.length > 0 &&
          teachers.length >= classes.length &&
          courses.length >= classes.length &&
          sections.length >= classes.length &&
          classes.map((elem) => {
            let s = sections.find((e) => e.id === elem.sectionId);
            if (s != undefined)
              return (
                <ClassBox
                  key={elem.sectionId}
                  section={sections.find((e) => e.id === elem.sectionId)}
                  course={courses.find(
                    (el) =>
                      Number(el.id) ===
                      Number(
                        sections.find((e) => e.id === elem.sectionId).courseId
                      )
                  )}
                  teacher={teachers.find(
                    (el) =>
                      Number(el.id) ===
                      Number(
                        sections.find((e) => e.id === elem.sectionId).teacherId
                      )
                  )}
                  class={elem}
                  catagory={catagory}
                  colors={colors}
                  func={viewMySection}
                />
              );
          })}
      </div>
    </div>
  );
};

const ClassBox = (props) => {
  return (
    <div
      onClick={() => props.func(props.class.id, props.catagory)}
      className="StudentClass_courseBox"
      style={{
        backgroundColor:
          props.colors[Math.floor(Math.random() * props.colors.length)],
      }}
    >
      <div className="StudentClass_courseBox_sectionnumlabel">
        <label style={{ fontWeight: "bold" }}>
          {props.course.name} - {props.section.sectionNum}
        </label>
        <label htmlFor="">
          {props.teacher.title}
          {". "}
          {props.teacher.firstName} {props.teacher.lastName}
        </label>
      </div>
    </div>
  );
};

export default StudentClassesComponent;
