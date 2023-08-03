import * as React from "react";
import { useListOfTimeInBetween } from "../Utilities";

const ScheduleComponent = (props) => {
  const data_list = props.data;
  const schedule = props.schedule;

  function positionCourseTimeBlock(item, position, duration) {
    const positionElem = document.getElementById(position);
    const itemElem = document.getElementById(item);
    if (itemElem && positionElem) {
      itemElem.style.top = positionElem.style.top;
      itemElem.style.height = duration + "px"; //30px for 30 min
    }
  }

  function positionAll() {
    schedule.monday.forEach((elem) => {
      positionCourseTimeBlock(
        elem.courseId + "monday_block",
        elem.startTime,
        elem.duration
      );
    });

    schedule.tuesday.forEach((elem) => {
      positionCourseTimeBlock(
        elem.courseId + "tuesday_block",
        elem.startTime,
        elem.duration
      );
    });

    schedule.wednesday.forEach((elem) => {
      positionCourseTimeBlock(
        elem.courseId + "wednesday_block",
        elem.startTime,
        elem.duration
      );
    });

    schedule.thursday.forEach((elem) => {
      positionCourseTimeBlock(
        elem.courseId + "thursday_block",
        elem.startTime,
        elem.duration
      );
    });

    schedule.friday.forEach((elem) => {
      positionCourseTimeBlock(
        elem.courseId + "friday_block",
        elem.startTime,
        elem.duration
      );
    });
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  sleep(10).then(() => positionAll());
  return (
    <div>
      <Schedule schedule={schedule} data={data_list} />
    </div>
  );
};

const ClassBox = (props) => {
  return (
    <div
      className="scheduletableclasses_coursebox"
      key={props.section.id}
      id={props.section.courseId + props.name + "_block"}
    >
      <div className="scheduletableclasses_coursebox_courselabel">
        <label>{props.section.courseId}</label>
      </div>
      <div className="scheduletableclasses_coursebox_sectionnumlabel">
        <label>{props.section.sectionNum}</label>
      </div>
    </div>
  );
};

const Schedule = (props) => {
  let x = 0;
  return (
    <div className="schedulemain">
      <div className="scheduletable">
        <div className="scheduletabletime">
          <label htmlFor="">Time</label>
          {useListOfTimeInBetween(props.data).map((elem) => (
            <div id={elem} key={(x += 30) + "time"} style={{ top: x }}>
              {elem}
            </div>
          ))}
        </div>
        <div className="scheduletabledays">
          <label htmlFor="">Monday</label>
          <div className="scheduletableclasses">
            {useListOfTimeInBetween(props.data).map((elem) => (
              <div
                className="scheduletabletime_box"
                id={elem + "_monday_box"}
                key={(x += 30) + "time"}
              ></div>
            ))}
            <div className="scheduletableclasses_course">
              {props.schedule.monday.map((elem) => (
                <ClassBox key={elem.id} name={"monday"} section={elem} />
              ))}
            </div>
          </div>
        </div>
        <div className="scheduletabledays">
          <label htmlFor="">Tuesday</label>
          <div className="scheduletableclasses">
            {useListOfTimeInBetween(props.data).map((elem) => (
              <div
                className="scheduletabletime_box"
                id={elem + "_tuesday_box"}
                key={(x += 30) + "time"}
              ></div>
            ))}
            <div className="scheduletableclasses_course">
              {props.schedule.tuesday.map((elem) => (
                <ClassBox key={elem.id} name={"tuesday"} section={elem} />
              ))}
            </div>
          </div>
        </div>
        <div className="scheduletabledays">
          <label htmlFor="">Wednesday</label>
          <div className="scheduletableclasses">
            {useListOfTimeInBetween(props.data).map((elem) => (
              <div
                className="scheduletabletime_box"
                id={elem + "_wednesday_box"}
                key={(x += 30) + "time"}
              ></div>
            ))}
            <div className="scheduletableclasses_course">
              {props.schedule.wednesday.map((elem) => (
                <ClassBox key={elem.id} name={"wednesday"} section={elem} />
              ))}
            </div>
          </div>
        </div>
        <div className="scheduletabledays">
          <label htmlFor="">Thursday</label>
          <div className="scheduletableclasses">
            {useListOfTimeInBetween(props.data).map((elem) => (
              <div
                className="scheduletabletime_box"
                id={elem + "_thursday_box"}
                key={(x += 30) + "time"}
              ></div>
            ))}
            <div className="scheduletableclasses_course">
              {props.schedule.thursday.map((elem) => (
                <ClassBox key={elem.id} name={"thursday"} section={elem} />
              ))}
            </div>
          </div>
        </div>
        <div className="scheduletabledays">
          <label htmlFor="">Friday</label>
          <div className="scheduletableclasses">
            {useListOfTimeInBetween(props.data).map((elem) => (
              <div
                className="scheduletabletime_box"
                id={elem + "_friday_box"}
                key={(x += 30) + "time"}
              ></div>
            ))}
            <div className="scheduletableclasses_course">
              {props.schedule.friday.map((elem) => (
                <ClassBox key={elem.id} name={"friday"} section={elem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
