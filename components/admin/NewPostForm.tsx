"use client";

import { useRef } from "react";
import Button from "../form/Button";
import { createPost } from "@/actions/post-actions";

const NewPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="space-y-6 "
      ref={formRef}
      action={async (formData) => {
        formRef.current?.reset();
        await createPost(formData);
      }}
    >
      <div className="flex flex-col gap-y-1">
        <label htmlFor="title">عنوان</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="پست جدید"
          className="rounded-md shadow-sm border p-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="body">توضیحات</label>
        <textarea
          rows={5}
          id="body"
          name="body"
          placeholder="شرح پست"
          className="rounded-md shadow-sm border p-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="image">تصویر</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="آدرس تصویر"
          className="rounded-md shadow-sm border p-2"
        />
      </div>
      <Button text="ثبت پست" bgColor="bg-black" />
    </form>
  );
};

export default NewPostForm;
