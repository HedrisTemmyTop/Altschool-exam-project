import React, { useState, useEffect } from "react";
import Repos from "./repos";
import axiosInstance from "../container/axios-instance";
import classes from "../styles/overview.module.css";
import { Outlet } from "react-router-dom";
const Overview = (props) => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(props);
  useEffect(() => {
    axiosInstance
      .get(`users/${props.user}/repos`)
      .then((response) => {
        const result = response.data;

        if (result.length > 4) {
          setRepos(result.slice(0, 4));
        } else setRepos(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        setErrorMessage(error.message);
      });
  }, [props.user]);
  if (error) {
    throw new Error(errorMessage);
  }

  return (
    <div className={classes.Overview}>
      {props.children}
      <Outlet />
      <Repos repos={repos} />
      <p style={{ color: "white" }}>
        Check the repositories to view all the repos 108 contributions in the
        last 2 months
      </p>
    </div>
  );
};

export default Overview;
