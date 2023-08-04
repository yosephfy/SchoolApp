import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseServices from "../Services/CourseServices";
import StudentClassService from "../Services/StudentClassService";
import {
  parseNameToObject,
  useViewListAssignment,
  useViewPeopleFromSection,
  useViewGradesFromSection,
} from "../Utilities";
import TeacherClassService from "../Services/TeacherClassService";

function ViewSectionComponent() {
  const { scheduleId, category } = useParams();
  const viewListAssignment = useViewListAssignment();
  const viewPeopleSection = useViewPeopleFromSection();
  const viewGradesSection = useViewGradesFromSection();
  const [schedule, setSchedule] = useState({});
  const [section, setSection] = useState({});
  const [course, setCourse] = useState({});

  const [colors, setColors] = useState([
    "rgb(33, 150, 243)",
    "rgb(139, 195, 74)",
    "rgb(156, 39, 176)",
    "rgb(244, 67, 54)",
    "rgb(255, 193, 7)",
    "rgb(255, 87, 34)",
  ]);

  useEffect(() => {
    const fetchStudentSchedule = async () => {
      const scheduleData = await StudentClassService.getStudentClassById(
        Number(scheduleId)
      );
      await fetchSection(Number(scheduleData.data.sectionId));
      setSchedule(scheduleData.data);
    };
    const fetchTeacherSchedule = async () => {
      const scheduleData = await TeacherClassService.getTeacherClassById(
        Number(scheduleId)
      );
      await fetchSection(Number(scheduleData.data.sectionId));
      setSchedule(scheduleData.data);
    };

    const fetchSection = async (id) => {
      const sectionData = await CourseServices.getSectionById(Number(id));
      await fetchCourse(Number(sectionData.data.courseId));
      setSection(sectionData.data);
    };
    const fetchCourse = async (id) => {
      const courseData = await CourseServices.getCourseById(id);
      setCourse(courseData.data);
    };

    if (category === "student") {
      fetchStudentSchedule();
    } else if (category === "teacher") {
      fetchTeacherSchedule();
    }
  }, [scheduleId, category]);

  parseNameToObject("");
  return (
    <div className="ViewSection_container">
      <div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        className="ViewSection_header"
      >
        <h1>
          {course.name} - {section.sectionNum}
        </h1>
        <label>
          {schedule.semester} - {schedule.year}
        </label>
      </div>
      <div className="ViewSection_options">
        <div role="button" className="ViewSection_row">
          <div>Announcements</div>
          <div className="arrow_right" />
        </div>
        <div
          role="button"
          className="ViewSection_row"
          onClick={() => viewListAssignment(section.id, category)}
        >
          <div>Assignments</div>
          <div className="arrow_right" />
        </div>
        <div
          role="button"
          className="ViewSection_row"
          onClick={() => viewPeopleSection(category, section.id)}
        >
          <div>People</div>
          <div className="arrow_right" />
        </div>
        <div role="button" className="ViewSection_row">
          <div>Syllabus</div>
          <div className="arrow_right" />
        </div>
        <div
          role="button"
          className="ViewSection_row"
          onClick={() => viewGradesSection(category, section.id)}
        >
          <div>Grades</div>
          <div className="arrow_right" />
        </div>
      </div>
    </div>
  );
}
export default ViewSectionComponent;
