"use client";
import Editform from '@/component/forms/editform';
import React from 'react';
import { useParams } from 'next/navigation';

const EditPage: React.FC = () => {
  const { postid } = useParams() as { postid: string }; 

console.log(postid)


  return (
    <div className="max-w-xl mx-auto p-5">
      <Editform postId={postid} /> 
    </div>
  );
};

export default EditPage;
