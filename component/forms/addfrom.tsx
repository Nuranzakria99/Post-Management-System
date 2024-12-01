"use client"; 
import React from "react";
import { Form, Input, Button, notification } from "antd";
import { addPost } from "../../api/addingpost";

interface FormValues {
  title: string;
  body: string;
}
const Addform: React.FC = () => {
  
  const sendPost = async (values: FormValues) => {
    try {
   
      await addPost(values);

 
      notification.success({
        message: "Post Added Successfully",
        description: `Post titled "${values.title}" has been added.`,
      });
    } catch (error) {

      notification.error({
        message: "Failed to Add Post",
        description: "Something went wrong while adding the post. Please try again.",
      });
    }
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Add a New Post</h2>
      <Form layout="vertical" onFinish={sendPost}>
     
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Enter the title" }]}
        >
          <Input placeholder="Enter post title" />
        </Form.Item>

        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: "Enter the body" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter post body" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addform;
