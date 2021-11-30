import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";

import Hero from "./screens/Hero";
import Features from "./screens/Features";
import BottomCTA from "./screens/BottomCTA";
import Testimonials from "./screens/Testimonials";
import Register from "./screens/Register";
import Footer from "./screens/Footer";

const App: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);

  return (
    <>
      <Stack alignItems="center" position="relative" role="main" spacing={0}>
        <Hero />
        <Features />
        <BottomCTA />
        <Testimonials />
        <Register />
      </Stack>
      <Footer />
    </>
  );
};

export default App;
