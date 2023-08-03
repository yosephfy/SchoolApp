import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignmentServices from "../Services/AssignmentServices";
import { AuthService } from "../Services/AuthService";
import ViewGrades from "./ViewGrades";

const StudentGradesComponent = () => {
  const { sectionId } = useParams();
  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [assignmentGrade, setAssignmentGrades] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignmentData = await AssignmentServices.getAssignmentBySection(
        Number(sectionId)
      );

      setAssignments(assignmentData.data);
    };

    const fetchGrades = async () => {
      const gradeData = await AssignmentServices.getGradeByStudent(
        Number(AuthService.getUserId())
      );

      setGrades(gradeData.data);
    };

    fetchGrades();
    fetchAssignments();
    const fetchAssignmentGrades = async () => {
      assignments.forEach((element) => {
        let grade = grades.find((e) => e.assignmentId === element.id);
        setAssignmentGrades((prev) =>
          prev.concat({ assignment: element, grade: grade })
        );
      });
    };

    fetchAssignmentGrades();
  }, []);

  return (
    <div>
      <div>{<ViewGrades assignments={assignments} grades={grades} />}</div>
    </div>
  );
};

export default StudentGradesComponent;
