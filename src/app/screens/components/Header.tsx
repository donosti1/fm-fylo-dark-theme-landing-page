import React, {useEffect, useState} from "react";
import {Button, Container, Image, Stack} from "@chakra-ui/react";

const Header = () => {
  const menuItems = [
    {id: 0, label: "Features"},
    {id: 1, label: "Team"},
    {id: 2, label: "Sign In"},
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menu = menuItems.map((mi) => (
    <Button key={mi.id} variant="header-link">
      {mi.label}
    </Button>
  ));

  return (
    <>
      <Container
        backgroundColor={scrollPosition > 64 ? "black" : "transparent"}
        maxWidth={["container.sm", "container.xl"]}
        paddingTop={[scrollPosition > 64 ? 0 : 6, 0]}
        position={["fixed", "relative"]}
        zIndex="100"
      >
        <Stack
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          justifyContent="space-between"
        >
          <Image alt="logo" height={[8, 10]} src="/assets/logo.svg" width={[20, 24]} />
          <Stack direction="row" spacing={[2, 6]}>
            {menu}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Header;
