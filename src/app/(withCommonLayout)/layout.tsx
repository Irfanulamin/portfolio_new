import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";
import { store } from "@/redux/store";
import Container from "@/utils/Container";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Container>
        <Navbar />
      </Container>
      <>{children}</>
      <Footer />
    </Providers>
  );
};

export default CommonLayout;
