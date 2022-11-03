import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={classes.Aside}>
      <div className={classes.Head}>Main Tools</div>
      <nav className={classes.Nav}>
        <NavLink
          to=""
          className={({ isActive }) =>
            !isActive ? classes.Link : [classes.Link, classes.active].join(" ")
          }
        >
          <div>Homepage</div>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.active].join(" ") : classes.Link
          }
        >
          <div>About</div>
        </NavLink>
        <NavLink
          to="privacy"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.active].join(" ") : classes.Link
          }
        >
          <div>Privacy & Policy</div>
        </NavLink>

        <NavLink
          to="help"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.active].join(" ") : classes.Link
          }
        >
          <div>Help</div>
        </NavLink>
        <NavLink
          to="terms&conditions"
          className={({ isActive }) =>
            isActive ? [classes.Link, classes.active].join(" ") : classes.Link
          }
        >
          <div>Terms & Condition</div>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
