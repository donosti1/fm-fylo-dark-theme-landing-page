import React, {FunctionComponent, useState} from "react";
import {Button, Container, Image, SimpleGrid, Stack, Text, Icon} from "@chakra-ui/react";

import IconArrow from "./components/IconArrow";
interface BottomCTAProps {}

const BottomCTA: FunctionComponent<BottomCTAProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <Container className="Features" maxWidth="container.xl" paddingY={16}>
      <SimpleGrid columns={[1, 2]} gap={16}>
        <Stack>
          <Image alt="hero-image" src="/assets/illustration-stay-productive.png" />
        </Stack>
        <Stack alignItems={["center", "flex-start"]} justifyContent="center">
          <Text
            as="h1"
            fontSize={["md", "3xl"]}
            fontWeight="700"
            textAlign="left"
            width={["100%", "50%"]}
          >
            Stay productive, wherever you are
          </Text>
          <Text fontSize={["sm", "xl"]} fontWeight="400" paddingTop={6}>
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs.
          </Text>
          <Text fontSize={["sm", "xl"]} fontWeight="400" paddingBottom={12}>
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required.{" "}
          </Text>
          <Button
            _hover={{
              color: "white",
              backgroundColor: "transparent",
              borderBottomColor: "white",
            }}
            alignSelf="flex-start"
            backgroundColor="transparent"
            borderBottom="solid"
            borderBottomColor="primary.300"
            borderBottomWidth={1}
            borderRadius={0}
            color="primary.300"
            fontSize={["sm", "xl"]}
            px={0}
            spacing={4}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            See how Fylo works
            <Stack height={6} justifyContent="center" paddingLeft={4}>
              <IconArrow fill={hover ? "white" : "primary.300"} />
            </Stack>
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default BottomCTA;
