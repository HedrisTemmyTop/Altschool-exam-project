import React from "react";
import HomeLinks from "../components/homeLinks";
import { Outlet } from "react-router-dom";
import classesHome from "../styles/home.module.css";
import classesMain from "../styles/main.module.css";
import classes from "../styles/searchUser.module.css";
import { useState } from "react";
const Home = (props) => {
  const [inputVal, setInputVal] = useState("");
  return (
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
  );
};

export default Home;

// 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
// https://replit.com/@HedrisTemmyTop/altschool-assignment-2#src/App.css
// https://altschool-assignment-2.hedristemmytop.repl.co
