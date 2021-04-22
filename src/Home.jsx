import React from "react";
import web from "./images/—Pngtree—cartoon employee discussing work_4538195.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgsrc={web} visit='/service' btnname="Get Started" />
    </>
  );
};

export default Home;
