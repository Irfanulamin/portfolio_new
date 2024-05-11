import DashboardBar from "@/components/shared/DashboardBar";
import Providers from "@/lib/Providers";
import Container from "@/utils/Container";
import DashboardContainer from "@/utils/DashboardContainer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <DashboardContainer>
        <DashboardBar />
      </DashboardContainer>
      <Container>{children}</Container>
    </Providers>
  );
};

export default DashboardLayout;
