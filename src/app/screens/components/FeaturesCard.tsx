import React from "react";
import {Image, Stack, Text} from "@chakra-ui/react";
interface Feature {
  id: number;
  picture: string;
  title: string;
  feature: string;
}
const FeaturesCard = (props: Feature) => {
  const imageSrc = `/assets/${props.picture}`;
  return (
    <>
      <Stack alignItems="center" className="FeaturesCard" spacing={2}>
      <Image alt={props.title} src={imageSrc} />
        <Text
          as="h2"
          color="white"
          fontSize="2xl"
          fontWeight="700"
          letterSpacing="-1px"
          paddingBottom={[4, 0]}
        >
          {props.title}
        </Text>
        <Text
          color="white"
          fontSize="md"
          lineHeight="1.8"
          maxWidth="md"
          textAlign="center"
        >
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default FeaturesCard;
