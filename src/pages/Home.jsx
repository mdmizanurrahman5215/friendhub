import React, { Suspense } from "react";
import Hero from "../components/Hero";
import Timeline from "./Timeline";
import View from "../components/View";

const Home = () => {
  return (
    <div>
      <Hero />

      <View />

      {/* <Timeline/> */}
    </div>
  );
};

export default Home;
