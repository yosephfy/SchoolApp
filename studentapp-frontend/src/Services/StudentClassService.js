import axios from "axios";
import CourseServices from "./CourseServices";

const STUDENTCLASS_API_BASE_URL =
  "http://192.168.1.177:8080/school/student_class";
class StudentClassService {
  getStudentClass() {
    return axios.get(STUDENTCLASS_API_BASE_URL);
  }

  createStudentClass(studentClass) {
    return axios.post(STUDENTCLASS_API_BASE_URL, studentClass);
  }

  getStudentClassById(studentClassID) {
    return axios.get(STUDENTCLASS_API_BASE_URL + "/" + studentClassID);
  }

  updateStudentClass(studentClassID, studentClass) {
    return axios.put(
      STUDENTCLASS_API_BASE_URL + "/" + studentClassID,
      studentClass
    );
  }

  deleteStudentClass(studentClassID) {
    return axios.delete(STUDENTCLASS_API_BASE_URL + "/" + studentClassID);
  }

  getClassScheduleByStudentId(studentId) {
    return axios.get(STUDENTCLASS_API_BASE_URL + "/schedule/" + studentId);
  }
  getClassScheduleBySectionId(sectionId) {
    return axios.get(STUDENTCLASS_API_BASE_URL + "/section/" + sectionId);
  }

  getStudentsBySection(sectionId) {
    return axios.get(
      STUDENTCLASS_API_BASE_URL + "/student-by-section/" + sectionId
    );
  }

  getCoursesByStudentId(id) {
    let classList = [];
    let classL = [];
    this.getClassScheduleByStudentId(id).then((res) => {
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

const fn = new StudentClassService();
export default fn;
