import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseServices from "../Services/CourseServices";
import StudentClassService from "../Services/StudentClassService";

function ReportCardComponent() {
  const [schedule, setSchedule] = useState([]);
  const [sections, setSections] = useState([]);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const scheduleData =
          await StudentClassService.getClassScheduleByStudentId(id);

        scheduleData.data.forEach((e) => {
          fetchSections(e.sectionId);
        });
        setSchedule(scheduleData.data);
      } catch (error) {
        console.error(`Error fetching Schedule`);
      }
    };
    const fetchSections = async (sectionId) => {
      try {
        const sectionsData = await CourseServices.getSectionById(sectionId);
        fetchCourses(sectionsData.data.courseId);
        setSections((prev) => [...prev, sectionsData.data]);
      } catch (error) {
        console.error(`Error fetching Sections`);
      }
    };
    const fetchCourses = async (courseId) => {
      try {
        const coursesData = await CourseServices.getCourseById(courseId);
        setCourses((prev) => [...prev, coursesData.data]);
      } catch (error) {
        console.error(`Error fetching Courses`);
      }
    };

    fetchSchedule();
  }, [id]);

  let x = 0;
  return (
    <div className="ReportCardContainer">
      <div>
        <h4 style={{ textAlign: "center" }}>Report Card</h4>
        <hr />
        <div className="ReportCard_title">
          <div className="col-10">Course</div>
          <div className="col-2">Grade</div>
        </div>
        <div className="ReportCard_data">
          {schedule.length > 0 &&
            sections.length >= schedule.length &&
            schedule.map((elem) => {
              let secs = sections.find((e) => e.id === elem.sectionId);
              let cour = courses.find(
                (el) => Number(el.id) === Number(secs.courseId)
              );
              if (secs && cour)
                return (
                  <div key={x++} className="ReportCard_Row">
                    <div className="col-10 ReportCard_Row_course">
                      <div className="col-2">{cour.name}</div>
                      <div className="col-10">
                        -{" "}
                        {sections.length >= schedule.length &&
                          sections.find((e) => e.id === elem.sectionId)
                            .sectionNum}
                      </div>
                    </div>
                    <div className="col-2 ReportCard_Row_grade">
                      <div>{elem.currentGrade}</div>
                      <div>A</div>
                    </div>
                  </div>
                );
              return <div>No Data</div>;
            })}
        </div>
        <hr />
        <div className="ReportCard_legend">
          <label htmlFor="">Legend:</label>
          <div className="ReportCard_legend_labels">
            <label htmlFor="">A - Consistently Exceeds</label>
            <label htmlFor="">B - Consistently Meets</label>
            <label htmlFor="">C - Sufficiently Meets</label>
            <label htmlFor="">D - Inconsistently Meets</label>
            <label htmlFor="">F - Fail / Insufficient</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportCardComponent;
