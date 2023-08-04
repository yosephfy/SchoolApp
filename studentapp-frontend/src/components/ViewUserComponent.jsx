import { Component } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthService } from "../Services/AuthService";
import StudentServices from "../Services/StudentServices";
import TeacherServices from "../Services/TeacherServices";
import {
  phoneNumberFormatter,
  useCreateStudent,
  useCreateTeacher,
  useViewStudent,
  useViewTeacher,
} from "../Utilities";

class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {},
      teacher: {},
      firstGuardian: {},
      secondGuardian: {},

      view: true,
      category: "",
    };

    this.ViewTeacherUser = this.ViewTeacherUser.bind(this);
    this.ViewStudentUser = this.ViewStudentUser.bind(this);
    this.ViewUserComponent = this.ViewUserComponent.bind(this);
    this.onBtnCancel = this.onBtnCancel.bind(this);
    this.onBtnSave = this.onBtnSave.bind(this);
    this.onBtnEdit = this.onBtnEdit.bind(this);
  }

  studentSetterFuncs = {
    setId: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          id: e.target.value, // update the value of specific key
        },
      }));
    },

    setFirstName: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          firstName: e.target.value, // update the value of specific key
        },
      }));
    },

    setLastName: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          lastName: e.target.value, // update the value of specific key
        },
      }));
    },
    setMiddleName: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          middleName: e.target.value, // update the value of specific key
        },
      }));
    },

    setEmail: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          email: e.target.value, // update the value of specific key
        },
      }));
    },

    setProfilePicture: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          profilePicture: e.target.value, // update the value of specific key
        },
      }));
    },

    setAddress: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          address: e.target.value, // update the value of specific key
        },
      }));
    },

    setGender: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          gender: e.target.value, // update the value of specific key
        },
      }));
    },

    setGradeLevel: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          gradeLevel: e.target.value, // update the value of specific key
        },
      }));
    },

    setOverallGrade: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          overallGrade: e.target.value, // update the value of specific key
        },
      }));
    },

    setAssignedCouncilor: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          councilorId: e.target.value, // update the value of specific key
        },
      }));
    },

    setHomeRoomTeacher: (e) => {
      this.setState((prevState) => ({
        student: {
          ...prevState.student, // keep all other key-value pairs
          homeRoomId: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian1FirstName: (e) => {
      this.setState((prevState) => ({
        firstGuardian: {
          ...prevState.firstGuardian, // keep all other key-value pairs
          firstName: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian1LastName: (e) => {
      this.setState((prevState) => ({
        firstGuardian: {
          ...prevState.firstGuardian, // keep all other key-value pairs
          lastName: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian2FirstName: (e) => {
      this.setState((prevState) => ({
        secondGuardian: {
          ...prevState.secondGuardian, // keep all other key-value pairs
          firstName: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian2LastName: (e) => {
      this.setState((prevState) => ({
        secondGuardian: {
          ...prevState.secondGuardian, // keep all other key-value pairs
          lastName: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian1Phone: (e) => {
      this.setState((prevState) => ({
        firstGuardian: {
          ...prevState.firstGuardian, // keep all other key-value pairs
          phone: e.target.value, // update the value of specific key
        },
      }));
    },

    setGuardian1Email: (e) => {
      this.setState((prevState) => ({
        firstGuardian: {
          ...prevState.firstGuardian, // keep all other key-value pairs
          email: e.target.value, // update the value of specific key
        },
      }));
    },
    setGuardian2Phone: (e) => {
      this.setState((prevState) => ({
        secondGuardian: {
          ...prevState.secondGuardian, // keep all other key-value pairs
          phone: e.target.value, // update the value of specific key
        },
      }));
    },
    setGuardian2Email: (e) => {
      this.setState((prevState) => ({
        secondGuardian: {
          ...prevState.secondGuardian, // keep all other key-value pairs
          email: e.target.value,
        },
      }));
    },
  };

  teacherSetterFuncs = {
    setId: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          id: e.target.value, // update the value of specific key
        },
      }));
    },

    setFirstName: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          firstName: e.target.value, // update the value of specific key
        },
      }));
    },
    setTitle: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          title: e.target.value, // update the value of specific key
        },
      }));
    },

    setLastName: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          lastName: e.target.value, // update the value of specific key
        },
      }));
    },
    setMiddleName: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          middleName: e.target.value, // update the value of specific key
        },
      }));
    },

    setEmail: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          email: e.target.value, // update the value of specific key
        },
      }));
    },

    setProfilePicture: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          profilePicture: e.target.value, // update the value of specific key
        },
      }));
    },

    setAddress: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          address: e.target.value, // update the value of specific key
        },
      }));
    },

    setGender: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          gender: e.target.value, // update the value of specific key
        },
      }));
    },
    setPhone: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          phone: e.target.value, // update the value of specific key
        },
      }));
    },
    setQualifications: (e) => {
      this.setState((prevState) => ({
        teacher: {
          ...prevState.teacher, // keep all other key-value pairs
          qualifications: e.target.value, // update the value of specific key
        },
      }));
    },
  };

  componentDidMount() {
    if (this.props.param.id === "-1") {
      let stu = {
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        email: "",
        address: "",
        gradeLevel: "",
        firstGuardian: "",
        secondGuardian: "",
        councilorId: "",
        homeRoomId: "",
        profilePicture: "",
      };

      let guardian = {
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        email: "",
        address: "",
        profilePicture: "",
        relationship: "",
      };

      this.setState({ student: stu });
      this.setState({ firstGuardian: guardian });
      this.setState({ secondGuardian: guardian });
    } else {
      if (this.props.param.category === "student") {
        StudentServices.getStudentById(this.props.param.id)
          .then((res) => {
            let stu = res.data;
            this.setState({ student: stu });

            StudentServices.getGuardianById(stu.firstGuardianId).then(
              (res2) => {
                let guar = res2.data;
                this.setState({ firstGuardian: guar });
              }
            );
            StudentServices.getGuardianById(stu.secondGuardianId).then(
              (res2) => {
                let guar = res2.data;
                this.setState({ secondGuardian: guar });
              }
            );
          })
          .catch(console.log("No student found with the parameter ID"));
      } else if (this.props.param.category === "teacher") {
        TeacherServices.getTeacherById(this.props.param.id)
          .then((res) => {
            let tea = res.data;
            this.setState({ teacher: tea });
          })
          .catch(console.log("No teacher found with the parameter ID"));
      }
    }

    if (this.props.param.task === "view") {
      this.setState({ view: true });
    } else if (this.props.param.task === "add") {
      this.setState({ view: false });
    } else {
      this.props.history("/");
    }

    if (
      !(
        this.props.param.id === AuthService.getUserId() ||
        AuthService.getUserCatagory() === "ADMIN"
      )
    ) {
      this.props.history("/");
    }
  }

  ViewUserComponent(props) {
    //const user_data = props.user;
    const user_category = props.category;
    if (user_category === "student") {
      if (
        this.state.student !== null &&
        this.state.student !== undefined &&
        Object.keys(this.state.student).length !== 0
      ) {
        return (
          <div>
            <this.ViewStudentUser
              view={props.view}
              category={user_category}
              data={this.state.student}
              firstGuardian={this.state.firstGuardian}
              secondGuardian={this.state.secondGuardian}
            />
          </div>
        );
      }
    } else if (user_category === "teacher") {
      if (
        this.state.teacher !== null &&
        this.state.teacher !== undefined &&
        Object.keys(this.state.teacher).length !== 0
      ) {
        return (
          <div>
            <this.ViewTeacherUser
              view={props.view}
              category={user_category}
              data={this.state.teacher}
            />
          </div>
        );
      }
    }
  }

  InfoRow(props) {
    return (
      <div className="viewStudent_info_rows">
        <section className="row" style={{ width: "100%" }}>
          <div className="col-4">
            <label style={{ fontWeight: "bold" }} htmlFor="">
              {props.labelName}
            </label>
          </div>
          <div className="col viewStudent_info_value">
            <input
              pattern={props.pattern}
              type={props.type}
              className="AddUserInput"
              value={props.data !== undefined ? props.data : ""}
              onChange={props.func}
              disabled={props.view}
            />
          </div>
        </section>
      </div>
    );
  }

  onBtnCancel() {
    this.props.history(-1);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  onBtnEdit() {
    if (this.props.param.category === "student") {
      this.props.addStudent(this.props.param.id);
    } else if (this.props.param.category === "teacher") {
      this.props.addTeacher(this.props.param.id);
    }
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  onBtnSave() {
    if (this.props.param.category === "student") {
      let student = this.state.student;
      let firstGuardian = this.state.firstGuardian;
      let secondGuardian = this.state.secondGuardian;

      if (this.props.param.id === "-1") {
        if (Number(student.id) >= 1) {
          StudentServices.createStudent(student)
            .then(() => {
              //this.props.history("/school/student");
              StudentServices.createGuardian(firstGuardian);
              StudentServices.createGuardian(secondGuardian);
              this.props.viewStudent(student.id);
            })
            .catch((error) => {
              alert("A student with the same ID already exists.");
              console.log("Error Creating Student: ", error);
            });
        } else {
          alert("Invalid Student ID.");
        }
      } else {
        StudentServices.updateStudent(this.state.student.id, student)
          .then(() => {
            StudentServices.updateGuardian(
              student.firstGuardianId,
              firstGuardian
            );
            StudentServices.updateGuardian(
              student.secondGuardianId,
              secondGuardian
            );
            this.props.viewStudent(student.id);
          })
          .catch((error) => {
            console.log("Error Creating Student: ", error);
          });
      }
    } else {
      let teacher = this.state.teacher;

      if (this.props.param.id === "-1") {
        if (Number(teacher.id) >= 1) {
          TeacherServices.createTeacher(teacher)
            .then(() => {
              this.props.viewTeacher(teacher.id);
            })
            .catch((error) => {
              alert("A teacher with the same ID already exists.");
              console.log("Error Creating Teacher: ", error);
            });
        } else {
          alert("Invalid Teacher ID.");
        }
      } else {
        TeacherServices.updateTeacher(this.state.teacher.id, teacher)
          .then(() => {
            this.props.viewTeacher(teacher.id);
          })
          .catch((error) => {
            console.log("Error Creating Teacher: ", error);
          });
      }
    }

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  getButtons() {
    if (this.props.param.task === "view") {
      return (
        <div className="viewStudentComp-buttons">
          <button
            style={{ backgroundColor: "#19647e" }}
            onClick={this.onBtnEdit}
          >
            Edit Profile
          </button>
        </div>
      );
    } else if (this.props.param.task === "add") {
      return (
        <div className="viewStudentComp-buttons">
          <button
            style={{ backgroundColor: "#785964" }}
            onClick={this.onBtnCancel}
          >
            Cancel
          </button>
          <button
            style={{ backgroundColor: "#19647e" }}
            onClick={this.onBtnSave}
          >
            Save
          </button>
        </div>
      );
    }
  }

  ViewStudentUser(props) {
    let student = props.data;
    let firstGuardian = props.firstGuardian;
    let secondGuardian = props.secondGuardian;

    console.table(props.data);
    return (
      <div>
        <div className="row viewStudentComp">
          {this.getButtons()}
          <section className="col viewStudentSides">
            <div className="viewStudentInfo_profileSide_img">
              <img src={student.profilePicture} alt="" />
            </div>
            <div className="viewStudentInfo_profileSide form-row">
              <button>Classes</button>
              <button>Schedule</button>
              <button>life</button>
            </div>
          </section>
          <br />
          <section className="col-md-10 viewStudentSides">
            <div className="viewStudent_infos">
              <h5>Student Information</h5>
              {
                <this.InfoRow
                  labelName={"Student ID"}
                  type="text"
                  pattern="^([0-9]*\.{0,1}[0-9]+)$"
                  data={student.id}
                  view={props.view}
                  func={this.studentSetterFuncs.setId}
                />
              }
              <br />
              {
                <this.InfoRow
                  labelName={"First Name"}
                  type="text"
                  data={student.firstName}
                  view={props.view}
                  func={this.studentSetterFuncs.setFirstName}
                />
              }

              {
                <this.InfoRow
                  labelName={"Middle Name"}
                  type="text"
                  data={student.middleName}
                  view={props.view}
                  func={this.studentSetterFuncs.setMiddleName}
                />
              }

              {
                <this.InfoRow
                  labelName={"Last Name"}
                  type="text"
                  data={student.lastName}
                  view={props.view}
                  func={this.studentSetterFuncs.setLastName}
                />
              }
              <br />
              {
                <this.InfoRow
                  labelName={"Gender"}
                  type="text"
                  data={student.gender}
                  view={props.view}
                  func={this.studentSetterFuncs.setGender}
                />
              }
              <br />
              {
                <this.InfoRow
                  type="text"
                  labelName={"Student Email"}
                  data={student.email}
                  view={props.view}
                  func={this.studentSetterFuncs.setEmail}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Student Address"}
                  data={student.address}
                  view={props.view}
                  func={this.studentSetterFuncs.setAddress}
                />
              }
            </div>
            <br />
            <div className="viewStudent_infos">
              <h5>School Information</h5>
              {
                <this.InfoRow
                  type="text"
                  pattern="^([0-9]*\.{0,1}[0-9]+)$"
                  labelName={"Grade Level"}
                  data={student.gradeLevel}
                  view={props.view}
                  func={this.studentSetterFuncs.setGradeLevel}
                />
              }
              <br />
              {
                <this.InfoRow
                  type="text"
                  labelName={"Assigned Councilor"}
                  data={student.councilorId}
                  view={props.view}
                  func={this.studentSetterFuncs.setAssignedCouncilor}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Home-room Teacher"}
                  data={student.homeRoomId}
                  view={props.view}
                  func={this.studentSetterFuncs.setHomeRoomTeacher}
                />
              }
            </div>
            <br />

            <div className="viewStudent_infos">
              <h5>First Parent/Guardian Information</h5>
              {
                <this.InfoRow
                  type="text"
                  labelName={"First Name"}
                  data={firstGuardian.firstName}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian1FirstName}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Last Name"}
                  data={firstGuardian.lastName}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian1LastName}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  pattern="^([0-9]*\.{0,1}[0-9]+)$"
                  labelName={"Phone Number"}
                  data={phoneNumberFormatter(firstGuardian.phone)}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian1Phone}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Email Address"}
                  data={firstGuardian.email}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian1Email}
                />
              }
            </div>
            <br />
            <div className="viewStudent_infos">
              <h5>Second Parent/Guardian Information</h5>
              {
                <this.InfoRow
                  type="text"
                  labelName={"First Name"}
                  data={secondGuardian.firstName}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian2FirstName}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Last Name"}
                  data={secondGuardian.lastName}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian2LastName}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  pattern="^([0-9]*\.{0,1}[0-9]+)$"
                  labelName={"Phone Number"}
                  data={phoneNumberFormatter(secondGuardian.phone)}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian2Phone}
                />
              }
              {
                <this.InfoRow
                  type="text"
                  labelName={"Email Address"}
                  data={secondGuardian.email}
                  view={props.view}
                  func={this.studentSetterFuncs.setGuardian2Email}
                />
              }
            </div>
          </section>
        </div>
      </div>
    );
  }

  ViewTeacherUser(props) {
    let teacher = props.data;
    console.table(props.data);

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>View Teacher</h2>
        <br />
        <div className="row viewStudentComp">
          {this.getButtons()}

          <section className="col viewStudentSides">
            <div className="viewStudentInfo_profileSide_img">
              <img src={teacher.profilePicture} alt="" />
            </div>
            <div className="viewStudentInfo_profileSide form-row">
              <button>Classes</button>
              <button>Schedule</button>
              <button>life</button>
            </div>
          </section>
          <section className="col-md-10 viewStudentSides">
            <div className="viewStudent_infos">
              <h5>Teacher Information</h5>
              {
                <this.InfoRow
                  labelName={"Teacher ID"}
                  data={teacher.id}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setId}
                />
              }
              <br />
              {
                <this.InfoRow
                  labelName={"Title"}
                  data={teacher.title}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setTitle}
                />
              }
              {
                <this.InfoRow
                  labelName={"First Name"}
                  data={teacher.firstName}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setFirstName}
                />
              }

              {
                <this.InfoRow
                  labelName={"Middle Name"}
                  data={teacher.middleName}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setMiddleName}
                />
              }

              {
                <this.InfoRow
                  labelName={"Last Name"}
                  data={teacher.lastName}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setLastName}
                />
              }

              {
                <this.InfoRow
                  labelName={"Gender"}
                  data={teacher.gender}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setGender}
                />
              }
              <br />
              {
                <this.InfoRow
                  labelName={"Email Address"}
                  data={teacher.email}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setEmail}
                />
              }
              {
                <this.InfoRow
                  labelName={"Phone Number"}
                  data={phoneNumberFormatter(teacher.phone)}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setPhone}
                />
              }
              {
                <this.InfoRow
                  labelName={"Address"}
                  data={teacher.address}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setAddress}
                />
              }
            </div>
            <br />
            <div className="viewStudent_infos">
              <h5>School Information</h5>
              {
                <this.InfoRow
                  labelName={"Qualifications"}
                  data={teacher.qualifications}
                  type="text"
                  view={props.view}
                  func={this.teacherSetterFuncs.setQualifications}
                />
              }
            </div>
          </section>
        </div>
      </div>
    );
  }

  ///OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

  render() {
    return (
      <this.ViewUserComponent
        view={this.state.view}
        category={this.props.param.category}
      />
    );
  }
}

export default () => (
  <CreateStudentComponent
    viewTeacher={useViewTeacher()}
    addTeacher={useCreateTeacher()}
    addStudent={useCreateStudent()}
    viewStudent={useViewStudent()}
    history={useNavigate()}
    param={useParams()}
  />
);
