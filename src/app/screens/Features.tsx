import React from "react";
import {SimpleGrid, Container} from "@chakra-ui/react";

import FeaturesCard from "./components/FeaturesCard";

const featuresItems = [
  {
    id: 0,
    picture: "icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    feature:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 1,
    picture: "icon-security.svg",
    title: " Security you can trust",
    feature:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 2,
    picture: "icon-collaboration.svg",
    title: "Real-time collaboration",
    feature:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    id: 3,
    picture: "icon-any-file.svg",
    title: "Store any type of file",
    feature:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const features = featuresItems.map((fe) => <FeaturesCard key={fe.id} {...fe} />);
const Features = () => {
  return (
    <>
      <Container className="Features" maxWidth="container.xl" paddingY={16}>
        <SimpleGrid columns={[1, 2]} rowGap={16}>
          {features}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Features;
