import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignmentServices from "../Services/AssignmentServices";
import { AuthService } from "../Services/AuthService";

function ViewAssignmentComponent() {
  const [assignment, setAssignment] = useState({});
  const [grades, setGrades] = useState({});
  const { assignmentId } = useParams();

  useEffect(() => {
    AssignmentServices.getAssignmentById(Number(assignmentId)).then((res) => {
      setAssignment(res.data);
    });

    AssignmentServices.getGradeByAssignmentAndStudent(
      Number(assignmentId),
      Number(AuthService.getUserId())
    ).then((res) => {
      setGrades(res.data);
    });
  }, []);

  const getStatus = () => {
    if (grades && grades.status === "GRADED") {
      return <div style={{ color: "green" }}>Graded</div>;
    } else if (grades && grades.status === "UNGRADED") {
      return <div style={{ color: "white" }}>Not Graded</div>;
    } else {
      return <div style={{ color: "red" }}>Not Submitted</div>;
    }
  };

  return (
    <div className="ViewAssignment">
      <div className="ViewAssignment_title">
        <div style={{ fontSize: "xx-large" }}>{assignment.type}</div>
        <div style={{ fontSize: "x-large" }}>{assignment.title}</div>
      </div>

      <div className="ViewAssignment_labels">
        Due: {assignment.dueDate}, {assignment.dueTime}{" "}
        <div style={{ textAlign: "right", paddingRight: "10px" }}>
          {getStatus()}
        </div>
      </div>
      <div className="ViewAssignment_points">
        <div>Allowed Attempts: {assignment.allowedAttempts}</div>

        <div>
          {(grades && grades.score + " / " + assignment.totalPoints) ||
            assignment.totalPoints + " Possible Points"}
        </div>
      </div>
      <div className="ViewAssignment_limits">
        <div>Time Limit: {assignment.timeLimit}</div>
        <div>{assignment.numOfQuestions} Questions</div>
      </div>
      <br />
      <div>
        <div className="ViewAssignment_labels">Details:</div>
        <div className="ViewAssignment_details">{assignment.description}</div>
      </div>
      <div>
        <div className="ViewAssignment_labels">Rubric:</div>
        <div className="ViewAssignment_details">{assignment.rubric}</div>
      </div>
    </div>
  );
}

export default ViewAssignmentComponent;
