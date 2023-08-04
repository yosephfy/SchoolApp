import axios from "axios";

const ASSIGNMENT_API_BASE_URL = "http://192.168.1.177:8080/school/assignment";
const GRADES_API_BASE_URL =
  "http://192.168.1.177:8080/school/student_assignment";
class AssignmentService {
  getAssignments() {
    return axios.get(ASSIGNMENT_API_BASE_URL);
  }

  createAssignment(assignment) {
    return axios.post(ASSIGNMENT_API_BASE_URL, assignment);
  }

  getAssignmentById(assignmentID) {
    return axios.get(ASSIGNMENT_API_BASE_URL + "/" + assignmentID);
  }

  getAssignmentBySection(sectionId) {
    return axios.get(ASSIGNMENT_API_BASE_URL + "/section/" + sectionId);
  }

  updateAssignment(assignmentID, assignment) {
    return axios.put(ASSIGNMENT_API_BASE_URL + "/" + assignmentID, assignment);
  }

  deleteAssignment(assignmentID) {
    return axios.delete(ASSIGNMENT_API_BASE_URL + "/" + assignmentID);
  }

  //

  getGrades() {
    return axios.get(GRADES_API_BASE_URL);
  }

  createGrade(grade) {
    return axios.post(GRADES_API_BASE_URL, grade);
  }

  getGradeById(gradeId) {
    return axios.get(GRADES_API_BASE_URL + "/" + gradeId);
  }

  getGradeByStudent(sectionId) {
    return axios.get(GRADES_API_BASE_URL + "/student/" + sectionId);
  }

  getGradeByAssignmentAndStudent(assignmentId, studentId) {
    return axios.get(
      GRADES_API_BASE_URL +
        "/student-assignment/" +
        assignmentId +
        "/" +
        studentId
    );
  }

  updateGrade(gradeId, grade) {
    return axios.put(GRADES_API_BASE_URL + "/" + gradeId, grade);
  }

  deleteGrade(gradeId) {
    return axios.delete(GRADES_API_BASE_URL + "/" + gradeId);
  }
}

const fn = new AssignmentService();
export default fn;
