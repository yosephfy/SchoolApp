import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseServices from "../Services/CourseServices";
import { useAddCourse, useViewCourse } from "../Utilities";

class ListCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    CourseServices.getCourses().then((res) => {
      this.setState({ courses: res.data });
    });
  }

  handleDeleteCourse(id) {
    CourseServices.deleteCourse(id).then(() => {
      this.setState({
        courses: this.state.courses.filter((course) => course.id !== id),
      });
    });
    this.props.history("/school/course");
  }

  render() {
    return (
      <div className="">
        <h2 className="buttons1 text-center">Courses List</h2>
        <br></br>
        <div className="row">
          <table className="courseList">
            <tbody className="courseListRows">
              {this.state.courses.map((course) => (
                <tr key={course.name}>
                  <td className="courses">
                    <div className="course_title_row row">
                      <div className=" courses_title col">
                        {course.name} - {course.title}
                      </div>
                      <div className="courseprereqdiv col">
                        Prerequisites:{" "}
                        {course.pre_reqs
                          .replace(/\[(.*)\]/, "$1")
                          .split(",")
                          .map((req) => {
                            let c = this.state.courses.find(
                              (elem) => Number(elem.id) === parseInt(req)
                            );
                            return (
                              <label className="" key={req}>
                                <a href={"course/view-course/" + c.id}>
                                  {c.name}
                                </a>
                              </label>
                            );
                          })}
                      </div>
                    </div>
                    <div className="coursedescriptiondiv">
                      <div>Description: </div>
                      {course.description} The box sat on the desk next to the
                      computer. It had arrived earlier in the day and business
                      had interrupted her opening it earlier. She didn't who had
                      sent it and briefly wondered who it might have been. As
                      she began to unwrap it, she had no idea that opening it
                      would completely change her life.
                    </div>

                    <div className="col coursebutton">
                      <div className="viewCourse-button">
                        <button
                          style={{ backgroundColor: "#19647e" }}
                          onClick={() => this.props.viewCourse(course.id)}
                        >
                          View Sections
                        </button>
                      </div>
                    </div>
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
  <ListCourseComponent
    addCourse={useAddCourse()}
    viewCourse={useViewCourse()}
    param={useParams()}
    history={useNavigate()}
  />
);
