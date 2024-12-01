"use client"; 
import React from "react";
import { Form, Input, Button, notification } from "antd";
import { editPost } from "../../api/editpost";

interface FormeditsValues {
  title: string;
  body: string;
}

interface EditFormProps {
    postId: string; 
  }
const Editform: React.FC<EditFormProps> = ({postId }) => {
  const EditPost = async (values:FormeditsValues) => {
    try {
   
      await editPost(postId, values);

 
      notification.success({
        message: "Edit Successfully",
 
      });
    } catch (error) {

      notification.error({
        message: "Failed to edit",
   
      });
    }
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Edit the post</h2>
      <Form layout="vertical" onFinish={EditPost}>
     
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Enter the title" }]}
          
        >
          <Input  placeholder="Enter post title" />
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

export default Editform;
