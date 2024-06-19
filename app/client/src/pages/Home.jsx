import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <Roadmap />
      <Contact />
    </div>
  );
}

export default Home;
