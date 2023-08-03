import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import TeacherServices from "../Services/TeacherServices";
import { useCreateTeacher, useViewTeacher } from "../Utilities";

class ListTeacherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
    };
    this.addTeacher = this.addTeacher.bind(this);
    this.updateteacher = this.updateTeacher.bind(this);
    this.deleteteacher = this.deleteTeacher.bind(this);
  }

  componentDidMount() {
    TeacherServices.getTeachers().then((res) => {
      this.setState({ teachers: res.data });
    });
  }

  addTeacher() {
    this.props.addTeacher(-1);
  }

  updateTeacher(id) {
    this.props.addTeacher(id);
  }

  deleteTeacher(id) {
    if (AuthService.getUserCatagory() === "admin")
      TeacherServices.deleteTeacher(id).then(() => {
        this.setState({
          teachers: this.state.teachers.filter((teacher) => teacher.id !== id),
        });
      });
    this.props.history("/school/teacher");
  }

  viewTeacher(id) {
    this.props.viewTeacher(id);
    //this.props.history("/school/teacher/view-teacher/" + id);
  }

  render() {
    return (
      <div className="">
        <h2 className="buttons1 text-center">Teachers List</h2>
        <div className="">
          <button className="btn btn-primary" onClick={this.addTeacher}>
            Add Teacher
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Teacher ID</th>
                <th>Teacher First Name</th>
                <th>Teacher Middle Name</th>
                <th>Teacher Last Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.middleName}</td>
                  <td>{teacher.lastName}</td>
                  <td className="action">
                    <button
                      className="btn-sm btn btn-primary action-btn"
                      onClick={() => this.updateTeacher(teacher.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-sm btn btn-info action-btn"
                      onClick={() => this.viewTeacher(teacher.id)}
                    >
                      View
                    </button>
                    <button
                      className="btn-sm btn btn-danger action-btn"
                      onClick={() => this.deleteTeacher(teacher.id)}
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
  <ListTeacherComponent
    addTeacher={useCreateTeacher()}
    viewTeacher={useViewTeacher()}
    param={useParams()}
    history={useNavigate()}
  />
);
