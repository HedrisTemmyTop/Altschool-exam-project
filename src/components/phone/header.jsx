import React from "react";
import classes from "../../styles/phone.module.css";
import { Link } from "react-router-dom";
const Header = ({ style }) => {
  return (
    <div
      className={classes.Header}
      style={
        style
          ? {
              transition: "all .3s",
              height: "auto",
              visibility: "visible",
              opacity: "1",
            }
          : null
      }
    >
      <div>
        <ul className={classes.HeaderList}>
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="">
              Home
            </Link>{" "}
          </li>
         
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="about">
              About
            </Link>{" "}
          </li>
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="help">
              Help
            </Link>{" "}
          </li>
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="terms&conditions">
              Terms & Conditions
            </Link>{" "}
          </li>

          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="privacy">
              Privacy Policy
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
