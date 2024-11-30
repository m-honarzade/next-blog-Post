import Container from "@/components/Container";
import { prisma } from "@/libs/prisma";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getFirstWords = (input: string, numOfWords: number) => {
  const words = input.split(" ");
  const firstWords = words.slice(0, numOfWords);
  return firstWords.join(" ");
};

const BlogPost = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <div>
      <Container className="sm:pt-8">
        <div className="grid grid-cols-1 gap-4 divide-y sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blogPost/${post.address}`}
              className="flex flex-row-reverse gap-y-1 justify-between pt-8 sm:flex-col sm:rounded-md sm:border sm:pt-0 sm:shadow-lg sm:transition sm:duration-500 sm:ease-in-out sm:hover:shadow-2xl sm:hover:scale-105"
            >
              <div className="relative h-44 w-48 rounded-md overflow-hidden sm:w-full sm:rounded-b-none sm:rounded-t-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-3">
                  <h2 className="font-bold">{post.title}</h2>
                  <p className="text-gray-600">
                    {getFirstWords(post.body, 10)} ...
                  </p>
                </div>
                <div className="flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 sm:hidden">
                  <p className="text-xs">ادامه مطلب</p>
                  <MoveLeft className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;
