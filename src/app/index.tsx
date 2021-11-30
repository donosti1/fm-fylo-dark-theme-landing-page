import React, { useEffect } from "react";
import { Stack } from "@chakra-ui/react";

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
import Testimonials from "./screens/Testimonials";

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
        <Testimonials />
        {/* <CTA />
        <Features /> */}
      </Stack>
      <Footer />
    </>
  );
};

export default App;
/* 
  
     Get early access today It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you. Get Started For Free  
 */
