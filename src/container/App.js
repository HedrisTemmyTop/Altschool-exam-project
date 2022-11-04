import "../styles/App.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Overview from "../components/overview";
import Aside from "../components/aside";
import Home from "../pages/home";
import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Repositries from "../components/repositories";
import Terms from "../pages/terms&conditions";
import InvalidRoute from "../pages/404";
import Privacy from "../pages/privacy";
import About from "../pages/about";
import Loader from "../components/loader";
import Help from "../components/help";
import axiosInstance from "./axios-instance";
import Repo from "../components/repo";
import Error from "../components/Error";
import defaultImage from "../assets/img/default.png";
import ErrorBoundary from "../components/ErrorBoundary";
function App() {
  const [user, setUser] = useState("HedrisTemmyTop");
  const [githubData, setGithubData] = useState(null);
  const [reps, setReps] = useState(null);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [appError, setAppError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`users/${user}`)
      .then((response) => {
        setGithubData(response.data);
      })
      .catch((error) => {
        setAppError(error.message);
      });
    axiosInstance
      .get(`users/${user}/repos`)
      .then((response) => {
        setReps(response.data);
      })
      .catch((error) => {
        setShowError(true);
        setGithubData({
          followers: 0,
          following: 0,
          avatar_url: defaultImage,
          login: "unknown",
          public_repos: 0,
          bio: "",
        });
        setAppError(error.message);
      });
  }, [user]);
  const findUser = (e, user) => {
    e.preventDefault();
    axiosInstance
      .get(`users/${user}`)
      .then((response) => {
        setGithubData(response.data);
        setUser(user);
        setShowError(false);
      })
      .catch((err) => {
        setShowError(true);

        setError(err.response.data.message);
      });
  };
  if (appError !== null) {
    throw new Error(appError);
  }
  return (
    <div className="App">
      <Header
        name={githubData ? githubData.login : "unknown"}
        image={githubData ? githubData.avatar_url : defaultImage}
      />
      <main className="Layout">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                findUser={findUser}
                totalRepos={githubData ? githubData.public_repos : 0}
                image={githubData ? githubData.avatar_url : defaultImage}
              />
            }
          >
            <Route path="/" element={<Navigate replace to="/overview" />} />
            <Route
              path="overview"
              element={
                <ErrorBoundary>
                  <Overview user={user}>
                    {githubData ? <div>{githubData.bio}</div> : <Loader />}
                  </Overview>
                </ErrorBoundary>
              }
            >
              <Route path=":id" element={<Repo repos={reps ? reps : []} />} />
            </Route>
            <Route
              path="repository"
              element={
                <ErrorBoundary>
                  <Repositries user={user} />
                </ErrorBoundary>
              }
            >
              <Route path=":id" element={<Repo repos={reps ? reps : []} />} />
            </Route>
          </Route>
          <Route path="terms&conditions" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="help" element={<Help />} />

          <Route path="*" element={<InvalidRoute />} />
        </Routes>
        <Aside
          totalRepos={githubData ? githubData.public_repos : 0}
          followers={githubData ? githubData.followers : 0}
          following={githubData ? githubData.following : 0}
        />
      </main>
      {!showError ? null : <Error error={error} show={showError} />}
    </div>
  );
}

export default App;
