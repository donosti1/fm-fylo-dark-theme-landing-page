import React, { FunctionComponent } from "react";
import { Container, SimpleGrid, Stack, Text, Avatar } from "@chakra-ui/react";
import FeaturesCard from "./components/FeaturesCard";

interface TestimonialsProps {
  id: number;
  picture: string;
  name: string;
}
const TestimonialCard = (props: TestimonialsProps) => {
  const avatarPic = `/assets/${props.picture}`;
  return (
    <Stack
      paddingY={10}
      paddingX={12}
      backgroundColor="secondary.400"
      spacing={8}
    >
      <Text color="white">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </Text>
      <Stack direction="row" spacing={4}>
        <Avatar src={avatarPic} size="md" name={props.name} alt={props.name} />
        <Stack spacing={0} justifyContent="space-around">
          <Text color="white" fontWeight="700">
            {props.name}
          </Text>
          <Text color="white">Founder & CEO, Huddle</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
const testimonialsItems = [
  {
    id: 0,
    picture: "profile-1.jpg",
    name: "Satish Patel"
  },
  {
    id: 1,
    picture: "profile-2.jpg",
    name: "Bruce McKenzie"
  },
  {
    id: 2,
    picture: "profile-3.jpg",
    name: "Iva Boyd"
  }
];

const features = testimonialsItems.map(fe => (
  <TestimonialCard key={fe.id} {...fe} />
));

const Testimonials: FunctionComponent = () => {
  return (
    <Container
      maxWidth="container.xl"
      className="Testimonials"
      paddingTop={32}
      paddingBottom={96}
      background="url('/assets/bg-quotes.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="0% 12%"
    >
      <SimpleGrid columns={[1, 3]} gap={16}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
