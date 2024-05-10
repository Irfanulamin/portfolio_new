import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Container from "@/utils/Container";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <>{children}</>
      <Footer />
    </div>
  );
};

export default CommonLayout;
