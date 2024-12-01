"use client";

import React from "react";
import { Button, notification } from "antd";
import Link from "next/link";
import { deletePost } from "@/api/deletepost";

interface ActionsProps {
  postId: number;
}



const Actions: React.FC<ActionsProps> = ({ postId }) => {
const handleDelete = async ()=> {
  try {
    await deletePost(postId);
    notification.success({
      message: 'Post deleted successfully!',
    });  } catch (error) {
      notification.error({
        message: 'Failed to delete post',
      });
  }
};
  return (
    <div className="">
      <Link href={`/posts/edit/${postId}`}>
        <Button type="primary">Edit</Button>
      </Link>
     
      <Button type="primary" danger         onClick={handleDelete}
      >Delete</Button>

    </div>
  );
};

export default Actions;

