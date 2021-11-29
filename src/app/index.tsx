import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";

/* 
  SCREENS:
  HERO SECTION-
  CTA (Icon, title, description, button-optativo-)-
  FEATURES-
  BOTTOM CALL-
  TESTIMONIALS-
  REGISTER-
  FOOTER-

  COMPONENTS:
  HEADER
  CTA TEXT
  FEATURES CARD
  BOTTOM CALL TEXT
  TESTIMONIAL CARD
  REGISTER FORM
  FOOTER LINKS
  SOCIAL LINKS

  FOOTER
  VALIDATIONS:
  FORM
  */

import Hero from "./screens/Hero";
import CTA from "./screens/CTA";
import Features from "./screens/Features";
import BottomCTA from "./screens/BottomCTA";
import Footer from "./screens/Footer";

const App: React.FC = () => {
  /* React Icon as item prop (Not used in current project) 
  const item = [{id: 0, icon: BsAlarm}];
  const icons = item.map((it) => <Icon key={it.id} as={it.icon} color="white" />); 
  {icons}
  */

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);

  return (
    <>
      <Stack alignItems="center" role="main" spacing={0}>
        <Hero />
        <Features />
        <BottomCTA />
        {/* <CTA />
        <Features /> */}
      </Stack>
      <Footer />
    </>
  );
};

export default App;
/* 
  
    Stay productive, wherever you are Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. See how Fylo works Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Satish Patel Founder & CEO, Huddle Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Bruce McKenzie Founder & CEO, Huddle Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Iva Boyd Founder & CEO, Huddle Get early access today It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you. Get Started For Free Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua +1-543-123-4567 example@fylo.com 
 */
