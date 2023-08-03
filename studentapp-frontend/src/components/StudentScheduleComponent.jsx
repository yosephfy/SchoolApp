import React, { useEffect, useState } from "react";
import { AuthService } from "../Services/AuthService";
import CourseServices from "../Services/CourseServices";
import StudentClassService from "../Services/StudentClassService";
import ScheduleComponent from "./ScheduleComponent";

const StudentScheduleComponent = () => {
  const [sections, setSections] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchSections = async (sectionId) => {
      const sectionData = await CourseServices.getSectionById(sectionId);
      await fetchCourse(sectionData.data.courseId);
      if (!sections.includes(sectionData.data))
        setSections((prev) => prev.concat(sectionData.data));
    };

    const fetchStudentSchedule = async () => {
      const scheduleData =
        await StudentClassService.getClassScheduleByStudentId(
          parseInt(AuthService.getUserId())
        );

      scheduleData.data.forEach((element) => {
        fetchSections(element.sectionId);
      });
      setSchedule(scheduleData.data);
    };

    const fetchCourse = async (courseId) => {
      const courseData = CourseServices.getCourseById(courseId);
      if (!courses.includes(courseData.data))
        setCourses((prev) => [...prev, courseData.data]);
    };

    fetchStudentSchedule();
  }, []);

  const getSchedule = () => {
    const secs = sections;

    let schedule = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    };

    secs.forEach((elem) => {
      if (elem.date.includes("M")) {
        if (!schedule.monday.filter((e) => e.id === elem.id).length > 0)
          schedule.monday.push(elem);
      }
      if (elem.date.includes("Tu")) {
        if (!schedule.tuesday.filter((e) => e.id === elem.id).length > 0)
          schedule.tuesday.push(elem);
      }
      if (elem.date.includes("W")) {
        if (!schedule.wednesday.filter((e) => e.id === elem.id).length > 0)
          schedule.wednesday.push(elem);
      }
      if (elem.date.includes("Th")) {
        if (!schedule.thursday.filter((e) => e.id === elem.id).length > 0)
          schedule.thursday.push(elem);
      }
      if (elem.date.includes("F")) {
        if (!schedule.friday.filter((e) => e.id === elem.id).length > 0)
          schedule.friday.push(elem);
      }
    });

    console.log(schedule);
    return schedule;
  };

  return (
    <div>
      <ScheduleComponent
        schedule={getSchedule()}
        data={sections}
        course={courses}
      />
    </div>
  );
};

export default StudentScheduleComponent;
/* export default () => (
  <StudentScheduleComponent timeBetween={useListOfTimeInBetween} />
);
 */
