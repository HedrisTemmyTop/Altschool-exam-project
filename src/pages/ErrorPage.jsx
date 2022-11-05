import axios from "axios";
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
        });
      });
  }, []);
  if (error.error) {
    throw new Error(error.errorMessage);
  }
  let content = <Loader />;

  if (state) {
    content = (
      <div>
        if you are seeing this, call my number 08161126466 because this i am
        intentionally testing my error boundary, this page must not render
      </div>
    );
  }
  return content;
};

export default ErrorPage;
