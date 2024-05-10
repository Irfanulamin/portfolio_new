import DashboardBar from "@/components/shared/DashboardBar";
import Container from "@/utils/Container";
import DashboardContainer from "@/utils/DashboardContainer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardContainer>
        <DashboardBar />
      </DashboardContainer>
      <Container>{children}</Container>
    </div>
  );
};

export default DashboardLayout;
