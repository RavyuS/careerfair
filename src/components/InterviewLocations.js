import React from "react";

function InterviewLocations(props){
  return (
    <div className="interviewlocations">
      <h2 id="content_header">interview locations</h2>
      <div className="info">
        Below are interview handbooks based on each specific interview
        location. Click the link below to download the handbook.
      </div>
      <a href="../interview-handbooks/DCL.pdf" download>
        Digital Computer Labratory
      </a>
      <a href="../interview-handbooks/Illini-Union.pdf" download>
        Illini Union
      </a>
      <a href="../interview-handbooks/Memorial-Stadium.pdf" download>
        Memorial Stadium
      </a>
      <a href="../interview-handbooks/The-Career-Center.pdf" download>
        The Career Center
      </a>
    </div>
  );
}
export default InterviewLocations;
