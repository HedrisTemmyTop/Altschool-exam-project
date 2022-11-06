import React from "react";
import { Helmet } from "react-helmet";
const Help = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Help</title>
      </Helmet>

      <div
        style={{
          padding: "4rem",
          flexBasis: "50%",
          boxSizing: "border-box",
        }}
      >
        This app is designed by dhadrexytheplug to view all necessary
        information about his github profile.
        <h3>Getting started</h3>
        <p>
          Navigate to the home page, the overview nested route give details
          about his github profile and his pinned repos while the repositories
          route lists all the repos available on his github profile. Click on a
          specified repo link to load the specified repo and see all the folders
          in the repos. Thanks.
          <br />
          <br /> You can test for the error boundary using two methods 1.) Go to
          the home page and search for an invalid user or 2.) Navigate to the
          error page . NB(the error page shall throw an error automatically)
        </p>
      </div>
    </React.Fragment>
  );
};

export default Help;
