import React, { useState } from "react";
import { getBrandName } from "./utils";

const Home = () => {
  const [brandName, setBrandName]=useState(getBrandName())
 
  return (
    <div>
      <h2>Home Page for Clas Application</h2>
      <h4>BrandName : {brandName}</h4>
    </div>
  );
};

export default Home;

