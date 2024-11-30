import { prisma } from "@/libs/prisma";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeletePostBtn from "./DeletePostBtn";

const AdminPostList = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { id: "asc" },
  });
  return (
    <div>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-x-2">
            <div className="flex flex-1 items-start bg-gray-100 px-3 py-4 shadow-sm rounded-md gap-x-4">
              <div className="relative size-20">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover border rounded-md shadow-md"
                />
              </div>
              <h3 className="text-2xl">{post.title}</h3>
            </div>
            <div className="flex flex-col gap-y-2">
              <DeletePostBtn postId={post.id} />
              <Link
                href={`/blogPost/${post.address}`}
                className="rounded-md shadow-md p-4 text-blue-400 bg-gray-100 hover:bg-gray-200"
              >
                <ExternalLink className="size-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPostList;
