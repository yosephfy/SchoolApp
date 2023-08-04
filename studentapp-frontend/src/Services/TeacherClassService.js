import axios from "axios";
import CourseServices from "./CourseServices";

const TEACHERCLASS_API_BASE_URL =
  "http://192.168.1.177:8080/school/teacher_class";
class TeacherClassService {
  getTeacherClass() {
    return axios.get(TEACHERCLASS_API_BASE_URL);
  }

  createTeacherClass(teacherClass) {
    return axios.post(TEACHERCLASS_API_BASE_URL, teacherClass);
  }

  getTeacherClassById(teacherClassID) {
    return axios.get(TEACHERCLASS_API_BASE_URL + "/" + teacherClassID);
  }

  updateTeacherClass(teacherClassID, teacherClass) {
    return axios.put(
      TEACHERCLASS_API_BASE_URL + "/" + teacherClassID,
      teacherClass
    );
  }

  deleteTeacherClass(teacherClassID) {
    return axios.delete(TEACHERCLASS_API_BASE_URL + "/" + teacherClassID);
  }

  getClassScheduleByTeacherId(teacherId) {
    return axios.get(TEACHERCLASS_API_BASE_URL + "/schedule/" + teacherId);
  }

  getCoursesByTeacherId(id) {
    let classList = [];
    let classL = [];
    this.getClassScheduleByTeacherId(id).then((res) => {
      classList = res.data;
      //console.table(classList);
      classList.forEach((schedule) => {
        CourseServices.getSectionById(schedule.sectionId).then((res2) => {
          CourseServices.getCourseById(res2.data.courseId).then((res3) => {
            //console.table(res3.data);
            classL.push(res3.data);
          });
        });
      });
    });

    //console.log(classL);
    return classL;
  }
}

const fn = new TeacherClassService();
export default fn;
