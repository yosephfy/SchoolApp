import axios from "axios";

const TEACHER_API_BASE_URL = "http://192.168.1.177:8080/school/teacher";
class TeacherService {
  getTeachers() {
    return axios.get(TEACHER_API_BASE_URL);
  }

  createTeacher(teacher) {
    return axios.post(TEACHER_API_BASE_URL, teacher);
  }

  getTeacherById(teacherID) {
    return axios.get(TEACHER_API_BASE_URL + "/" + teacherID);
  }

  updateTeacher(teacherID, teacher) {
    return axios.put(TEACHER_API_BASE_URL + "/" + teacherID, teacher);
  }

  deleteTeacher(teacherID) {
    return axios.delete(TEACHER_API_BASE_URL + "/" + teacherID);
  }
}

export default new TeacherService();
