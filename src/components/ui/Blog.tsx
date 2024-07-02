/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TBlogData } from "@/types/types";
import Container from "@/utils/Container";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiBlogger } from "react-icons/si";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";

const Blog = async () => {
  const res = await fetch(process.env.BLOGS_URL as string, {
    cache: "no-store",
  });
  const blogPosts = await res.json();
  return (
    <Container>
      <div className="flex justify-center items-center mb-16">
        <div>
          <p className=" text-3xl  lg:text-5xl tracking-wide  text-black  font-bold ">
            Blogs
          </p>
        </div>
        <div>
          <FaPencilAlt className="w-12 h-12  text-black" />
        </div>
      </div>

      <div className="flex justify-center items-center mb-16">
        <Carousel className=" max-w-full  ">
          <CarouselContent>
            {blogPosts &&
              blogPosts.map((blog: TBlogData, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="border rounded h-96">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center py-6 h-full">
                        <div className="w-full flex-grow">
                          <Image
                            src={blog.blog_image}
                            alt={blog.blog_name}
                            width={400}
                            height={400}
                            className="w-full h-48 object-cover"
                          />
                          <div className="flex justify-between items-center mt-4">
                            <div>
                              <h2 className="text-lg font-bold text-sky-600 tracking-wide">
                                {blog.blog_name}
                              </h2>
                            </div>
                            <div>
                              <p className="text-sm font-bold">
                                {blog.time_published}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-x-1">
                            <div
                              className="mt-2"
                              dangerouslySetInnerHTML={{
                                __html: truncateText(blog.blog_description, 80),
                              }}
                            />
                            <div>
                              <Link href={`/blogs/${blog?._id}`}>
                                <Button variant="blog">See More.</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default Blog;
