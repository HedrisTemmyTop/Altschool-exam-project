import React, { useState, useEffect } from "react";
import Repos from "./repos";
import axiosInstance from "../container/axios-instance";
import classes from "../styles/repositories.module.css";
import { Outlet } from "react-router-dom";
const Repositries = (props) => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    axiosInstance
      .get(`users/${props.user}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response.data.message);
      });
  }, [props.user]);
  if (error) {
    throw new Error(errorMessage);
  }
  return (
    <div className={classes.Repositories}>
      <h2
        style={{
          color: "#fff",
        }}
      >
        Here are your repositories sorted in order of latest
      </h2>
      <Outlet />
      <Repos repos={repos} />
    </div>
  );
};

export default Repositries;
