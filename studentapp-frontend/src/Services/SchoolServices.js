import StudentClassService from "./StudentClassService";
import CourseServices from "./CourseServices";

export class SchoolServices {
  static getCoursesByStudentId(id) {
    let classList = new Array();
    let classL = new Array();
    StudentClassService.getClassScheduleByStudentId(id).then((res) => {
      classList = res.data;
      classList.forEach((schedule) => {
        CourseServices.getCourseById(schedule.courseId).then((res2) => {
          classL.push(res2.data);
        });
      });
    });
    return classL;
  }
}
