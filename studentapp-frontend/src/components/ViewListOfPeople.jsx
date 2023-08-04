import { useState } from "react";
import { useViewStudent } from "../Utilities";

const ViewPeople = ({
  people,
  filterFunc,
  sortFunc,
  showId,
  showFirstName,
  showLastName,
  showMiddleName,
  showEmail,
  showAddress,
  showMoreButton,
}) => {
  const [thisSortFunc, setThisSortFunc] = useState({ f: sortFunc });
  const viewStudent = useViewStudent();
  let filteredPeople = people.filter(filterFunc).sort(thisSortFunc.f);

  function onSortById() {
    function func(a, b) {
      return a.id > b.id;
    }
    setThisSortFunc({ f: func });
  }
  function onSortByLastName() {
    function func(a, b) {
      return a.lastName > b.lastName;
    }
    setThisSortFunc({ f: func });
  }
  function onSortByFirstName() {
    function func(a, b) {
      return a.firstName > b.firstName;
    }
    setThisSortFunc({ f: func });
  }
  function onSortByMiddleName() {
    function func(a, b) {
      return a.middleName > b.middleName;
    }
    setThisSortFunc({ f: func });
  }
  function onSortByAddress() {
    function func(a, b) {
      return a.address > b.address;
    }
    setThisSortFunc({ f: func });
  }
  function onSortByEmail() {
    function func(a, b) {
      return a.email > b.email;
    }
    setThisSortFunc({ f: func });
  }

  const onClickMore = (val) => () => {
    viewStudent(Number(val));
  };
  return (
    <div>
      <table className="table ViewListPeople_container">
        <thead>
          <tr className="ViewListPeople_title">
            {showId && (
              <th role="button" onClick={onSortById} style={{ width: "10%" }}>
                ID <div className="sort_arrow" />
              </th>
            )}
            {showLastName && (
              <th
                role="button"
                onClick={onSortByLastName}
                style={{ width: "15%" }}
              >
                Last Name <div className="sort_arrow" />
              </th>
            )}
            {showMiddleName && (
              <th
                role="button"
                onClick={onSortByMiddleName}
                style={{ width: "20%" }}
              >
                Middle Name <div className="sort_arrow" />
              </th>
            )}
            {showFirstName && (
              <th
                role="button"
                onClick={onSortByFirstName}
                style={{ width: "15%" }}
              >
                First Name <div className="sort_arrow" />
              </th>
            )}
            {showEmail && (
              <th
                role="button"
                onClick={onSortByEmail}
                style={{ width: "20%" }}
              >
                Email <div className="sort_arrow" />
              </th>
            )}
            {showAddress && (
              <th
                role="button"
                onClick={onSortByAddress}
                style={{ width: "25%" }}
              >
                Address <div className="sort_arrow" />
              </th>
            )}
            {showMoreButton && <th style={{ width: "5%" }}></th>}
          </tr>
        </thead>

        <tbody>
          {filteredPeople.map((person) => (
            <tr key={person.id} className="ViewListPeople_row">
              {showId && <td>{person.id}</td>}
              {showLastName && <td>{person.lastName}</td>}
              {showMiddleName && <td>{person.middleName}</td>}
              {showFirstName && <td>{person.firstName}</td>}
              {showEmail && <td>{person.email}</td>}
              {showAddress && <td>{person.address}</td>}
              {showMoreButton && (
                <td>
                  <button
                    onClick={onClickMore(person.id)}
                    className="ViewListPeople_more_button"
                  >
                    ..More
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPeople;
