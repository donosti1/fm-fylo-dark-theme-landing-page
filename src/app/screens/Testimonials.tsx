import React, {FunctionComponent} from "react";
import {Container, SimpleGrid, Stack, Text, Avatar} from "@chakra-ui/react";

interface TestimonialsProps {
  id: number;
  picture: string;
  name: string;
}
const TestimonialCard = (props: TestimonialsProps) => {
  const avatarPic = `/assets/${props.picture}`;

  return (
    <Stack backgroundColor="secondary.400" paddingX={[4, 12]} paddingY={[6, 10]} spacing={[4, 8]}>
      <Text fontSize={["xs", "inherit"]} lineHeight={["1.8", "inherit"]}>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch
        our team has become a well-oiled collaboration machine.
      </Text>
      <Stack direction="row" spacing={4}>
        <Avatar name={props.name} size="md" src={avatarPic} />
        <Stack justifyContent="space-around" spacing={0}>
          <Text fontSize={["xs", "inherit"]} fontWeight="700">
            {props.name}
          </Text>
          <Text fontSize={["xs", "inherit"]}>Founder & CEO, Huddle</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
const testimonialsItems = [
  {
    id: 0,
    picture: "profile-1.jpg",
    name: "Satish Patel",
  },
  {
    id: 1,
    picture: "profile-2.jpg",
    name: "Bruce McKenzie",
  },
  {
    id: 2,
    picture: "profile-3.jpg",
    name: "Iva Boyd",
  },
];

const allTestimonials = testimonialsItems.map((fe) => <TestimonialCard key={fe.id} {...fe} />);

const Testimonials: FunctionComponent = () => {
  return (
    <Container
      background="url('/assets/bg-quotes.png')"
      backgroundPosition={["6% 6%", "0% 24%", "0% 26%"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["12%", "4%"]}
      className="Testimonials"
      maxWidth="container.xl"
      paddingTop={[16, 32]}
      role="banner"
    >
      <SimpleGrid columns={[1, 3]} gap={[6, 16]}>
        {allTestimonials}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
