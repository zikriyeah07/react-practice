import React from "react";
import PropTypes from "prop-types";


const Student = ({ name = "Unknown", age = 0, grade = "Not-Available" }) => {
  return (
    <div className="student-box">
      <h6 className="StudentName">Student Name: {name}</h6>
      <p className="age-class">Age: {age}</p>
      <p className="grade-class">Student Grade: {grade}</p>
      <p className="hostel-class">
        Campus Placement:{" "}
        {age >= 21
          ? "Eligible for campus placement"
          : "Not eligible for campus placement"}
      </p>
      <p>
        Remarks : {grade.toUpperCase() === "A" ? "Good Student" : "Average Student"}
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
