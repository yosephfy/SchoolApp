import { useEffect } from "react";
import { useViewAssignment } from "../Utilities";
import readingLogo from "../Assets/book-svgrepo-com.svg";
import examLogo from "../Assets/check-education-exam-svgrepo-com.svg";
import homeworkLogo from "../Assets/exam-svgrepo-com (1).svg";
import testLogo from "../Assets/exam-svgrepo-com.svg";
import quizLogo from "../Assets/test-svgrepo-com.svg";

const ViewGrades = ({
  assignments,
  grades,
  showGraded,
  showNotSubmitted,
  showUnGraded,
}) => {
  useEffect(() => {
    console.log(grades);
  }, [assignments, grades]);
  let x = 1;
  return (
    <div>
      <div className="ListAssignment">
        {assignments
          .sort((a, b) => a.id > b.id)
          .map((elem) => {
            return (
              <div key={x++}>
                <div>
                  <AssignmentBox assignment={elem} grade={grades} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const getCourseImageByType = (type) => {
  if (type === "HOMEWORK") {
    return homeworkLogo;
  } else if (type === "EXAM") {
    return examLogo;
  } else if (type === "READING") {
    return readingLogo;
  } else if (type === "POP_QUIZ") {
    return quizLogo;
  } else if (type === "TEST") {
    return testLogo;
  } else {
    return homeworkLogo;
  }
};

const getGradeScore = (g, assignment) => {
  if (g && g.score !== -1 && g.score !== -2) {
    return `${g.score} / ${assignment.totalPoints}`;
  }
  return `- / ${assignment.totalPoints}`;
};

const getStatus = (grade) => {
  let status = grade ? grade.status : "";
  if (status === "GRADED") {
    return <div style={{ color: "green" }}>GRADED</div>;
  } else if (status === "UNGRADED") {
    return <div style={{ color: "grey" }}>NOT GRADED</div>;
  } else if (status === "NOTSUBMITTED") {
    return <div style={{ color: "red" }}>NOT SUBMITTED</div>;
  }
};
const AssignmentBox = (props) => {
  const viewAssignment = useViewAssignment();
  let g = props.grade.find(
    (e) => Number(e.assignmentId) === Number(props.assignment.id)
  );

  return (
    <div
      role="button"
      onClick={() => viewAssignment(props.assignment.id, props.category)}
      className="ListAssignmentRow"
    >
      <div className="ListAssignmentRow_items">
        <div className="">
          <img src={getCourseImageByType(props.assignment.type)} alt="" />
        </div>
        <div className=" ListAssignmentRow_labels">
          <div className="ListAssignmentRow_title">
            <div>
              {props.assignment.title}
              {props.assignment.id}
            </div>
          </div>
          <div className="ListAssignmentRow_subtitle">
            {"Due"}
            <div>{props.assignment.dueDate}</div>
            {" at "}
            <div>{props.assignment.dueTime}</div>
          </div>
          <div className="ListAssignmentRow_subtitle">{getStatus(g)}</div>
        </div>
      </div>

      <div style={{ fontSize: "small", width: "20%", textAlign: "right" }}>
        {getGradeScore(g, props.assignment)}
      </div>
    </div>
  );
};

export default ViewGrades;
