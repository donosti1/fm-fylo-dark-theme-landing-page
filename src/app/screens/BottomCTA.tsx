import React, { FunctionComponent, useState } from "react";
import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Icon
} from "@chakra-ui/react";

import IconArrow from "./components/IconArrow";
interface BottomCTAProps {}

const BottomCTA: FunctionComponent<BottomCTAProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <Container maxWidth="container.xl" className="Features" paddingY={16}>
      <SimpleGrid columns={[1, 2]} gap={16}>
        <Stack>
          <Image
            alt="hero-image"
            src="/assets/illustration-stay-productive.png"
          />
        </Stack>
        <Stack alignItems={["center", "flex-start"]} justifyContent="center">
          <Text
            as="h1"
            color="white"
            fontSize={["4xl", "3xl"]}
            width={["100%", "50%"]}
            fontWeight="700"
            textAlign="left"
          >
            Stay productive, wherever you are
          </Text>
          <Text color="white" fontSize="xl" fontWeight="400" paddingTop={6}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Text>
          <Text color="white" fontSize="xl" fontWeight="400" paddingBottom={12}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.{" "}
          </Text>
          <Button
            fontSize="xl"
            color="primary.300"
            backgroundColor="transparent"
            borderRadius={0}
            borderBottomWidth={1}
            borderBottomColor="primary.300"
            borderBottom="solid"
            _hover={{ color: "white", backgroundColor: "transparent" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            spacing={4}
            px={0}
          >
            See how Fylo works
            <Stack paddingLeft={4} height={6} justifyContent="center">
              <IconArrow fill={hover ? "white" : "primary.300"} />
            </Stack>
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default BottomCTA;
