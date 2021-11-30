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
      <Stack alignItems="center" className="FeaturesCard" spacing={[4, 2]}>
        <Image alt={props.title} src={imageSrc} />
        <Text as="h2" fontSize={["xl", "2xl"]} fontWeight="700" letterSpacing="-1px">
          {props.title}
        </Text>
        <Text fontSize="md" lineHeight="1.8" maxWidth="md" textAlign="center">
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default FeaturesCard;
