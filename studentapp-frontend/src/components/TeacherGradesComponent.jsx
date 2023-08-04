import { useEffect, useState } from "react";
import StudentClassService from "../Services/StudentClassService";
import { useParams } from "react-router";
import AssignmentServices from "../Services/AssignmentServices";

const TeacherGradesComponent = () => {
  const { sectionId } = useParams();
  const [assignments, setAssignments] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [updatedGrades, setUpdatedGrades] = useState([]);
  const [editing, setEditing] = useState(false);
  const [filterFunc, setFilterFunc] = useState({
    func: (a) => a,
  });

  useEffect(() => {
    const fetchGrades = async (id) => {
      const gradeData = await AssignmentServices.getGradeByStudent(id);
      setGrades((prev) => [...prev, ...gradeData.data]);
    };

    const fetchStudents = async () => {
      const studentData = await StudentClassService.getStudentsBySection(
        Number(sectionId)
      );

      await Promise.all(
        studentData.data.map(async (elem) => {
          fetchGrades(Number(elem.id));
        })
      );

      //console.log(grades);
      setStudents(studentData.data);
    };

    const fetchAssignments = async () => {
      const assignmentData = await AssignmentServices.getAssignmentBySection(
        Number(sectionId)
      );

      setAssignments(assignmentData.data);
    };

    fetchAssignments();
    fetchStudents();
  }, [sectionId]);

  const handleSubmit = () => {
    setEditing(false);
    updatedGrades.forEach((element) => {
      let newGrade = grades.find((e) => e.id === element);
      if (newGrade)
        AssignmentServices.updateGrade(element, newGrade).catch((err) =>
          console.error(err)
        );
    });
  };

  const ShowGrades = ({ assignments, grades, students }) => {
    return (
      <div className="TeacherGradesContainer">
        <div className="TeacherGrades_Title">
          <div id="student">Students</div>
          <div className="TeacherGrades_TitleItems">
            {assignments.map((assign) => {
              //if (grades.find((e) => e.assignmentId === assign.id))
              return (
                <div id="assignment" key={assign.id}>
                  <div>{assign.title}</div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "1vw",
                      fontWeight: "600",
                      justifyContent: "center",
                      color: "darkcyan",
                    }}
                  >{`Out of ${assign.totalPoints}`}</div>
                </div>
              );
            })}
            <div id="total">Total</div>
          </div>
        </div>
        <div className="TeacherGrades_items">
          {students.length > 0 &&
            students.map((elem) => {
              return (
                <div key={elem.id}>
                  <SingleStudentGrade
                    student={elem}
                    assignment={assignments}
                    grade={grades.filter((e) => e.studentId === elem.id)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  const SingleStudentGrade = ({ student, grade, assignment }) => {
    const handleGradeChange = (studentId, gradeId, score) => {
      let newGrade = grades.map((e) => {
        if (e.id === gradeId) {
          return { ...e, score: score };
        }
        return e;
      });

      setUpdatedGrades((prev) => [...prev, Number(gradeId)]);
      setGrades(newGrade);
      console.log(newGrade);
    };

    let totalGrade = 0;
    let totalAss = 0;
    let average = 0;
    let x = 0;

    return (
      <div className="TeacherGrades_row">
        <div id="student">
          {student.firstName} {student.lastName}
        </div>
        <div className="TeacherGrade_row_ass">
          {assignment.map((assign) => {
            const g = grade
              ? grade.find(
                  (e) =>
                    e.studentId === student.id && e.assignmentId === assign.id
                )
              : null;
            if (g) {
              totalGrade += g.score;
              totalAss += assign.totalPoints;
              average = (totalGrade / totalAss) * 100;
            }
            //if (g)
            return (
              <input
                key={x++}
                type=""
                name=""
                id="grade"
                defaultValue={`${g ? g.score : "-"}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Tab=")
                    handleGradeChange(student.id, g.id, Number(e.target.value));
                }}
                onBlur={(e) =>
                  handleGradeChange(student.id, g.id, Number(e.target.value))
                }
                disabled={!editing}
              />
            );
          })}
          <div id="grade">
            <div>{`${average.toPrecision(3)}%`}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="TeacherGrades_top">
        <div className="TeacherGrades_filters">
          <label htmlFor="">Assignment Type</label>
          <select
            required={true}
            id="type"
            name="type"
            onChange={(e) => {
              if (e.target.value !== "none") {
                setFilterFunc({ func: (a) => a.type === e.target.value });
              } else {
                setFilterFunc({
                  func: (a) => a,
                });
              }
            }}
          >
            <option value="none">All</option>
            <option value="HOMEWORK">Homework</option>
            <option value="POP_QUIZ">Quiz</option>
            <option value="READING">Reading</option>
            <option value="TEST">Test</option>
            <option value="EXAM">Exam</option>
          </select>
        </div>
        <div className="TeacherGrades_topButtons">
          {editing === false && (
            <div>
              <button
                disabled={false}
                style={{ backgroundColor: "rgb(1, 46, 88)" }}
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            </div>
          )}
          {editing === true && (
            <div>
              <button
                disabled={false}
                style={{ backgroundColor: "darkred" }}
                onClick={() => {
                  setEditing(false);
                  window.location.reload();
                }}
              >
                Cancel
              </button>
              <button
                disabled={false}
                style={{ backgroundColor: "rgb(1, 46, 88)" }}
                onClick={() => handleSubmit()}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
      <ShowGrades
        assignments={assignments
          .sort((a, b) => Number(a.id) > Number(b.id))
          .filter(filterFunc.func)}
        grades={grades.sort(
          (a, b) => Number(a.assignmentId) > Number(b.assignmentId)
        )}
        students={students.sort((a, b) => a.firstName > b.firstName)}
      />
    </div>
  );
};

export default TeacherGradesComponent;
