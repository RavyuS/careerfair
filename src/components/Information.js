import React from "react";
import student from "../images/student.png";
import company from "../images/company.png";

function Information(props) {
  return (
    <div>
      <h1 id="content_header">About</h1>
      <div className="information">
        <div className="info">
          Engineering Career Services and Engineering Employment EXPO
          have joined forces to host the first virtual career fair at the University of Illinois.
        </div>

        <div className="facts_container">
          <div className="fact">
            <img className="icon" src={student}></img>
            <p>
              7,000+
              <br />
              Students
            </p>
          </div>
          <div className="fact">
            <img className="icon" src={company}></img>
            <p>
              200+
              <br />
              Companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Information;
