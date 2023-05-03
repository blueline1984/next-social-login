import React from "react";

const MainAuth = () => {
  return <h1>This Page is only accessible with authentication</h1>;
};

export default MainAuth;

MainAuth.auth = true;
