import Container from "@/components/Container";
import { validateRequest } from "@/libs/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import heroImage from "@/public/hero-image.png";
import Link from "next/link";

const BlogPage = async () => {
  // PROTECTING ROUTS
  const result = await validateRequest();
  if (!result.user) {
    return redirect("/");
  }

  return (
    <div>
      <Container className="pt-8 md:py-4">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="flex-1">
            <div className="flex flex-col items-center md:items-start gap-y-7 pr-0 md:pr-5 lg:pr-16 xl:pr-28">
              <h1 className="text-5xl lg:text-6xl font-bold">نکست بلاگ</h1>
              <p className="text-balance text-center text-lg lg:text-xl md:text-right">
                در این وبلاگ میتوانید مطالب ارزنده خود را با دیگران به اشتراک
                بگذارید و از نظرات دیگران بهرهمند شوید.{" "}
              </p>
              <Link
                href="/blogPost"
                className=" text-white w-min rounded-md bg-black px-7 py-3 text-xl font-bold hover:bg-gray-800"
              >
                بلاگ
              </Link>
            </div>
          </div>
          <div className="flex-1 md:block">
            <div className="relative m-auto size-[24rem] md:size-[28rem] lg-size[32rem]">
              <Image
                src={heroImage}
                alt="hero-image"
                fill
                quality={100}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
