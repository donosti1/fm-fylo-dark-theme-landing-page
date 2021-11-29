import React from "react";
import {Button, Image, Stack, Text} from "@chakra-ui/react";

/* import Logo from "/assets/logo.svg"; */

import Header from "./components/Header";
import Buttons from "./components/Buttons";
const Hero = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      backgroundImage={[
        "url('/assets/bg-curvy-mobile.svg')",
        "url('/assets/bg-curvy-desktop.svg')",
      ]}
      backgroundPosition={["center center", "center bottom"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["350%", "contain"]}
      minHeight="100vh"
      role="header"
      spacing={0}
      paddingTop={[6, 16]}
      paddingBottom={[6, 32]}
      width="100%"
    >
      <Header />
      <Stack
      width="40%" alignItems="center"
      paddingTop={[8, 16]}
      spacing={[4, 12]}>
        <Image alt="hero-image" src="/assets/illustration-intro.png"
          paddingBottom={[4, 8]}
        
        />
        <Text
          as="h1"
          color="white"
          fontSize={["4xl", "3xl"]}
          fontWeight="700"
          textAlign="center"
        >
          All your files in one secure location, accessible anywhere.
        </Text>
        <Text
          color="white"
          fontSize="xl"
          fontWeight="400"
          paddingTop={6}
          paddingBottom={12}
          paddingX={[0, 0]}
          textAlign={["center", "left"]}
        >
          Fylo stores all your most important files in one secure location. Access them wherever you
          need, share and collaborate with friends family, and co-workers.
        </Text>
        <Button variant="solid" >Get Started</Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
