import React from "react";
import classes from "../styles/overview.module.css";

import { Navigate, useParams } from "react-router-dom";
const Repo = (props) => {
  const { id } = useParams();
  const reps = props.repos.filter((rep) => rep.id === +id);
  let content = null;
  if (reps.length >= 1) {
    content = reps.map((rep) => {
      return (
        <div key={rep.id}>
          Name: {rep.name}
          <br />
          Date created: {rep.created_at}
          <br />
          Pushed at: {rep.pushed_at}
          <br />
          Repo size: {rep.size}KB
          <br />
          Visibility: {rep.visbility}
          <br />
          Repo Link: <a href={"https://github.com/" + rep.full_name}>here</a>
          <br />
          Language used: {rep.language}
        </div>
      );
    });
  }
  if (reps.length < 1) {
    content = <Navigate to="/overview" />;
  }
  return (
    <div className={classes.Repo}>
      <div
        className={[classes.Box, classes.Special].join(" ")}
        style={{
          backgroundColor: "white",
          color: "black",
          position: "relative",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Repo;
