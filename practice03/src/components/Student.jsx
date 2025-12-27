import React from "react";
import PropTypes from "prop-types";


const Student = (props) => {
  return (
    <div className="student-box">
      <h6 className="StudentName">Student Name: {props.name}</h6>
      <p className="age-class">Age: {props.age}</p>
      <p className="grade-class">Student Grade: {props.grade}</p>
      <p className="hostel-class">
        Campus Placement:{" "}
        {props.age >= 21
          ? "Eligible for campus placement"
          : "Not eligible for campus placement"}
      </p>
      <p>
        Is A Topper : {props.grade === "A" ? "Good Student" : "Average Student"}
      </p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.string,
};

export default Student;
