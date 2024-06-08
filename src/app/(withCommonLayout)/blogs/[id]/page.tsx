import { TBlogData } from "@/types/types";
import Container from "@/utils/Container";
import Image from "next/image";
import React from "react";

const SingleBlogPost = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${process.env.BLOGS_URL}/${params.id}`, {
    next: { revalidate: 60 },
  });
  const blog = await res.json();
  return (
    <div className=" h-full min-h-screen">
      <Container>
        <div className="flex justify-center items-center mb-16">
          <div className="border  rounded">
            <div className="w-full">
              <Image
                src={blog.blog_image}
                alt={blog.blog_name}
                width={400}
                height={400}
                className="w-1/2 h-96 object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-sky-600 tracking-wide">
                    {blog.blog_name}
                  </h2>
                </div>
                <div>
                  <p className="text-sm font-bold">{blog.time_published}</p>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.blog_description,
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.BLOGS_URL}`);
  const blogs = await res.json();

  return blogs.slice(0, 10).map((blog: TBlogData) => {
    id: blog._id;
  });
}

export default SingleBlogPost;
