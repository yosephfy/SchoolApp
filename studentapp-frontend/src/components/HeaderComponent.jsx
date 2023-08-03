import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../Services/AuthService";
import StudentServices from "../Services/StudentServices";
import TeacherServices from "../Services/TeacherServices";
import { useViewStudent, useViewTeacher } from "../Utilities";
import profileCircle from "../profile-circle-svgrepo-com (2).svg";
import logoutImg from "../log-out.svg";

const HeaderComponent = () => {
  const [user, setUser] = useState({});
  const [catagory, setCatagory] = useState("");
  const [profileOpened, setProfileOpened] = useState(false);
  const viewStudent = useViewStudent();
  const viewTeacher = useViewTeacher();

  const history = useNavigate();
  const menuRef = useRef();
  const profRef = useRef();

  useEffect(() => {
    const fetchStudent = async (studentId) => {
      const userData = await StudentServices.getStudentById(studentId);
      setUser(userData.data);
    };

    const fetchTeacher = async (teacherId) => {
      const userData = await TeacherServices.getTeacherById(teacherId);
      setUser(userData.data);
    };

    const fetchAdmin = async (studentId) => {
      const userData = await StudentServices.getStudentById(studentId);
      setUser(userData.data);
    };

    if (AuthService.isLoggedIn()) {
      setCatagory(AuthService.getUserCatagory());
      const userID = AuthService.getUserId();
      if (AuthService.getUserCatagory() === "ADMIN") {
        fetchAdmin(userID);
      } else if (AuthService.getUserCatagory() === "STUDENT") {
        fetchStudent(userID);
      } else if (AuthService.getUserCatagory() === "PARENT") {
        fetchStudent(userID);
      } else if (AuthService.getUserCatagory() === "TEACHER") {
        fetchTeacher(userID);
      }
    }
  }, []);

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== profRef.current) {
      setProfileOpened(false);
    }
  });

  const handleLogin = (event) => {
    event.preventDefault();
    history("/login");
  };

  const handleLogout = (event) => {
    AuthService.clearUser("user");
    event.preventDefault();
    history("/login");
  };

  const userProfile = () => {
    return (
      <div ref={menuRef} className="flex flex-col dropDownProfile shadow">
        <div ref={menuRef} className="viewStudentInfo_profileSide_img">
          <img src={user.profilePicture} alt="" />
        </div>
        <ul
          ref={menuRef}
          className="flex felx-col text-center gap-4 no-bullets "
        >
          <li className="dropDownItems dropDownText">
            <label className="dropDownText">{user.email}</label>
          </li>
          <li className="dropDownItems dropDownText">
            <label className="dropDownText">ID: {user.id}</label>
          </li>
          <li className="dropDownItems dropDownText">
            <label className="dropDownText">
              {user.firstName} {user.lastName}
            </label>
          </li>
          <li
            className="dropDownItems dropDownText"
            onClick={() => {
              setProfileOpened(false);
              if (catagory === "ADMIN") {
                return viewStudent(user.id);
              } else if (catagory === "PARENT") {
                return viewStudent(user.id);
              } else if (catagory === "STUDENT") {
                return viewStudent(user.id);
              } else if (catagory === "TEACHER") {
                return viewTeacher(user.id);
              }
            }}
          >
            <label className="dropDownText">Profile</label>
          </li>
          <li className="dropDownItems dropDownText" onClick={handleLogout}>
            <label className="dropDownText">Logout</label>
          </li>
        </ul>
      </div>
    );
  };

  const test = () => {
    return (
      <section className="flex flex-col dropDownProfile ">
        <div className="text-center">
          <div id="image">
            <img src={user.profilePicture} className="" />
          </div>
          <h4 className="">
            {user.firstName} {user.lastName}
          </h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="">{user.id}</label>
            <a className="" href="">
              {user.email}
            </a>
          </div>
          <br />
          <div>
            <button
              id="viewProfile"
              onClick={() => {
                setProfileOpened(false);
                if (catagory === "ADMIN") {
                  return viewStudent(user.id);
                } else if (catagory === "PARENT") {
                  return viewStudent(user.id);
                } else if (catagory === "STUDENT") {
                  return viewStudent(user.id);
                } else if (catagory === "TEACHER") {
                  return viewTeacher(user.id);
                }
              }}
            >
              View Profile <img src={profileCircle} alt="" />
            </button>
            <button id="viewProfile" onClick={handleLogout}>
              Logout <img src={logoutImg} alt="" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  const getLoginLogoutButton = () => {
    if (AuthService.isLoggedIn()) {
      return <div>{profileOpened && test()}</div>;
    } else {
      return (
        <button className="btn btn-primary" onClick={handleLogin}>
          login
        </button>
      );
    }
  };

  return (
    <div>
      <header>
        <nav className="header">
          <div className=" row">
            <div className="col-10">
              <a
                href="/home"
                className="navbar-brand"
                style={{
                  fontSize: "30px",
                  paddingLeft: "50px",
                  color: "white",
                }}
              >
                School App
              </a>
            </div>
            <div className="col-2 navbar justify-content-center">
              <div className="text-center ">{getLoginLogoutButton()}</div>
              {AuthService.isLoggedIn() && Object.keys(user).length > 0 && (
                <img
                  ref={profRef}
                  className="profileImage "
                  src={profileCircle}
                  onPointerEnter={() => setProfileOpened(!profileOpened)}
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
