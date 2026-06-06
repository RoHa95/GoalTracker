import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div
      className="
 min-h-screen
 flex
 flex-col
 justify-center
 items-center
 "
    >
      <h1>404</h1>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default PageNotFound;
