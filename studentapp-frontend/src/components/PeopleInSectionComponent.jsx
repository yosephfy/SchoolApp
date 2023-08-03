import { useEffect, useState } from "react";
import ViewPeople from "./ViewListOfPeople";
import { useParams } from "react-router";
import StudentClassService from "../Services/StudentClassService";
import StudentServices from "../Services/StudentServices";

const PeopleInSectionComponent = () => {
  const [schedules, setSchedules] = useState([]);

  const { sectionId, category } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const scheduleData =
        await StudentClassService.getClassScheduleBySectionId(
          Number(sectionId)
        );
      setSchedules(scheduleData.data);
    };
    const fetchStudents = async () => {
      const studentData = await StudentServices.getStudents();
      setStudents(studentData.data);
    };

    fetchStudents();

    fetchSchedules();
  }, [sectionId]);

  return (
    <ViewPeople
      people={students}
      filterFunc={function filterBySectionId(a) {
        return (
          schedules.filter((elem) => Number(elem.studentId) === Number(a.id))
            .length > 0
        );
      }}
      sortFunc={function sortDefault(a, b) {
        return a.firstName > b.firstName;
      }}
      showId={category === "teacher"}
      showLastName={true}
      showFirstName={true}
      showMiddleName={true}
      showEmail={category === "teacher"}
      showAddress={false}
      showMoreButton={false}
    />
  );
};

export default PeopleInSectionComponent;
