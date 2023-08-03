import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseServices from "../Services/CourseServices";
import TeacherServices from "../Services/TeacherServices";
import { addMilitaryAndMinutes } from "../Utilities";

const ListSectionsComponent = () => {
  const { id } = useParams();
  const [courseSections, setCourseSections] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchTeachers = async (id) => {
      try {
        const teacherData = await TeacherServices.getTeacherById(id);
        setTeachers((prev) => [...prev, teacherData.data]);
      } catch (error) {
        console.error(`error fetching teacher: ${id}`, error);
      }
    };
    const fetchCourses = async (id) => {
      try {
        const courseData = await CourseServices.getCourseById(id);
        setCourse(courseData.data);
      } catch (error) {
        console.error("error fetching courses", error);
      }
    };

    const fetchSections = async () => {
      try {
        const sectionData = await CourseServices.getSectionsByCourseId(id);
        setCourseSections(sectionData.data);
        sectionData.data.forEach((element) => {
          fetchTeachers(element.teacherId);
        });
      } catch (error) {
        console.error("error fetching sections", error);
      }
    };

    fetchCourses(id);
    fetchSections();
  }, [id, setTeachers, setCourse]);

  function getTeacher(teacherId) {
    if (teachers.length >= courseSections.length) {
      return teachers.find((elem) => elem.id === teacherId);
    } else {
      return { id: "", title: "", firstName: "", middleName: "", lastName: "" };
    }
  }
  let x = 0;
  return (
    <div className="">
      <div>
        <h2>
          {course.name} - {course.title}
        </h2>

        <div>{course.description}</div>
      </div>
      <br />
      <div className="ListSections_container">
        <table className=" table table-striped ListSections_table">
          <thead>
            <tr>
              <th className="ListSections_titles">
                <div className="col-md-2">Sections</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {teachers.length >= courseSections.length &&
              courseSections.map((section) => {
                let s = teachers.find((elem) => elem.id === section.teacherId);
                if (s != undefined)
                  return (
                    <tr key={x++}>
                      <td className="ListSections_row">
                        <div className="col-md-1">{section.sectionNum}</div>
                        <div className="col-md-1">{course.name}</div>
                        <div className="col-md-4 ListSections_startTimes">
                          <div className="">
                            {getTeacher(section.teacherId).title}
                            {". "}
                            {getTeacher(section.teacherId).firstName}{" "}
                            {getTeacher(section.teacherId).lastName}
                          </div>
                          <div className="">
                            {section.date} {section.startTime}
                            {" - "}
                            {addMilitaryAndMinutes(
                              section.startTime,
                              section.duration
                            )}
                          </div>
                        </div>
                        <div className="col-md-4 ListSections_startTimes">
                          <div className="">Location: IRB1122</div>
                        </div>
                      </td>
                    </tr>
                  );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListSectionsComponent;
