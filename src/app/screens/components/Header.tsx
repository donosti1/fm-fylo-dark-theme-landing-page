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
  const productMenuItems = [
    {id: 0, label: "Overview"},
    {id: 1, label: "Pricing"},
    {id: 2, label: "Marketplace"},
    {id: 3, label: "Features"},
    {id: 4, label: "Integrations"},
  ];
  const companyMenuItems = [
    {id: 0, label: "About"},
    {id: 1, label: "Team"},
    {id: 2, label: "Blog"},
    {id: 3, label: "Careers"},
  ];
  const connectMenuItems = [
    {id: 0, label: " Contact"},
    {id: 1, label: "Newsletter"},
    {id: 2, label: "LinkedIn"},
  ];

  interface menuComponents {
    menuLabel: string;
    menuItems: {id: number; label: string}[];
  }
  const CustomMenuItem = (props: menuComponents) => {
    const productMenuList = props.menuItems.map((mi) => (
      <MenuItem key={mi.id} _focus={{fontWeight: "900"}} fontFamily="Ubuntu">
        {mi.label}
      </MenuItem>
    ));

    return (
      <Menu>
        {({isOpen}) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={
                <ChevronDownIcon
                  display="block"
                  transform={isOpen ? "rotate(-180deg)" : "rotate(0deg)"}
                  transition="linear .25s"
                />
              }
              variant="unstyled"
            >
              {props.menuLabel}
            </MenuButton>
            <MenuList lineHeight="1.1" minWidth={44} paddingX={4} paddingY={6}>
              {productMenuList}
            </MenuList>
          </>
        )}
      </Menu>
    );
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

  return (
    <>
      <Stack
        alignItems="center"
        as="header"
        backgroundColor={scrollPosition > 64 ? "hsla(355, 100%, 74%,.90)" : "transparent"}
        className="Header"
        direction="row"
        justifyContent="space-between"
        paddingTop={[6, 16]}
        paddingX={[6, 0]}
        position={["fixed", "relative"]}
        width={["100%", "container.lg"]}
        zIndex="100"
      >
        <Image alt="logo" height={[10, 10]} src="/assets/logo.svg" width={[24, 24]} />
        {/* <Stack
          direction="row"
          display={["none", "flex"]}
          justifyContent="space-between"
          paddingLeft={16}
          width="100%"
        >
          <Stack alignItems="center" direction="row">
            <Stack alignItems="center" direction="row">
              <CustomMenuItem menuItems={productMenuItems} menuLabel="Product" />
              <CustomMenuItem menuItems={companyMenuItems} menuLabel="Company" />
              <CustomMenuItem menuItems={connectMenuItems} menuLabel="Connect" />
            </Stack>
          </Stack>
          <Stack direction="row">
            <Button variant="link">Login</Button>
            <Button variant="solid">Sign Up</Button>
          </Stack>
        </Stack> */}
      </Stack>
    </>
  );
};

export default Header;
