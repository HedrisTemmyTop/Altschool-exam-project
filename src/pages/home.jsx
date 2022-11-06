import React from "react";
import HomeLinks from "../components/homeLinks";
import { Outlet } from "react-router-dom";
import classesHome from "../styles/home.module.css";
import classesMain from "../styles/main.module.css";
import classes from "../styles/searchUser.module.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
const Home = (props) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div style={{ display: "block" }} className={classesHome.Home}>
        <div className={classesMain.main}>
          <form
            className={classes.Search}
            onSubmit={(e) => {
              props.findUser(e, document.getElementById("search").value);
            }}
          >
            <img src={props.image} className={classes.UserImage} alt="photo" />
            <input
              type="search"
              id="search"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              placeholder="Search a profile e.g (HedrisTemmyTop)"
            />
            <button type="submit" className={classes.SearchBtn}>
              Search
            </button>
          </form>
        </div>
        <HomeLinks totalRepos={props.totalRepos} />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Home;
