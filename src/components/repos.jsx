import React from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import classes from "../styles/overview.module.css";
const Repos = ({ repos }) => {
  let content = <Loader />;
  if (repos) {
    content = repos.map((repo) => {
      return (
        <div className={classes.Box} key={repo.id}>
          <div className={classes.BoxLink}>
            <div className={classes.BoxContent}>
              <div className={classes.Link}>{repo.name}</div>
              <div className={classes.Type}>{repo.visibility}</div>
            </div>
            <div className={classes.AboutRepo}>
              <a
                href={"https://github.com/" + repo.full_name}
                className={classes.Cap}
                target="_blank"
              >
                <button className={[classes.Button, classes.Green].join(" ")}>
                  Live Link
                </button>
              </a>
              <Link to={"" + repo.id} className={classes.RepoDetails}>
                <button className={[classes.Button, classes.Blue].join(" ")}>
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return <div>{content}</div>;
};

export default Repos;
