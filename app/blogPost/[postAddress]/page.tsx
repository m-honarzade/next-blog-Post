import Container from "@/components/Container";
import { prisma } from "@/libs/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const SinglePost = async ({ params }: { params: { postAddress: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      address: decodeURI(params.postAddress),
    },
  });
  if (!post) notFound();
  return (
    <div className="md:w-[40%] h-svh">
      <Container>
        <div className=" flex flex-col gap-y-10 border-2 border-red-500 w-full">
          <div className="w-full h-60 sm:h-96 relative overflow-hidden rounded-b-md shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="cover object-top"
              sizes="100vw"
              quality={100}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-justify text-lg">{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePost;
