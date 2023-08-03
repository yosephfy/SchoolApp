import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import StudentServices from "../Services/StudentServices";
import { useCreateStudent, useViewStudent } from "../Utilities";

class ListStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.addStudent = this.addStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    StudentServices.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }

  addStudent() {
    this.props.addStudent(-1);
  }

  updateStudent(id) {
    this.props.addStudent(id);
    //this.props.history("/school/student/add-student/" + id);
  }

  deleteStudent(id) {
    if (AuthService.getUserCatagory() === "admin")
      StudentServices.deleteStudent(id).then(() => {
        this.setState({
          students: this.state.students.filter((student) => student.id !== id),
        });
      });
    this.props.history("/school/student");
  }

  viewStudent(id) {
    this.props.viewStudent(id);
  }

  render() {
    return (
      <div className="">
        <h2 className="buttons1 text-center">Students List</h2>
        <div className="">
          <button className="btn btn-primary" onClick={this.addStudent}>
            Add Student
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student First Name</th>
                <th>Student Middle Name</th>
                <th>Student Last Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.middleName}</td>
                  <td>{student.lastName}</td>
                  <td className="action">
                    <button
                      className="btn-sm btn btn-primary action-btn"
                      onClick={() => this.updateStudent(student.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-sm btn btn-info action-btn"
                      onClick={() => this.viewStudent(student.id)}
                    >
                      View
                    </button>
                    <button
                      className="btn-sm btn btn-danger action-btn"
                      onClick={() => this.deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default () => (
  <ListStudentComponent
    addStudent={useCreateStudent()}
    viewStudent={useViewStudent()}
    param={useParams()}
    history={useNavigate()}
  />
);
