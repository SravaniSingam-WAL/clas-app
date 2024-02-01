import React, { useState } from "react";
import { getName } from "./utils";

const Home = () => {
  const name = getName()

  return (
    <div>
    <h4 className="welcomeText">Welcome {name}! welcome to the Clas app.</h4>
      <p className="para">Home Page for Clas Application</p>
    </div>
  );
};

export default Home;

