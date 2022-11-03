import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/header.module.css";
import Headers from "./phone/header";

const Header = (props) => {
  const [style, setStyle] = React.useState(false);
  return (
    <header className={classes.Header}>
      <nav className={classes.Nav}>
        <ul className={classes.HeaderList}>
          <li
            className={classes.Menu}
            onClick={() => {
              setStyle(!style);
            }}
          >
            <ion-icon name="menu"></ion-icon>
          </li>
          <li className={[classes.NavItem, classes.Logo].join(" ")}>
            TemmyLIT
          </li>
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="">
              Home
            </Link>
          </li>

          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="about">
              About
            </Link>
          </li>
          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="help">
              Help
            </Link>
          </li>

          <li className={[classes.NavItem].join(" ")}>
            <Link className={classes.Link} to="privacy">
              Privacy Policy
            </Link>
          </li>
          <li className={[classes.NavItem, classes.Search].join(" ")}>
            <form className={classes.Form}>
              <input type="search" placeholder="Type here to search ..." />
            </form>
          </li>
          <li className={[classes.NavItem, classes.NavAbout].join(" ")}>
            <div className={classes.Image}>
              <img src={props.image} alt="user Image" />
            </div>
            <a
              target="_blank"
              href={"https://github.com/" + props.name}
              style={{ color: "var(--text-color)" }}
            >
              {props.name}
            </a>
          </li>
        </ul>
      </nav>
      <Headers style={style} />
    </header>
  );
};

export default Header;
// name={githubData ? githubData.login : "no name"}
// img={
//   githubData
//     ? githubData.avatar_url
//     : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fblank-avatar&psig=AOvVaw1JDk5issbeA7SvpuVcMYPA&ust=1667358731375000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjSsbeBjPsCFQAAAAAdAAAAABAE"
// }
