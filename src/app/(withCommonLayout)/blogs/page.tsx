import Blog from "@/components/ui/Blog";
import Container from "@/utils/Container";
import React from "react";

const BlogPage = () => {
  return (
    <Container>
      <div className="min-h-screen h-full">
        <Blog />
      </div>
    </Container>
  );
};

export default BlogPage;
