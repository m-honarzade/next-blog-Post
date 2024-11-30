"use client";

import { deletePost } from "@/actions/post-actions";
import { DeletePostBtnProps } from "@/types";
import { Trash } from "lucide-react";

const DeletePostBtn = ({ postId }: DeletePostBtnProps) => {
  const handleDelete = async () => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="p-4 text-rose-500 bg-gray-100 hover:bg-gray-200 rounded-md shadow-md"
    >
      <Trash className="size-5" />
    </button>
  );
};

export default DeletePostBtn;
