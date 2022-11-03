import React from "react";

const Help = () => {
  return (
    <div
      style={{
        padding: "4rem",
        flexBasis: "50%",
        boxSizing: "border-box",
      }}
    >
      This app is designed by dhadrexytheplug to view all necessary information
      about his github profile.
      <h3>Getting started</h3>
      <p>
        Navigate to the home page, the overview nested route give details about
        his github profile and his pinned repos while the repositories route
        lists all the repos available on his github profile. Click on a
        specified repo link to load the specified repo and see all the folders
        in the repos. Thanks.
      </p>
    </div>
  );
};

export default Help;
