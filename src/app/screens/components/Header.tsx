import React, {useEffect, useState} from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const Header = () => {
  const menuItems = [
    {id: 0, label: "Features"},
    {id: 1, label: "Team"},
    {id: 2, label: "Sign In"}
  ];

  interface menuComponents {
    menuItems: {id: number; label: string}[];
  };

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
      <Stack
        alignItems="center"
        as="header"
        backgroundColor={scrollPosition > 64 ? "hsla(355, 100%, 74%,.90)" : "transparent"}
        className="Header"
        direction="row"
        justifyContent="space-between"
        
        paddingX={[6, 0]}
        position={["fixed", "relative"]}
        width={["100%", "container.xl"]}
        zIndex="100"
      >
        <Image alt="logo" height={[10, 10]} src="/assets/logo.svg" width={[24, 24]} />
        <Stack direction="row" spacing={[2,6]}>
          {menu}
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
