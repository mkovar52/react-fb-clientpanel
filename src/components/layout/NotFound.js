import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1 className="display-4">404 - PAGE NOT FOUND :(</h1>
      <p className="lead">
        Sorry, this page does not exist. Go back to the{" "}
        <Link to="/">Dashboard</Link>
      </p>
    </div>
  );
};
