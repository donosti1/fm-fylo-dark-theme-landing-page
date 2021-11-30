import React from "react";
import {Button, Image, Stack, Text} from "@chakra-ui/react";

import Header from "./components/Header";
const Hero = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      backgroundImage={[
        "url('/assets/bg-curvy-mobile.svg')",
        "url('/assets/bg-curvy-desktop.svg')",
      ]}
      backgroundPosition={["center 65%", "center bottom"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["contain", "contain"]}
      minHeight="100vh"
      paddingBottom={[0, 32]}
      paddingTop={[0, 16]}
      role="header"
      spacing={0}
      width="100%"
    >
      <Header />
      <Stack
        alignItems="center"
        paddingTop={[24, 16]}
        spacing={[4, 12]}
        width={["100%", "container.md"]}
      >
        <Image alt="hero-image" paddingBottom={[4, 8]} src="/assets/illustration-intro.png" />
        <Text
          as="h1"
          fontSize={["xl", "3xl"]}
          fontWeight="700"
          paddingX={[4, 0]}
          textAlign="center"
        >
          All your files in one secure location, accessible anywhere.
        </Text>
        <Stack background={["secondary.700", "transparent"]} width="100%">
          <Text
            fontSize={["sm", "xl"]}
            fontWeight="400"
            paddingBottom={12}
            paddingTop={[4, 6]}
            paddingX={[4, 0]}
            textAlign={["center", "left"]}
          >
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </Text>
          <Button alignSelf="center" maxWidth="50%" variant="solid">
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
