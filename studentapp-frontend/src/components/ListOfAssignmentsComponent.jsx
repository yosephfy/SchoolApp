import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignmentServices from "../Services/AssignmentServices";
import { AuthService } from "../Services/AuthService";
import { useCreateAssignment, useViewAssignment } from "../Utilities";
import readingLogo from "../book-svgrepo-com.svg";
import examLogo from "../check-education-exam-svgrepo-com.svg";
import homeworkLogo from "../exam-svgrepo-com (1).svg";
import testLogo from "../exam-svgrepo-com.svg";
import quizLogo from "../test-svgrepo-com.svg";

const ListOfAssignmentsComponent = () => {
  const [assignments, setAssignments] = useState([]);
  const { sectionId, category } = useParams();
  const userCategory = AuthService.getUserCatagory();
  const addAssignment = useCreateAssignment();

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignmentData = await AssignmentServices.getAssignmentBySection(
        sectionId
      );
      setAssignments(assignmentData.data);
    };

    fetchAssignments();
  }, [sectionId]);
  return (
    <div>
      <div className="ListAssignmentTitle">
        <h2>Assignments</h2>
        {userCategory === "TEACHER" && (
          <div className="ListAssignmentNewButton">
            <button>Delete</button>
            <button onClick={() => addAssignment(sectionId)}>
              + New Assignment
            </button>
          </div>
        )}
      </div>

      <div className="ListAssignment">
        {assignments.map((elem) => (
          <AssignmentBox
            key={elem.id}
            userCategory={userCategory}
            category={category}
            assignment={elem}
          />
        ))}
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

const AssignmentBox = (props) => {
  const viewAssignment = useViewAssignment();

  return (
    <div className="ListAssignmentComp">
      <div className="ListAssignment-checkbox">
        {props.userCategory === "TEACHER" && (
          <div>
            <input type="checkbox" name="" id="" />
          </div>
        )}
      </div>
      <div className="ListAssignmentRow">
        <div
          className="ListAssignmentRow_items"
          role="button"
          onClick={() => viewAssignment(props.assignment.id, props.category)}
        >
          <div className="">
            <img src={getCourseImageByType(props.assignment.type)} alt="" />
          </div>
          <div>
            <div className=" ListAssignmentRow_labels">
              <div className="ListAssignmentRow_title">
                <div>{props.assignment.title}</div>
              </div>
              <div className="ListAssignmentRow_subtitle">
                {"Due"}
                <div>{props.assignment.dueDate}</div>
                {" at "}
                <div>{props.assignment.dueTime}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow_right" />
      </div>
    </div>
  );
};
export default ListOfAssignmentsComponent;
