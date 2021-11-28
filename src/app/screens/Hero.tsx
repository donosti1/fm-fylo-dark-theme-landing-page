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
      minHeight="90vh"
      role="header"
      spacing={0}
      width="100%"
    >
      <Header />
      <Text
        as="h1"
        color="white"
        fontSize={["4xl", "6xl"]}
        fontWeight="600"
        paddingTop={[36, 32]}
        paddingX={[6, 0]}
        textAlign={["center", "left"]}
      >
        All your files in one secure location, accessible anywhere.
      </Text>
      <Text
        color="white"
        fontSize="xl"
        fontWeight="400"
        paddingTop={2}
        paddingX={[6, 0]}
        textAlign={["center", "left"]}
      >
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers.
      </Text>
      <Stack direction="row" paddingTop={12} spacing={4}>
        <Button variant="solid">Get Started</Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
