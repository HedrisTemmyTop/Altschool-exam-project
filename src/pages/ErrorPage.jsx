import axios from "axios";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
const ErrorPage = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState({
    error: false,
    errorMessage: null,
  });
  useEffect(() => {
    axios
      .get("https://api.githubaalisko.comsnx/")
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        setError({
          error: true,
          errorMessage: error.message,
          code: error.code,
        });
      });
  }, []);
  if (error.error) {
    throw new Error(`${error.errorMessage}(${error.code})`);
  }
  let content = <Loader />;

  if (state) {
    content = (
      <React.Fragment>
        <Helmet>
          <title>Error</title>
        </Helmet>
        <div>
          if you are seeing this, call my number 08161126466 because this i am
          intentionally testing my error boundary, this page must not render
        </div>
      </React.Fragment>
    );
  }
  return (
    <div
      style={{
        padding: "4rem",
        flexBasis: "50%",
        boxSizing: "border-box",
      }}
    >
      {content}
    </div>
  );
};

export default ErrorPage;
