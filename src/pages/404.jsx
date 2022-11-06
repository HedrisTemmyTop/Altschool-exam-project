import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const InvalidRoute = () => {
  return (
    <div>
      <Helmet>
        <title>Error</title>
      </Helmet>
      Opps!! the link input URL is invalid, Kindly go back to the{" "}
      <Link to="">Homepage</Link>
    </div>
  );
};

export default InvalidRoute;
