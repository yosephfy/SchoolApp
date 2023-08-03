import axios from "axios";

const COURSE_API_BASE_URL = "http://192.168.1.177:8080/school/course";
const SECTION_API_BASE_URL = "http://192.168.1.177:8080/school/section";
const REQUESTEDCOURSE_API_BASE_URL =
  "http://192.168.1.177:8080/school/requested_course";
class CourseService {
  getCourses() {
    return axios.get(COURSE_API_BASE_URL);
  }

  createCourse(course) {
    return axios.post(COURSE_API_BASE_URL, course);
  }

  getCourseById(courseID) {
    return axios.get(COURSE_API_BASE_URL + "/" + courseID);
  }

  updateCourse(courseID, course) {
    return axios.put(COURSE_API_BASE_URL + "/" + courseID, course);
  }

  deleteCourse(courseID) {
    return axios.delete(COURSE_API_BASE_URL + "/" + courseID);
  }

  getSectionsByCourseId(courseID) {
    return axios.get(SECTION_API_BASE_URL + "/course/" + courseID);
  }

  getSectionById(sectionId) {
    return axios.get(SECTION_API_BASE_URL + "/" + sectionId);
  }

  getCourseBySectionId(sectionId) {
    let out;
    this.getSectionById(sectionId)
      .then((res) => {
        out = res.data.courseId;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    return this.getCourseById(out);
    //return this.getCourseById("MATH101");
  }

  //Requested Courses
  getRequestedCourses() {
    return axios.get(REQUESTEDCOURSE_API_BASE_URL);
  }
  getRequestedCourseById(id) {
    return axios.get(REQUESTEDCOURSE_API_BASE_URL + "/" + id);
  }
  getRequestedCoursesByStudentId(id) {
    return axios.get(REQUESTEDCOURSE_API_BASE_URL + "/student/" + id);
  }
  getRequestedCoursesBySection(id) {
    return axios.get(REQUESTEDCOURSE_API_BASE_URL + "/section/" + id);
  }

  createRequestedCourse(requestedCourse) {
    return axios.post(REQUESTEDCOURSE_API_BASE_URL, requestedCourse);
  }

  updateRequestedCourse(id, requestedCourse) {
    return axios.put(REQUESTEDCOURSE_API_BASE_URL + "/" + id, requestedCourse);
  }

  deleteCourse(id) {
    return axios.delete(REQUESTEDCOURSE_API_BASE_URL + "/" + id);
  }
}

export default new CourseService();
