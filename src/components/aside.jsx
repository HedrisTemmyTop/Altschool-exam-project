import React from "react";

import classes from "../styles/aside.module.css";
const Aside = (props) => {
  return (
    <aside className={classes.Aside}>
      <div className={classes.Stats}>
        <h2 style={{ color: "#fff" }}>Statistics</h2>
        <div className={classes.Box}>
          <ion-icon name="contacts"></ion-icon>
          <div>
            <div className={classes.Caption}>Followers</div>
            <div>{props.followers}</div>
          </div>
        </div>
        <div className={classes.Box}>
          <ion-icon name="contact"></ion-icon>
          <div>
            <div className={classes.Caption}>Following</div>
            <div>{props.following}</div>
          </div>
        </div>

        <div className={classes.Box}>
          <ion-icon name="folder"></ion-icon>
          <div>
            <div className={classes.Caption}>Repositories</div>
            <div>{props.totalRepos}</div>
          </div>
        </div>
      </div>{" "}
    </aside>
  );
};

export default Aside;
