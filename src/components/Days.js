import React from "react";

function Days(props){
  return (
          <div className="days">
            <h2 id="content_header">Day Information</h2>
            <div className="info">
            This semester's career fair will have one day for full time positions, and one day for internships.
            Below are the CareerEco links to the fair information as well as which companies will be attending.
            </div>
    
            <a href="https://illinois.joinhandshake.com/career_fairs/23691"> September 8th: <br/> Internship</a>
            <a href="https://illinois.joinhandshake.com/career_fairs/23673?ref=events-search"> September 15th: <br/> Full-time Employement</a>
            {/* <a href="https://careereco.com/Fair/Schedule?fairId=49c73a49-7ec5-419b-a8f3-abf401828800">Company List</a> */}
    
          </div>
        );

}

export default Days;

// Second & Third Day Cancelled
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=e15f5e45-20c9-4680-9a89-abe9017ed33e">September 11th: <br/>Start Up, Government, Graduate School & Non-profit</a>
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=de6381c0-ebea-4931-ad7b-abf4017de39c">September 10th: <br/> Full-time Employement</a>