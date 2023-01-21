import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div>
      <center>
        <h1>This is about page</h1>
        <Link to="/home">To home page</Link>
        <br />
        <Link to="/">To main page</Link>
      </center>
    </div>
  );
};

export default About;
