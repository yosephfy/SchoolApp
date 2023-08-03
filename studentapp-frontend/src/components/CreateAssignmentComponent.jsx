import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignmentServices from "../Services/AssignmentServices";
import StudentClassService from "../Services/StudentClassService";
import { fromSystemTimeToDateAndTime } from "../Utilities";
import { generate } from "random-words";

const CreateAssignment = () => {
  const { sectionId } = useParams();
  const [assignment, setAssignment] = useState({
    title: "",
    type: "",
    description: "",
    rubric: "",
    totalpoints: 0,
    allowedAttempts: 1,
    timeLimit: "unlimited",
    dueDate: "",
    dueTime: "",
    numOfQuestions: "",
    sectionId: Number(sectionId),
  });

  const [studentsInSection, setStudentsInSection] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      const studentData = await StudentClassService.getStudentsBySection(
        Number(sectionId)
      );
      setStudentsInSection(studentData.data);
    };

    fetchStudents();
  }, [sectionId]);

  const handleEditTitle = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, title: event.target.value });
  };

  const handleEditType = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, type: event.target.value });
  };
  const handleEditDescription = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, description: event.target.value });
  };
  const handleEditRubric = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, rubric: event.target.value });
  };
  const handleEditTotalPoints = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, totalpoints: event.target.value });
  };
  const handleEditAllowedAttempts = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, allowedAttempts: event.target.value });
  };
  const handleEditTimeLimit = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, timeLimit: event.target.value });
  };
  const handleEditDueDateAndTime = (event) => {
    event.preventDefault();
    let obj = fromSystemTimeToDateAndTime(event.target.value);
    console.log(obj);
    console.log(assignment.dueTime);
    setAssignment({
      ...assignment,
      dueTime: obj.time,
      dueDate: obj.date,
    });
  };
  const handleEditGroup = (event) => {
    event.preventDefault();
    setAssignment({ ...assignment, group: event.target.value });
  };

  const handleClickRandom = () => {
    let typeList = ["TEST", "POP_QUIZ", "EXAM", "TEST", "HOMEWORK"];
    let statusList = ["GRADED", "UNGRADED", "NOTSUBMITTED"];
    const createAssignment = async () => {
      let totalpts = Math.floor(Math.random() * 120);
      let assObj = {
        allowedAttempts: Math.floor(Math.random() * 5) + 1,
        description: generate({ min: 10, max: 20, join: " " }),
        dueDate: "03/30/2023",
        dueTime: "15:00",
        numOfQuestions: Math.floor(Math.random() * 50),
        rubric: generate({ min: 10, max: 20, join: " " }),
        sectionId: sectionId,
        timeLimit: Math.floor(Math.random() * 6) * 10,
        title: generate({ min: 2, max: 5, join: " " }),
        totalPoints: totalpts,
        type: typeList[Math.floor(Math.random() * typeList.length)],
      };

      const assData = await AssignmentServices.createAssignment(assObj);

      await Promise.all(
        studentsInSection.map(async (student) => {
          const gradeData = {
            assignmentId: assData.data.id,
            score: Math.floor(Math.random() * totalpts),
            status: statusList[Math.floor(Math.random() * statusList.length)],
            studentId: 0,
          };
          let newObj = { ...gradeData, studentId: student.id };
          await AssignmentServices.createGrade(newObj);
          console.log(newObj);
        })
      );
    };
    for (let index = 0; index < 10; index++) {
      createAssignment();
    }
  };

  const handleClickSubmit = () => {
    if (assignment.title === "" || assignment.description === "") {
      alert(`Please Fill the Required Fields`);
      return;
    }

    const createAssignment = async () => {
      const assData = await AssignmentServices.createAssignment(assignment);
      const gradeData = {
        assignmentId: assData.data.id,
        score: 0,
        status: "NOTSUBMITTED",
        studentId: 0,
      };

      await Promise.all(
        studentsInSection.map(async (student) => {
          let newObj = { ...gradeData, studentId: student.id };
          await AssignmentServices.createGrade(newObj);
          console.log(newObj);
        })
      );
    };
    createAssignment();
    console.log(assignment);
  };

  return (
    <div>
      <div className="CreateAssignmentsContainer">
        <div className="">
          <div className="">
            <label htmlFor="title">Title</label>
          </div>
          <div className="">
            <input
              required={true}
              onChange={handleEditTitle}
              type="text"
              id="title"
              name="title"
              placeholder="Assignment Title.."
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="type">Type</label>
          </div>
          <div className="">
            <select
              required={true}
              id="type"
              name="type"
              onChange={handleEditType}
            >
              <option defaultValue="none" disabled hidden>
                Select Type
              </option>
              <option value="HOMEWORK">Homework</option>
              <option value="POP_QUIZ">Quiz</option>
              <option value="READING">Reading</option>
              <option value="TEST">Test</option>
              <option value="EXAM">Exam</option>
            </select>
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="type">Group</label>
          </div>
          <div className="">
            <select id="group" name="group" onChange={handleEditGroup}>
              <option value="homework">Group1</option>
              <option value="quiz">Practice</option>
              <option value="reading">Tests</option>
              <option value="test">Required</option>
              <option value="exam">Exam</option>
            </select>
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="description">Description</label>
          </div>
          <div className="">
            <textarea
              onChange={handleEditDescription}
              id="description"
              name="description"
              placeholder="Assignment Description.."
            ></textarea>
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="rubric">Rubric</label>
          </div>
          <div className="">
            <textarea
              onChange={handleEditRubric}
              id="rubric"
              name="rubric"
              placeholder="Assignment Rubric.."
            ></textarea>
          </div>
        </div>
        <div className="CreateAssignmentsNums">
          <div>
            <div className="">
              <label htmlFor="points">Total Points</label>
            </div>
            <div className="">
              <input
                onChange={handleEditTotalPoints}
                id="points"
                type="number"
                name="points"
                placeholder="0"
              ></input>
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="attempts">Allowed Attempts</label>
            </div>
            <div className="">
              <input
                onChange={handleEditAllowedAttempts}
                id="attempts"
                type="number"
                name="attempts"
                placeholder="1"
              ></input>
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="timeLimit">Time Limit</label>
            </div>
            <div className="">
              <input
                onChange={handleEditTimeLimit}
                id="timeLimit"
                type="number"
                name="timeLimit"
                placeholder="Unlimited"
              ></input>
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="timeLimit">Due Date and Time</label>
            </div>
            <div className="">
              <input
                onChange={handleEditDueDateAndTime}
                id="due"
                type="datetime-local"
                name="due"
              ></input>
            </div>
          </div>
        </div>
        <div className="CreateAssignmentsSubmitButton">
          <button id="submit-btn" onClick={handleClickSubmit}>
            Create
          </button>
          <button id="submit-btn" onClick={handleClickRandom}>
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
