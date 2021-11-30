import React from "react";
import { Button, Container, Icon, Image, Stack, Text } from "@chakra-ui/react";

import Logo from "/assets/logo.svg";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const productMenuItems = [
  { id: 0, label: "About Us" },
  { id: 1, label: "Jobs" },
  { id: 2, label: "Press" },
  { id: 3, label: "Blog" }
];
const companyMenuItems = [
  { id: 0, label: "Contact Us" },
  { id: 1, label: "Terms" },
  { id: 2, label: "Privacy" }
];
interface menuComponents {
  menuLabel: string;
  menuItems: { id: number; label: string }[];
}
const CustomMenuItem = (props: menuComponents) => {
  const productMenuList = props.menuItems.map(mi => (
    <Button key={mi.id} color="white" fontSize="sm" variant="footer-link">
      {mi.label}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[0, 4]} width={24}>
      <Button fontSize="sm" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems={["center", "flex-start"]} spacing={0}>
        {productMenuList}
      </Stack>
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    { id: 0, icon: FaFacebookF },
    { id: 1, icon: FaTwitter },
    { id: 2, icon: FaInstagram }
  ];
  const icons = item.map(it => (
    <Icon
      key={it.id}
      as={it.icon}
      color="white"
      borderWidth={1}
      padding={2}
      height={8}
      width={8}
      borderRadius="50%"
      _hover={{
        color: "primary.300",
        cursor: "pointer",
        borderColor: "primary.300"
      }}
    />
  ));
  return <>{icons}</>;
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.900"
      borderTopRightRadius={92}
    >
      <Container maxWidth="container.xl" paddingY={[16, 48]} spacing={[12, 44]}>
        <Stack spacing={8}>
          <Image
            alt="logo"
            height={[16, 16]}
            src="assets/logo.svg"
            width={[32, 32]}
          />
          <Stack
            direction={["column", "row"]}
            spacing={[8, 36]}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={8}>
              <Image
                src="/assets/icon-location.svg"
                alt="location"
                width={4}
                height={5}
              />
              <Text width={["100%", "35%"]} color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>
              <Stack spacing={4}>
                <Stack direction="row" spacing={6}>
                  <Image
                    src="/assets/icon-email.svg"
                    alt="location"
                    width={5}
                    height={5}
                  />
                  <Text color="white">+1-543-123-4567</Text>
                </Stack>
                <Stack direction="row" spacing={6}>
                  <Image
                    src="/assets/icon-phone.svg"
                    alt="location"
                    width={5}
                    height={5}
                  />
                  <Text color="white">+1-543-123-4567</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={8}>
              <CustomMenuItem
                menuItems={productMenuItems}
                menuLabel="Product"
              />
              <CustomMenuItem
                menuItems={companyMenuItems}
                menuLabel="Company"
              />
            </Stack>
            <Stack direction="row">
              <SocialNetworks />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
