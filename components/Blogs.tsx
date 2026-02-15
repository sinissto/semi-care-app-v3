import React from "react";
import Section from "@/components/layout/Section";
import blogImg1 from "@/assets/images/latest-blog-img1.png";
import blogImg2 from "@/assets/images/latest-blog-img2.png";
import blogImg3 from "@/assets/images/latest-blog-img3.png";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    image: blogImg1.src,
    alt: "Blog post image showing a caregiver assisting an elderly person",
    date: "February 29, 2020 in London",
    title: "The Nation's No.1 Home Care",
  },
  {
    id: 2,
    image: blogImg2.src,
    alt: "Blog post image showing a caregiver assisting an elderly person",
    date: "February 29, 2020 in London",
    title: "Caring Senior Service",
  },
  {
    id: 3,
    image: blogImg3.src,
    alt: "Blog post image showing a caregiver assisting an elderly person",
    date: "February 29, 2020 in London",
    title: "Sunrise Senior Living",
  },
];

const Blogs = () => {
  return (
    <Section sectionClassName={"mt-[120px]"}>
      {/* Section Header */}
      <div className="text-center mb-6.5 sm:mb-7.5 md:mb-10 lg:mb-16.5">
        <h2 className="text-[26px]/[30px] sm:text-[34px]/[36px] md:text-[36px]/[42px] lg:text-[42px]/[44px] xl:text-[48px]/[64px] font-secondary">
          Latest <span className="text-primary">Blogs</span>
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-fr gap-8 max-w-[90%] mx-auto items-stretch">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="h-full flex flex-col bg-gray-50 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 px-3.5 group-hover:bg-gray-100"
          >
            {/* Image */}
            <figure className={"mb-6 lg:mb-10.75"}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover"
              />
            </figure>

            {/* Content */}
            <div className="pb-8 xl:px-8 text-center flex flex-col flex-1 ">
              <p className="text-[14px]/[20px] text-secondary-dark mb-2.5 lg:mb-4.25">
                {blog.date}
              </p>

              <h5
                className={
                  "text-[22px]/[26px] lg:text-[26px] xl:text-[30px]/[34px] font-secondary text-black mb-3.75 lg:mb-6.25"
                }
              >
                {blog.title}
              </h5>

              <Button
                variant={"outline"}
                className="w-auto self-center text-[14px]/[18px] px-5.5 py-2 lg:px-10 lg:py-3.25 rounded-full border-2 border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white transition mt-auto"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
