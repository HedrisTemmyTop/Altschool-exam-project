import React from "react";
import { Link } from "react-router-dom";
const InvalidRoute = () => {
  return (
    <div>
      Opps!! the link input URL is invalid, Kindly go back to the{" "}
      <Link to="">Homepage</Link>
    </div>
  );
};

export default InvalidRoute;
