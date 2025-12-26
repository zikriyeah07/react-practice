import React from "react";

const Student = (props) => {
  return (
    <div className="student-box">
      <h6 className="StudentName">Student Name: {props.name}</h6>
      <p className="age-class">Age: {props.age}</p>
      <p className="grade-class">Student Grade: {props.grade}</p>
      <p className="hostel-class">
       Hostel: {props.age >= 21
          ? "Eligible for campus placement"
          : "Not eligible for campus placement"}
      </p>
      <p>
        <p>
            Is A Topper : {props.grade === "A" ? "Good Student" : "Average Student"}
        </p>

      </p>
    </div>
  );
};

export default Student;
