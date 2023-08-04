import axios from "axios";

const STUDENT_API_BASE_URL = "http://192.168.1.177:8080/school/student";
const GUARDIAN_API_BASE_URL = "http://192.168.1.177:8080/school/guardian";
class StudentService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  getStudentById(studentID) {
    return axios.get(STUDENT_API_BASE_URL + "/" + studentID);
  }

  updateStudent(studentID, student) {
    return axios.put(STUDENT_API_BASE_URL + "/" + studentID, student);
  }

  deleteStudent(studentID) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + studentID);
  }

  createGuardian(guardian) {
    return axios.post(GUARDIAN_API_BASE_URL, guardian);
  }

  getGuardianById(guardianId) {
    return axios.get(GUARDIAN_API_BASE_URL + "/" + guardianId);
  }

  updateGuardian(id, guardian) {
    return axios.put(GUARDIAN_API_BASE_URL + "/" + id, guardian);
  }
}

const fn = new StudentService();
export default fn;
