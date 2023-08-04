import { useNavigate } from "react-router-dom";
import { AuthService } from "./Services/AuthService";
import StudentClassService from "./Services/StudentClassService";
import TeacherClassService from "./Services/TeacherClassService";

export function reverse(value) {
  return value.split("").reverse().join("");
}

export function phoneNumberFormatter(input) {
  input = input + "";
  return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

export function parseNameToObject(value) {
  if (value === undefined || value === null || value === "") {
    return { firstName: "", middleName: "", lastName: "", title: "" };
  }

  return JSON.parse(value);
}

export function fromMilitaryTimeToMin(value) {
  if (!value) return null;

  let newVal = value.split(":");
  return Number(newVal[0]) * 60 + Number(newVal[1]);
}

export function fromMinToMilitaryTime(value) {
  if (!value) return null;
  let hour = Math.floor(value / 60);
  let minutes = value - hour * 60;

  return ("00" + hour).slice(-2) + ":" + ("00" + minutes).slice(-2);
}

export function useListOfTimeInBetween(sections) {
  if (!sections || sections.length === 0) {
    return [];
  }
  const sec = sections;
  let first = fromMilitaryTimeToMin(sec.at(0).startTime);
  let last = fromMilitaryTimeToMin(sec.at(-1).startTime);
  let list = [];
  sections.forEach((element) => {
    first = Math.min(first, fromMilitaryTimeToMin(element.startTime));
    last = Math.max(last, fromMilitaryTimeToMin(element.startTime));
  });

  for (let i = first - 30; i <= last + 90; i += 30) {
    list.push(fromMinToMilitaryTime(i));
  }

  return list;
}

export function addMilitaryTimes(time1, time2) {
  return fromMinToMilitaryTime(
    fromMilitaryTimeToMin(time1) + fromMilitaryTimeToMin(time2)
  );
}

export function addMilitaryAndMinutes(military, minutes) {
  if (!military || !minutes) return null;

  let newVal = military.split(":");
  let mins = Number(newVal[1]) + Number(minutes);
  let hours = Number(newVal[0]);
  if (mins > 99) {
    hours += 1;
    mins = mins - 100;
  }
  return hours + ":" + mins;
}

export function fromSystemTimeToDateAndTime(systemTime) {
  "2023-06-27T20:46";
  if (systemTime === "") {
    return { date: "", time: "" };
  }
  let dateString = systemTime.split("T")[0];
  let timeString = systemTime.split("T")[1];

  let result = {
    date: "".concat(
      dateString.split("-")[1],
      "/",
      dateString.split("-")[2],
      "/",
      dateString.split("-")[0]
    ),
    time: timeString,
  };

  return result;
}

export function useViewCourse() {
  const history = useNavigate();
  return function goHere(val) {
    history("/school/course/view-course/" + val);
  };
}

export function useAddCourse() {
  const history = useNavigate();
  return function goHere(val) {
    history("/school/course/add-course/" + val);
  };
}

export function useViewStudent() {
  const history = useNavigate();
  return function goHere(val) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      Number(AuthService.getUserId()) === Number(val)
    ) {
      history("/user/view/student/" + val);
    } else {
      return;
    }
  };
}
export function useViewTeacher() {
  const history = useNavigate();
  return function goHere(val) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      Number(AuthService.getUserId()) === val
    ) {
      history("/user/view/teacher/" + val);
    } else {
      return;
    }
  };
}

export function useCreateStudent() {
  const history = useNavigate();
  return function goHere(val) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      Number(Number(AuthService.getUserId())) === Number(val)
    ) {
      history("/user/add/student/" + val);
    } else {
      history("/home");
    }
  };
}

export function useCreateTeacher() {
  const history = useNavigate();
  return function goHere(val) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      Number(AuthService.getUserId()) === val
    ) {
      history("/user/add/teacher/" + val);
    } else {
      history("/home");
    }
  };
}

export function useViewClassList() {
  const history = useNavigate();
  return function goHere(val, catagory) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      Number(AuthService.getUserId()) === val
    ) {
      history("/school/" + catagory + "/class-list/" + val);
    } else {
      history("/home");
    }
  };
}

export function useViewMySection() {
  const history = useNavigate();
  return function goHere(val, catagory) {
    const fetchData = async () => {
      const teachData = await TeacherClassService.getTeacherClassById(val);
      const stuData = await StudentClassService.getStudentClassById(val);
      return teachData.data || stuData.data;
    };

    if (AuthService.getUserCatagory() === "ADMIN" || fetchData()) {
      history("/school/course/my-section/" + catagory + "/" + val);
    } else {
      history("/home");
    }
  };
}
export function useViewListAssignment() {
  const history = useNavigate();
  return function goHere(val, catagory) {
    const fetchData = async () => {
      const teachData = await TeacherClassService.getTeacherClassById(val);
      const stuData = await StudentClassService.getStudentClassById(val);
      return teachData.data || stuData.data;
    };

    if (AuthService.getUserCatagory() === "ADMIN" || fetchData()) {
      history("/school/my-assignments/" + catagory + "/" + val);
    } else {
      history("/home");
    }
  };
}
export function useCreateAssignment() {
  const history = useNavigate();
  return function goHere(val) {
    if (
      AuthService.getUserCatagory() === "ADMIN" ||
      AuthService.getUserCatagory() === "TEACHER"
    ) {
      history("/school/my-section/" + val + "/create-assignment");
    } else {
      history("/home");
    }
  };
}
export function useViewAssignment() {
  const history = useNavigate();
  return function goHere(id, catagory) {
    const fetchData = async () => {
      const teachData = await TeacherClassService.getTeacherClassById(id);
      const stuData = await StudentClassService.getStudentClassById(id);
      return teachData.data || stuData.data;
    };

    if (AuthService.getUserCatagory() === "ADMIN" || fetchData()) {
      history("/school/assignment/" + catagory + "/" + id);
    } else {
      history("/home");
    }
  };
}

export function useViewStudentSchedule() {
  const history = useNavigate();
  return function goHere() {
    history("/school/student/schedule");
  };
}
export function useViewTeacherSchedule() {
  const history = useNavigate();
  return function goHere() {
    history("/school/teacher/schedule");
  };
}

export function useCourseRequestPage() {
  const history = useNavigate();
  return function goHere(val) {
    history("/school/course-request/" + val);
  };
}

export function useViewListOfPeople() {
  const history = useNavigate();
  return function goHere(val) {
    history("/school/list-people/" + val);
  };
}
export function useViewPeopleFromSection() {
  const history = useNavigate();
  return function goHere(category, id) {
    history("/school/my-section/" + category + "/" + id + "/people");
  };
}
export function useViewGradesFromSection() {
  const history = useNavigate();
  return function goHere(category, id) {
    history("/school/my-section/" + category + "/" + id + "/grades");
  };
}
