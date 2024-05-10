import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "@/utils/Container";
import { blogPosts } from "@/utils/data/blogData";
import Image from "next/image";
import { SiBlogger } from "react-icons/si";

import { VscNote } from "react-icons/vsc";

const Blog = () => {
  return (
    <Container>
      <div className="my-2 md:my-6 lg:my-12 bg-black py-4  flex gap-2 justify-center items-center rounded ">
        <div>
          <p className=" text-3xl md:text-5xl lg:text-5xl inline-block text-white  font-semibold ">
            Blog Section
          </p>
        </div>
        <div>
          <SiBlogger className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="flex justify-center items-center mb-16">
        <Carousel className=" max-w-full  ">
          <CarouselContent>
            {blogPosts.map((blog, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="border  rounded">
                  <Card>
                    <CardContent className="flex  items-center justify-center py-6">
                      <div className="w-full">
                        <Image
                          src={blog.blog_image}
                          alt={blog.blog_name}
                          width={400}
                          height={400}
                          className="w-full h-72 object-cover"
                        />
                        <div className="flex justify-between items-center">
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
                        <p className="text-sm font-normal">
                          {blog.blog_description}
                        </p>
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
