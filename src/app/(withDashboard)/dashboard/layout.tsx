import DashboardBar from "@/components/shared/DashboardBar";
import Providers from "@/lib/Providers";
import Container from "@/utils/Container";
import DashboardContainer from "@/utils/DashboardContainer";
import ProtectedLayer from "@/utils/ProtectedLayer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <ProtectedLayer>
        <DashboardContainer>
          <DashboardBar />
        </DashboardContainer>
        <Container>{children}</Container>
      </ProtectedLayer>
    </Providers>
  );
};

export default DashboardLayout;
