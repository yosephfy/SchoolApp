import { useEffect, useState } from "react";
import CourseServices from "../Services/CourseServices";
import StudentClassService from "../Services/StudentClassService";
import StudentServices from "../Services/StudentServices";
import TeacherServices from "../Services/TeacherServices";
import SearchBar from "./SearchBarComponent";
import ViewListOfPeople from "./ViewListOfPeople";
import TeacherClassService from "../Services/TeacherClassService";
import { useParams } from "react-router";
import { AuthService } from "../Services/AuthService";

const ListOfPeopleComponent = () => {
  const { category } = useParams();
  const loggedInUser = AuthService.getUser();

  const [people, setPeople] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedGradeLevel, setSelectedGradeLevel] = useState(0);
  const [sectionIds, setSectionIds] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [coursesLabel, setCoursesLabel] = useState([]);
  const [sectionsLabel, setSectionsLabel] = useState([]);

  const [filterFunction, setFilterFunction] = useState({ func: (a) => a });
  const [sortFunction, setSortFunction] = useState({ func: () => {} });

  const [gradeLevels] = useState([
    { value: "0", label: "All" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ]);

  function sortByFirstName(a, b) {
    return a.firstName > b.firstName;
  }

  useEffect(() => {
    const fetchStudents = async () => {
      const peopleData = await StudentServices.getStudents();
      setPeople(peopleData.data);
    };
    const fetchTeachers = async () => {
      const peopleData = await TeacherServices.getTeachers();
      setPeople(peopleData.data);
    };

    const fetchCourses = async () => {
      const courseData = await CourseServices.getCourses();
      setCoursesLabel(
        courseData.data
          .map((elem) => {
            return { label: elem.name, value: elem.id };
          })
          .concat({ value: "0", label: "All" })
          .sort((a, b) => a.value > b.value)
      );
    };

    const fetchStudentSchedule = async () => {
      const scheduleData = await StudentClassService.getStudentClass();
      setSchedules((prev) => prev.concat(scheduleData.data));
    };
    const fetchTeacherSchedule = async () => {
      const scheduleData = await TeacherClassService.getTeacherClass();
      setSchedules((prev) => prev.concat(scheduleData.data));
    };

    setFilterFunction({
      func: (a) => {
        return a;
      },
    });

    setSortFunction({
      func: sortByFirstName,
    });
    if (category === "student") {
      fetchStudents();
      fetchStudentSchedule();
    } else if (category === "teacher") {
      fetchTeachers();
      fetchTeacherSchedule();
    }

    fetchCourses();
  }, [category]);

  function onSelectGradeLevel(e) {
    if (!e) {
      return;
    }

    setSelectedGradeLevel(Number(e.value));
  }

  function onCourseSelected(e) {
    if (!e) {
      return;
    }
    const fetchSections = async (id) => {
      const sectionData = await CourseServices.getSectionsByCourseId(id);
      setSections(sectionData.data);
      setSectionsLabel(
        sectionData.data
          .map((elem) => {
            return { label: elem.sectionNum, value: elem.id };
          })
          .concat({ value: "0", label: "All" })
          .sort((a, b) => a.value > b.value)
      );
      setSectionIds(
        sectionData.data.map((elem) => {
          return elem.id;
        })
      );
    };

    if (e.value !== "0") {
      fetchSections(e.value);
      setSelectedSection("0");
    }
  }

  function onSectionSelected(e) {
    if (!e) {
      return;
    }

    setSelectedSection(e.value);
  }

  function onClickAddFilter() {
    let arr = [];
    if (selectedSection === "0") {
      const func = (a) => {
        arr = schedules.filter((elem) => {
          let user = "";
          if (category === "teacher") {
            user = elem.teacherId;
            return (
              Number(user) === Number(a.id) &&
              sectionIds.includes(elem.sectionId)
            );
          } else if (category === "student") {
            user = elem.studentId;
            return (
              Number(user) === Number(a.id) &&
              (selectedGradeLevel === 0 ||
                a.gradeLevel === selectedGradeLevel) &&
              sectionIds.includes(elem.sectionId)
            );
          }

          return false;
        });
        return arr.length > 0;
      };
      setFilterFunction({ func: func });
    } else if (selectedSection === "") {
      if (category === "teacher") {
        setFilterFunction({
          func: (a) => a,
        });
      } else
        setFilterFunction({
          func: (a) =>
            a.gradeLevel === selectedGradeLevel || selectedGradeLevel === 0,
        });
    } else {
      const func = (a) => {
        arr = schedules.filter((elem) => {
          let user = "";
          if (category === "teacher") {
            user = elem.teacherId;
            return (
              Number(user) === Number(a.id) &&
              Number(selectedSection) === Number(elem.sectionId)
            );
          } else if (category === "student") {
            user = elem.studentId;
            return (
              Number(user) === Number(a.id) &&
              (selectedGradeLevel === 0 ||
                a.gradeLevel === selectedGradeLevel) &&
              Number(selectedSection) === Number(elem.sectionId)
            );
          }

          return false;
        });
        return arr.length > 0;
      };
      setFilterFunction({ func: func });
    }
    console.log(sections.length);
  }

  function onClickRemoveFilter() {
    setSectionIds([]);
    setSelectedSection("");
    setFilterFunction({
      func: (a) => {
        return a;
      },
    });
  }

  return (
    <div>
      <div className="listOfPeopleFilter">
        {category !== "teacher" && (
          <div className="listOfPeopleFilter_items">
            <div>Grade Level </div>
            <SearchBar
              label="Grade Level"
              data={gradeLevels}
              disabled={gradeLevels.length === 0}
              func={onSelectGradeLevel}
              clearable={false}
              searchable={false}
              rtl={false}
              loading={false}
            />
          </div>
        )}
        <div className="listOfPeopleFilter_items">
          <div>Course </div>
          <SearchBar
            label="Course"
            data={coursesLabel}
            disabled={coursesLabel.length === 0}
            func={onCourseSelected}
            clearable={true}
            searchable={true}
            rtl={false}
            loading={false}
          />
        </div>
        <div className="listOfPeopleFilter_items">
          <div>Section </div>
          <SearchBar
            label="Section"
            data={sectionsLabel}
            disabled={sectionsLabel.length === 0}
            func={onSectionSelected}
            clearable={true}
            searchable={true}
            rtl={false}
            loading={false}
          />
        </div>
        <div className="listOfPeopleFilter_buttons">
          <button
            style={{ backgroundColor: "#19647e" }}
            onClick={onClickAddFilter}
          >
            Add Filters
          </button>
          <button
            style={{ backgroundColor: "#785964" }}
            onClick={onClickRemoveFilter}
          >
            Remove Filters
          </button>
        </div>
      </div>
      <ViewListOfPeople
        people={people}
        filterFunc={filterFunction.func}
        sortFunc={sortFunction.func}
        showId={loggedInUser.category !== "STUDENT"}
        showLastName={true}
        showFirstName={true}
        showMiddleName={true}
        showEmail={true}
        showAddress={loggedInUser.category === "ADMIN"}
        showMoreButton={loggedInUser.category === "ADMIN"}
      />
    </div>
  );
};

export default ListOfPeopleComponent;
