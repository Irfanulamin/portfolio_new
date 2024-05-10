import Aboutme from "@/components/ui/Aboutme";
import Expertise from "@/components/ui/Expertise";
import Container from "@/utils/Container";
import React from "react";

const AboutmePage = () => {
  return (
    <Container>
      <Aboutme />
      <Expertise />
    </Container>
  );
};

export default AboutmePage;
