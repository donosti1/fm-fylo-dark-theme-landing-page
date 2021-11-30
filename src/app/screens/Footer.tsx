import React from "react";
import {Button, Container, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

interface menuComponents {
  menuLabel: string;
  menuItems: {id: number; label: string}[];
}
const productMenuItems = [
  {id: 0, label: "About Us"},
  {id: 1, label: "Jobs"},
  {id: 2, label: "Press"},
  {id: 3, label: "Blog"},
];
const companyMenuItems = [
  {id: 0, label: "Contact Us"},
  {id: 1, label: "Terms"},
  {id: 2, label: "Privacy"},
];

const CustomMenuItem = (props: menuComponents) => {
  const productMenuList = props.menuItems.map((mi) => (
    <Button key={mi.id} fontSize="sm" variant="footer-link">
      {mi.label}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[0, 4]} width={24}>
      <Button display={["none", "inline-flex"]} fontSize="sm" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems={["flex-start", "flex-start"]} spacing={0}>
        {productMenuList}
      </Stack>
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookF},
    {id: 1, icon: FaTwitter},
    {id: 2, icon: FaInstagram},
  ];
  const icons = item.map((it) => (
    <Icon
      key={it.id}
      _hover={{
        color: "primary.300",
        cursor: "pointer",
        borderColor: "primary.300",
      }}
      as={it.icon}
      borderRadius="50%"
      borderWidth={1}
      height={8}
      padding={2}
      width={8}
    />
  ));

  return <>{icons}</>;
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.900"
      borderTopRightRadius={[0, 92]}
      paddingBottom={[16, 16]}
      paddingTop={[48, 64]}
    >
      <Container maxWidth="container.xl" spacing={[12, 44]}>
        <Stack spacing={8}>
          <Image alt="logo" height={[20, 16]} src="assets/logo.svg" width={[40, 32]} />
          <Stack direction={["column", "row"]} spacing={[16, 2]}>
            <Stack direction={["column", "row"]} flex={3} spacing={8}>
              <Stack direction="row" flex={2} spacing={8}>
                <Image alt="location" height={5} src="/assets/icon-location.svg" width={4} />
                <Text width={["100%", "76%"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </Text>
              </Stack>
              <Stack flex={1} spacing={4}>
                <Stack direction="row" spacing={6}>
                  <Image alt="location" height={5} src="/assets/icon-phone.svg" width={5} />
                  <Text>+1-543-123-4567</Text>
                </Stack>
                <Stack direction="row" spacing={6}>
                  <Image alt="location" height={5} src="/assets/icon-email.svg" width={5} />
                  <Text>example@fylo.com</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={["column", "row"]} flex={2} justifyContent="center" spacing={8}>
              <CustomMenuItem menuItems={productMenuItems} menuLabel="Product" />
              <CustomMenuItem menuItems={companyMenuItems} menuLabel="Company" />
            </Stack>
            <Stack direction="row" justifyContent={["center", "inherit"]}>
              <SocialNetworks />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
