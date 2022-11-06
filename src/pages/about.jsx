import React from "react";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About page </title>
      </Helmet>
      <div
        style={{ padding: "4rem", flexBasis: "50%", boxSizing: "border-box" }}
      >
        This app was developed by a student of altschoolafrica school of
        software engineering department of frontend engineering.Also a student
        at Federal University of Technology Akure(FUTA), Faculty of Computing,
        Department of Information Technology Competent in HTML, CSS, SASS,
        JAVASCRIPT, REACT, & NEXT JS.
        <br />
        <br />
        Features === Nested routes, Error Boundary, SEO optimization, Fetch API,
        <br />
        <br />
        Stacks used: REACT & GitHub API
      </div>
    </React.Fragment>
  );
};

export default About;
