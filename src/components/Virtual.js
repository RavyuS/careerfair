import React from "react";

function Virtual(props){
  return (
    <div className="virtual">
      <h2 id="content_header">Virtual Career Fair Information</h2>
      <div className="info">
        This year's career fair will be hosted virtually through CareerEco!
        Below are two tutorials to help you set up your CareerEco account and navigate the website.
      </div>

      <a href="../tutorials/tutorial1.pdf">Tutorial 1</a>
      <a href="../tutorials/tutorial2.pdf">Tutorial 2</a>


      <div className="info">
        Additionally, EXPO Committee will be hosting a Zoom session to answer outstanding student questions and offer some advice for success at an online career fair!
        The link to the resources from both sessions are below.
      </div>

      <a href="https://illinois.joinhandshake.com/events/658230">February 3rd<br/> 6:00 pm CDT</a>

    </div>
  );
}

export default Virtual;

// Only 1 Session
// <a href="https://drive.google.com/drive/folders/1q68e6ZY8tUQ5zqptYaK-F7wHARJwdcwO?usp=sharing">September 7th <br/>6:30 pm CDT</a>
