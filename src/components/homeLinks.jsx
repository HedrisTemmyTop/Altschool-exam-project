import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/repositories.module.css";

const homeLinks = (props) => {
  return (
    <div className={classes.repos}>
      <div className={classes.Links}>
        <NavLink
          to="overview"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.Active].join(" ") : classes.Link
          }
        >
          <div> Overview</div>
        </NavLink>
        <NavLink
          to="repository"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.Active].join(" ") : classes.Link
          }
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <div>All Repositories</div>
            <span
              style={{
                backgroundColor: "rgba(0,0,0, .5)",
                padding: ".5rem",
                borderRadius: "50%",
                color: "white",
                marginLeft: "1rem",
              }}
            >
              {props.totalRepos}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default homeLinks;
