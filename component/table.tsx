"use client";
import React from "react";
import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { fetchPosts, Post } from "../api/postaction";
import Actions from "../actions/buttonactions";

const PostsPage: React.FC = async () => {
  const posts: Post[] = await fetchPosts(); 

  const columns: ColumnType<Post>[] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: Post) => (
        <Actions postId={record.id} />
      ),
    
    },
  ];

  return (
    <section className="p-4">
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        className="w-full rounded-lg shadow-xl"
      />
    </section>
  );
};

export default PostsPage;

