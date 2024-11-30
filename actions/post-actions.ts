"use server";

import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { deletePost } from "@/actions/post-actions";

export async function createPost(formData: FormData) {
  try {
    const { title, body, image } = Object.fromEntries(formData);
    const address = String(title).split(" ").join("-");
    const post = await prisma.post.create({
      data: {
        title: title as string,
        address,
        body: body as string,
        image: image as string,
      },
    });
    if (!post) return { success: false };
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log("createPost:", error);
  }
}

export async function deletePost(id: number) {
  try {
    const deletedPost = await prisma.post.delete({
      where: { id: id },
    });
    if (!deletedPost) return { success: false };
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log("deletePost:", error);
  }
}
